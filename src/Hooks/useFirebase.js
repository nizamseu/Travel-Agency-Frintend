import initializeAuthentication from "../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import AlertMessage from "../utility/ConfirmAlert";
import axios from "axios";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();

  // login with google
  const loginWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user);
        checkmail(result.user);

        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  // check email
  const checkmail = (user) => {
    const url = `https://pacific-retreat-04444.herokuapp.com/checkmail/${user.email}`;
    axios.get(url).then((res) => {
      if (res.data[0].email) {
        return;
      } else saveUser(user.email, user.displayName, "POST");
    });
  };

  //update profile
  const profileUpdate = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL:
        "https://pngset.com/images/account-avatar-human-people-profile-user-icon-number-symbol-text-moon-transparent-png-1625917.png",
      // photoURL: "https://i.ibb.co/17LfyKx/download.png",
    })
      .then(() => {})
      .catch((error) => {});
  };
  //create user using email and password

  const createUser = (data) => {
    setIsLoading(true);
    const { name, email, password } = data;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        emailVerufy();
        saveUser(email, name, "POST");
        profileUpdate(name);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // login with email and password
  const login = (data) => {
    setIsLoading(true);
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //send email verification
  const emailVerufy = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      AlertMessage("Very Your email");
    });
  };

  //    log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  // is admin
  useEffect(() => {
    fetch(
      `https://whispering-waters-68649.herokuapp.com/customers/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  // Saving user info
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://pacific-retreat-04444.herokuapp.com/addUser", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return { loginWithGoogle, isLoading, logOut, createUser, admin, user, login };
};

export default useFirebase;
