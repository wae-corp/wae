import {Link, NavLink} from "@remix-run/react";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-40 flex h-[var(--header-height)] w-full items-center bg-black py-3">
      <div className="container">
        <div className="relative flex items-center gap-10 text-white">
          <nav className="flex-1">
            <ul className="flex items-center gap-10">
              <li>
                <NavLink to={"/company"}>Company</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Product & Solutions</NavLink>
              </li>
              <li className="ml-auto">
                <NavLink to={"/careers"}>Career</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>News & Updates</NavLink>
              </li>
            </ul>
          </nav>
          <Link
            to={"/"}
            className="t-1/2 absolute left-1/2 -translate-x-1/2"
          >
            <img
              src="/images/logos/wae-logo.png"
              alt="Wae"
              width={120}
              height={60}
              className="object-contain"
            />
          </Link>

          <Link
            to="/contact"
            className="wae-btn px-4 py-2"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
};
