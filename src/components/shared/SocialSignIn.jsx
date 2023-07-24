import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SocialSignIn = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        if (result?.user) {
          toast.success("login success");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn flex justify-center items-center w-full hover:bg-camp-primary rounded-none hover:rounded-lg hover:text-white"
      >
        <FcGoogle className="h-8 w-8 mr-5" />
        Continue with google
      </button>
    </div>
  );
};

export default SocialSignIn;
