import {useEffect, useState} from "react";

type CardProps = {
  image: string;
  title: string;
  price: string;
  previousPrice?: string;
  sold?: boolean;
};

async function makeRequest() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  if(response.ok) {
    return true;
  } else {
    throw new Error("idc")
  }
}

export default function Card({
  image,
  title,
  price,
  previousPrice,
  sold = false,
}: CardProps) {
  const [loading, setLoading] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [inCart, setInCart] = useState(false)

  useEffect(() => {
    if(clicked) {
      setLoading(true)
      makeRequest().then(() => {
        setLoading(false);
        setInCart(true)
      })
    }
  }, [clicked])

  return (
    <div className={`card ${sold ? "card--sold" : ""}`}>
      <img src={image} alt="card image" className="card__image" />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <div className="card__bottom">
          {sold ? (
            <p>Продана на аукционе</p>
          ) : (
            <>
              <div className="card__prices-container">
                {previousPrice && (
                  <span className="card__previous-price">
                    {previousPrice} $
                  </span>
                )}
                <span className="card__price">{price} $</span>
              </div>
              <button onClick={() => setClicked(true)} className="button card__button">
                {loading ? "loader" : inCart ? "В корзине" : "Купить"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
