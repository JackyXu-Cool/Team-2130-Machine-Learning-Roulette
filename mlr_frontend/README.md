# Front-end page for Machine Learning Roulette project

### `npm install`

First run this command to install all the dependecies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Linting And Code Format
In order to keep a consistent coding style for our frontend codebase, I've set up `eslint` and `prettier` environment. 
https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b

- You can search ESLINT extension in VSCODE Marketplace and download it. This helps to show linting warnings/errors inline. 
- Auto formating upon saving
    1. `File -> Preference -> Setting`
    2. Click "Open Settings (JSON)" icon on top right (next to the RUN button)
    3. Paste the following line
    ```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true,
    "files.autoSave": "onFocusChange"
    ```
- If you think certain linting rule(s) shouldn't be an error, feel free to disable it in `.eslintrc.json`
- Please run `npm run eslint` and `npm run format` before you plan to push the code.
