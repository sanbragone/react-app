import * as React from "react";
import "./footer.css";

const Footer = () => (
  <div className="text-center text-lg-start bg-light text-muted">
    <section>
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="footer col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Catalogo</h6>
            <p>
              <a href="#" className="text-reset">
                Cremas
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Oleos
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Cuerpo
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Ojos
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Mapa de sitio</h6>
            <p>
              <a href="#" className="text-reset">
                Home
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Catalogo
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Precios
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Contacto
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="text-center p-4">
      © 2022 Copyright
    </div>
  </div>
);

export default Footer;
