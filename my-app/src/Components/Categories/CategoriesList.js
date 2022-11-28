import React from 'react';
import Categories from "./Categories";

const CategoriesList = () => {
    const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    return (
        <div>
            {
                categoriesList.map((e) => <Categories {...e}/>)
            }
        </div>
    );
};

export default CategoriesList;
