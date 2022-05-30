import React,{useState} from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
import { paletas } from "mocks/paletas.js";
import "./PaletaLista.css";

function PaletaLista() {
  const [paletaSelecionada,setPaletaSelecionada] = useState({});

  const adicionarItem = (paletaIdex) => {
      const paleta = {[paletaIdex]: Number(paletaSelecionada[paletaIdex] || 0) +1 }
      setPaletaSelecionada ({...paletaSelecionada, ...paleta});
  }

  const removerItem = (paletaIdex) => {
    const paleta = {[paletaIdex]: Number(paletaSelecionada[paletaIdex] || 0) -1 }
    setPaletaSelecionada ({...paletaSelecionada, ...paleta});
}

 
  return <div className="PaletaLista">
      {paletas.map((paleta,index) => (
          <PaletaListaItem
           key={`PaletaListaItem-${index}`}
           paleta = {paleta}
           quantidadeSelecionada = {paletaSelecionada[index]}
           index={index}
           onRemove = {index => removerItem(index)}
           onAdd = {index => adicionarItem(index)}/>           
        ))}
        </div>
  
}

export default PaletaLista;
