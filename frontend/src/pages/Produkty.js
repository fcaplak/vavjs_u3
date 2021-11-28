import Header from "../components/Header";
import Product from "../components/Product";
import { useState, useEffect } from 'react';

const Produkty = () => {
    const [produkty, setProdukty] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/produkty', { method: 'GET' })
            .then(result => result.json())
            .then(result => setProdukty(result))
    }, []);

    return (
        <>
            <Header />
            <Product />
        </>
    );
}
  
export default Produkty;