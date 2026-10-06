import { blockedRepositories, githubUsername } from '../../src/sections/Projects/projectConfig.js';

const blockedRepositoryNames = new Set(blockedRepositories.map((name) => name.toLowerCase()));
const projectLimit = 4;

async function fetchGitHubJson(url, token) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
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

export const handler = async () => {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Set the GITHUB_TOKEN environment variable in Netlify.' }),
    };
  }

  try {
    const repositories = [];
    let page = 1;

    while (repositories.length < projectLimit) {
      const pageOfRepositories = await fetchGitHubJson(
        `https://api.github.com/users/${githubUsername}/repos?type=all&sort=pushed&direction=desc&per_page=100&page=${page}`,
        token,
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

    const projects = await Promise.all(
      repositories.map(async (repository) => ({
        ...repository,
        languages: await fetchGitHubJson(repository.languages_url, token),
      })),
    );

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300, s-maxage=300',
      },
      body: JSON.stringify(projects),
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: error instanceof Error ? error.message : 'Unable to load GitHub projects.',
      }),
    };
  }
};
