import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // could use redirect its cleaner
import { app } from '../firebaseConfig';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Welcome = () => {
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider) // you can also use redirect instead of popup but i think u need more code for that
      .then((result) => {
        // right here we go to google and ask them for an access token then we can use that on the api
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken; // here
        // keeping track of the person that signed in
        const user = result.user; 
        console.log('User signed in:', user);
        // this will catch error so u can leave or redirect them somewhere else 
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // the email they tried to use that errored out
        const email = error.customData.email;
        // the credential that the error is throwing back to u
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Error during sign in:', errorCode, errorMessage); // putting that all in the console for u to read
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to BeWord</h1>
      <p style={styles.para}>
        Here at BeWord we want to take competing in NYT's Wordle to 
        a whole new level. Every day we will send out a notification that will
        let users know the word of the day is about to be released. Users will start
        at the same time and race to finish the Wordle in the least amount of tries
        and the least amount of time 
      </p>
      <br />
      <p style={styles.para}>
        idk how to do all that android ios etc shit and i think you should probably make them seperately and also only support
        ios unless you have a reason to support android. its really easy if u just use firebase for everything so u can just make a regular
        react app and then a swift swiftui app for ios thats also beautiful i highly reccomend not trying to do both at once
        also idk how to run ur other project so i just made this to show how to make the sign in with google button its very easy
        and im at work and this is better than working
      </p>
      <button onClick={handleSignInWithGoogle} style={styles.button}>
        Sign in with Google
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    height: '100vh',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  para: {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '30px',
    maxWidth: '600px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

export default Welcome;