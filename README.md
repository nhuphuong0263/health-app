### `npm start`

Change port at .env.local file to: PORT = 3002
Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in your browser.

### `npm install -g json-server`

Setup json server to build api

### `json-server --watch db.json`

Run the api
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

http://localhost:3000/foodsTopPage

http://localhost:3000/foods

http://localhost:3000/diaries

http://localhost:3000/exercise

http://localhost:3000/recommended

### `PROJECT SETUP`

- Relative path with packages:

  - customize-cra(overrides webpack dont need eject it).
  - react-app-rewired
  - babel-plugin-module-resolver
  - Config at:
    - config-overrides.js file.
    - Edit script at package.json file.
    - jsonfig.json & .babelrc files.

- Config pretties

  - extendsion vscode -> install pretties
  - Config at:
    - .prettierrc file
    - .vscode/setttings.json

- Config Css/Scss

  - Create Global component styles to wrapper App.
  - Create GlobalStyles.scss to applied global style.
  - npm install -D sass classnames to writte scss and modules style.

- Config Router
  - npm install react-router-dom.
  - Move config router to outside.
  - Build render layout.

### `PROJECT FOLDER`

- src
  - apiServices
  - assets
    - fonts
    - images
  - components
    - Buttons
    - CircleProgressBar
    - Food
    - GlobalStyles
    - Icons
    - Layout
  - config
  - hooks
    - useFetch.js
  - pages
    - topPage
    - myRecord
    - CollumnPage
  - routes
    - config navigate all pages
  - utils
    - constans.js
    - httpsRequest.js
    - utils.js

### `Header`

- Actived page.
- Drawer Menu Icon toggle.

### `Footer`

### `Top Page`

- Food component
- UpIconButton component: click to top page
- LoadMoreButton component
- CircleProgressBar component

### `My Record`

- Click scroll section
- Chart
- Tabs selection actived
- Exercise table custom scroll
- UpIconButton component: click to top page

### `Collumn Page`

- Food component
- UpIconButton component: click to top page
- LoadMoreButton component
