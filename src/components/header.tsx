const Header = () => {
  return (
    <div className="relative h-screen">
      <img
        className="absolute w-32 top-4 left-28"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix"
      />
      <div className="flex items-center justify-center h-full">
        <form className="flex flex-col bg-black/60 p-8 rounded-lg">
          <h1 className="text-3xl text-white m-2 font-bold">Sign In</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="w-60 h-8 p-4 m-2 bg-gray-800 text-white"
          />

          <input
            type="text"
            placeholder="Password"
            className="w-60 h-8 p-4 m-2  bg-gray-800 text-white"
          />

          <button className="bg-red-600 text-white w-60 h-8 m-2 mt-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
