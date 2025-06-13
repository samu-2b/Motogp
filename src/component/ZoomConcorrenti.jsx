import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import "./ZoomScuderie.css";
import "./Concorrenti.css"

function ZoomConcorrenti() {
  const location = useLocation();
  const { id, name, team, country, image } = location.state || {};

  if (!id) {
    return (
      <>
        <Navbar />
        <p>Dati non disponibili.</p>
        <Link to="/concorrenti">← Torna ai Concorrenti</Link>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Link to="/concorrenti">
      <div id="card2w" className="grid grid-cols-2 gap-10">
        <div id="card2" className="rounded-2xl">
          <img id="imgscu1" src={image} alt={name} />
          <p className='text-red-700 font-bold pt-5 pb-4'>Numero: {id}</p>
          <hr></hr>
          <p className='text-white font-extralight text-2xl pt-3 pb-3.5'>{name}</p>
          <hr></hr>
          <p className='text-white font-normal pt-7 pb-1.5'>Team: {team}</p>
          <p className='text-white font-normal pt-5 pb-1.5'>Nazionalità: {country}</p>
        </div>
      </div>

      </Link>
    </>
  );
}

export default ZoomConcorrenti;