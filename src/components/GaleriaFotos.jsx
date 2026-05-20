import { useEffect, useState } from "react";
import api from "../services/api";

export default function GaleriaFotos() {
  const [fotos, setFotos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    api
      .get("/photos?_limit=10")
      .then((response) => {
        setFotos(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErro(true);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <h2>Carregando fotos...</h2>;
  }

  if (erro) {
    return <h2>Erro ao carregar fotos.</h2>;
  }

  return (
    <div>
      <h1>Galeria de Fotos</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
        }}
      >
        {fotos.map((foto) => (
          <div
            key={foto.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={foto.thumbnailUrl}
              alt={foto.title}
            />

            <p>{foto.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}