import Button from "./Button";
import { navBarMenu } from "../data/navbar";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full">
      <div className="relative flex flex-row justify-center gap-8 bg-white/50 px-30 py-4 backdrop-blur-sm">
        <p className="brand-text absolute top-2 left-30 text-primary">
          HandSip
        </p>
        {navBarMenu.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
              <p className="title-small text-black">{item.title}</p>
            </Link>
          );
        })}
        <div className="absolute top-2 right-30 w-fit">
          <Link to="/login">
            <Button variant={"primary"} text={"Login"} />
          </Link>
        </div>
      </div>
    </div>
  );
};
