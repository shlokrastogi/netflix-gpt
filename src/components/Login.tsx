import Header from "./header";

const Login = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_small.jpg"
        alt="background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/75 via-transparent to-black/75"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
      </div>
    </div>
  );
};

export default Login;
