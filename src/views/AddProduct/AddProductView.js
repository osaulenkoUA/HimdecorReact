import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import s from './AddProduct.module.css';
import productsOperation from "../../redux/products/productsOperation";


function AddArticle() {

    const [inputs, setInputs] = useState([1]);


    const isAdded = useSelector(state => state.product.isAdded);


    const dispatch = useDispatch();

    function handleSubmit(e) {
        window.scrollTo({top: 0,});
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        let objectWithFields = {};
        for (let [key, value] of data.entries()) {
            if (key === "weight" || key === "price") continue;
            const current = {[key]: value};
            objectWithFields = Object.assign(objectWithFields, current)
        }
        const arrW = data.getAll('weight');
        const arrP = data.getAll("price");

        const features = arrW.map((el, idx) => {
            return {
                weight: el,
                price: arrP[idx]
            }
        })
        const objForDispath = {...objectWithFields, features}
        dispatch(productsOperation.addProduct(objForDispath));

    }


    if (isAdded) {
        alert('ТОАВАР ДОБАВЛЕНИЙ');
        window.location.reload();
    }
    return (

        <div>
            <h2>Добавити продукт - Адмін ДЕМО Панель</h2>
            <form onSubmit={handleSubmit} className={s.form}>
                <select  className={s.select} name="group">
                    <option value="0">Вибрати ГРУПУ:</option>
                    <option value="клей-пва">клей-пва</option>
                    <option value="інтерєрні-фарби">інтерєрні-фарби</option>
                    <option value="фасадні-фарби">фасадні-фарби</option>
                    <option value="грунтівка">грунтівка</option>
                    <option value="декоративні-фарби">декоративні-фарби</option>
                    <option value="лаки-акрилові">лаки-акрилові</option>
                    <option value="шпатлівки-по-дереву">шпатлівки-по-дереву</option>
                    <option value="декоративні-штукатурки">декоративні-штукатурки</option>
                </select>

                <label className={s.form__label}>
                    Назва:
                    <input
                        className={s.form__input}
                        type="text"
                        name="name"
                    />
                </label>


                <div className={s.second}>
                    <div className={s.row}>
                        {inputs.map((el, idx) => (
                            <div className={s.priceWeight}>

                                <label className={s.form__label}>
                                    Фасовка:
                                    <input
                                        data-idx={idx}
                                        className={s.form__input}
                                        type="text"
                                        name="weight"
                                        placeholder={"КГ - Л - ШТ"}

                                    />
                                </label>

                                <label className={s.form__label}>
                                    Ціна:
                                    <input
                                        data-idx={idx}
                                        className={s.form__input}
                                        type="text"
                                        name="price"
                                        placeholder={"ОПЦІОНАЛЬНО"}
                                    />
                                </label>


                            </div>
                        ))}
                        <button type="button" onClick={() => setInputs(prevState => [...prevState, 1])}>+</button>
                    </div>

                </div>


                <label className={s.form__label}>
                    Склад:
                    <input
                        className={s.form__input}
                        type="text"
                        name="sklad"
                    />
                </label>
                <label className={s.form__label}>
                    Час висихання:
                    <input
                        className={s.form__input}
                        type="text"
                        name="time"
                    />
                </label>
                <label className={s.form__label}>
                    Витрати:
                    <input
                        className={s.form__input}
                        type="text"
                        name="vutratu"
                    />
                </label>
                <label className={s.form__label}>
                    Розчинник:
                    <input
                        className={s.form__input}
                        type="text"
                        name="solvent"
                    />
                </label>
                <label className={s.form__label}>
                    Види робіт:
                    <input
                        className={s.form__input}
                        type="text"
                        name="vudurobit"
                    />
                </label>
                <label className={s.form__label}>
                    Name images
                    <input
                        className={s.form__input}
                        type="text"
                        name="urlimage"
                        placeholder={"З прайсу беремо артикль"}
                    />
                </label>
                <label className={s.form__label}>
                    Властивості:
                    <textarea
                        rows="8"
                        cols="85"
                        name="vlastuvosti"
                    />
                </label>
                <label className={s.form__label}>
                    Нанесення:
                    <textarea
                        rows="8"
                        cols="85"
                        name="nanesennya"
                    />
                </label>

                <label className={s.form__label}>
                    Підготовка:
                    <textarea
                        rows="8" cols="85"
                        name="pidgotovka"/>
                </label>
                <label className={s.form__label}>
                    Посилання ДЕ купити:
                    <input
                        className={s.form__input}
                        type="text"
                        name="buyUrl"
                        placeholder={"Втавляємо посилання з zakraska.com.ua"}
                    />
                </label>
                {/*<label className={s.form__label}>*/}
                {/*    Match URL:*/}
                {/*    <input*/}
                {/*        className={s.form__input}*/}
                {/*        type="text"*/}
                {/*        name="matchurl"*/}
                {/*    />*/}
                {/*</label>*/}

                <button type="submit" className={s.form__btn}>
                    Добавити продукт
                </button>
            </form>
        </div>
    )
        ;
}

export default AddArticle;
