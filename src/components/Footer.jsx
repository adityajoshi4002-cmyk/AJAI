import { Car, Heart, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-xl shadow-lg">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  AJAI
                </h3>
                <p className="text-purple-300 text-sm font-medium">Car Showcase</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Experience the pinnacle of automotive excellence. Our curated collection showcases the world&apos;s 
              most prestigious supercars, luxury vehicles, and high-performance machines.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Showcase</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Collection</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Premium</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">About</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Supercars</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Sports Cars</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Luxury</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Hypercars</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 AJAI Car Showcase. All rights reserved.
          </p>
          <div className="flex items-center text-slate-400 text-sm">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for car enthusiasts
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;