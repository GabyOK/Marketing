import React from "react";
import Foto from "../fotos/foto1.png";
import Instagram from "../fotos/instagram.png";
import Tiktok from "../fotos/tiktok.png";
import Facebook from "../fotos/facebook.png";
import Whatsapp from "../fotos/whatsap.png";
import Cejas from "../fotos/cejas3.png";
import Henna from "../fotos/henna.png";
import Pestañas from "../fotos/pestañas.png";
import Microblading from "../fotos/microblading.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <img className="img" src={Foto} width="150px" alt="estilista" />
      <h3>@Beauty Style</h3>
      <h4>Aprende todo sobre cosmética y ultimas tendencias de belleza</h4>
      <br />
      <div className="container-link">
        <a href="https://www.instagram.com/beuty.style.online/">
          <img src={Instagram} alt="" />
        </a>
        <a href="https://www.tiktok.com/@cursosbeutystyle?is_from_webapp=1&sender_device=pc">
          <img src={Tiktok} alt="" />
        </a>
        <a href="https://www.facebook.com/BeautyStylesgirls/">
          <img src={Facebook} alt="" />
        </a>
      </div>{" "}
      <br />
      <div className="container-curso">
        <a href="https://www.instagram.com/beuty.style.online/">
          <h4>Siguenos tambien en TIKTOK</h4>
          <h5>Se te agradece por el apoyo ♥</h5>
        </a>
      </div>
      <div className="container-curso">
        <img className="img" src={Henna} width="120px" alt="estilista" />
        <h4>Curso de Pigmentacion de cejas con henna</h4>
        <a href="https://pay.hotmart.com/H62161966Y?off=f7ji1l7n&checkoutMode=10&offDiscount=ESPECIAL83OFF&ref=T77703701A&bid=1671762526333">
          <h5>👉Haz click aqui</h5>
        </a>
      </div>
      <br />
      <div className="container-curso">
        <img className="img" src={Pestañas} width="90px" alt="estilista" />
        <h4>Lifting de Pestañas,Laminado de Cejas y Pestañas pelo a pelo,</h4>
        <a href="https://go.hotmart.com/Y71891771N?ap=5a30">
          <h5>👉Haz click aqui</h5>
        </a>
      </div>
      <br />
      <div className="container-curso">
        <img className="img" src={Microblading} width="100px" alt="estilista" />
        <h4>Especialista en Microblading de Cejas 2.0</h4>
        <a href="https://go.hotmart.com/G77704509G?ap=ef46">
          <h5>👉Haz click aqui</h5>
        </a>
      </div>
      <br />
      <div className="container-curso">
        <img className="img" src={Cejas} width="100px" alt="estilista" />
        <h4>Diseño y Perfilado + Tintura y Henna + Microblandig de Cejas</h4>
        <a href="https://go.hotmart.com/F77704218Q?ap=120f">
          <h5>👉 Haz click aqui</h5>
        </a>
      </div>
      <br />
      <div className="container-curso">
        <a href="https://wa.link/qnptc0">
          <img src={Whatsapp} alt="" />

          <h4>¿Tienes dudas sobre los Cursos Online?Escribeme por Whatsapp</h4>
        </a>
      </div>
      <br />
      <div className="container-curso">
        <h5>
          ¡ATENCION! Sentimos mucho, si eres de Venezuela, Nicaragua y Cuba,
          nuestra plataforma no funciona por acuerdos internacionales. Esperamos
          en un futuro poder trabajar contigo, fue un placer...
        </h5>
      </div>
    </div>
  );
};

export default Contact;
