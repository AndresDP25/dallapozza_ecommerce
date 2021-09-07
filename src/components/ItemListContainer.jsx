import ItemCount from "./ItemCount";

export function ItemListContainer({saludos,nombre, apellido}) {

    

    return (
        <div className="container mt-5 bg-dark text-white-50 text-center">
            <h3 className="p-3">{saludos} {nombre} {apellido}?</h3>

            <ItemCount/>
        </div>

        
    )
}


