import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-xs border-b border-gray-100 w-full">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">


      <img src={Logo} alt="" />

      <ul className="flex justify-between gap-4 items-center">
     
        <li className="text-red-700">Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>

        </ul>
        <div className="flex items-center gap-6">
        <button className='text-gray-600 hover:text-black font-normal cursor-pointer'>Sign in</button>
        <button className="bg-[#E91E63] hover:bg-[#d81b60] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer">Sign up</button>
        </div>
      </div>

      

      </nav>
    );
};

export default Nav;