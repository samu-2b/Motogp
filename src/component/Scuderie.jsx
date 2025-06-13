import Navbar from "./Navbar";
import { useState, useEffect, Children } from 'react';
import "./Scuderie.css";
import {Link} from "react-router-dom";

function Determinated ({id, name, team, country, image}) {
    return (
      <div id="card1" className="w-80 h-96 pb-52 rounded-2xl">
        <img id="imgcon1" src={image} alt={name} />
        <p className='text-red-700 font-bold pt-3 pb-1.5'>Numero: {id}</p>
        <hr></hr>
        <p className='text-white font-extralight text-2xl pt-3 pb-3.5'>{name}</p>
        <hr></hr>
        <p className='text-white font-normal pt-3 pb-1.5'>Team: {team}</p>
        <p className='text-white font-normal pt-3 pb-1.5'>Nazionalità: {country}</p>
        
      </div>
    )
}

function Scuderie() {
  const [scuderia, setScuderia] = useState([]);
  const [addscuderia, setAddscuderia] = useState({
    id: Math.floor(Math.random() * 1000000) + 1,
    name: '',
    image: '',
    team: '',
    country: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:2000/insScuderie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addscuderia)
    })
      .then(res => res.json())
      .then(data => {
        alert(data.success || data.message || 'Scuderia aggiunta');

        fetch('http://localhost:2000/scuderie')
          .then(res => res.json())
          .then(data => setScuderia(data));

        setAddscuderia({
          id: Math.floor(Math.random() * 1000000) + 1,
          name: '',
          image: '',
          team: '',
          country: '',
        });
      })
      .catch(err => console.error(err));
      console.log("Dati inviati:", addscuderia);
  };

  useEffect(() => {
    fetch('http://localhost:2000/scuderie')
      .then(res => res.json())
      .then(data => {
        console.log("Dati ricevuti:", data);
        setScuderia(data);
      })
      .catch(err => console.error("Errore nel fetch:", err));
  }, []);

  return (
    <div>
        <Navbar></Navbar>
        <div className='!grid !grid-cols-4 !gap-6 pl-70 pr-70 pt-40'>
          <form id="form2" onSubmit={handleSubmit}>
            <div id="divform">
              <label id="label2">Name:ㅤ ㅤ</label>
              <input
                id="input2"
                type="text"
                required
                value={addscuderia.name}
                onChange={(e) => setAddscuderia({ ...addscuderia, name: e.target.value })}
              />
            </div>
            <div id="divform">
              <label id="label2">Team: ㅤ ㅤ</label>
              <input
                id="input2"
                type="text"
                required
                value={addscuderia.team}
                onChange={(e) => setAddscuderia({ ...addscuderia, team: e.target.value })}
              />
            </div>
            <div id="divform">
              <label id="label2">Country:ㅤ </label>
              <input
                id="input2"
                type="text"
                required
                value={addscuderia.country}
                onChange={(e) => setAddscuderia({ ...addscuderia, country: e.target.value })}
              />
            </div>
            <div id="divform">
              <label id="label2">Image:ㅤㅤ</label>
              <input
                id="input2"
                type="text"
                required
                value={addscuderia.image}
                onChange={(e) => setAddscuderia({ ...addscuderia, image: e.target.value })}
              />
            </div>
            <div id="divform">
              <button id="button2" type="submit">Aggiungi scuderia</button>
            </div>
          </form>
          {scuderia.map((item) => ( 
            <Link
              to="/zoomscuderie"
              state={{
                id: item.id,
                name: item.name,
                image: item.image,
                team: item.team,
                country: item.country
              }}
              key={item.number}
            >
            <Determinated 
              id={item.id}
              name={item.name}
              image={item.image}
              team={item.team}
              country={item.country}
            />
            </Link>
          ))}
        </div>
        <footer>
          © 2025 Dorna Sports SL. Tutti i diritti riservati. Tutti i marchi sono di proprietà dei rispettivi proprietari.<br>
          </br>Tutti i diritti riservati.Tutti i diritti riservati.
        </footer>
    </div>
  )
}

export default Scuderie;