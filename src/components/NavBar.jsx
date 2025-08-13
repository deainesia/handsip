import Button from "./Button";
import { navBarMenu } from "../data/navbar";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full">
      <div className="relative flex flex-row justify-center gap-6 bg-white/50 py-4 backdrop-blur-sm lg:gap-8">
        <p className="brand-text absolute top-2 left-0 text-primary md:ms-10 lg:ms-14 xl:ms-20 2xl:ms-30">
          HandSip
        </p>
        {navBarMenu.map((item) => {
          return (
            <NavLink to={item.link} key={item.id}>
              <p className="normal-text text-black">{item.title}</p>
            </NavLink>
          );
        })}
        <div className="absolute top-2 right-0 w-fit md:me-10 lg:me-14 xl:me-20 2xl:me-30">
          <Link to="/login">
            <Button variant={"primary"} text={"Login"} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
