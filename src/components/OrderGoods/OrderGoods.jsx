import { Count } from "../Count/Count";

export const OrdeerGoods = () => (
  <li className="order__item">
    <img className="order__image" src="img/burger_1.jpg" alt="Супер сырный" />

    <div className="goods">
      <h3 className="goods__title">Супер сырный</h3>

      <p className="goods__weight">512г</p>

      <p className="goods__price">
        1279
        <span className="currency">₽</span>
      </p>
    </div>

    <Count />
  </li>
);
