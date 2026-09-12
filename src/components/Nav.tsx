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
            <div className="flex items-center justify-between container mx-auto py-4">
                <div>
                    <img src={logoText} alt="Logo" />
                </div>
                <div>
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
                <div className="flex items-center">
                    <button className="btn btn-ghost rounded-full">Sign In</button>
                    <button className="btn text-white bg-[#D91B7E] rounded-full">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;