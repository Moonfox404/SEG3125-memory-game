import { faCircleQuestion, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-primary">Swapped!</a>
        </div>
        <div className="flex-none text-primary">
          <ul className="menu menu-horizontal px-1">
            <li className="">
              <ThemeToggle />
            </li>
            <li>
              <a className="h-full flex items-center">
                <FontAwesomeIcon icon={faSliders} />
              </a>
            </li>
            <li>
              <button
                className="h-full flex items-center"
                onClick={() =>
                  document.getElementById("info_modal")!.showModal()
                }
              >
                {" "}
                <FontAwesomeIcon icon={faCircleQuestion} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
