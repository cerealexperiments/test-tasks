import logo from "../src/assets/logo.jpg";
export default function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <img className="navigation__logo" src={logo} alt="" />
        <a className="navigation__link" href="#">
          Каталог
        </a>
        <a className="navigation__link" href="#">
          Доставка
        </a>
        <a className="navigation__link" href="#">
          Оплата
        </a>
        <a className="navigation__link" href="#">
          Контакты
        </a>
        <a className="navigation__link" href="#">
          О галерее
        </a>
      </nav>
      <div className="searchbar">
        <input
          placeholder="Поиск по названию картины"
          className="searchbar__input"
          type="text"
        />
        <a className="button searchbar__button" href="#">
          Найти
        </a>
      </div>
    </header>
  );
}
