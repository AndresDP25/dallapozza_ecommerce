import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from '../../services/getFirebase';
import './ItemDetailContainer.css';



const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if(id){
      
      const dbQuery = getFirestore()
      dbQuery.collection('items').doc(id).get()
      .then(resp => { 
        setItem({id: resp.id, ...resp.data()})
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      const dbQuery = getFirestore()
      dbQuery.collection('items').doc(id).get()
      .then(resp =>{
        setItem({id: resp.id, ...resp.data()})
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
  }, [id]);
  // console.log(item)
  return (
    <>
      <div className="container mt-5 text-danger text-center">
        {loading ? (
          <h2 className="itemDetailStyle">Cargando...</h2>
        ) : (
          <ItemDetail key={item} item={item} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;




