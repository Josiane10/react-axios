export default function Card({ nome, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <h3>{nome}</h3>
    </div>
  );
}