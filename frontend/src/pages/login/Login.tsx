import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
function Login({}: Props) {
  const { login, loading } = useLogin();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await login(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-purple-300 text-sm">GuruSys-ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              name="username"
              id="username"
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className="">
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-purple-300 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div className="">
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

{
  /* 
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
  <h1 className="text-3xl font-semibold text-center text-gray-300">
    Login <span className="text-purple-300">GuruSys-ChatApp</span>
  </h1>
  <form>
    <div className="">
      <label htmlFor="username" className="label p-2">
        <span className="text-base label-text">Username</span>
      </label>
      <input
        name="username"
        id="username"
        type="text"
        placeholder="Enter Username"
        className="w-full input input-bordered h-10"
      />
    </div>
    <div className="">
      <label htmlFor="password" className="label p-1">
        <span className="text-base label-text">Password</span>
      </label>
      <input
        name="password"
        id="password"
        type="password"
        placeholder="Enter Password"
        className="w-full input input-bordered h-10"
      />
    </div>
    <a
      href="#"
      className="text-sm hover:underline hover:text-purple-300 mt-2 inline-block"
    >
      {"Don't"} have an account?
    </a>
    <div className="">
      <button className="btn btn-block btn-sm mt-2">Login</button>
    </div>
  </form>
</div>
</div> 
*/
}
