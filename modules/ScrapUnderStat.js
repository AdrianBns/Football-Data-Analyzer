
import puppeteer from "puppeteer";
import puppeteerpt from "puppeteer-core";

async function ScrapData(url){

  const browser = await puppeteer.launch();
// Accedemos a la web
  const page = await browser.newPage();
  await page.goto(url);

// Declaramos selectores
  const Selectors = ['#team-players > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)',
  '#team-players > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2)',
  '#team-players > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(14) > div:nth-child(2)',
  '#team-players > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(15) > div:nth-child(2)',
  '#team-players > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(21) > div:nth-child(2)',
  '#team-players > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(22) > div:nth-child(2)',
  '#team-players > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(23) > div:nth-child(2)',
  '#team-players > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(24) > div:nth-child(2)'
  ]
// Captura para previsualizar

// Tomamos dónde está la tabla con nuestros datos
  await page.waitForSelector('#team-players');
  const sort = await page.$x('//div[@id="team-players"]//table//thead//tr//th[2]', {delay:1000});
  await sort[0].click();

// Abrimos menú de opciones y clicamos las que necesitamos
  await page.click('#team-players .options-button');


  await page.evaluate(() => {
    const container = document.querySelector('.table-popup .table-popup-body')
    container.scrollBy(1, container.scrollHeight);
  });


// Usamos selectores para clicar en las opciones que queremos de la web

  await page.click(Selectors[0]);
  await page.click(Selectors[1]);

  await page.waitForSelector(Selectors[2], Selectors[3]);
  await page.click(Selectors[2]);
  await page.click(Selectors[3]);

  await page.waitForSelector(Selectors[4], Selectors[5]);
  await page.click(Selectors[4]);
  await page.click(Selectors[5]);

  await page.waitForSelector(Selectors[6], Selectors[7]);
  await page.click(Selectors[6]);
  await page.click(Selectors[7]);


  // Hacer click en un anchor
  await page.waitForSelector('.table-popup-footer');

  let selector = 'a';
    await page.$$eval(selector, anchors => {
        anchors.map(anchor => {
            if(anchor.textContent == 'Apply') {
                anchor.click();
                return
            }
        })
    });


// Evaluamos los datos que vamos a tomar
  const data = await page.evaluate(() => {
    const cell = document.querySelectorAll('#team-players tbody td');
    const data=[];
    for(let elements of cell){
      data.push(elements.textContent);
    }
    return data;


  })


  //xGChain = Total de goles dónde el jugador a estado presente
  //xGBuildup = Total de goles dónde el jugador a estado presente sin tirar o hacer pase clave

  class Jugador {
    constructor(Nombre, PJ, Min, G, A, Tx90, PxT90, ExpG, ExpA, xGChain, xGBuildup,Gx90, Ax90, xGChain90, xGBuildup90, Amarillas, Rojas){
      this.Nombre= Nombre;
      this.Partidos_Jugados = PJ;
      this.Minutos = Min;
      this.Goles = G;
      this.Asistencias = A;
      this.Tirosx90 = Tx90;
      this.PasesDeGolxT90 = PxT90;
      this.ExpectedGol = ExpG;
      this.ExpectedAsist = ExpA;
      this.GolesExpPorPosesion = xGChain;
      this.GolesExpPorPosesionSinPasOTir = xGBuildup;
      this.Golesx90 = Gx90;
      this.Asistenciasx90 = Ax90;
      this.GolesExpPorPosesion90 = xGChain90;
      this.GolesExpPorPosesionSinPasOTir90 = xGBuildup90;
      this.Amarillas = Amarillas;
      this.Rojas = Rojas;
    }
  }
  const Playersdata = data;
  const Players=[];
  let values = [];
  let i = 0;
  for(i = 0; i <= Playersdata.length; i++){
      values[i] = Playersdata.shift();


      if(values.length == 17) {
     ;

        let Player = new Jugador (values[0],values[1],values[2],values[3],values[4],values[5]
          ,values[6],(values[7] === '0.00' ? values[7]:values[7].slice(0, -5)),(values[8] === '0.00' ? values[8]:values[8].slice(0, -5)),values[9],values[10],values[11]
          ,values[12],values[13],values[14],values[15],values[16]);


        Players.push(Player);

        values = [];

        i = -1;
      }
  }

  await browser.close();
  return Players;
}

export {ScrapData};
