import puppeteer from "puppeteer";
import puppeteerpt from "puppeteer-core";


async function EstadisticasEquipo (url) {
  const browser = await puppeteer.launch();
// Accedemos a la web
  const page = await browser.newPage();
  await page.goto(url);


const GP = await page.waitForSelector('#content > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2)'); // select the element
const GP1 = await GP.evaluate(el => el.textContent);
const GF = await page.waitForSelector('#content > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(3)'); // select the element
const GF1 = await GF.evaluate(el => el.textContent)
const GRD = await page.waitForSelector('#content > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(2)'); // select the element
const GRD1 = await GRD.evaluate(el => el.textContent)
const GRF = await page.waitForSelector('#content > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(3)'); // select the element
const GRF1 = await GRF.evaluate(el => el.textContent)
const CL = await page.waitForSelector('#content > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > table:nth-child(41) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)'); // select the element
const CL1 = await CL.evaluate(el => el.textContent)
const CF = await page.waitForSelector('#content > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > table:nth-child(41) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2)'); // select the element
const CF1 = await CF.evaluate(el => el.textContent)
const CRD = await page.waitForSelector('#content > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > table:nth-child(45) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)'); // select the element
const CRD1 = await CRD.evaluate(el => el.textContent)
const CRF = await page.waitForSelector('#content > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > table:nth-child(45) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2)'); // select the element
const CRF1 = await CRF.evaluate(el => el.textContent)

await browser.close();

class EstadisticasEquipo{
  constructor(GolesC, GolesRecibidosC, GolesF, GolesRecibidosF, CornersL, CornersRecibidosL, CornersF, CornersRecibidosF) {
    this.GolesC = GolesC;
    this.GolesRecibidosC = GolesRecibidosC;
    this.GolesF = GolesF;
    this.GolesRecibidosF = GolesRecibidosF;
    this.CornerL = CornersL;
    this.CornersRecibidosL = CornersRecibidosL;
    this.CornersF = CornersF;
    this.CornersRecibidosF = CornersRecibidosF;
  }

}
let Estadisticas = new EstadisticasEquipo(GP1, GF1, GRD1, GRF1, CL1, CF1, CRD1, CRF1);

return Estadisticas;
}

export {EstadisticasEquipo}
