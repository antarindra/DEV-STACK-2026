import Foot from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100 pt-12 pb-6 mt-16 text-gray-600">
            <div className="max-w-7xl mx-auto px-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-gray-100">
                   
                    <div className="lg:col-span-2 space-y-4">
                        <img src={Foot} alt="" className="h-7 object-contain" />
                        <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        
                      
                        <div className="flex items-center gap-4 text-xs font-semibold text-gray-700">
                            <a href="https://github.com" className="hover:text-pink-600 transition-colors">
                                GitHub
                            </a>
                            <a href="https://twitter.com"  className="hover:text-pink-600 transition-colors">
                                Twitter
                            </a>
                            <a href="https://linkedin.com"   className="hover:text-pink-600 transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                   
                    <div className="space-y-3">
                        <h3 className="font-bold text-xs  text-gray-900">PRODUCT</h3>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
                        </ul>
                    </div>

                  
                    <div className="space-y-3">
                        <h3 className="font-bold text-xs text-gray-900">COMPANY</h3>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    
                    <div className="space-y-3">
                        <h3 className="font-bold text-xs text-gray-900">LEGAL</h3>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

              
                <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;