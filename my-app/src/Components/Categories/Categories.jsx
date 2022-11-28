import React from 'react';

const Categories = () => {
    const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    return (
        <div className="categories">
            <ul>
                {
                    categoriesList.map(e => <li className={'active'}>{e}</li>)
                }
            </ul>
        </div>
    );
};

export default Categories;