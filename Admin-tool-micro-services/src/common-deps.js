

// as this file will dynamically loaded, we have the option to store this in a central repo if necessary
function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement('script')
  newScript.type = 'systemjs-importmap'
  newScript.text = JSON.stringify(newMapJSON)
  const allMaps = document.querySelectorAll('script[type="systemjs-importmap"]')

  allMaps[allMaps.length - 1].insertAdjacentElement(
    'afterEnd',
    newScript
  )
}

const reactLib = 'https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.development.js';
const devDependencies = {
  imports: {
    react: reactLib,
    'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.development.js',
    'react-dom/server': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom-server.browser.development.js',
    'single-spa': 'https://cdnjs.cloudflare.com/ajax/libs/single-spa/4.4.1/system/single-spa.min.js',
    lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js',
    redux: 'https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.4/redux.min.js',
    'react-redux': 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/7.1.1/react-redux.min.js',
    axios: 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js',
  }
}

const prodDependencies = {
  imports: {
    react: 'https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js',
    'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js',
    'react-dom/server': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom-server.browser.production.min.js',
    'single-spa': 'https://cdnjs.cloudflare.com/ajax/libs/single-spa/4.4.1/system/single-spa.min.js',
    lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js',
    redux: 'https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.4/redux.min.js',
    'react-redux': 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/7.1.1/react-redux.min.js',
    axios: 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js',
  }
}

const devMode = true // need to add a condition here
if (devMode) {
  insertNewImportMap(devDependencies)
} else {
  insertNewImportMap(prodDependencies)
}
