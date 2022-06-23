export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>Forms in React</p>
      <a href="">Acessar repositório</a>
    </li>
  );
}
