import { faCircleQuestion, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Swapped!</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* replace with Theme toggle here */}
              <input
                type="checkbox"
                className="toggle border-primary-600 bg-primary-500 checked:border-dark:primary-500 checked:bg-dark:primary-400 checked:text-dark:primary-800"
              />
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
