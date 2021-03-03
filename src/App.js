import React, {useState, useEffect} from 'react';
import './App.css';
import fire from './fire';
import './components/FontawesomeIcons';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Home from './components/Home';

const App =() =>  {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInputs = () =>{
      setEmail('');
      setPassword('');
  }

  const clearErrors = () =>{
      setEmailError('');
      setPasswordError('');
  }

  const handleLogin = (e) =>{
    e.preventDefault();
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err) => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
    });
  };

  const handleSignup = (e) =>{
    e.preventDefault();
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err) => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
    });
  };

  const handleLogout = () =>{
      fire.auth().signOut();
  };

  const authListener = () =>{
    fire.auth().onAuthStateChanged((user) =>{
        if(user){
          clearInputs();
          localStorage.setItem('user', user);
          setUser(user);
        }else{
            localStorage.removeItem('user')
            setUser("");
        }
    });
  };

  useEffect(() =>{
    authListener();
  },[]);

  

  return (
    <div>
    {user ? (
      <Home 
        user = {user}
        handleLogout = {handleLogout}
      />
    ) : (
      <>
    <Navbar 
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        emailError={emailError}
        passwordError={passwordError}
    />
    <Intro/>
    </>
    ) 
  }
    </div>
  );
}

export default App;
