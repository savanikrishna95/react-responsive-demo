import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorker from './serviceWorker';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// navigator.serviceWorker.addEventListener('message', event => {
//   if (event.data === 'reload') {
//     window.location.reload(true);
//   }
// });


// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('../public/serviceWorker.js')
//     .then(registration => {
//       console.log('Service Worker registered with scope:', registration.scope);
//     })
//     .catch(error => {
//       console.error('Service Worker registration failed:', error);
//     });
// }


serviceWorker.unregister();