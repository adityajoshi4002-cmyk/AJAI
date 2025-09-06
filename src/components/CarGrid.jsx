import CarCard from './CarCard';

const CarGrid = ({ cars }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Premium Car Collection
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Discover our handpicked selection of the world&apos;s most prestigious and powerful automobiles, 
          where luxury meets performance in perfect harmony.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarGrid;