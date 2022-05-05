import { ScrapData } from "./modules/ScrapUnderStat.js";
import { Partido } from "./modules/Partido.js"
import { EstadisticasEquipo } from "./modules/EstadisticasEquipo.js"
import "prompt";

const Elche = ['https://understat.com/team/Elche/2021', 'https://www.soccerstats.com/team.asp?league=spain&stats=19-elche'];
const Osasuna = ['https://understat.com/team/Osasuna/2021','https://www.soccerstats.com/team.asp?league=spain&stats=3-osasuna']
const Granada = ['https://understat.com/team/Granada/2021', 'https://www.soccerstats.com/team.asp?league=spain&stats=18-granada'];
const Celta = ['https://understat.com/team/Celta_Vigo/2021','https://www.soccerstats.com/team.asp?league=spain&stats=11-celta-vigo'];
const Betis = ['https://understat.com/team/Real_Betis/2021','https://www.soccerstats.com/team.asp?league=spain&stats=6-real-betis'];
const Getafe = ['https://understat.com/team/Getafe/2021','https://www.soccerstats.com/team.asp?league=spain&stats=2-getafe'];
const Madrid =['https://understat.com/team/Real_Madrid/2021','https://www.soccerstats.com/team.asp?league=spain&stats=10-real-madrid'];
const City = ['https://understat.com/team/Manchester_City/2021','https://www.soccerstats.com/team.asp?league=england&stats=20-manchester-city'];



  async function InitPlayers(Equipo){
    const Players = await ScrapData(Equipo[0]);
    Object.keys(Players).forEach(key => {
      console.log(`El ${Players.map(object => object.Nombre).indexOf(Players[key].Nombre)} es ${Players[key].Nombre}`);
    })
    return Players;
  };

  const titularesL = [0, 1, 2, 4, 6, 12, 15, 19, 22, 27, 25];
  const titularesV = [1, 3, 2, 5, 6, 10, 12, 17, 20, 22, 24];

  async function SimularPartido (Equipo, titulares) {

    const Players = await ScrapData(Equipo[0]);
    const JugadoresPartido = [Players[titulares[0]], Players[titulares[1]], Players[titulares[2]],
    Players[titulares[3]], Players[titulares[4]], Players[titulares[5]], Players[titulares[6]],
    Players[titulares[7]],Players[titulares[8]], Players[titulares[9]], Players[titulares[10]]];
    console.log("________________________________________________\n")
    Partido(JugadoresPartido);
  }
  async function Stats(Equipo1, Equipo2){
    const stats1 = await EstadisticasEquipo(Equipo1[1]);
    console.log(`Equipo1\nGoles en casa: ${stats1.GolesC}\nGoles recibidos en casa: ${stats1.GolesRecibidosC}\nCórners en casa: ${stats1.CornerL}\nCórners recibidos en casa: ${stats1.CornersRecibidosL}\n`);
    const stats2 = await EstadisticasEquipo(Equipo2[1]);
    console.log("________________________________________________\n")
    console.log(`\nEquipo2\nGoles fuera de casa:  ${stats2.GolesF}\nGoles recibidos fuera de casa: ${stats2.GolesRecibidosF}\nCórners fuera de casa: ${stats2.CornersF}\nCórners recibidos fuera de casa: ${stats2.CornersRecibidosF}`);
  }

  async function Play(equipo1, equipo2){
    console.log(Object.keys({equipo1})[0]);
    await InitPlayers(equipo1);
    await console.log("________________________");
    console.log(Object.keys({equipo2})[0]);
    InitPlayers(equipo2);
  }


  async function Match(Equipo1, Equipos2){
    SimularPartido(Equipo1, titularesL); 
    SimularPartido(Equipos2, titularesV);
    await Stats(Equipo1, Equipos2);
  }

 // Play(Madrid,City);


 Match(Madrid,City);

 // await SimularPartido(titulares);
 // await console.log(Stats);




