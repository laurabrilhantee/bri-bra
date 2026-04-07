import { useState } from 'react'
import './App.css'
import Ausie from './assets/A.png'
import Ribs from './assets/Ribs.jpg'
import Picanha from './assets/Picanha.jpg'
import Outbacker from './assets/Outbacker.jpg'
import logo from './assets/image.png'


export default function App() {

  const CLASSES = [
    { nome: "Picanha Bloomin’ Burger", img: Picanha},
    { nome: "Ribs Double Decker", img: Ribs},
    { nome: "Aussie Plant Burger", img: Ausie},
    { nome: "The Outbacker Burger", img: Outbacker},
  ];

  //Variaveis useStates
  const [nome, setNome] = useState(""); // nome do pedido
  const [hp, setHp] = useState(100); // satisfação do cliente
  const [vivo, setVivo] = useState(true); // pedido disponível
  const [classe, setClasse] = useState(CLASSES[0]); // lanche selecionado

  const receberDano = () => {
  const novoHp = Math.max(0, hp - 10);
  setHp(novoHp);
  setVivo(novoHp > 0);
}

const curar = () => {
  setHp(100);
  setVivo(true);
}

const pct = hp / 100;
const corBarra = pct > 0.5 ? "#5DCAA5" : pct > 0.25 ? "#EF9F27" : "#E24B4A";
  
  return (
    <>
      <main>
        <section>
          
          <h1>
            <img src={logo} className="logo" />
          </h1>
        
          <div className="thumb">
            <img src={classe.img} alt={classe.nome} />
          </div>
          <input 
            type="text" 
            className='nome' 
            placeholder='Nome do Lanche'
            value={nome}
            onChange={(e) => setNome(e.target.value)}  
          />

             {/* STATUS DO PEDIDO */}
        <div className="status">
          <p>Status do Pedido</p>
          <p>Disponível</p>
          <span>{vivo ? "DISPONÍVEL" : "INDISPONÍVEL"}</span>
          <span>{vivo ? "true" : "false"}</span>
        </div>

        {/* SATISFAÇÃO DO CLIENTE */}
        <p id='pontosVida'>
          Satisfação do Cliente {hp}/100
        </p>

        <div className="barra" style={{background: corBarra}}></div>

        {/* AÇÕES */}
        <button 
          className='BTcura'
          onClick={receberDano}  
          disabled={!vivo}
        >
          Reclamação 
        </button>
        
        <button 
          className='BTcura'
          onClick={curar} 
        >
          Elogio
        </button>
        
          <div className="classes">
            <button id='Picanha' onClick={() => setClasse(CLASSES[0])}>Picanha Bloomin’ Burger</button>
            <button id='Ribs' onClick={() => setClasse(CLASSES[1])}> Ribs Double Decker</button>
            <button id='Aussie' onClick={() => setClasse(CLASSES[2])}> Aussie Plant Burger</button>
            <button id='Outbacker' onClick={() => setClasse(CLASSES[3])}> The Outbacker Burger </button>
          </div>

        </section>
      </main>
    </>
  )
}

