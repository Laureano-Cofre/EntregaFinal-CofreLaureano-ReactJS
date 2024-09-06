import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../db/db.js';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  const getProducts = async () => {

    try {
      const productsRef = collection(db, "productos");
      const dataDb = await getDocs(productsRef);
      const data = dataDb.docs.map((productDb) => ({
        id: productDb.id, ...productDb.data(),
      }));
      
      
    setProductos(data);

    } catch (error) {
      console.log(error)
    }
  };

  const getProductsByCategory = async () => {

    try {
      const productsRef = collection(db, "productos");
      const q = query(productsRef, where("categoria", "==", idCategoria));
      const dataDb = await getDocs(q);
  
      const data = dataDb.docs.map((productDb) => ({
        id: productDb.id,...productDb.data(),
      }));
      setProductos(data);

    } catch (error) {
      console.log(error)
    }

  };

  useEffect(() => {
    if (idCategoria) {
      getProductsByCategory(); 
    } else {
      getProducts();
    }
  }, [idCategoria]); 

  return (
    <div className='catalogo'>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
