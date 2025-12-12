/*
  App.js: SPA logic, Firebase integration, UI interactions
  - Auth: register/login/logout
  - Profile: heart status and display name saved in firestore
  - History: saved in Firestore in two formats
  - UI: results, history, modals, dark mode, copying
*/
// -----------------------
// Firebase modular imports and config
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { getFirestore, doc as docRef, getDoc, setDoc, updateDoc, runTransaction, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';

// Load firebase config from an external file `firebase.config.js` (not checked into version control).
// If not present, use `firebase.config.example.js` as a fallback for development.
let app, analytics, auth, db;
let firebaseConfig;
try {
  // Prefer user-supplied config in `src/firebase.config.js` (copy from example and fill values)
  firebaseConfig = (await import('./firebase.config.js')).default;
} catch (err1) {
  try {
    // Check for the new commented example: `firebase.config.js.example` (safe to commit)
    firebaseConfig = (await import('./firebase.config.js.example')).default;
  } catch (err2) {
    console.warn('No firebase.config.js found; using firebase.config.example.js. Create src/firebase.config.js from the example and fill with your project values.');
    firebaseConfig = (await import('./firebase.config.example.js')).default;
  }
}

app = initializeApp(firebaseConfig);
// helpful debug output for auth configuration problems
console.debug('Firebase initialized', { authDomain: firebaseConfig?.authDomain, projectId: firebaseConfig?.projectId, appId: firebaseConfig?.appId });
try { analytics = typeof getAnalytics === 'function' ? getAnalytics(app) : null; } catch (e) { analytics = null; }
const authInstance = getAuth(app);
const dbInstance = getFirestore(app);
// Expose consistent variable names used throughout the app
auth = authInstance;
db = dbInstance;

// -----------------------
// DOM references
const amountInput = document.getElementById('amountInput');
const enterBtn = document.getElementById('enterBtn');
const resultsEl = document.getElementById('results');
const historyList = document.getElementById('historyList');
const copyAllResultsBtn = document.getElementById('copyAllResults');
const copyAllHistoryBtn = document.getElementById('copyAllHistory');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const heartBtn = document.getElementById('heartBtn');
const heartIcon = document.getElementById('heartIcon');
const heartUser = document.getElementById('heartUser');
const heartPanel = document.getElementById('heartPanel');
const heartNameInput = document.getElementById('heartName');
const saveHeartProfileBtn = document.getElementById('saveHeartProfile');

const darkToggle = document.getElementById('darkToggle');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const registerBtn = document.getElementById('registerBtn');
const aboutBtn = document.getElementById('aboutBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');
const confirmOverlay = document.getElementById('confirmOverlay');
const confirmDeleteBtn = document.getElementById('confirmDelete');
const cancelDeleteBtn = document.getElementById('cancelDelete');
const closeConfirm = document.getElementById('closeConfirm');

// templates
const aboutTemplate = document.getElementById('aboutTemplate');
const loginTemplate = document.getElementById('loginTemplate');
const registerTemplate = document.getElementById('registerTemplate');

// storage keys for local fallback
const LOCAL_HISTORY_KEY = 'admin_fee_history';

// -----------------------
// Toast notifications
const toastContainer = document.getElementById('toastContainer');
function showToast(message, opts={}){
  const { type='info', duration=3500 } = opts;
  if (!toastContainer) { console.warn('Missing toast container'); return; }
  // limit number of toasts
  const limit = 4;
  const current = toastContainer.querySelectorAll('.toast');
  if (current.length >= limit) { current[0].remove(); }
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
  const txt = document.createElement('div'); txt.className = 'text'; txt.textContent = message;
  const close = document.createElement('button'); close.className = 'close-toast'; close.setAttribute('aria-label', 'Dismiss'); close.innerHTML = '✕';
  close.addEventListener('click', () => dismissToast(toast));
  toast.appendChild(txt);
  toast.appendChild(close);
  toastContainer.appendChild(toast);
  requestAnimationFrame(()=> toast.classList.add('open'));
  const id = setTimeout(() => dismissToast(toast), duration);
  toast.dataset.timer = id;
  return toast;
}
function dismissToast(toast){
  if (!toast) return;
  clearTimeout(Number(toast.dataset.timer));
  toast.classList.remove('open');
  setTimeout(()=>{ try{ toast.remove(); }catch(e){} }, 200);
}
// Accessibility and keyboard: submit on Enter
amountInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleEnter();
  }
});
enterBtn.addEventListener('click', handleEnter);

// toggle heart palette
heartBtn.addEventListener('click', () => {
  const hidden = heartPanel.getAttribute('aria-hidden') === 'true' || !heartPanel.getAttribute('aria-hidden');
  heartPanel.setAttribute('aria-hidden', String(!hidden));
});

// heart options
document.querySelectorAll('.heart-option').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type || 'single';
    const color = btn.dataset.color || '#e11d48';
    const raw = btn.textContent;
    heartIcon.textContent = raw;
    heartUser.textContent = 'Guest';
    heartBtn.style.color = color;
    saveUserProfile({ heart: raw, color });
  });
});

saveHeartProfileBtn.addEventListener('click', async () => {
  const name = heartNameInput.value.trim();
  setDisplayName(name);
  // persist heart and display name together
  await saveUserProfile({ displayName: name, heart: heartIcon.textContent, color: heartBtn.style.color });
});

// dark mode toggle
darkToggle.addEventListener('click', () => {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (dark) {
    document.documentElement.removeAttribute('data-theme');
    darkToggle.setAttribute('aria-pressed', 'false');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkToggle.setAttribute('aria-pressed', 'true');
  }
});

// modals
aboutBtn.addEventListener('click', () => openModalFromTemplate(aboutTemplate, 'About'));
loginBtn.addEventListener('click', () => openModalFromTemplate(loginTemplate, 'Log In'));
registerBtn.addEventListener('click', () => openModalFromTemplate(registerTemplate, 'Register'));
closeModal.addEventListener('click', closeModalOverlay);

// login and register flows
function openModalFromTemplate(tpl, title) {
  modalTitle.textContent = title;
  modalContent.innerHTML = '';
  modalContent.appendChild(tpl.content.cloneNode(true));
  modalOverlay.classList.remove('hidden');
  // trigger fade-in via the `open` class so we can animate both show and hide
  requestAnimationFrame(() => modalOverlay.classList.add('open'));
  modalOverlay.setAttribute('aria-hidden', 'false');
  const form = modalContent.querySelector('form');
  if (form) {
    form.onsubmit = async (e) => {
      e.preventDefault();
      if (title === 'Log In') await handleSignIn();
      if (title === 'Register') await handleRegister();
    };
  }
  // attach Google sign-in handler if present
  const googleBtn = modalContent.querySelector('.google-signin');
  if (googleBtn) googleBtn.addEventListener('click', handleGoogleSignIn);
  // attach switches (login->register and register->login) if present
  const switchToRegister = modalContent.querySelector('.switch-to-register');
  if (switchToRegister) switchToRegister.addEventListener('click', (e)=>{ e.preventDefault(); closeModalOverlay(); setTimeout(()=>openModalFromTemplate(registerTemplate, 'Register'), 250); });
  const switchToLogin = modalContent.querySelector('.switch-to-login');
  if (switchToLogin) switchToLogin.addEventListener('click', (e)=>{ e.preventDefault(); closeModalOverlay(); setTimeout(()=>openModalFromTemplate(loginTemplate, 'Log In'), 250); });
  // focus the first input for accessibility
  const focusable = modalContent.querySelector('input,button,select,textarea');
  if (focusable) focusable.focus();
} 
function closeModalOverlay() {
  // animate fade-out then hide the overlay to preserve aria semantics
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  setTimeout(() => modalOverlay.classList.add('hidden'), 220);
}

// confirm clear
clearHistoryBtn.addEventListener('click', () => {
  confirmOverlay.classList.remove('hidden');
  requestAnimationFrame(() => confirmOverlay.classList.add('open'));
  confirmOverlay.setAttribute('aria-hidden','false');
});
cancelDeleteBtn.addEventListener('click', () => {
  confirmOverlay.classList.remove('open');
  confirmOverlay.setAttribute('aria-hidden','true');
  setTimeout(() => confirmOverlay.classList.add('hidden'), 220);
});
if (closeConfirm) closeConfirm.addEventListener('click', () => {
  confirmOverlay.classList.remove('open');
  confirmOverlay.setAttribute('aria-hidden','true');
  setTimeout(() => confirmOverlay.classList.add('hidden'), 220);
});
confirmDeleteBtn.addEventListener('click', async () => {
  confirmOverlay.classList.remove('open');
  confirmOverlay.setAttribute('aria-hidden','true');
  setTimeout(() => confirmOverlay.classList.add('hidden'), 220);
  await deleteAllHistory();
});

// copy buttons
copyAllResultsBtn.addEventListener('click', copyAllResults);
copyAllHistoryBtn.addEventListener('click', copyAllHistory);

// auth
logoutBtn.addEventListener('click', async () => {
  await signOut(auth);
  showToast('Signed out', {type:'info'});
});

async function handleSignIn(){
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  try{
    await signInWithEmailAndPassword(auth, email, password);
    closeModalOverlay();
    showToast('Signed in successfully',{type:'success'});
  }catch(err){showToast(err.message || 'Sign-in failed', {type:'error'});} 
}

async function handleRegister(){
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;
  const confirm = document.getElementById('registerConfirmPassword')?.value;
  if (!email || !password || !confirm) { showToast('Please fill out all fields', {type:'error'}); return; }
  if (password !== confirm) { showToast('Passwords do not match', {type:'error'}); return; }
  try{
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    // create user profile in firestore
    const user = userCred.user;
    await setDoc(docRef(db, 'users', user.uid), { displayName: user.email, heart: '❤️', history: [], feesOnly: '' });
    closeModalOverlay();
    showToast('Account created', {type:'success'});
  }catch(err){showToast(err.message || 'Registration failed',{type:'error'})}
}

// Sign-in with Google provider (popup)
async function handleGoogleSignIn(){
  const provider = new GoogleAuthProvider();
  try{
    const result = await signInWithPopup(auth, provider);
    // user authenticated; onAuthStateChanged will create the user doc if needed
    closeModalOverlay();
  }catch(err){
    console.error('Google sign-in error', err);
    showToast(err.message || 'Google sign-in failed', {type: 'error'});
  }
}

// auth state
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginBtn.classList.add('hidden');
    registerBtn.classList.add('hidden');
    logoutBtn.classList.remove('hidden');
    // load profile
    const userRef = docRef(db, 'users', user.uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      setProfileToUI(data);
    } else {
      await setDoc(userRef, { displayName: user.email, heart: '❤️', history: [], feesOnly: '' });
      setProfileToUI({ displayName: user.email, heart: '❤️' });
    }
    // load user history
    subscribeUserHistory(user.uid);
  } else {
    loginBtn.classList.remove('hidden');
    registerBtn.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
    setProfileToUI({ displayName: 'Guest', heart: '❤️' });
    loadLocalHistory();
  }
});

function setProfileToUI({ displayName, heart, color }){
  heartUser.textContent = displayName || 'Guest';
  const raw = heart || '❤️';
  heartIcon.textContent = raw;
  if (color) heartBtn.style.color = color;
  else heartBtn.style.color = '';
}

async function setDisplayName(name){
  const user = auth.currentUser;
  if (user){
    await updateDoc(docRef(db, 'users', user.uid), { displayName: name });
    setProfileToUI({ displayName: name, heart: heartIcon.textContent, color: heartBtn.style.color });
  } else {
    setProfileToUI({ displayName: name, heart: heartIcon.textContent, color: heartBtn.style.color });
  }
}

async function saveUserProfile(profile){
  const user = auth.currentUser;
  if (user){
    await updateDoc(docRef(db, 'users', user.uid), profile);
  }
}


// -----------------------
// History management: two formats
function formatHistoryEntry(amount, fee){
  return `Amount: ${amount} Fee: ${fee}`;
}

async function saveToHistory(amount, fee){
  const user = auth.currentUser;
  if (user){
    const userRef = docRef(db, 'users', user.uid);
    await runTransaction(db, async (tx) => {
      const docSnap = await tx.get(userRef);
      const data = docSnap.data() || {};
      const history = data.history || [];
      const feesOnly = data.feesOnly || '';
      history.push(formatHistoryEntry(amount, fee));
      const feesOnlyNew = feesOnly ? feesOnly + ',' + fee : String(fee);
      tx.update(userRef, { history, feesOnly: feesOnlyNew });
    });
  } else {
    // local fallback
    const current = JSON.parse(localStorage.getItem(LOCAL_HISTORY_KEY) || '[]');
    current.push({ amount, fee });
    localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(current));
    renderHistoryLocal(current);
  }
}

async function deleteAllHistory(){
  const user = auth.currentUser;
  if (user){
    await updateDoc(docRef(db, 'users', user.uid), { history: [], feesOnly: '' });
  } else {
    localStorage.removeItem(LOCAL_HISTORY_KEY);
    renderHistoryLocal([]);
    renderResults([]);
  }
}

// copy helpers
function copyText(text){
  navigator.clipboard.writeText(text).then(()=>showToast('Copied to clipboard',{type:'success'})).catch(()=>showToast('Failed to copy',{type:'error'}));
}

// -----------------------
// Fee calculation
function calculateAdminFee(amount){
  amount = parseInt(amount, 10);
  if (isNaN(amount) || amount < 0) return null;
  if (amount < 150) return 5;
  if (amount <= 2999){
    const increments = Math.floor((amount - 150) / 100) + 1; // 150 -> +1
    const fee = 5 + increments * 5;
    return Math.max(5, Math.ceil(fee));
  }
  if (amount >= 3000 && amount <= 4999){
    const fee = Math.ceil(amount * 0.04);
    return Math.max(5, fee);
  }
  // 5000 and above
  if (amount >= 5000){
    const fee = Math.ceil(amount * 0.03);
    return Math.max(5, fee);
  }
  return 5;
}

// render results - comma-separated fees
let resultsArray = [];
function renderResults(arr){
  resultsArray = arr;
  resultsEl.textContent = arr.join(',');
}

// render firestore history
function renderHistoryFirestore(history){
  historyList.innerHTML = '';
  history.forEach((line, idx) => {
    const { amount, fee, raw } = parseHistoryLine(line);
    const li = createHistoryItem(amount, fee, idx);
    historyList.appendChild(li);
  });
  applyHistoryLimit(4);
}

function parseHistoryLine(line){
  // line format: Amount: [amount] Fee: [fee]
  const parts = line.match(/Amount:\s*(\d+)\s+Fee:\s*(\d+)/);
  if (parts) return { amount: parseInt(parts[1]), fee: parseInt(parts[2]), raw: line };
  return { amount: 0, fee: 0, raw: line };
}

// local history render
function renderHistoryLocal(history){
  historyList.innerHTML = '';
  history.forEach((item, idx) => {
    const li = createHistoryItem(item.amount, item.fee, idx, true);
    historyList.appendChild(li);
  });
  applyHistoryLimit(4);
}

function createHistoryItem(amount, fee, idx, isLocal=false){
  const li = document.createElement('li');
  li.className = 'history-item';
  li.setAttribute('data-idx', idx);
  const left = document.createElement('div');
  left.className = 'meta';
  left.textContent = `Amount: ${amount} Fee: ${fee}`;
  const right = document.createElement('div');
  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-btn small-icon';
  copyBtn.textContent = 'Copy';
  copyBtn.addEventListener('click', () => copyText(String(fee)));
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn small-icon';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => removeHistoryItem(idx, isLocal));
  const optionBtn = document.createElement('button');
  optionBtn.className = 'option-btn small-icon';
  optionBtn.textContent = '⋮';
  optionBtn.setAttribute('aria-haspopup', 'menu');
  optionBtn.setAttribute('aria-label', 'History item actions');
  optionBtn.setAttribute('aria-expanded', 'false');
  optionBtn.addEventListener('click', (e) => openOptionMenu(e.currentTarget, idx, isLocal, amount));
  right.appendChild(copyBtn);
  right.appendChild(deleteBtn);
  right.appendChild(optionBtn);
  li.appendChild(left);
  li.appendChild(right);
  return li;
}

function openOptionMenu(btn, idx, isLocal, amount){
  // close any existing menu first
  const existing = document.querySelector('.option-menu');
  if (existing) existing.remove();
  // build accessible menu
  const menu = document.createElement('div');
  const menuId = 'option-menu-' + Math.floor(Math.random()*1000000);
  menu.className = 'option-menu closed';
  menu.id = menuId;
  menu.setAttribute('role', 'menu');
  menu.setAttribute('aria-label', 'History item options');
  // helper to create menu items
  const makeItem = (text, val) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role','menuitem');
    b.tabIndex = 0;
    b.className = 'small-button';
    b.textContent = text;
    b.dataset.value = val;
    return b;
  };
  const plus1 = makeItem('+1', 'plus1');
  const plus5 = makeItem('+5', 'plus5');
  const halve = makeItem('Halve', 'halve');
  // wire clicks
  plus1.addEventListener('click', async () => { await adjustHistoryItem(idx, 1, isLocal); cleanup(); });
  plus5.addEventListener('click', async () => { await adjustHistoryItem(idx, 5, isLocal); cleanup(); });
  halve.addEventListener('click', async () => { await adjustHistoryItem(idx, 'halve', isLocal); cleanup(); });
  menu.appendChild(plus1); menu.appendChild(plus5); menu.appendChild(halve);
  document.body.appendChild(menu);
  // position the menu near the button and keep it inside viewport
  const rect = btn.getBoundingClientRect();
  const mRect = menu.getBoundingClientRect();
  // align right edge with button right by default
  let left = rect.right - mRect.width;
  if (left < 8) left = Math.max(8, rect.left);
  if (left + mRect.width > window.innerWidth - 8) left = window.innerWidth - mRect.width - 8;
  let top = rect.bottom + 6;
  if (top + mRect.height > window.innerHeight - 8) {
    top = rect.top - mRect.height - 6; // open above button
  }
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';
  // animate open
  requestAnimationFrame(()=>{ menu.classList.remove('closed'); menu.classList.add('open'); });
  // accessibility on button
  btn.setAttribute('aria-expanded', 'true');
  btn.setAttribute('aria-controls', menuId);
  // focus management and keyboard
  const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
  let currentIndex = 0;
  items[0]?.focus();
  const onKeyDown = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); cleanup(); btn.focus(); }
    if (e.key === 'ArrowDown') { e.preventDefault(); currentIndex = (currentIndex + 1) % items.length; items[currentIndex].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); currentIndex = (currentIndex - 1 + items.length) % items.length; items[currentIndex].focus(); }
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); items[currentIndex].click(); }
  };
  document.addEventListener('keydown', onKeyDown);
  const onDoc = (e) => { if (!menu.contains(e.target) && e.target !== btn) { cleanup(); } };
  const onScrollOrResize = () => { cleanup(); };
  document.addEventListener('click', onDoc); window.addEventListener('scroll', onScrollOrResize); window.addEventListener('resize', onScrollOrResize);
  function cleanup(){
    try { menu.classList.remove('open'); menu.classList.add('closed'); } catch(e){}
    btn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('click', onDoc);
    window.removeEventListener('scroll', onScrollOrResize);
    window.removeEventListener('resize', onScrollOrResize);
    setTimeout(()=>{ menu.remove(); }, 120);
  }
  // return a cleanup reference if needed
  return cleanup;
}

async function adjustHistoryItem(idx, action, isLocal){
  if (isLocal){
    const current = JSON.parse(localStorage.getItem(LOCAL_HISTORY_KEY) || '[]');
    if (idx<0|| idx>=current.length) return;
    let record = current[idx];
    // Operate on the fee (not amount)
    let newFee;
    if (action === 'halve') newFee = Math.floor(record.fee / 2);
    else newFee = record.fee + Number(action);
    newFee = Math.max(5, newFee);
    record.fee = newFee;
    localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(current));
    renderHistoryLocal(current);
    renderResults(current.map(c=>c.fee));
    showToast('Fee updated', {type:'success'});
  } else {
    const user = auth.currentUser; if (!user) return;
    const userRef = docRef(db, 'users', user.uid);
    const docSnap = await getDoc(userRef);
    const data = docSnap.data();
    const history = data.history || [];
    const item = history[idx];
    const parsed = parseHistoryLine(item);
    const amount = parsed.amount; // amount unchanged when adjusting fee
    let fee = parsed.fee;
    if (action === 'halve') fee = Math.floor(fee / 2);
    else fee = fee + Number(action);
    fee = Math.max(5, fee);
    history[idx] = formatHistoryEntry(amount, fee);
    const feesOnly = history.map(h=>parseHistoryLine(h).fee).join(',');
    await updateDoc(userRef, { history, feesOnly });
    showToast('Fee updated', {type:'success'});
  }
}

async function removeHistoryItem(idx, isLocal){
  if (isLocal){
    const current = JSON.parse(localStorage.getItem(LOCAL_HISTORY_KEY) || '[]');
    current.splice(idx,1); localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(current)); renderHistoryLocal(current);
    renderResults(current.map(c=>c.fee));
  } else {
    const user = auth.currentUser; if (!user) return;
    const userRef = docRef(db, 'users', user.uid);
    const docSnap = await getDoc(userRef);
    const data = docSnap.data()||{};
    const history = data.history||[];
    history.splice(idx,1);
    const feesOnly = history.map(h=>parseHistoryLine(h).fee).join(',');
    await updateDoc(userRef, { history, feesOnly });
  }
}

function loadLocalHistory(){
  const current = JSON.parse(localStorage.getItem(LOCAL_HISTORY_KEY) || '[]');
  renderHistoryLocal(current);
  renderResults(current.map(c=>c.fee));
  applyHistoryLimit(4);
}

// Limit history list visible area to `maxItems` items by calculating item height and gaps.
function applyHistoryLimit(maxItems = 4) {
  if (!historyList) return;
  const first = historyList.querySelector('li');
  if (!first) { historyList.style.maxHeight = ''; return; }
  const itemRect = first.getBoundingClientRect();
  const itemHeight = Math.ceil(itemRect.height);
  const gapStr = getComputedStyle(historyList).getPropertyValue('gap') || '10px';
  const gap = parseFloat(gapStr) || 10;
  const maxHeight = Math.ceil(itemHeight * maxItems + gap * (maxItems - 1));
  historyList.style.maxHeight = maxHeight + 'px';
}

// Recompute on resize in case font-size or layout changes
let historyResizeTimer;
window.addEventListener('resize', () => { clearTimeout(historyResizeTimer); historyResizeTimer = setTimeout(() => applyHistoryLimit(4), 150); });

function subscribeUserHistory(uid){
  const userRef = docRef(db, 'users', uid);
  onSnapshot(userRef, docSnap => {
    const data = docSnap.data() || {};
    const history = data.history || [];
    const feesOnly = data.feesOnly || '';
    renderHistoryFirestore(history);
    renderResults(feesOnly ? feesOnly.split(',') : []);
  });
}

// remove single record from firestore handled earlier

// submit handler
async function handleEnter(){
  const val = parseFloat(amountInput.value);
  if (isNaN(val)) { showToast('Please enter a valid number', {type:'error'}); return; }
  const fee = calculateAdminFee(val);
  if (fee === null) return;
  // update results
  const newResults = [...resultsArray, fee];
  renderResults(newResults);
  await saveToHistory(val, fee);
  // clear input
  amountInput.value = '';
}

// copy all results
function copyAllResults(){
  copyText(resultsArray.join(','));
}

// copy all history
async function copyAllHistory(){
  const user = auth.currentUser;
  if (user){
    const userRef = docRef(db, 'users', user.uid);
    const docSnap = await getDoc(userRef);
    const data = docSnap.data()||{};
    const history = data.history || [];
    copyText(history.join('\n'));
  } else {
    const current = JSON.parse(localStorage.getItem(LOCAL_HISTORY_KEY) || '[]');
    const lines = current.map(c => formatHistoryEntry(c.amount,c.fee)).join('\n');
    copyText(lines);
  }
}

// initial load
document.addEventListener('DOMContentLoaded', () => {
  loadLocalHistory();
});

// quick accessibility hint
// The program's input, results, and history have proper ARIA roles and keyboard support (Enter key for submission). Modals have focusable elements via HTML forms.

