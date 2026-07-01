# Redroid Control Panel

A web-based control panel for managing Android devices via Docker and ADB.

## Quick Start

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser.

## Prerequisites

- Docker installed and running
- ADB (Android Debug Bridge) in your PATH
- Node.js 18+

## Features

- **Initialize System**: Starts the redroid container and connects ADB
- **Terminate System**: Stops the redroid container
- **Live Stream**: Displays Android screen via iframe on port 8000
- **Mobile Ready**: Sidebar collapses on small screens with menu toggle

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/start` | Start redroid container |
| POST | `/api/stop` | Stop redroid container |

## Testing

```bash
npm test
```

Runs Playwright end-to-end tests.

## Project Structure

```
redroid-panel/
├── public/
│   └── index.html    # Web UI
├── tests/
│   └── control-panel.spec.js  # E2E tests
├── server.js         # Express server
├── package.json
└── playwright.config.js
```

## Docker

The panel expects a `redroid` container to be available. To create one:

```bash
docker run -d --name redroid \
  -p 5555:5555 \
  redroid/redroid:latest
```

## License

ISC