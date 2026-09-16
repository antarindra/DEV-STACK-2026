import { useState } from 'react';
import Logo from '../assets/logo-text.png';
import { GiHamburgerMenu } from 'react-icons/gi';


const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100 w-full">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                
               
                <div className="flex items-center md:hidden">
                    <button 
                        onClick={() => setIsMobile(!isMobile)} 
                        className="text-gray-700 hover:text-black focus:outline-none p-1 text-2xl"
                    >
                        
                        {isMobile!==true?<GiHamburgerMenu />:null}
                    </button>
                </div>

                
                <div className="flex items-center justify-center md:justify-start flex-1 md:flex-none">
                    <img src={Logo} alt="DevStack Logo" className="h-7 object-contain cursor-pointer" />
                </div>

                <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <li className="text-pink-600 font-semibold cursor-pointer">Home</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Technologies</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Projects</li>
                    <li className="hover:text-black cursor-pointer transition-colors">About</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Contact</li>
                </ul>

               
                <div className="flex items-center gap-3 md:gap-4">
                    <button className="text-gray-600 hover:text-black text-xs md:text-sm font-medium cursor-pointer transition-colors">
                        Sign in
                    </button>
                    <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 text-white px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all shadow-xs cursor-pointer">
                        Sign up
                    </button>
                </div>
            </div>

           
            {isMobile && (
                <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 shadow-lg">
                    <ul className="flex flex-col gap-3 text-sm font-medium text-gray-700">
                        <li className="text-pink-600 font-semibold cursor-pointer">Home</li>
                        <li className="hover:text-black cursor-pointer">Technologies</li>
                        <li className="hover:text-black cursor-pointer">Projects</li>
                        <li className="hover:text-black cursor-pointer">About</li>
                        <li className="hover:text-black cursor-pointer">Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;