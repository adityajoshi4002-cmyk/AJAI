import Header from './components/Header';
import CarGrid from './components/CarGrid';
import Footer from './components/Footer';
import { cars } from './data/cars';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <main id="showcase">
        <CarGrid cars={cars} />
      </main>
      <Footer />
    </div>
  );
}

export default App;