import React from 'react';
import PizzaBlock from "./PizzaBlock";
import pizzas from "../../assets/pizza.json";

const PizzaBlockCell = () => {
    return (
        <>
            {
                pizzas.map(obj =>
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