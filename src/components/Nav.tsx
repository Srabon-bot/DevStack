import React from 'react';
import logoText from '../assets/logo-text.png';

const Nav = () => {
    const navItems = [
        { label: 'Home', active: true },
        { label: 'Technologies', active: false },
        { label: 'Projects', active: false },
        { label: 'About', active: false },
        { label: 'Contact', active: false },
    ];

    return (
        <div className="border-b border-slate-200 sticky top-0 z-50 bg-white">
            <div className="flex items-center justify-between container mx-auto py-4 px-4">

                {/* Hamburger - mobile only */}
                <div className="dropdown lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                    >
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>

                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-48 p-2 shadow-lg border border-slate-100"
                    >
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href="#"
                                    className={`text-[14px] ${item.active
                                        ? 'font-medium text-[#DB2777]'
                                        : 'font-semibold text-[#475569]'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Logo */}
                <div>
                    <img
                        src={logoText}
                        alt="Dev Stack"
                        className="h-8 lg:h-10"
                    />
                </div>

                {/* Desktop nav links */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-4">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href="#"
                                    className={`text-[14px] ${item.active
                                        ? 'font-medium text-[#DB2777]'
                                        : 'font-semibold text-[#475569]'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Auth buttons */}
                <div className="flex items-center gap-1">
                    <button className="btn btn-ghost rounded-full btn-sm lg:btn-md">
                        Sign In
                    </button>

                    <button className="btn text-white bg-[#D91B7E] rounded-full btn-sm lg:btn-md">
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Nav;