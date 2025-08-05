import _ from 'underscore';
import {
  crearDeck,
  pedirCarta,
  sumarPuntos,
  crearCarta,
  turnoMaquina,
} from './usecases';
const modulo = (() => {
  'use strict';
  // Variables
  let deck = [];
  const types = ['C', 'D', 'H', 'S'],
    specialCards = ['A', 'J', 'Q', 'K'];
  let puntosJugadores = [];

  // Referencias al HTML
  const btnNuevo = document.querySelector('#btnNuevo'),
    btnPedir = document.querySelector('#btnPedir'),
    btnPlantarse = document.querySelector('#btnPlantarse');

  const marcadores = document.querySelectorAll('small'),
    divCartasJugadores = document.querySelectorAll('.divCartas');

  //Funcion para empezar el juego

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(types, specialCards);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
    marcadores.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ''));
    btnPedir.disabled = false;
    btnPlantarse.disabled = false;
  };

  //Eventos

  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador1 = sumarPuntos(carta, 0, puntosJugadores, marcadores);
    crearCarta(carta, 0, divCartasJugadores);

    if (puntosJugador1 > 21) {
      btnPedir.disabled = true;
      btnPlantarse.disabled = true;
      turnoMaquina(
        puntosJugador1,
        puntosJugadores,
        deck,
        marcadores,
        divCartasJugadores
      );
    } else if (puntosJugador1 === 21) {
      turnoMaquina(
        puntosJugador1,
        puntosJugadores,
        deck,
        marcadores,
        divCartasJugadores
      );
      btnPedir.disabled = true;
      btnPlantarse.disabled = true;
    }
  });

  btnPlantarse.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnPlantarse.disabled = true;
    turnoMaquina(
      puntosJugadores[0],
      puntosJugadores,
      deck,
      marcadores,
      divCartasJugadores
    );
  });

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
