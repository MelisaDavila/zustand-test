import React, { useState } from 'react';
import { usePallets } from './store';

function App() {
  const { pallets, addPallet, editPallet } = usePallets();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId === null) {
      addPallet({ id, name });
    } else {
      editPallet({ id: editingId, name: name });
      setEditingId(null);
    }
    setId('');
    setName('');
  };

  const handleEditClick = (pallet) => {
    setId(pallet.id);
    setName(pallet.name);
    setEditingId(pallet.id);
  };

  return (
    <div>
      <div>
        <h1>Agregar Pallet</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese código de pallet"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ingrese nombre de pallet"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">
            {editingId === null ? 'Agregar Pallet' : 'Guardar Cambios'}
          </button>
        </form>
      </div>
      <div>
        <h1>Lista de Pallets</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {pallets.map((pallet) => (
              <tr key={pallet.id}>
                <td>{pallet.id}</td>
                <td>{pallet.name}</td>
                <td>
                  <button onClick={() => handleEditClick(pallet)}>
                    Modificar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
