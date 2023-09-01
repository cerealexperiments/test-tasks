import Header from "./Header.tsx";
import Card from "./Card.tsx";
import pic1 from "../src/assets/pic1.jpg";
import pic2 from "../src/assets/pic2.jpg";
import pic3 from "../src/assets/pic3.jpg";
import pic4 from "../src/assets/pic4.jpg";

type Picture = {
  image: string;
  title: string;
  price: string;
  previousPrice?: string;
  sold?: boolean;
};

const pictures: Picture[] = [
  {
    title: "«Рождение Венеры» Сандро Боттичелли",
    image: pic1,
    price: "1 000 000",
    previousPrice: "2 000 000",
  },
  {
    title: "«Тайная вечеря» Леонардо да Винчи",
    image: pic2,
    price: "3 000 000",
  },
  {
    title: "«Сотворение Адама» Микеланджело",
    image: pic3,
    price: "5 000 000",
    previousPrice: "6 000 000",
  },
  {
    title: "«Урок анатомии» Рембрандт",
    image: pic4,
    price: "5 000 000",
    sold: true,
  },
];

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <Header />
      </div>
      <div className="underline"></div>
      <div className="container pictures">
        <h3 className="pictures__heading">Картины эпохи возрождения</h3>
        <div className="pictures__list">
          {pictures.map((item) => (
            <Card {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
