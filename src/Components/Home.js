import { useAuthContext } from "../Context/UserContext";

import "./Login.css";

export const Home = () => {
  const { user, logOut } = useAuthContext();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch {}
  };
  return (
    <div className="container">
      <h1 style={{ color: "white" }}>Hello {user && user.email}</h1>
      <div className="item">
        <button className="submit" onClick={handleLogOut}>
          LogOut
        </button>
      </div>
    </div>
  );
};
