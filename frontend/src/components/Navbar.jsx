const Navbar = ({ user }) => {
  const login = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const logout = () => {
    window.open("http://localhost:5000/logout", "_self");
  };

  return (
    <nav className="p-4 flex justify-between bg-blue-500 text-white">
      <h1 className="font-bold text-xl">Social Logins</h1>
      <div className="flex gap-4">
        {user ? (
          <>
            <span>{user.displayName}</span>
            <a href="/demo">Demo</a>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <span>Guest</span>
            <button onClick={login}>Login with Google</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
