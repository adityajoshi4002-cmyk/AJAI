import { DollarSign, Calendar, Tag } from 'lucide-react';

const CarCard = ({ car }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-purple-500/10 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="absolute top-4 right-4">
          <span className="bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            {car.type}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {car.brand}
          </h3>
          <p className="text-slate-300 text-lg font-medium">
            {car.model}
          </p>
        </div>

        <div className="flex items-center justify-between text-slate-400">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{car.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Tag className="h-4 w-4" />
            <span className="text-sm">{car.type}</span>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-400" />
              <span className="text-2xl font-bold text-green-400">
                {formatPrice(car.price)}
              </span>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;