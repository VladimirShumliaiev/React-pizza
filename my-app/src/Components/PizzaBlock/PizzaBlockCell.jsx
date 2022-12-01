import React, {useEffect, useState} from 'react';
import PizzaBlock from "./PizzaBlock";
import Skeleton from "./Skeleton";


const PizzaBlockCell = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://638860bcd94a7e504099aa37.mockapi.io/items')
            .then((response) => {
                return response.json()
            })
            .then((arr) => {
                setItem(arr)
                setIsLoading(false)
            })

    }, [])

    return (
        <>
            {
                isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
                    : item.map((e) => <PizzaBlock key={e} {...e}/>)
            }
        </>
    );
};

export default PizzaBlockCell;