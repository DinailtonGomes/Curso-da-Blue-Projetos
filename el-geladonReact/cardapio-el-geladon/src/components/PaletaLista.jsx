import React,{useState} from "react";
import { paletas } from "../mocks/paletas.js";
import "./PaletaLista.css";

function PaletaLista() {
  const [paletaSelecionada,setPaletaSelecionada] = useState({});

  const adicionarItem = (paletaIdex) => {
      const paleta = {[paletaIdex]: Number(paletaSelecionada[paletaIdex] || 0) +1 }
      setPaletaSelecionada ({...paletaSelecionada, ...paleta});
  }

  return <div className="PaletaLista">
      {paletas.map((paleta,index) => (
            <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
                <span className="PaletaListaItem__badge">{paletaSelecionada[index] || 0}</span>
                <div>
                    <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
                    <div className="PaletaListaItem__preco">R${paleta.preco.toFixed(2)}</div>
                    <div className="PaletaListaItem__descrição">{paleta.descricao}</div>
                    <div className="PaletaListaItem__acoes Acoes">
                        <button className="Acoes__adicionar Acoes__adicionar--preencher" onClick={() => adicionarItem(index)}>adcionar</button>
                    </div>
                </div>
                <img className="PàletaListaItem__foto"src={paleta.foto}alt={`Paleta de ${paleta.sabor}`}/>
            </div>
        ))}
        </div>
  
}

export default PaletaLista;