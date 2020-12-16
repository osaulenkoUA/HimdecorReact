import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productsOperation from '../../redux/products/productsOperation';

import s from './AddProduct.module.css';

function AddArticle() {
  const [group, setGroup] = useState('');
  const [name, setName] = useState('');
  const [fasovka, setFasovka] = useState('');
  const [sklad, setSklad] = useState('');
  const [time, setTime] = useState('');
  const [vutratu, setVutratu] = useState('');
  const [solvent, setSolvent] = useState('');
  const [vudurobit, setVudurobi] = useState('');
  const [vlastuvosti, setVlastuvosti] = useState('');
  const [pidgotovka, setPidgotovka] = useState('');
  const [nanesennya, setNanesennya] = useState('');
  const [urlimage, setUrlImage] = useState('');
  const [buyurl, setBuyUrl] = useState('');
  const [matchurl, setMatchurlUrl] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      group,
      name,
      fasovka,
      sklad,
      time,
      vutratu,
      solvent,
      vudurobit,
      vlastuvosti,
      pidgotovka,
      nanesennya,
      urlimage,
      buyurl,
      matchurl
    };
    console.log(obj);
    dispatch(productsOperation.addProduct(obj));
  }

  return (
    <>
      {!false && (
        <div>
          <h2>ADD PRODUCT</h2>
          <form onSubmit={handleSubmit} className={s.form}>
            <select name="group" onChange={e => setGroup(e.target.value)}>
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
                value={name}
                onChange={e => setName(e.target.value)}
                name="email"
              />
            </label>

            <label className={s.form__label}>
              Фасовка:
              <input
                className={s.form__input}
                type="text"
                value={fasovka}
                onChange={e => setFasovka(e.target.value)}
                name="password"
              />
            </label>
            <label className={s.form__label}>
              Склад:
              <input
                className={s.form__input}
                type="text"
                value={sklad}
                onChange={e => setSklad(e.target.value)}
                name="password"
              />
            </label>
            <label className={s.form__label}>
              Час висихання:
              <input
                className={s.form__input}
                type="text"
                value={time}
                onChange={e => setTime(e.target.value)}
                name="password"
              />
            </label>
            <label className={s.form__label}>
              Витрати:
              <input
                className={s.form__input}
                type="text"
                value={vutratu}
                onChange={e => setVutratu(e.target.value)}
                name="password"
              />
            </label>
            <label className={s.form__label}>
              Розчинник:
              <input
                className={s.form__input}
                type="text"
                value={solvent}
                onChange={e => setSolvent(e.target.value)}
                name="password"
              />
            </label>
            <label className={s.form__label}>
              Види робіт:
              <input
                className={s.form__input}
                type="text"
                value={vudurobit}
                onChange={e => setVudurobi(e.target.value)}
                name="password"
              />
            </label>
            <label className={s.form__label}>
              URL IMAGE
              <input
                className={s.form__input}
                type="text"
                value={urlimage}
                onChange={e => setUrlImage(e.target.value)}
                name="password"
              />
            </label>
            <label className={s.form__label}>
              Властивості:
              <textarea
                onChange={e => setVlastuvosti(e.target.value)}
                rows="8"
                cols="85"
                name="vlastuvosti"
              ></textarea>
            </label>
            <label className={s.form__label}>
              Нанесення:
              <textarea
                onChange={e => setNanesennya(e.target.value)}
                rows="8"
                cols="85"
                name="nanesennya"
              ></textarea>
            </label>

            <label className={s.form__label}>
              Підготовка:
              <textarea  onChange={e => setPidgotovka(e.target.value)} rows="8" cols="85" name="pidgotovka"></textarea>
            </label>
            <label className={s.form__label}>
              Посилання ДЕ купити:
              <input
                className={s.form__input}
                type="text"
                value={buyurl}
                onChange={e => setBuyUrl(e.target.value)}
                name="buyUrl"
              />
            </label>
            <label className={s.form__label}>
             Match URL:
              <input
                className={s.form__input}
                type="text"
                value={matchurl}
                onChange={e => setMatchurlUrl(e.target.value)}
                name="buyUrl"
              />
            </label>

            <button type="submit" className={s.form__btn}>
              Добавити продукт
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default AddArticle;
