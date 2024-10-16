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
          className="left-1/2 top-1/2 lg:absolute lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <img
            src="/images/logos/wae-logo.svg"
            alt="Wae"
            width={120}
            height={60}
            className="object-contain"
          />
        </Link>

        <div
          className={clsx(
            "fixed flex flex-1 items-center gap-10 transition-transform max-lg:inset-0 max-lg:h-screen max-lg:w-screen max-lg:flex-col max-lg:justify-center max-lg:bg-white lg:static lg:text-white",
            {
              "max-lg:translate-x-0": menuOpen,
              "max-lg:translate-x-full": !menuOpen,
            },
          )}
        >
          <nav className="lg:flex-1">
            <ul className="flex flex-col items-center gap-10 lg:flex-row">
              <li>
                <NavLink to={"/company"}>Company</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Product & Solutions</NavLink>
              </li>
              <li className="lg:ml-auto">
                <NavLink to={"/careers"}>Career</NavLink>
              </li>
              <li>
                <NavLink to={"/blogs"}>News & Updates</NavLink>
              </li>
            </ul>
          </nav>

          {/* <Link
            to="/contact"
            className="wae-btn px-4 py-2 max-lg:border-black max-lg:text-black"
          >
            Get In Touch
          </Link> */}
        </div>

        <button
          className={clsx(
            "wae-btn isolate ml-auto flex h-11 w-11 flex-col !items-start justify-center gap-2 border-none p-[10px] lg:hidden",
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
