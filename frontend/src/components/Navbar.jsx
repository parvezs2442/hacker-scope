import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <Link to="/" className="text-xl font-bold">
        HackerPulse
      </Link>

      <div className="flex gap-4">
        {user ? (
          <>
            <Link to="/bookmarks">Bookmarks</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;