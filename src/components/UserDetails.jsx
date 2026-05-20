export default function UserDetails({ usuario }) {
  if (!usuario) {
    return <p>Selecione um usuário</p>;
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginTop: "20px",
      }}
    >
      <h2>Detalhes do Usuário</h2>

      <p><strong>Nome:</strong> {usuario.name}</p>

      <p><strong>Username:</strong> {usuario.username}</p>

      <p><strong>Email:</strong> {usuario.email}</p>

      <p><strong>Telefone:</strong> {usuario.phone}</p>

      <p><strong>Website:</strong> {usuario.website}</p>

      <h3>Endereço</h3>

      <p><strong>Rua:</strong> {usuario.address.street}</p>

      <p><strong>Suite:</strong> {usuario.address.suite}</p>

      <p><strong>Cidade:</strong> {usuario.address.city}</p>

      <p><strong>CEP:</strong> {usuario.address.zipcode}</p>

      <h3>Empresa</h3>

      <p><strong>Empresa:</strong> {usuario.company.name}</p>

      <p><strong>Slogan:</strong> {usuario.company.catchPhrase}</p>

      <p><strong>BS:</strong> {usuario.company.bs}</p>
    </div>
  );
}