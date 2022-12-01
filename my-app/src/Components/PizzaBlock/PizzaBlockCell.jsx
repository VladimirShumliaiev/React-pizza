import React, {useEffect, useState} from 'react';
import PizzaBlock from "./PizzaBlock";


const PizzaBlockCell = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('https://638860bcd94a7e504099aa37.mockapi.io/items')
            .then((response) => {
                return response.json()
            })
            .then((arr) => {
                setItem(arr)
            })
    },[])

    return (
        <>
            {
                item.map(obj =>
                    <PizzaBlock key={obj.id}
                                imageUrl={obj.imageUrl}
                                title={obj.name}
                                price={obj.price}
                                sizes={obj.sizes}
                                types={obj.types}
                    />)
            }
        </>
    );
};

export default PizzaBlockCell;