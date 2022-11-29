import React from 'react';
import PizzaBlock from "./PizzaBlock";

const PizzaBlockCell = () => {
    return (
        <div>
            <PizzaBlock title={'Mexico'} price={500}/>
        </div>
    );
};

export default PizzaBlockCell;