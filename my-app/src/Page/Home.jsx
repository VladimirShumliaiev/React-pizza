import React from 'react';
import Categories from "../Components/Categories/Categories";
import Sort from "../Components/Sort";
import PizzaBlockCell from "../Components/PizzaBlock/PizzaBlockCell";

const Home = () => {
    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Усі піци</h2>
            <div className="content__items">
                <PizzaBlockCell/>
            </div>
        </>
    );
};

export default Home;