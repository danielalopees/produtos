import React, { useState } from 'react';
import Tarefa from './componentes/tarefas';

function App() {
  const [tarefas, setTarefas] = useState([
   
  ]);

  const [novaTarefa, setNovaTarefa] = useState('');

  function alternarStatus(id) {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, feita: !tarefa.feita } : tarefa
    ));
  }

  function adicionarTarefa() {
    if (novaTarefa.trim()) {
      const nova = {
        id: tarefas.length + 1,
        nome: novaTarefa,
        feita: false
      };
      setTarefas([...tarefas, nova]);
      setNovaTarefa('');
    }
  }

  // Função para remover uma tarefa
  function removerTarefa(id) {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  }

  return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
 
      <h1>Minha Lista de Tarefas</h1>
      <div style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',

    maxWidth: '500px',
    
    
}}>
        <input
          placeholder='Nova tarefa'
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Enviar</button>
      </div>

      {tarefas.map(tarefa => (
        <Tarefa
          key={tarefa.id}
          nome={tarefa.nome}
          feita={tarefa.feita}
          onToggleStatus={() => alternarStatus(tarefa.id)}
          onDelete={() => removerTarefa(tarefa.id)} // Passa a função para excluir tarefa
        />
      ))}
    </div>
  );
}

export default App;
