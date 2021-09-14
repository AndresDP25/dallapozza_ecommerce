


const ItemDetail = ({item}) => {
    return ( 
        <>
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
            <h2>{item.description}</h2>
            <h2>{item.img}</h2>
            <h2>{item.stock}</h2>
        </>
     );
}
 
export default ItemDetail;