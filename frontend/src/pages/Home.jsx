const Home = ({ user }) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">
        Welcome {user ? user.displayName : "Guest"}!
      </h1>
    </div>
  );
};

export default Home;
