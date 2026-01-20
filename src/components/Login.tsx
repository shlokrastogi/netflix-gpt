import { useState, useRef } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Header from "./header";
import checkValidData from "../utils/validData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fullName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleButtonClick = async () => {
    if (!email.current || !password.current) return;

    const fullNameValue = fullName.current?.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidData({
      fullName: fullNameValue,
      email: emailValue,
      password: passwordValue,
      isSignUp: !isSignInForm,
    });

    setErrorMessage(message || "");
    if (message) return;

    try {
      if (!isSignInForm) {
        // SIGN UP
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue,
        );

        await updateProfile(userCredential.user, {
          displayName: fullNameValue,
        });
      } else {
        // SIGN IN
        await signInWithEmailAndPassword(auth, emailValue, passwordValue);
      }
    } catch (error: any) {
      setErrorMessage(error.code + " - " + error.message);
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };

  return (
    <div className="relative min-h-screen w-screen">
      <img
        className="absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_small.jpg"
        alt="background"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-1 items-center justify-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col bg-black/70 p-8 rounded-lg"
          >
            <h1 className="text-3xl text-white mb-6 font-bold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (
              <input
                ref={fullName}
                type="text"
                placeholder="Full Name"
                className="w-72 p-2 mb-4 bg-gray-800 text-white rounded"
              />
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              className="w-72 p-2 mb-4 bg-gray-800 text-white rounded"
            />

            <div className="relative w-72 mb-4">
              <input
                ref={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                autoComplete="current-password"
                className="w-full p-2 bg-gray-800 text-white rounded pr-10"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-400 cursor-pointer"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </span>
            </div>

            {errorMessage && (
              <p className="text-red-500 w-72 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              onClick={handleButtonClick}
              className="bg-red-600 text-white w-72 p-2 mt-4 rounded font-semibold"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p
              className="m-2 mt-6 text-white cursor-pointer hover:text-blue-600 hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix? Sign Up now"
                : "Already have an account? Sign In now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
