import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false, // quand false, on peut lancer une anim
  });

  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      // si on n'a pas atteint la limite du diapo
      console.log("next");
      setSlideAnim({
        index: slideAnim.index + 1,
        inProgress: true,
      });

      setTimeout(() => {
        // f qui permet de prevenir le spam
        setSlideAnim({
          index: slideAnim.index + 1, //setTimeout est instancié au state précédent avant d'avoir incrémenté index
          inProgress: false,
        });
      }, 400);
    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      // si on est à la dernière photo
      setSlideAnim({
        index: 1, // on revient au début
        inProgress: true,
      });

      setTimeout(() => {
        setSlideAnim({
          index: 1,
          inProgress: false,
        });
      }, 400);
    }
  };

  const prevSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      // si on n'est pas au début
      setSlideAnim({
        index: slideAnim.index - 1,
        inProgress: true,
      });

      setTimeout(() => {
        setSlideAnim({
          index: slideAnim.index - 1,
          inProgress: false,
        });
      }, 400);
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      // si on est au début

      setSlideAnim({
        index: dataSlider.length,
        inProgress: true,
      });

      setTimeout(() => {
        setSlideAnim({
          index: dataSlider.length,
          inProgress: false,
        });
      }, 400);
    }
  };


  const moveDot = index =>{
    setSlideAnim({
        index: index,
        inProgress: false,
      });
  }
  return (
    <div className='slider-component' >
          <div className="container-slider">
      {dataSlider.map((obj, index) => {
        {
          /* index correspond à l'index des élément parcouru avec map et commence à 0 */
        }
        return (
          
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
                        <h2 style={{textAlign:'center',margin:'3rem 0' }}>Mes derniers clichés</h2>

            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt=""
            />
            {/*
                         '/' permet de faire ref à la racine (=public) en mode devt
                        Pour que le chemin soit ok en prode également, il faut ajouter process.env.PUBLIC_URL (=URL du site final)
                        */}
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }) //crée un tab de 5 obj undefined
          .map((item, index) => {
            return (
              <button
                className={slideAnim.index === index + 1 ? "dot active" : "dot"}
                onClick={()=> moveDot(index+1)} /* Ds un evt, qd on veut utiliser une f avec des arg, il faut l'encapsuler dans une f anonyme sinon elle se déclenche dès que le compo est appelé */
              ></button>
            );
          })}
      </div>
    </div>

    </div>
  );
}
