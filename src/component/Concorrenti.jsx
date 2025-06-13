import Navbar from "./Navbar";
import { useState, useEffect } from 'react';
import "./Concorrenti.css"
import {Link} from "react-router-dom";

function Determinated ({id, name, team, country, id_scuderia, image}) { 
    return (
      <div id="card1" className="w-80 h-96 pb-52 rounded-2xl">
        <img id="imgcon1" src={image} alt={name} />
        <p className='text-red-700 font-bold pt-3 pb-1.5'>Numero: {id}</p>
        <hr></hr>
        <p className='text-white font-extralight text-2xl pt-3 pb-3.5'>{name}</p>
        <hr></hr>
        <p className='text-white font-normal pt-3 pb-1.5'>Team: {team}</p>
        <p className='text-white font-normal pt-3 pb-1.5'>Nazionalità: {country}</p>
        <p className='text-white font-normal pt-3 pb-1.5'>Id1: {id}</p>
        <p className='text-white font-normal pt-3 pb-1.5'>Id2: {id_scuderia}</p>
      </div>
    )
}

function Concorrenti() {
  const [concorrente, setconcorrente] = useState([]);
  const [addconcorrente, setAddconcorrente] = useState({
    id: Math.floor(Math.random() * 1000000) + 1,
    name: '',
    team: '',
    country: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://motogp-y2is.onrender.com/insConcorrenti', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addconcorrente)
    })
      .then(res => res.json())
      .then(data => {
        alert(data.success || data.message || 'concorrente aggiunto');

        fetch('https://motogp-y2is.onrender.com/concorrenti')
          .then(res => res.json())
          .then(data => setconcorrente(data));

        setAddconcorrente({
          id: Math.floor(Math.random() * 1000000) + 1,
          name: '',
          team: '',
          country: '',
          image: '',
        });
      })
      .catch(err => console.error(err));
      console.log("Dati inviati:", addconcorrente);
  };

  useEffect(() => {
    fetch('https://motogp-y2is.onrender.com/concorrenti')
      .then(res => res.json())
      .then(data => {
        console.log("Dati ricevuti:", data);
        setconcorrente(data);
      })
      .catch(err => console.error("Errore nel fetch:", err));
  }, []);

  return (
      <div>
          <div>
            <Navbar></Navbar>
            <div id="divtot" className='!grid !grid-cols-4 !gap-6 pl-70 pr-70 pt-40'>
              <form id="form2" onSubmit={handleSubmit}>
                <div id="divform">
                  <label id="label2">Name:ㅤ ㅤ</label>
                  <input
                    id="input2"
                    type="text"
                    required
                    value={addconcorrente.name}
                    onChange={(e) => setAddconcorrente({ ...addconcorrente, name: e.target.value })}
                  />
                </div>
                <div id="divform">
                  <label id="label2">Team: ㅤ ㅤ</label>
                  <input
                    id="input2"
                    type="text"
                    required
                    value={addconcorrente.team}
                    onChange={(e) => setAddconcorrente({ ...addconcorrente, team: e.target.value })}
                  />
                </div>
                <div id="divform">
                  <label id="label2">Country:ㅤ </label>
                  <input
                    id="input2"
                    type="text"
                    required
                    value={addconcorrente.country}
                    onChange={(e) => setAddconcorrente({ ...addconcorrente, country: e.target.value })}
                  />
                </div>
                <div id="divform">
                  <label id="label2">Image:ㅤㅤ</label>
                  <input
                    id="input2"
                    type="text"
                    required
                    value={addconcorrente.image}
                    onChange={(e) => setAddconcorrente({ ...addconcorrente, image: e.target.value })}
                  />
                </div>
                <div id="divform">
                  <button id="button2" type="submit">Aggiungi concorrente</button>
                </div>
              </form>
              {Array.isArray(concorrente) && concorrente.map((item) => (
                <Link
                  to="/zoomconcorrenti"
                  state={{
                    id: item.id,
                    name: item.name,
                    team: item.team,
                    country: item.country,
                    image: item.image,
                    id_scuderia: item.id_scuderia
                  }}
                  key={item.id}
                >
                  <Determinated 
                    id={item.id}
                    name={item.name}
                    team={item.team}
                    country={item.country}
                    image={item.image}
                    id_scuderia={item.id_scuderia}
                  />
                </Link>
              ))}
            </div>
            <footer>
              © 2025 Dorna Sports SL. Tutti i diritti riservati. Tutti i marchi sono di proprietà dei rispettivi proprietari.<br>
              </br>Tutti i diritti riservati.Tutti i diritti riservati.
            </footer>
          </div>
      </div>
  )
}

export default Concorrenti;