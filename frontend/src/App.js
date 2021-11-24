import { Routes, Route } from 'react-router-dom';
import Produkty from './pages/Produkty';

const App = () => (
  <Routes>
    <Route path="/produkty" element={<Produkty />} />
  </Routes>
);

export default App;
