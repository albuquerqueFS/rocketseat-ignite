import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

const url = "https://api.github.com/orgs/rocketseat/repos";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories &&
          repositories.map((repo, i) => (
            <RepositoryItem repository={repo} key={i} />
          ))}
      </ul>
    </section>
  );
}
