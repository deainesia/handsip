import Button from "./Button";
import { navBarMenu } from "../data/navbar";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full">
      <div className="relative flex flex-row justify-center gap-8 bg-white/50 py-4 backdrop-blur-sm">
        <p className="brand-text absolute top-2 left-0 text-primary lg:mx-14 xl:mx-20 2xl:mx-30">
          HandSip
        </p>
        {navBarMenu.map((item) => {
          return (
            <NavLink to={item.link} key={item.id}>
              <p className="normal-text text-black">{item.title}</p>
            </NavLink>
          );
        })}
        <div className="absolute top-2 right-0 w-fit lg:mx-14 xl:mx-20 2xl:mx-30">
          <Link to="/login">
            <Button variant={"primary"} text={"Login"} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
