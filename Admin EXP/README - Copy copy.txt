you are a genius web developer—a senior dev incomparable to anyone a professional to the coding business. 
You are hired by a client to support his business to bloom—a middle man service business to help the business bloom the client asked for a specific program that will give out calculated rates based on the customer's transactions. 
The client sent out instructions and gave a framework of how the program should look like
Tell me if you understand the instructions.
If there are any missing parts, ask for clarification.
Then provide the complete HTML code for the program as per the client's specifications.

The code should have the following:
1. navigation bar with links to About, Log In, Log Out, Register, and a heart button that shows the current user status (e.g., "❤️ Guest").
- hearts should be clickable and open a section with different heart colors and types(single, double) to choose from.
2. an input section where users can enter a number and submit it to calculate the admin fee based on the rules provided.
- #IMPORTANT It should not have any scrollbars or slider.
- It should have an enter key besides it to submit the number for calculation.
3. a results section that displays only the calculated admin fees.
4. a history section that maintains a log of all previous calculations with the following features:
- each history item should display the amount and the corresponding admin fee.
- each history item should have buttons to copy the fee, delete the item, and an option button that reveals additional actions (+1, +5, halve).
5. buttons to copy all results and copy all history.
6. Option to delete all history should prompt a confirmation modal before proceeding.
7. modals for About, Log In, and Register sections.
8. A button to toggle dark mode for the entire program.
9. use of Firebase Authentication for user registration, login, and logout functionalities
10. use of firebase to save the user info(heart status and Name) and history of calculations in two formats: fees only and amounts with fees.
11. it should be a single page application.
12. the program should be responsive and work well on both desktop and mobile devices.
13. the program should follow best practices for web accessibility.
14. The overlay for choosing heart status should have the following:
   - heart options displayed in a grid format.
   - different colors for hearts are: 💚💙🤎❤️‍🩹❤️🧡💜🤍🩷🩶💛
   - Types of hearts are shown only after selecting a color: single heart and double heart.
   - each heart option should be clickable to select and update the user's heart status.
   - The overlay should be at the center of the screen with a semi-transparent background that blurs the content behind it.
   - The overlay should have a close button at the top right corner.
   - The overlay should have smooth fade-in and fade-out transitions when opened and closed.
   - The overlay should have a glassmorphism effect to match the overall design of the program.
   - Make sure to have the overlay visible and neat like the overlays in modals, with a glassy style


the client asked for a specific functionality that will calculate admin fees based on the following rules:

1. The fee will increase based on the transaction amount as follows:
   - The minimum admin fee is 5.
   - transactions bellow 150 will recieve a flat admin fee of 5, else admin fee will increase as follows.
   - For transactions up to 2999, the fee will increase by 5 every 100.
2. For transactions 3000 and above, the fee will change to a percentage basis:
   - 3000 to 4999: 4% of the transaction amount.
   - 5000: 3% of the transaction amount.
   - every fee should be rounded up to the nearest whole number.


Provide the following code to handle user authentication using Firebase Authentication.
This file should include functions for user 
- registration
  registration should be on firebase authentication standard email and password method
- login 
  login should be on firebase authentication standard email and password method
- logout



Provide the following code to handle storing operations for saving and retrieving transaction history. 
The history should be saved in 3 formats:
1. The fees only that should look like this:
   - [fee],[fee],[fee]...
2. The amounts and fees stored like this:
   - Amount: [amount] Fee: [fee]

Provide the following code to manage the user interface interactions and updates.
This should include functions to update the results section, history section, and handle modal interactions. 
Also for the dark mode toggle functionality. Overlay functionality for the about, login, and register modals should also be included here.


For the design and styling of the program follow these instructions:
1. Style the program to look clean and user-friendly.
2. The color scheme should be modern with a preference for light and dark modes.
3. The layout should be responsive to different screen sizes.
5. The Input, Results, and History sections should be in one container with clear separations.
6. The input section should always be at the top, followed by the results section, and then the history section at the bottom for the mobile view.
7. The navigation bar should be fixed at the top for easy access.
8. For the desktop view the input section should be on top, while the history section should be on the right side and results section on the left side.
9. Buttons Copy All Results and Copy All History should be prominently placed ontop of their respective sections for easy access.
10. Program should have smooth transitions and hover effects for buttons and interactive elements.
11. Program should maintain glassmorphism effects for a modern look.
12. Delete all history should be next to Copy All History button for easy access.
13. Delete all history confirmation modal should be centered on the screen when activated.   
14. The results section should look like this [fee],[fee],[fee]....
15. The history section should look like this:
   - Amount: [amount] Fee: [fee]
   - Amount: [amount] Fee: [fee]
   - and so on...
16. Option button for each history item should be a three-dot vertical icon that reveals the following:
   - +1: adds 1 to the original amount and recalculates the fee.
   - +5: adds 5 to the original amount and recalculates the fee.
   - Halve: halves the original amount and recalculates the fee.
   - Also make sure to have them float to the right of each history item for easy access.
17. #IMPORTANT: Make sure the program is accessible, following best practices for web accessibility (e.g., proper ARIA labels, keyboard navigability, sufficient color contrast).
18. #IMPORTANT: For the History and Results sections make sure to have scrollbars if the content exceeds the visible area. The scrollbars should be styled to match the overall design of the program.
19. History section should have a maximum height of 4 items to show to prevent it from taking too much space on the screen.
20. Overlay modals for About, Log In, Register, and confirmation should have a semi-transparent background that blurs the content behind it.
21. Overlay modals should have a classic neat design with a close button at the top right corner.
22. Overlay modals should have smooth fade-in and fade-out transitions when opened and closed.
23. Overlay modals should have a glassmorphism effect to match the overall design of the program.
24. Dark mode toggle should smoothly transition the entire program between light and dark themes.
25. Every button and interactive element should have hover and focus states for better user experience.
26. Every button should have a uniform design style to maintain consistency throughout the program.
27. Overlay modals:
   - Log in should have fields for email and password with a submit button.
      - Email: input type email
      - Password: input type password
      - email and password fields should have proper labels for accessibility.
      - email and password fields should be neatly stacked with clear spacing.
      - Google login option button
      - Should have a link to the Register modal for new users.
   - Register should have fields for email, password, and confirm password with a submit button.
      - Email: input type email
      - Password: input type password
      - Confirm Password: input type password
      - Google register option button
      - all fields should have proper labels for accessibility.
      - all fields should be neatly stacked with clear spacing.   
28. overlay features for all modals should be styled to match the overall design of the program.






Make sure to include styles for the navigation bar, input section, results section, history section, modals, buttons, and dark mode.
And make it neat and professional.
Make sure the code is well-commented for clarity.
Make sure that all functionalities are working as per the client's request.
Make sure this code stores user info(heart status and Name) and history of calculations in firebase as per the client's request.
Make sure the code is optimized for performance and follows best practices.   
Make sure the code is running well on both desktop and mobile devices.
Make sure the code is complete and nothing is missing.
Make sure every button and link is functional as per the client's request.























































14. The overlay for choosing heart status should have the following:
   - heart options displayed in a grid format.
   - different colors for hearts are: 💚💙🤎❤️‍🩹❤️🧡💜🤍🩷🩶💛
   - Types of hearts are shown only after selecting a color: single heart and double heart.
   - each heart option should be clickable to select and update the user's heart status.
   - The overlay should be at the center of the screen with a semi-transparent background that blurs the content behind it.
   - The overlay should have a close button at the top right corner.
   - The overlay should have smooth fade-in and fade-out transitions when opened and closed.
   - The overlay should have a glassmorphism effect to match the overall design of the program.
   - Make sure to have the overlay visible and neat like the overlays in modals, with a glassy style

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Admin Fee Calculator</title>
  <link rel="stylesheet" href="main.css" />
  <meta name="description" content="Admin Fee Calculator single-page app with Firebase auth and storage" />
</head>
<body>
  <nav class="navbar" role="navigation" aria-label="Top Navigation">
    <div class="nav-brand">Admin Fee</div>
    <ul class="nav-links">
      <li><button id="aboutBtn" class="nav-button">About</button></li>
      <li><button id="loginBtn" class="nav-button">Log In</button></li>
      <li><button id="logoutBtn" class="nav-button hidden">Log Out</button></li>
      <li><button id="registerBtn" class="nav-button">Register</button></li>
      <li>
        <button id="heartBtn" class="heart-button" aria-label="Change heart status"><span id="heartIcon">❤️</span> <span id="heartUser">Guest</span></button>
      </li>
      <li>
        <button id="darkToggle" class="nav-button" aria-pressed="false" aria-label="Toggle dark mode">🌙</button>
      </li>
    </ul>
  </nav>

  <main class="container">
    <section class="panel input-panel" aria-labelledby="inputTitle">
      <h2 id="inputTitle">Input</h2>
      <div class="input-row">
        <label for="amountInput" class="sr-only">Transaction amount</label>
        <input id="amountInput" type="number" min="0" inputmode="numeric" placeholder="Enter amount" aria-describedby="amountHelp" />
        <button id="enterBtn" class="primary">Enter</button>
      </div>
      <div id="amountHelp" class="sr-only">Type amount and press Enter button or press Enter key</div>
    </section>

    <section class="panel results-panel" aria-labelledby="resultsTitle">
      <div class="panel-header">
        <h2 id="resultsTitle">Results</h2>
        <div class="panel-actions">
          <button id="copyAllResults" class="small-button">Copy All Results</button>
        </div>
      </div>
      <div id="results" tabindex="0" class="results" aria-live="polite"></div>
    </section>

    <section class="panel history-panel" aria-labelledby="historyTitle">
      <div class="panel-header">
        <h2 id="historyTitle">History</h2>
        <div class="panel-actions">
          <button id="copyAllHistory" class="small-button">Copy All History</button>
          <button id="clearHistoryBtn" class="danger small-button">Delete All History</button>
        </div>
      </div>
      <ul id="historyList" class="history" aria-live="polite"></ul>
    </section>
  </main>

  <!-- Heart picker panel -->
  <aside id="heartPanel" class="heart-panel" aria-hidden="true">
    <h3>Choose a heart</h3>
    <div class="hearts">
      <button class="heart-option" data-type="single" data-color="#e11d48">❤️</button>
      <button class="heart-option" data-type="double" data-color="#f97316">❤️❤️</button>
      <button class="heart-option" data-type="single" data-color="#06b6d4">💙</button>
      <button class="heart-option" data-type="double" data-color="#7c3aed">💜💜</button>
    </div>
    <div class="heart-name">
      <label for="heartName">Name</label>
      <input id="heartName" type="text" placeholder="Display Name" />
      <button id="saveHeartProfile" class="primary">Save</button>
    </div>
  </aside>

  <!-- Modals -->
  <div id="modalOverlay" class="modal-overlay hidden" aria-hidden="true">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <header>
        <h3 id="modalTitle">Modal</h3>
        <button id="closeModal" class="close" aria-label="Close modal">✕</button>
      </header>
      <div id="modalContent"></div>
    </div>
  </div>

  <!-- Confirm delete all modal -->
  <div id="confirmOverlay" class="modal-overlay hidden" aria-hidden="true">
    <div class="modal confirm" role="dialog" aria-modal="true" aria-labelledby="confirmTitle">
      <h3 id="confirmTitle">Confirm Action</h3>
      <p>Are you sure you want to delete all history?</p>
      <div class="modal-actions">
        <button id="confirmDelete" class="danger">Delete</button>
        <button id="cancelDelete">Cancel</button>
        <button id="closeConfirm" class="close" aria-label="Close confirm modal">✕</button>
      </div>
    </div>
  </div>

  <!-- About, Login, Register modal content templates -->
  <template id="aboutTemplate">
    <p>This Admin Fee Calculator computes fees based on transaction amount using pre-defined rules. It supports user authentication, storage, and responsive UI.</p>
  </template>

  <template id="loginTemplate">
    <form id="loginForm" role="form" aria-label="Log in form">
      <label for="loginEmail">Email</label>
      <input id="loginEmail" type="email" required aria-required="true" />
      <label for="loginPassword">Password</label>
      <input id="loginPassword" type="password" required aria-required="true" />
      <div class="form-actions">
        <button type="submit" class="primary">Sign In</button>
      </div>
      <div class="form-actions">
        <button type="button" class="google-signin small-button" aria-label="Sign in with Google">Sign In with Google</button>
      </div>
      <div class="form-actions small muted">
        <a href="#" class="switch-to-register">New user? Register</a>
      </div>
    </form>
  </template>

  <template id="registerTemplate">
    <form id="registerForm" role="form" aria-label="Register form">
      <label for="registerEmail">Email</label>
      <input id="registerEmail" type="email" required aria-required="true" />
      <label for="registerPassword">Password</label>
      <input id="registerPassword" type="password" required aria-required="true" />
      <label for="registerConfirmPassword">Confirm Password</label>
      <input id="registerConfirmPassword" type="password" required aria-required="true" />
      <div class="form-actions">
        <button type="submit" class="primary">Register</button>
      </div>
      <div class="form-actions">
        <button type="button" class="google-signin small-button" aria-label="Register with Google">Sign In with Google</button>
      </div>
      <div class="form-actions small muted">
        <a href="#" class="switch-to-login">Already have an account? Log In</a>
      </div>
    </form>
  </template>

  <!-- Firebase SDKs (modular via ESM) - app.js imports them as modules -->
  <script type="module" src="app.js"></script>
  <!-- Toast notification container (ARIA live region) -->
  <div id="toastContainer" class="toast-container" aria-live="polite" aria-atomic="true"></div>
</body>
</html>
















app.js

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

























main.css
/* Simple modern styling with glassmorphism and dark mode support */
:root{
  --bg: #f6f7fb;
  --card: rgba(255,255,255,0.8);
  --text: #0f172a;
  --muted: #64748b;
  --accent: #7c3aed;
  --glass-border: rgba(255,255,255,0.6);
  --shadow: 0 4px 16px rgba(16,24,40,0.08);
}

[data-theme="dark"]{
  --bg: #0b1020;
  --card: rgba(20,24,36,0.6);
  --text: #e6eef8;
  --muted: #93c5fd;
  --accent: #8b5cf6;
  --glass-border: rgba(255,255,255,0.06);
  --shadow: 0 8px 24px rgba(2,6,23,0.5);
}

*{box-sizing:border-box}
html,body{height:100%;}
body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial; margin:0; background:linear-gradient(180deg,var(--bg),#e6eef8); color:var(--text);transition:background-color 220ms ease,color 220ms ease}
 .navbar{position:fixed;top:0;left:0;right:0;height:56px;background:var(--card);display:flex;align-items:center;justify-content:space-between;padding:0 16px;backdrop-filter:blur(6px);box-shadow:var(--shadow);z-index:50;border-bottom:1px solid var(--glass-border);transition:background-color 220ms ease, border-color 220ms ease}
 /* unified base button styling */
 button{font:inherit;border:none;background:transparent;color:inherit}
 button[disabled]{opacity:.5;cursor:not-allowed}
 .nav-button,.primary,.small-button,.small-icon,.option-btn,.heart-option{border-radius:10px;padding:8px 10px;transition:all 120ms ease}
 .nav-button:hover,.nav-button:focus{background:rgba(0,0,0,0.04)}
 .primary:hover,.primary:focus{filter:brightness(.95);transform:translateY(-1px)}
 .small-button:hover,.small-button:focus{background:rgba(0,0,0,0.04)}
 .small-icon:hover,.small-icon:focus{filter:brightness(.92)}
 .option-btn:hover{background:rgba(0,0,0,0.04)}
 .heart-option:hover{transform:scale(1.06)}
 /* uniformly style the primary and small-button classes */
 .primary{background:linear-gradient(90deg,var(--accent),#06b6d4);color:white;border:none;padding:8px 12px;border-radius:10px;cursor:pointer}
 .small-button{background:transparent;border:1px solid var(--glass-border);border-radius:10px;padding:8px;cursor:pointer}
 .danger{background:linear-gradient(90deg,#fb7185,#ef4444);color:white;border:none}
 
.nav-brand{font-weight:700}
.nav-links{list-style:none;margin:0;padding:0;display:flex;gap:8px;align-items:center}
.nav-button{border:none;background:transparent;padding:6px 10px;border-radius:8px;color:var(--text);cursor:pointer}
.nav-button:hover{background:rgba(0,0,0,0.04)}
.heart-button{border:none;background:transparent;font-size:16px;padding:6px 10px;border-radius:8px;display:flex;gap:8px;align-items:center;cursor:pointer}
.heart-button:hover{background:rgba(0,0,0,0.04)}
.container{max-width:1100px;margin:72px auto;padding:16px;display:grid;grid-template-columns:1fr;gap:16px}
.panel{background:var(--card);border-radius:14px;padding:14px;box-shadow:var(--shadow);border:1px solid var(--glass-border)}
.input-panel{display:flex;flex-direction:column}
.input-row{display:flex;gap:8px;align-items:center}
.input-row input[type=number]{flex:1;padding:10px;border-radius:10px;border:1px solid var(--glass-border);background:transparent;color:var(--text)}
/* hide number input spinner across browsers */
.input-row input[type=number]::-webkit-outer-spin-button, .input-row input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.input-row input[type=number] { appearance: textfield; -moz-appearance: textfield; }
.primary{background:linear-gradient(90deg,var(--accent),#06b6d4);color:white;border:none;padding:8px 12px;border-radius:10px;cursor:pointer}
.small-button{background:transparent;border:1px solid var(--glass-border);border-radius:10px;padding:8px 10px;cursor:pointer}
.danger{background:linear-gradient(90deg,#fb7185,#ef4444);color:white}
.results{min-height:60px;padding:12px;border-radius:10px;border:1px solid var(--glass-border);overflow:auto;white-space:pre-wrap}
.history{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px;overflow:auto;}
/* The height of the history area will be dynamically set by JS to show max 4 items */
.history-item{display:flex;align-items:center;justify-content:space-between;border-radius:8px;padding:10px;background:rgba(255,255,255,0.03);border:1px solid var(--glass-border)}
.history-item .meta{font-size:14px;color:var(--muted)}
.copy-btn, .delete-btn{border:none;background:transparent;margin-left:6px;cursor:pointer}
.option-btn{background:transparent;border:none;font-size:20px}
.copy-btn:hover,.delete-btn:hover{filter:brightness(.95)}
.option-btn:hover{background:rgba(0,0,0,0.04);border-radius:8px}
.heart-panel{position:fixed;right:20px;top:80px;background:var(--card);padding:12px;border-radius:12px;box-shadow:var(--shadow);display:none;z-index:52;border:1px solid var(--glass-border)}
.heart-panel[aria-hidden="false"]{display:block}
.hearts{display:flex;gap:8px}
.heart-option{font-size:20px;border:none;background:transparent;padding:6px;border-radius:8px;cursor:pointer}
 .modal-overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.28);z-index:60;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);opacity:0;visibility:hidden;pointer-events:none;transition:opacity 180ms ease, visibility 180ms ease}
 .modal-overlay.open{opacity:1;visibility:visible;pointer-events:auto}
 .modal{background:var(--card);-webkit-backdrop-filter: blur(10px);backdrop-filter: blur(10px);width:90%;max-width:480px;border-radius:12px;padding:18px;border:1px solid var(--glass-border);box-shadow:var(--shadow);transform:translateY(8px) scale(.98);opacity:0;transition:opacity 200ms ease, transform 220ms ease}
 .modal-overlay.open .modal{transform:translateY(0) scale(1);opacity:1}
 .modal header{display:flex;justify-content:space-between;align-items:center;position:relative}
 .modal .close{border:none;background:transparent;font-size:18px;cursor:pointer;padding:8px;border-radius:8px;position:absolute;top:10px;right:10px}
 /* keep display:none helper; overlay open/close uses the `open` class for transitions */
 .hidden{display:none}
 
.sr-only{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}

/* Modal form styling - stacked inputs and spacing */
.modal form{display:flex;flex-direction:column;gap:8px}
.modal form label{display:block;font-weight:600;margin-bottom:4px;color:var(--muted)}
.modal form input[type="email"], .modal form input[type="password"], .modal form input[type="text"]{padding:10px;border-radius:8px;border:1px solid var(--glass-border);background:transparent;color:var(--text)}
.modal form .form-actions{display:flex;gap:8px;align-items:center}
.modal .muted{color:var(--muted);font-size:13px}
.modal a.switch-to-login, .modal a.switch-to-register{color:var(--accent);text-decoration:underline;cursor:pointer}
/* Toast notifications */
.toast-container{position:fixed;right:16px;bottom:16px;z-index:160;display:flex;flex-direction:column;gap:8px;max-width:360px}
.toast{background:var(--card);border:1px solid var(--glass-border);border-radius:10px;padding:10px 12px;box-shadow:var(--shadow);display:flex;align-items:center;gap:10px;min-height:44px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);opacity:0;transform:translateY(6px);transition:opacity 180ms ease, transform 160ms ease}
.toast.open{opacity:1;transform:translateY(0)}
.toast .text{flex:1;color:var(--text)}
.toast .close-toast{border:none;background:transparent;font-size:18px;cursor:pointer;color:var(--muted)}
.toast--success{border-left:4px solid #10b981}
.toast--error{border-left:4px solid #ef4444}
.toast--info{border-left:4px solid var(--accent)}
@media(min-width:960px){
  .container{grid-template-columns:1fr 360px;grid-template-areas:"left right"}
  .results-panel{grid-column:1;}
  .history-panel{grid-column:2}
  .history{max-height:600px}
}
@media(max-width:959px){
  .container{grid-template-columns:1fr;}
  .history{max-height:260px}
}
/* Focus states */
button:focus,input:focus{outline:2px solid rgba(124,58,237,0.25);outline-offset:2px}
/* Scrollbar styling for modern browsers */
.results::-webkit-scrollbar,.history::-webkit-scrollbar{height:8px;width:8px}
.results::-webkit-scrollbar-track,.history::-webkit-scrollbar-track{background:transparent}
.results::-webkit-scrollbar-thumb,.history::-webkit-scrollbar-thumb{background:linear-gradient(90deg,var(--accent),#06b6d4);border-radius:8px}
/* Accessibility improvements for option menus */
.option-menu{position:fixed;display:flex;flex-direction:column;gap:6px;background:var(--card);padding:8px;border-radius:10px;border:1px solid var(--glass-border);box-shadow:var(--shadow);z-index:70;min-width:120px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);transition:opacity 140ms ease, transform 140ms ease}
.option-menu.open{opacity:1;transform:translateY(0) scale(1)}
.option-menu.closed{opacity:0;transform:translateY(-6px) scale(.98)}
.option-menu button{display:block;background:transparent;border:none;padding:8px;border-radius:8px;text-align:left;cursor:pointer;color:var(--text)}
.option-menu button:hover,.option-menu button:focus{background:rgba(0,0,0,0.04);outline:none}
.option-menu button[role="menuitem"]{font-weight:600}
/* small icon buttons */
.small-icon{background:transparent;border:none;cursor:pointer;font-size:14px;padding:6px}

/* Make sure the app works on small screens */
@media (max-width:520px){.nav-links{display:flex;gap:6px}}

/* provide reasonable transitions */
button, .results, .history-item{transition:all .12s ease}
button:hover{filter:brightness(.98);transform:translateY(-1px)}
.modal .close:hover,.modal .close:focus{background:rgba(0,0,0,0.04)}
.panel{transition:background-color 220ms ease,border-color 220ms ease}

/* accessible colors for danger */
.danger{color:#fff}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce){
  *{transition:none !important}
}










