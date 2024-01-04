import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <div className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <p className="navbar-brand text-white my-0 mb-1">Real Estate</p>

              <div className="d-flex justify-content-end">
                <button
                  className={`${styles["navbar-button"]} navbar-toggler`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span
                    className={`${styles["navbar-button-icon"]} navbar-toggler-icon`}
                  ></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ">
                    <li className="nav-item ">
                      <a
                        href="#"
                        className="nav-link text-white active"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white-50 " href="#">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white-50 " href="#">
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
