import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const UseContext = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [user, setUser] = useState({});


  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        console.log(data)});
  }, []);


  // for log in  log out user changed

  useEffect( ()=> {
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
      setUser(currentUser);
      console.log(currentUser);
    });
    return()=> {
      unsubscribe();
    }
  },[])

  const createUser = (email, password)=> {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const info = {
    places,
    createUser,
    user,

  };

  return (
    <div>
      <AuthContext.Provider value={info}> {children} </AuthContext.Provider>
    </div>
  );
};

export default UseContext;
