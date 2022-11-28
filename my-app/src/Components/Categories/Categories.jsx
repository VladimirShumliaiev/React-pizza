import React, {useState} from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {
                    categoriesList.map((e,index) => <li onClick={() => setActiveIndex(index)} className={activeIndex === index ? 'active' : ''}>{e}</li>)
                }
            </ul>
        </div>
    );
};

export default Categories;