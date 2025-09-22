import React from 'react'

export default function Service() {
  return (
    <>
  <div>
  {/* ======= Services Section ======= */}
  <section id="services" className="services">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Services</h2>
        <p>Check our Services "unser Flugzeug"</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
          <div className="icon-box">
            <div className="icon"><i className="bx bxl-dribbble" /></div>
            <h4><a href>Airbus A320</a></h4>
            <p>
              Airbus-Verkehrsflugzeuge für kurze Strecken,Der mittlere und bekannteste in der Airbus-Familie
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-file" /></div>
            <h4><a href>Airbus A330</a></h4>
            <p>
              Der Airbus A330 ist ein in Europa hergestelltes, zweistrahliges Mittelstrecken-Passagierflugzeug, das den zweistrahligen Markt dominiert.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-tachometer" /></div>
            <h4><a href>Airbus A380-Super-Jumbo</a></h4>
            <p>
              Es ist das größte Verkehrsflugzeug der Welt, konstruiert vom europäischen Hersteller Airbus, ein Doppeldecker-Flugzeug mit vier Strahltriebwerken, das als „Super Jumbo“ das größte moderne zivile Passagierflugzeug der Welt genannt wird
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-world" /></div>
            <h4><a href>Boeing 737 </a></h4>
            <p>
              Der Bestseller der Welt.und Für Mittel- und Kurzstrecken ist es mit rund 5.000 verkauften Exemplaren das meistverkaufte Flugzeug der Welt, der Erstflug war im April 1967.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-slideshow" /></div>
            <h4><a href>Boeing 787 Dreamliner</a></h4>
            <p>
              Es heißt Traumflugzeug.
              Boeing gab bekannt, dass dieses Flugzeug mit zwei Triebwerken eines der treibstoffeffizientesten Flugzeuge ist, da es 20 % weniger Treibstoff verbraucht als sein Gegenstück.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch" /></div>
            <h4><a href>Boeing 747-Jumbo-Jet</a></h4>
            <p>
              Das von der amerikanischen Firma Boeing hergestellte Flugzeug kippt mit dem "Jumbo Jet", der eines der berühmtesten Verkehrsflugzeuge ist und mit vier Strahltriebwerken betrieben wird,
              Es flog erstmals 1970 und ist nach Volumen das größte Verkehrsflugzeug der Welt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Services Section */}
  {/* ======= Cta Section ======= */}
  <section id="cta" className="cta">
    <div className="container" data-aos="zoom-in">
      <div className="text-center">
        <h3>Call To Action</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <a className="cta-btn" href="#">Call To Action</a>
      </div>
    </div>
  </section>
  {/* End Cta Section */}
</div>

    </>
  )
}
