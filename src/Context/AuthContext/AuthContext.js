import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
export const ContextProvide = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refress, setRefress] = useState(false);
  console.log(user);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    refress,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div>
      <ContextProvide.Provider value={userInfo}>
        {children}
      </ContextProvide.Provider>
    </div>
  );
};

export default AuthContext;
