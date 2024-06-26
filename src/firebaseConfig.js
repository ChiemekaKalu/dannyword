import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Your Firebase configuration object here
  apiKey: "idontknowanyofyourinfosoputithereandseeifitworks",
  authDomain: "idontknowanyofyourinfosoputithereandseeifitworks",
  projectId: "idontknowanyofyourinfosoputithereandseeifitworks",
  storageBucket: "idontknowanyofyourinfosoputithereandseeifitworks",
  messagingSenderId: "idontknowanyofyourinfosoputithereandseeifitworks",
  appId: "idontknowanyofyourinfosoputithereandseeifitworks"
};

const app = initializeApp(firebaseConfig);

export { app };