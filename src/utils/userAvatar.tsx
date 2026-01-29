import { useMemo } from "react";
import { useSelector } from "react-redux";

const UserAvatar = () => {
  const user = useSelector((store: any) => store.user);

  const randomGradient = useMemo(() => {
    const gradients = [
      "bg-gradient-to-br from-purple-500 to-orange-800",
      "bg-gradient-to-br from-blue-400 to-green-500",
      "bg-gradient-to-br from-pink-500 to-yellow-400",
      "bg-gradient-to-br from-red-500 to-purple-600",
      "bg-gradient-to-br from-indigo-500 to-pink-500",
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  }, []);

  return (
    <div
      className={`w-8 h-8 rounded flex items-center justify-center text-white font-bold ${randomGradient}`}
    >
      {user?.photoURL || user?.displayName?.[0] || "U"}
    </div>
  );
};

export default UserAvatar;
