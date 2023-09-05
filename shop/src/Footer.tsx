import logo from "../src/assets/logo.jpg";
import phone from "../src/assets/phone.svg"
import address from "../src/assets/address.svg"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <nav className="navigation">
          <img className="navigation__logo" src={logo} alt=""/>
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
        <div className="info-container">
          <div className="info-element">
            <img className="info-element__icon" src={phone} alt="phone logo"/>
            <span className="info-element__text">+7 (495) 555-55-55</span>
          </div>
          <div className="info-element">
            <img className="info-element__icon" src={address} alt="phone logo"/>
            <span className="info-element__text">г. Москва, ул. Расплетина, 24</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
