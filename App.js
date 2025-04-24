import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Diensten from './pages/Diensten';
import Afspraak from './pages/Afspraak';
import Contact from './pages/Contact';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> | <Link to="/diensten">Diensten</Link> | <Link to="/afspraak">Afspraak maken</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/afspraak" element={<Afspraak />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;