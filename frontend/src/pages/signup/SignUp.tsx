// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
function SignUp({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up{" "}
          <span className="text-purple-300 text-sm">GuruSys-ChatApp</span>
        </h1>
        <form>
          <div className="">
            <label htmlFor="username" className="label p-1">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              name="username"
              id="username"
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="">
            <label htmlFor="username" className="label p-1">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              name="username"
              id="username"
              type="text"
              placeholder="johndoe"
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
          <div className="">
            <label htmlFor="confirmPassword" className="label p-1">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-purple-300 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div className="">
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
