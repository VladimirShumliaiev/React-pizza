import React, {useState} from 'react';

const Categories = () => {
    const [categoriesActive, setCategoriesActive] = useState(0)

    const categoriesList = ["Всі", "М'ясні","Вегетаріанська", "Гриль", "Гострі", "Закриті"]

    return (
        <div className="categories">
            <ul>
                {
                    categoriesList.map((e, i) => <li onClick={() => setCategoriesActive(i)} className={categoriesActive === i ? 'active' : ''}>{e}</li>)
                }
            </ul>
        </div>
    );
};

export default Categories;