import { Car } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-xl shadow-lg">
              <Car className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AJAI
              </h1>
              <p className="text-purple-300 text-sm font-medium">Car Showcase</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#showcase" className="text-purple-200 hover:text-white transition-colors duration-300 font-medium">
              Showcase
            </a>
            <a href="#collection" className="text-purple-200 hover:text-white transition-colors duration-300 font-medium">
              Collection
            </a>
            <a href="#premium" className="text-purple-200 hover:text-white transition-colors duration-300 font-medium">
              Premium
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;