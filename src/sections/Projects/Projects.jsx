import { useEffect, useState } from 'react';
import styles from './ProjectsStyles.module.css';
import { blockedRepositories, githubUsername } from './projectConfig';

const blockedRepositoryNames = new Set(blockedRepositories.map((name) => name.toLowerCase()));
const projectLimit = 4;
const languageIcons = {
  Bash: 'bash/bash-original.svg',
  C: 'c/c-original.svg',
  'C#': 'csharp/csharp-original.svg',
  'C++': 'cpp/cpp-original.svg',
  Clojure: 'clojure/clojure-original.svg',
  CSS: 'css3/css3-original.svg',
  Dart: 'dart/dart-original.svg',
  Elixir: 'elixir/elixir-original.svg',
  Go: 'go/go-original.svg',
  Haskell: 'haskell/haskell-original.svg',
  HTML: 'html5/html5-original.svg',
  Java: 'java/java-original.svg',
  JavaScript: 'javascript/javascript-original.svg',
  'Jupyter Notebook': 'jupyter/jupyter-original.svg',
  Kotlin: 'kotlin/kotlin-original.svg',
  Lua: 'lua/lua-original.svg',
  Perl: 'perl/perl-original.svg',
  PHP: 'php/php-original.svg',
  Python: 'python/python-original.svg',
  R: 'r/r-original.svg',
  Ruby: 'ruby/ruby-original.svg',
  Rust: 'rust/rust-original.svg',
  Scala: 'scala/scala-original.svg',
  Swift: 'swift/swift-original.svg',
  TypeScript: 'typescript/typescript-original.svg',
};
const deviconBaseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGitHubJson(url) {
      const response = await fetch(url, {
        headers: { Accept: 'application/vnd.github+json' },
        signal: controller.signal,
      });

      if (!response.ok) {
        let message = `${response.status} ${response.statusText}`;
        try {
          const errorBody = await response.json();
          if (errorBody.message) {
            message = errorBody.message;
          }
        } catch {
          // Use the HTTP status when the API response is not JSON.
        }
        throw new Error(`GitHub API request failed: ${message}`);
      }

      return response.json();
    }

    async function loadProjects() {
      setLoading(true);
      setError('');

      try {
        const repositories = [];
        let page = 1;

        while (repositories.length < projectLimit) {
          const pageOfRepositories = await fetchGitHubJson(
            `https://api.github.com/users/${githubUsername}/repos?type=all&sort=pushed&direction=desc&per_page=100&page=${page}`,
          );

          if (!Array.isArray(pageOfRepositories)) {
            throw new Error('GitHub returned an unexpected repository list.');
          }

          const eligibleRepositories = pageOfRepositories.filter(
            (repository) =>
              !repository.private &&
              !repository.fork &&
              !blockedRepositoryNames.has(repository.name.toLowerCase()),
          );

          repositories.push(...eligibleRepositories.slice(0, projectLimit - repositories.length));

          if (pageOfRepositories.length < 100) {
            break;
          }
          page += 1;
        }

        const projectsWithLanguages = await Promise.all(
          repositories.map(async (repository) => ({
            ...repository,
            languages: await fetchGitHubJson(repository.languages_url),
          })),
        );

        setProjects(projectsWithLanguages);
      } catch (publicApiError) {
        if (controller.signal.aborted) {
          return;
        }

        try {
          const response = await fetch('/.netlify/functions/github-projects', {
            headers: { Accept: 'application/json' },
            signal: controller.signal,
          });
          const fallbackProjects = await response.json();

          if (!response.ok) {
            throw new Error(fallbackProjects.message || `${response.status} ${response.statusText}`);
          }
          if (!Array.isArray(fallbackProjects)) {
            throw new Error('The authenticated GitHub function returned an unexpected response.');
          }

          setProjects(fallbackProjects);
        } catch (fallbackError) {
          if (!controller.signal.aborted) {
            const publicMessage =
              publicApiError instanceof Error ? publicApiError.message : 'Public GitHub request failed.';
            const fallbackMessage =
              fallbackError instanceof Error ? fallbackError.message : 'Authenticated fallback failed.';
            setError(`${publicMessage} Authenticated fallback failed: ${fallbackMessage}`);
          }
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProjects();
    return () => controller.abort();
  }, [retryCount]);

  return (
    <section id="projects" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Projects</h2>
      {loading && <p className={styles.message} role="status">Loading recent GitHub projects…</p>}
      {error && (
        <div className={styles.error} role="alert">
          <p>{error}</p>
          <button type="button" onClick={() => setRetryCount((count) => count + 1)}>
            Try again
          </button>
        </div>
      )}
      {!loading && !error && projects.length === 0 && (
        <p className={styles.message}>No public repositories found. Check your blocklist or GitHub profile.</p>
      )}
      {!loading && !error && projects.length > 0 && (
        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.id}>
              <div className={styles.cardHeading}>
                <h3>
                  <a href={project.html_url} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </h3>
                {project.pushed_at && (
                  <time dateTime={project.pushed_at}>
                    Updated {new Date(project.pushed_at).toLocaleDateString()}
                  </time>
                )}
              </div>
              <p className={styles.description}>
                {project.description || 'No description provided.'}
              </p>
              {Object.keys(project.languages).length > 0 ? (
                <ul className={styles.languages} aria-label={`Languages used in ${project.name}`}>
                  {Object.entries(project.languages)
                    .sort(([, bytesA], [, bytesB]) => bytesB - bytesA)
                    .map(([language]) => (
                      <li key={language}>
                        {languageIcons[language] && (
                          <img
                            className={styles.languageIcon}
                            src={`${deviconBaseUrl}/${languageIcons[language]}`}
                            alt=""
                            aria-hidden="true"
                            onError={(event) => {
                              event.currentTarget.hidden = true;
                            }}
                          />
                        )}
                        <span>{language}</span>
                      </li>
                    ))}
                </ul>
              ) : (
                <p className={styles.noLanguages}>No detected languages</p>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
