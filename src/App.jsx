import { useState } from 'react'
import './App.css'
import Ausie from './assets/A.png'
import ribs from './assets/Ribs.jpg'
import picanha from './assets/Picanha.jpg'
import outbacker from './assets/Outbacker.jpg'

export default function App() {

  const CLASSES = [
    { nome: "Picanha Bloomin’ Burger", emoji: "picanha"},
    { nome: "Ribs Double Decker", emoji: "ribs"},
    { nome: "Aussie Plant Burger", emoji: "ausie"},
    { nome: "The Outbacker Burger", emoji: "outbacker"},
  ];
  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [hp, setHp] = useState(100); //número
  const [vivo, setVivo] = useState(true); //boolean
  const [classe, setClasse] = useState(CLASSES[0]); //objeto

  const receberDano = () => {
    const novoHp = Math.max(0, hp-10);
    setHp(novoHp);
    setVivo(novoHp > 0);
  }

  const curar = () => {
    setHp(100);
    setVivo(true);
  }

  const pct = hp/100;
  const corBarra = pct > 0.5 ? "#5DCAA5" : pct > 0.25 ? "#EF9F27" : "#E24B4A";
  
  return (
    <>
      <main>
        <section>
          
          <h1>Outback</h1>
          <div className="thumb">
            <img src={CLASSES.classe} alt="" />
          </div>
          <input 
            type="text" 
            className='nome' 
            placeholder='Nome do Lanche'
            value={nome}
            onChange={(e) => setNome(e.target.value)}  
          />

          <div className="status">
            <p>Status</p>
            <p>Vivo (boolean)</p>
            <span>{vivo ? "VIVO" : "MORTO"}</span>
            <span>{vivo ? "true" : "false"}</span>
          </div>

          <p id='pontosVida'>Pontos de vida (HP) {hp}/100</p>
          <div className="barra" style={{background: corBarra}}>
          </div>

          <button 
            className='BTcura'
            onClick={receberDano}  
            disabled={!vivo}
          >Receber Dano</button>
          
          <button 
            className='BTcura'
            onClick={curar} 
          >Curar</button>
          
          <div className="classes">
            <button id='picanha' onClick={() => setClasse(CLASSES[0])}>Picanha Bloomin’ Burger</button>
            <button id='ribs' onClick={() => setClasse(CLASSES[1])}> Ribs Double Decker</button>
            <button id='aussie' onClick={() => setClasse(CLASSES[2])}> Aussie Plant Burger</button>
            <button id='outbacker' onClick={() => setClasse(CLASSES[3])}> The Outbacker Burger </button>
          </div>

        </section>
      </main>
    </>
  )
}

