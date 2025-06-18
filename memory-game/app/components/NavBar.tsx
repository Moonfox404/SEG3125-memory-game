import { faCircleQuestion, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Swapped!</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="">
              {/* replace with Theme toggle here */}
              <ThemeToggle />
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faGear} />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <FontAwesomeIcon icon={faCircleQuestion} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
