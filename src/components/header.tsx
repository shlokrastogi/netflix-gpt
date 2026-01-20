import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
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
        <img
          className="rounded-xl"
          src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
          alt="userIcon"
        />
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
