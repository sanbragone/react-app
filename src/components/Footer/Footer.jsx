import * as React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer text-center text-lg-start bg-light text-muted">
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Categorías</h6>
              <p>
                <Link to="/category/rostro/" className="text-reset">
                  Rostro
                </Link>
              </p>
              <p>
                <Link to="/category/cuerpo/" className="text-reset">
                  Cuerpo
                </Link>
              </p>
              <p>
                <Link to="/category/manos/" className="text-reset">
                  Manos
                </Link>
              </p>
              <p>
                <Link to="/category/bano/" className="text-reset">
                  Baño
                </Link>
              </p>
              <p>
                <Link to="/category/noche/" className="text-reset">
                  Noche
                </Link>
              </p>
              <p>
                <Link to="/category/cabello/" className="text-reset">
                  Cabello
                </Link>
              </p>
              <p>
                <Link to="/category/exterior/" className="text-reset">
                  Exterior
                </Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Mapa de sitio</h6>
              <p>
                <Link to="./" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Catalogo
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Precios
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Contacto
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">Cremanía © 2022 Copyright</div>
    </div>
  );
}

export default Footer;
