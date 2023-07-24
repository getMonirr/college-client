import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import SocialSignIn from "../../components/shared/SocialSignIn";

const Registration = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data?.email, data?.password)
      .then((result) => {
        if (result?.user) {
          updateProfile(result?.user, {
            displayName: data?.name,
            photoURL: data?.photoUrl,
          }).then(() => {
            toast.success("Registration successful, login now", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            // navigate
            navigate("/");
          });
        }
      })
      .catch((err) => console.log(err?.message));
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs">
                    name is required.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <span className="text-xs">
                  Minimum 6 characters, at least one uppercase & lowercase
                  letter, one number and special character
                </span>
                {errors.password && (
                  <span className="text-red-400 text-xs">
                    password is required.
                  </span>
                )}
              </div>
              <Link to="/login">
                <label className="label">
                  <span className="label-text-alt link link-hover text-blue-400">
                    Already have an account? login in here
                  </span>
                </label>
              </Link>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Register
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

export default Registration;
