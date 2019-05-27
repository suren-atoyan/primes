// Looks strange? Reset app by redirecting to "/"? :face_palm:
// Fortunately or unfortunately our application has no backend side
// and doesn't use cloud storages to keep or share states.
// That's why for be able to share something between users we are
// using the URL. When you are pressing the button "Save" and "Share"
// we are adding the hashed state of your app into URL. So, that's mean
// by removing everything after "/" we appear to the default of our app.

const resetApp = _ => (window.location.href = '/');

export default resetApp;
