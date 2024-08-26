import {Link, NavLink} from "@remix-run/react";

export const Header = () => {
    return (
        <header className="fixed w-full bg-gradient-to-b from-black top-0 left-0 z-40 pt-14 pb-5 h-[120px]">
            <div className="container">
                <div className="flex items-center gap-10 relative text-white">
                    <nav className="flex-1">
                        <ul className="flex gap-10 items-center">
                            <li>
                                <NavLink to={"/"}>Company</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}>Product & Solutions</NavLink>
                            </li>
                            <li className="ml-auto">
                                <NavLink to={"/"}>Career</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}>News & Updates</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Link
                        to={"/"}
                        className="absolute left-1/2 t-1/2 -translate-1/2 "
                    >
                        <img
                            src="/images/logo/wae-logo.png"
                            alt="Wae"
                            width={120}
                            height={60}
                            className="object-contain"
                        />
                    </Link>

                    <a
                        href="#"
                        className="flex-shrink-0"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </header>
    );
};
