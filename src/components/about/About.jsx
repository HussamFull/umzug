import React from 'react'

export default function About() {
  return (
    <>
      <section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
        <img src="assets/img/about.jpg" className="img-fluid" alt />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay={100}>
        <h3>„FlyHigh“</h3>
        <p className="fst-italic">
          Auftrag: Wir brauchen für unser Privatflugzeug Vermietung eine
          Datenbank wo alle Flugzeuge, Piloten, Flugbegleiter und Gehälter
          Verwaltet werden.
        </p>
        <ul>
          <li>
            <i className="ri-check-double-line" /> Zudem benötigen wir eine
            Übersicht aller unserer Flugzeuge, die zurzeit vermietet sind.
          </li>
          <li>
            <i className="ri-check-double-line" /> Zu jedem Flugzeug
            brauchen wir eine Übersicht zum Modell und zu Möglichen
            Ausstattung, die verfügbar sind.
          </li>
          <li>
            <i className="ri-check-double-line" /> ZU den angestellten
            benötigen wir eine Übersicht mit den Namen, Adressen,
            Gehältern, und dem zugeteilten Flugzeug gespeichert werden.
          </li>
          <li>
            <i className="ri-check-double-line" /> Zum Kunden benötigen wir
            allgemeine Informationen(Kontaktinformationen) für Werbezwecke
            und Käufe.
          </li>
        </ul>
        <br />
        Mitglieder: Hussam Alnabelsi, Malaz Almallah, Ronja Lauhues
        <br />Ansprechpartner: Ronja Lauhues <br />
        <p />
      </div>
    </div>
  </div>
</section>

    <div>

  {/* ======= Features Section ======= */}
  <section id="features" className="features">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="image col-lg-6" style={{backgroundImage: 'url("assets/img/features.jpg")'}} data-aos="fade-right" />
        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
          <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-receipt" />
            <h4>Est labore ad</h4>
            <p>
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
              laboris nisi ut aliquip
            </p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-cube-alt" />
            <h4>Harum esse qui</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt
            </p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-images" />
            <h4>Aut occaecati</h4>
            <p>
              Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
              maiores omnis facere
            </p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-shield" />
            <h4>Beatae veritatis</h4>
            <p>
              Expedita veritatis consequuntur nihil tempore laudantium vitae
              denat pacta
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Features Section */}
</div>

    </>
  )
}
