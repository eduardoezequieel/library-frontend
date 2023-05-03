const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="md:w-1/4 sm:w-1/2 w-[80%] flex flex-col gap-2">
        <h1 className="text-center text-2xl font-bold">Sign in</h1>
        <p className="text-center text-neutral-400 font-heading font-bold">
          My U Library
        </p>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            placeholder="email@example.com"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="primary-button">
          Log in
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
