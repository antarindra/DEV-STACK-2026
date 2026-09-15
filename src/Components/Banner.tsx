import Ban from '../assets/banner-stack.png'

const Banner = () => {
    return (
<header className="w-full bg-white py-12 md:py-20">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse md:flex-row justify-between items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
                   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Build Your Ideal <br className="hidden sm:inline" />
               <span className="bg-gradient-to-r from-[#FF5E3A] via-[#FF2A6D] to-[#9000FF] bg-clip-text text-transparent">Development Stack</span> 
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">Explore frontend, backend, database, and tooling options,
             compare them side by side, and put together the stack that fits your
             next project.</p>
             <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2">
                <button 
                className="bg-gradient-to-r from-[#FF5E3A] via-[#FF2A6D] to-[#E91E63]  text-white font-medium px-6 py-3 rounded-xl cursor-pointer shadow-sm">
                    Explore Technologies
                </button>
                <button className="bg-white  text-gray-700 font-medium px-6 py-3 rounded-xl border border-gray-200  cursor-pointer">Learn More</button>
             </div>
            </div>

           
            <div className="flex-1 flex justify-center md:justify-end"> 

            <img
             src={Ban} alt=""
              className="w-full max-w-[500px] lg:max-w-[580px] h-auto object-contain" />
        </div>
        
           
    </div>
        
       </header>
       
    );
};

export default Banner;