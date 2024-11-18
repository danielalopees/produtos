// Arquivo: Tarefa.js
import React from 'react';

function Tarefa(props) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      backgroundColor: props.feita ? '#d4edda' : '#f8d7da', 
      padding: '10px', 
      margin: '5px', 
      borderRadius: '5px' 
    }}>
      <div style={{ flex: 1 }}>
        <h3>{props.nome}</h3>
        <p>Status: {props.feita ? 'Feita' : 'Pendente'}</p>
      </div>
      
      <button onClick={props.onToggleStatus} style={{ marginRight: '10px' }}>
        Alternar Status
      </button>
      <button onClick={props.onDelete} style={{ color: 'white', backgroundColor: '#ff4d4d', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>
        Excluir
      </button>
    </div>
  );
}

export default Tarefa;
