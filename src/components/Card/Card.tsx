import { Modal } from "../Modal/Modal";
import { useState } from "react";
import "./Card.css";

type CardProps = {
  title: string;
  time: string;
  preparation: [];
  ingredients: JSX.Element[];
};

export const Card = (props: CardProps) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="card">
      <Modal
        modal={modal}
        setModal={setModal}
        preparation={props.preparation}
      />
      <h4 className="card-title">{props.title}</h4>
      <p className="card-time">{props.time}</p>
      <img
        className="card-img"
        src={require(`../../assets/images/${props.title}.png`)}
        alt={props.title}
      />
      <ul className="card-ingredients">{props.ingredients}</ul>
      <button className="card-link" onClick={() => setModal(!modal)}>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.72222 20C2.11111 20 1.58778 19.7826 1.15222 19.3478C0.717407 18.9122 0.5 18.3889 0.5 17.7778V2.22222C0.5 1.61111 0.717407 1.08778 1.15222 0.652222C1.58778 0.217407 2.11111 0 2.72222 0H10.5V2.22222H2.72222V17.7778H18.2778V10H20.5V17.7778C20.5 18.3889 20.2826 18.9122 19.8478 19.3478C19.4122 19.7826 18.8889 20 18.2778 20H2.72222ZM7.94444 14.1111L6.38889 12.5556L16.7222 2.22222H12.7222V0H20.5V7.77778H18.2778V3.77778L7.94444 14.1111Z"
            fill="black"
            fillOpacity="0.6"
          />
        </svg>
      </button>
    </div>
  );
};
