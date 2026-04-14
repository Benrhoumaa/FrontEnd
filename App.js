import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLogin(true);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  const switchToSignUp = () => {
    setShowLogin(false);
  };

  if (isLoggedIn) {
    return <ProfileScreen onLogout={handleLogout} />;
  }

  if (showLogin) {
    return (
      <LoginScreen 
        onLogin={handleLogin} 
        onSignUpPress={switchToSignUp}
      />
    );
  }

  return (
    <SignUpScreen 
      onSignUp={handleSignUp}
      onLoginPress={switchToLogin}
    />
  );
}