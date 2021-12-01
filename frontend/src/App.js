import { Routes, Route } from 'react-router-dom';
import Produkty from './pages/Produkty';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import GlobalStyles from "@mui/material/GlobalStyles";
import Order from './pages/Order';

const App = () => (
  <>
  <GlobalStyles
    styles={{
      body: { backgroundColor: "#f5f5f5" }
    }}
    />
  <Navbar />
  <Routes>
      <Route path="/" element={<Produkty />} />
      <Route path="/kosik" element={<Cart />} />
      <Route path="/objednavka" element={<Order />} />
    </Routes>
  </>
);

export default App;
