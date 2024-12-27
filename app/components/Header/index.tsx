import {Link, NavLink} from "@remix-run/react";
import clsx from "clsx";
import {useState} from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleNav() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="fixed left-0 top-0 z-40 flex h-[var(--header-height)] w-full items-center bg-gradient-to-b from-black to-transparent py-3">
      <div className="container relative flex items-center">
        <Link
          to={"/"}
          className="left-1/2 top-1/2 md:absolute md:-translate-x-1/2 md:-translate-y-1/2"
        >
          <img
            src="/images/logos/wae-logo.svg"
            alt="Wae"
            width={120}
            height={60}
            className="object-contain max-lg:w-20"
          />
        </Link>

        <div
          className={clsx(
            "fixed flex flex-1 items-center gap-10 transition-transform max-lg:text-sm max-md:inset-0 max-md:h-screen max-md:w-screen max-md:flex-col max-md:justify-center max-md:bg-white md:static md:text-white",
            {
              "max-md:translate-x-0": menuOpen,
              "max-md:translate-x-full": !menuOpen,
            },
          )}
        >
          <nav className="md:flex-1">
            <ul className="flex flex-col items-center gap-10 md:flex-row">
              <li>
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  to={"/company"}
                >
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  to={"/products"}
                >
                  Product & Solutions
                </NavLink>
              </li>
              <li className="md:ml-auto">
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  to={"/careers"}
                >
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  to={"/blogs"}
                >
                  News & Updates
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* <Link
            to="/contact"
            className="wae-btn px-4 py-2 max-md:border-black max-md:text-black"
          >
            Get In Touch
          </Link> */}
        </div>

        <button
          className={clsx(
            "wae-btn isolate ml-auto flex h-11 w-11 flex-col !items-start justify-center gap-2 border-none p-[10px] md:hidden",
            {
              "wae-btn-dark": menuOpen,
            },
          )}
          onClick={toggleNav}
          aria-label="Menu Toggle Button"
        >
          <div
            aria-hidden
            className="h-[3px] w-6 bg-white"
          ></div>
          <div
            aria-hidden
            className={clsx("h-[3px] bg-white transition-all", {
              "w-6": menuOpen,
              "w-3": !menuOpen,
            })}
          ></div>
        </button>
      </div>
    </header>
  );
};
