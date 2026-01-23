import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import UserAvatar from "../utils/userAvatar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { RootState } from "../utils/appStore";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store: any) => store.user);
  const showGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch,
  );
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

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e: any) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="z-20 flex flex-row absolute w-screen px-12 py-2 bg-gradient-to-b from-black justify-between">
      <img className="flex w-32 h-10 mt-2" src={LOGO} alt="Netflix" />

      {user?.uid && (
        <div className="flex items-center gap-4">
          {showGptSearch && (
            <select
              className="bg-transparent p-1 text-white text-sm rounded border border-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="bg-slate-900"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-white text-black font-bold m-4 p-2 rounded-md hover:bg-white/75"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          <UserAvatar />

          <button
            onClick={handleSignOut}
            className="flex font-bold justify-self-center text-white bg-red-600 rounded mr-2 my-1 p-2 px-8 hover:bg-red-800"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
