
 function Partido (JugadoresPartido) {
  let TAmarillas = 0;
  let TRojas = 0;
  let Tiros = 0;
  let PasesDeGolxT90 = 0;
  let GenJuego = 0;
  let MultipRival = 0;
  let GolesXPosicion = 0;

Object.keys(JugadoresPartido).forEach(key => {
  TAmarillas += parseFloat(JugadoresPartido[key].Amarillas);
  TRojas += parseFloat(JugadoresPartido[key].Rojas);
  Tiros += parseFloat(JugadoresPartido[key].Tirosx90);
  PasesDeGolxT90 += parseFloat(JugadoresPartido[key].PasesDeGolxT90);
  GolesXPosicion += parseFloat(JugadoresPartido[key].Golesx90);
  GenJuego += (((parseFloat(JugadoresPartido[key].GolesExpPorPosesion)*0.80)+(parseFloat(JugadoresPartido[key].GolesExpPorPosesionSinPasOTir)*0.20))*(parseFloat(JugadoresPartido[key].GolesExpPorPosesion90)));
  MultipRival += parseFloat(JugadoresPartido[key].GolesExpPorPosesionSinPasOTir90);
  })

 console.log(`Amarillas previstas: ${((TAmarillas*0.65)/11).toFixed(3)}`);
 console.log(`Rojas previstas: ${(TRojas/11).toFixed(3)}`);
 console.log(`Tiros previstos totales: ${Tiros}`);
 console.log(`Pases que acaban en tiro a puerta: ${PasesDeGolxT90}`);
 console.log(`Goles por 11 en juego: ${GolesXPosicion.toFixed(3)}`);
 console.log(`Media de juego generado: ${(GenJuego/11).toFixed(5)}`);
 console.log(`Multiplicador rival: ${(MultipRival/11).toFixed(5)}`);

};


export {Partido};
