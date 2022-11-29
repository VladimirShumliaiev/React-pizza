import React from "react";
import './scss/app.scss'
import Header from "./Components/Header";
import Categories from "./Components/Categories/Categories";
import Sort from "./Components/Sort";
import PizzaBlock from "./Components/PizzaBlock/PizzaBlock";
import pizzas from './assets/pizza.json'

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
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
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
                    </div>
                </div>
            </div>
        </div>);
}

export default App;
