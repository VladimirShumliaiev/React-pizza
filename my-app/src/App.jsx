import React from "react";
import './scss/app.scss'
import Header from "./Components/Header";
import Categories from "./Components/Categories/Categories";
import Sort from "./Components/Sort";
import PizzaBlockCell from "./Components/PizzaBlock/PizzaBlockCell";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Усі піци</h2>
                    <div className="content__items">
                       <PizzaBlockCell/>
                    </div>
                </div>
            </div>
        </div>);
}

export default App;
