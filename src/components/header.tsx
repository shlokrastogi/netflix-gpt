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
  }, [onAuthStateChanged]);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e: any) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full sm:bg-gradient-to-b from-black px-4 sm:px-8 py-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Logo */}
        <img className="w-28 sm:w-32 h-auto" src={LOGO} alt="Netflix" />

        {user?.uid && (
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            {/* Language selector */}
            {showGptSearch && (
              <select
                className="bg-transparent text-white text-sm  px-2 py-1 rounded border border-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    className="bg-slate-900 text-sm"
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT Toggle */}

            <button
              className="bg-white text-black font-semibold px-3 py-1.5 rounded hover:bg-white/80 text-sm"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            <div className="flex-1"></div>

            {/* Avatar */}
            <UserAvatar />

            {/* Sign out */}
            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white font-semibold px-4 py-1.5 rounded hover:bg-red-800 text-sm"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
