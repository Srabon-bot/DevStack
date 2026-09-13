import React from 'react';
import Footerlogo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white text-base-content w-full mt-15">
            <div className="container mx-auto p-6 lg:p-10">
                <div className="footer sm:footer-horizontal flex flex-col lg:flex-row gap-10 lg:gap-0 text-center lg:text-left items-center lg:items-start">
                    <aside className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center">
                            <img
                                src={Footerlogo}
                                alt="Dev Stack"
                                className="h-8 w-auto object-contain"
                            />
                        </div>

                        <p className="footer-link text-card-md mt-3 max-w-xs">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        <div className="flex items-center gap-5 mt-4">
                            <a href="#" className="text-card-md social-link">GitHub</a>
                            <a href="#" className="text-card-md social-link">Twitter</a>
                            <a href="#" className="text-card-md social-link">LinkedIn</a>
                        </div>
                    </aside>

                    <nav className="flex flex-col items-center lg:items-start">
                        <h6 className="footerHeader-link text-card-md">PRODUCT</h6>
                        <a className="link link-hover footer-link text-card-md">Home</a>
                        <a className="link link-hover footer-link text-card-md">Technologies</a>
                        <a className="link link-hover footer-link text-card-md">Projects</a>
                    </nav>
                    <nav className="flex flex-col items-center lg:items-start">
                        <h6 className="footerHeader-link text-card-md">COMPANY</h6>
                        <a className="link link-hover footer-link text-card-md">About</a>
                        <a className="link link-hover footer-link text-card-md">Contact</a>
                        <a className="link link-hover footer-link text-card-md">Careers</a>
                    </nav>
                    <nav className="flex flex-col items-center lg:items-start">
                        <h6 className="footerHeader-link text-card-md">LEGAL</h6>
                        <a className="link link-hover footer-link text-card-md">Privacy policy</a>
                        <a className="link link-hover footer-link text-card-md">Terms of use</a>
                    </nav>
                </div>

                <div className="border-t border-slate-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-[15px] text-[#94A3B8] text-center">
                        © 2026 Dev Stack. All rights reserved.
                    </p>
                    <div className='flex justify-between gap-5 items-center'>
                        <p className="text-[15px] text-[#94A3B8]">Privacy</p>
                        <p className="text-[15px] text-[#94A3B8]">Terms</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;