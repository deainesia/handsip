import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <h1>
        <Link to="/login">
          <a href="">Login</a>
        </Link>
      </h1>
    </div>
  );
};
