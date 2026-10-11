# MyPortfolio 3.0

A personal portfolio project built to showcase projects, technical
skills, and professional information. The repository is organized into
separate `client` and `server` folders.

## Features

-   Personal portfolio website
-   Client/server project structure
-   Space to present skills, projects, and contact information
-   Ready to extend with additional pages and backend functionality

> **Note:** The repository screenshots show the `client` and `server`
> folders plus root-level `package.json` and `package-lock.json`. Update
> the feature list and commands below to match the current
> implementation.

## Project Structure

``` text
MyPortfolio-3.0/
├── client/              # Frontend application
├── server/              # Backend application
├── .gitignore
├── package.json         # Root scripts and dependencies
├── package-lock.json
└── README.md
```

## Tech Stack

The project has a separate frontend and backend. Add the exact
frameworks, libraries, and database used by your implementation here.

-   **Frontend:** `client/`
-   **Backend:** `server/`
-   **Package manager:** npm

## Getting Started

### Prerequisites

Install the following before running the project:

-   [Node.js](https://nodejs.org/) (LTS recommended)
-   npm (included with Node.js)
-   Git

Check your installation:

``` bash
node --version
npm --version
git --version
```

### 1. Clone the repository

``` bash
git clone https://github.com/ashi5h-Official/MyPortfolio-3.0.git
cd MyPortfolio-3.0
```

### 2. Install dependencies

Install root dependencies:

``` bash
npm install
```

If the frontend and backend have their own `package.json` files, install
their dependencies too:

``` bash
cd client
npm install
cd ../server
npm install
cd ..
```

### 3. Configure environment variables

If the backend requires environment variables, create a `.env` file
inside the appropriate folder (usually `server/`) and add the values
required by the application.

Example placeholder:

``` env
PORT=5000
# Add other required variables here.
```

Do not commit `.env` files, passwords, API keys, or other secrets to
Git.

### 4. Run the application

Check the available scripts in the root, `client`, and `server`
`package.json` files. Common commands may look like these:

``` bash
# Start the frontend (run from client/)
npm run dev
```

``` bash
# Start the backend (run from server/)
npm start
```

Use the actual scripts defined in your `package.json` files; the
commands above are examples and may need adjustment.

## Deployment

The repository currently shows a GitHub Pages deployment. GitHub Pages
is suitable for static frontend builds. If the portfolio depends on a
backend server, deploy that backend separately and configure the
frontend to use its public API URL.

To configure GitHub Pages:

1.  Open the repository on GitHub.
2.  Go to **Settings → Pages**.
3.  Select the correct deployment source or workflow.
4.  Follow the build and deployment instructions for the frontend
    framework.
5.  Verify the deployed site and check the browser console for errors.

## Development Workflow

``` bash
git status
git add README.md
git commit -m "docs: add project README"
git push
```

## Contributing

This is a personal portfolio project, but suggestions and improvements
are welcome. For a change, create a branch, make the update, test it
locally, and open a pull request.

## License

No license is specified in the repository screenshot. Add a `LICENSE`
file if you want to define how others may use, modify, and distribute
this project.

## Author

**Ashish Soni**

-   GitHub: [ashi5h-Official](https://github.com/ashi5h-Official)
-   Portfolio repository:
    [MyPortfolio-3.0](https://github.com/ashi5h-Official/MyPortfolio-3.0)
