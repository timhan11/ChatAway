import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white ">👋🏻 Hey There! 👋🏻 </h1>
          <p className="py-6 text-white">
          Your're missing out on the fun... Come See what they're saying 👇 👇 👇
          </p>
          <button onClick={handleLogin} className="btn-primary rounded-3xl p-6 hover:scale-110 text-white">Login With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
