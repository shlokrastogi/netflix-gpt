import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import UserAvatar from "../utils/userAvatar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store: any) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    });
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsuscribe when my components unmount
    return () => unsuscribe();
  }, []);

  return (
    <div className="z-20 flex flex-row absolute w-screen px-28 py-4 bg-gradient-to-b from-black justify-between">
      <img className="flex w-32" src={LOGO} alt="Netflix" />
      {user?.uid && (
        <div className="flex items-center gap-4">
          <UserAvatar />

          <button
            onClick={handleSignOut}
            className="flex justify-self-center text-white bg-red-600 rounded ml-4 my-1 p-2 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
