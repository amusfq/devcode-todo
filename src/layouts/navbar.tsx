import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div data-cy='header-background' className="bg-primary text-white shadow-lg">
      <div className="px-8 h-28 max-w-6xl mx-auto flex items-center">
        <Link data-cy='header-title' to="/" className="text-2xl font-bold">
          TO DO LIST APP
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
