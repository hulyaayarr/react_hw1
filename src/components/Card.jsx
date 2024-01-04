import styles from "./card.module.scss";
//import * as Icon from "react-bootstrap-icons";

export function Card({ cardIcon, cardTitle, cardStatement }) {
  return (
    <div className="col-12 col-lg-6 col-xxl-4">
      <div className={`${styles["card"]} bg-light text-center pt-5 pb-4 mb-5`}>
        <div
          className={`${styles["card-icon-bg"]} bg-primary bg-gradient text-white rounded-3`}
        >
          <i className={`${cardIcon} ${styles["card-icon"]}`}></i>
        </div>
        <h2 className="fs-4 pt-4">{cardTitle}</h2>
        <p>{cardStatement}</p>
      </div>
    </div>
  );
}
