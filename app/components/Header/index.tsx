import {Link, NavLink} from "@remix-run/react";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-40 h-[120px] w-full bg-gradient-to-b from-black pb-5 pt-14">
      <div className="container">
        <div className="relative flex items-center gap-10 text-white">
          <nav className="flex-1">
            <ul className="flex items-center gap-10">
              <li>
                <NavLink to={"/company"}>Company</NavLink>
              </li>
              <li>
                <NavLink to={"/product"}>Product & Solutions</NavLink>
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
            className="flex-shrink-0"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
};
