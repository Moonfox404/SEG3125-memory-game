import { faCircleQuestion, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggle from "./ThemeToggle";
import { Dispatch } from "react";

type NavBarProps = {
  gameState: boolean;
  setGameState: (state: boolean) => void;
  theme: string;
  setTheme: Dispatch<string>;
  openMenu: () => void;
};

const NavBar = ({
  openMenu,
  gameState,
  setGameState,
  theme,
  setTheme,
}: NavBarProps) => {
  return (
    <div>
      <div className="navbar bg-base shadow-sm">
        <div className="flex-1">
          <button
            className="btn btn-ghost text-xl text-primary"
            onClick={() => setGameState(false)}
          >
            Swapped!
          </button>
        </div>
        <div className="flex-none text-primary">
          <ul className="menu menu-horizontal px-1">
            <li className="">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </li>
            <li>
              <button
                className="h-full flex items-center"
                onClick={() => {
                  if (gameState) {
                    openMenu();
                  }
                }}
              >
                <FontAwesomeIcon icon={faSliders} />
              </button>
            </li>
            <li>
              <button
                className="h-full flex items-center"
                onClick={() =>
                  (
                    document.getElementById("info_modal")! as HTMLDialogElement
                  ).showModal()
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
