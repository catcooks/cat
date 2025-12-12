# Firebase — Google Sign-In
This project includes optional Google sign-in support. I added a "Sign In with Google" button to the Login and Register modal and implemented a `handleGoogleSignIn()` popup-based flow in the SPA.

Quick checklist to get Google sign-in working:
- Enable **Google** under Authentication → Sign-in method in Firebase Console.
- Add your hosting domain (for local dev add `localhost`) under **Authentication → Authorized domains**.
- Open your project in Google Cloud Console and configure the OAuth consent screen (internal/external) and publish the app if needed for production.
- If you use a custom domain, add the domain and correct redirect URIs in the OAuth client settings.
- Make sure `src/firebase.config.js` is present with your app's firebase config (copy `src/firebase.config.example.js`). The keys required for auth (apiKey, authDomain, projectId, appId) must match the Firebase Console project.

Notes about behavior:
- The SPA uses `signInWithPopup()` via a GoogleAuthProvider. For redirect-based flows, you can replace the popup call with `signInWithRedirect()` and handle `getRedirectResult()` if needed.
- On first-time Google sign-in, the app creates a Firestore user document (`users/{uid}`) with default `displayName` (from provider's profile), a default heart (❤️), and an empty `history` array.
- If you encounter `auth/configuration-not-found`, double-check the `firebaseConfig` values in `src/firebase.config.js` and verify your project's `authDomain` is correct and matches the authorized domain list.

Troubleshooting:
- For `auth/cancelled-popup-request` or `auth/popup-closed-by-user` errors, test a fresh popup attempt.
- For `auth/configuration-not-found`, verify the config file is loaded (check the Console loads a proper object) and `authDomain`/`projectId` match the console.
- Use the browser console (network tab) to inspect identitytoolkit requests and errors returned from the Firebase Auth endpoints.

Debugging hint: The app logs a `Firebase initialized` object containing `authDomain` and `projectId`. If the values are `undefined` or don't match your Firebase Console, the client won't be able to reach the auth endpoints and you'll see `auth/configuration-not-found`.

If you want, I can also add a dedicated Google sign-in button in the navbar or wire up a `signInWithRedirect` fallback.

Frontend UI improvements (modals, theme, and buttons)
- Modals now use a semi-transparent overlay with a blur (`backdrop-filter`) and smooth fade-in/out transitions. They maintain a modern glassmorphism look and have a clearly positioned top-right close button.
- The dark mode toggle applies smooth transitions to the theme colors and card backgrounds for a more polished visual experience.
- Buttons are now unified with consistent padding and border-radius; interactive states include hover and focus styles for better UX and keyboard usability.
- The Login and Register overlays now use stacked, labeled inputs for accessibility and clearer spacing. Register includes a Confirm Password field and the UI performs a password match check before attempting registration.
- Both the Login and Register overlays include a "Sign in with Google" button and a switch link (Login -> Register and Register -> Login) to simplify navigation.

History option menu improvements:
- Each history item now includes an options menu (⋮) that opens an accessible overlay menu with actions: `+1`, `+5`, and `Halve`.
- The menu is keyboard navigable (Arrow keys, Enter/Space to activate, Escape to close) and screen-reader friendly with `role="menu"` and `role="menuitem"` semantics.
- The overlay positions itself safely, keeps within viewport, and will close on outside click, Escape, scroll, or resize.
 - The `+1`, `+5`, and `Halve` operations now modify the stored *fee* only (not the original amount). The minimum fee is enforced at 5 for all operations.

Toasts & Alerts:
- Replaced browser `alert()` calls with inline accessible toast notifications (`showToast(...)`). Toasts are presented in a bottom-right `toastContainer`, use ARIA `status`/`alert` roles, and are dismissable. This improves usability and accessibility.
- The history and results areas retain styled scrollbars and visual focus outlines, while modal transitions avoid abrupt display changes by using opacity and visibility transitions.

