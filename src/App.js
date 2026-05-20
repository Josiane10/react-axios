import { useEffect, useState } from "react";
import api from "./services/api";
import GaleriaFotos from "./components/GaleriaFotos";

import Card from "./components/Card";
import UserDetails from "./components/UserDetails";

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      <h1>Usuários</h1>

      {usuarios.map((usuario) => (
        <Card
          key={usuario.id}
          nome={usuario.name}
          onClick={() => setUsuarioSelecionado(usuario)}
        />
      ))}

      <UserDetails usuario={usuarioSelecionado} />
        <hr />
        
        <GaleriaFotos />
    </div>
  );
}