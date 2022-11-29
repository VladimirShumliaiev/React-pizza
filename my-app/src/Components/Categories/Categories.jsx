import React, {useState} from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const categoriesList = ["Всі", "М'ясні","Вегетаріанська", "Гриль", "Гострі", "Закриті"]

    return (
        <div className="categories">
            <ul>
                {
                    categoriesList.map((e, index) =>
                        <li key={e} onClick={() => setActiveIndex(index)} className={activeIndex === index ? 'active' : ''}>
                            {e}
                        </li>)
                }
            </ul>
        </div>
    );
};

export default Categories;