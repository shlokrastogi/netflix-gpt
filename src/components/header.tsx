import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import UserAvatar from "../utils/userAvatar";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store: any) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    });
  };

  return (
    <div className="flex flex-row absolute w-screen px-28 py-4 bg-gradient-to-b from-black z-10 justify-between">
      <img
        className="flex w-32"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix"
      />
      <div className="flex h-12">
        <UserAvatar />

        <button
          onClick={handleSignOut}
          className="flex text-white bg-red-600 rounded ml-4 my-1 p-2"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
