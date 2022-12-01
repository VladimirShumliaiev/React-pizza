import React from 'react';
import style from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={style.item}>
            <h1>Нічого не знайдено #404</h1>
            <a href="/">Повернутися на головну сторінку</a>
        </div>
    );
};

export default NotFoundBlock;