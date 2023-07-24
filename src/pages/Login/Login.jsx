import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import SocialSignIn from "../../components/shared/SocialSignIn";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data?.email, data?.password)
      .then((result) => {
        if (result?.user) {
          toast.success("login success");
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <div
      className="hero min-h-screen bg-base-200 bg-opacity-40"
      style={{
        background: `url("https://media.istockphoto.com/id/1426988809/photo/security-password-login-online-concept-hands-typing-and-entering-username-and-password-of.webp?b=1&s=170667a&w=0&k=20&c=AJD5Wv30lmyILccJyMpQGhkmh0VhZ5WNDtk53MO1OVM=")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        objectFit: "cover",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 md:w-[500px] lg:w-[600px] max-w-xl shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs">
                    email is required.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-400 text-xs">
                    password is required.
                  </span>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <Link to="/registration">
                  <label className="label">
                    <span className="label-text-alt link link-hover text-blue-400">
                      New Here? Register here.
                    </span>
                  </label>
                </Link>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="divider"></div>
            <SocialSignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
