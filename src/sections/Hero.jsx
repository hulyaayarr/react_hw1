import styles from "./hero.module.scss";
export const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <div className={`${styles["hero-content"]} bg-light`}>
            <div className="row">
              <h1 className={`${styles["big-heading"]} display-5`}>
                A warm welcome!
              </h1>
              <p className={`${styles["hero-paragraph "]} fs-4`}>
                Welcome to our real estate website, where exceptional properties
                meet extraordinary living experiences. Discover a world of
                possibilities with our diverse range of properties that cater to
                your unique needs.
              </p>
              <div>
                <a
                  className={`${styles["hero-button"]} btn btn-primary`}
                  href=""
                >
                  See Opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
