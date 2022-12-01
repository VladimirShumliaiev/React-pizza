import React from "react";
import './scss/app.scss'
import Header from "./Components/Header";
import Home from "./Page/Home";
import NotFound from "./Page/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./Page/Cart";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/Cart'} element={<Cart/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>);
}

export default App;
