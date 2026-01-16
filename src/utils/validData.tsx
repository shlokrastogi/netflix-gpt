import AuthFormData from "../types/authFormData";

const checkValidData = ({
  fullName,
  email,
  password,
  isSignUp,
}: AuthFormData): string | null => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password
  );

  if (isSignUp) {
    if (!fullName || fullName.trim().length < 3) {
      return "Full name must be at least 3 characters long.";
    }
  }

  if (!isEmailValid) return "Email ID is not valid";

  if (!isPasswordValid)
    return "Password must be at least 8 characters long and include uppercase, lowercase, and a number.";

  return null;
};
export default checkValidData;
