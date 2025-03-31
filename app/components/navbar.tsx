import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content flex items-center justify-center">
            <Link className="btn btn-ghost text-xl" href="/">
                Home
            </Link>
            <Link className="btn btn-ghost text-xl" href="/about-me">
                About me
            </Link>
            <Link className="btn btn-ghost text-xl" href="/projects">
                Projects
            </Link>
        </div>
    );
};

export default Navbar;
