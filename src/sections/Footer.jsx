import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row">
          <p className={styles.footer}>Copyright © Hülya Ayar</p>
        </div>
      </div>
    </div>
  );
};
