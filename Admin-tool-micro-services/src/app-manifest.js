

// as this file will dynamically loaded, we have the option to store this in a central repo if necessary
function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement('script')
  newScript.type = 'systemjs-importmap'
  newScript.text = JSON.stringify(newMapJSON)
  const allMaps = document.querySelectorAll('script[type="systemjs-importmap"]')

  allMaps[allMaps.length - 1].insertAdjacentElement(
    'beforeBegin',
    newScript
  )
}
const devDependencies = {
  imports: {
    "@manager/example": "http://localhost:3080/entry.js", 
    "@manager/config": "http://localhost:7233/config.js",
    "@manager/globalReducer": "http://localhost:7238/globalReducer.js",
    "@manager/navbar": "http://localhost:7235/navbar.js",
    "@portal/authentication": "http://localhost:7236/entry.js",
    "@portal/authentication/store": "http://localhost:7236/store.js",
    "@portal/configService": "http://localhost:7237/entry.js",
    "@portal/configService/store": "http://localhost:7237/store.js"
  }
}

// Using localhost for POC, but will use real production urls in real use.
const manifest = {
  registerConfig: 'http://localhost:7233/config.js',
  globalReducer: 'http://localhost:7238/globalReducer.js',
  navBar: 'http://localhost:7235/navbar.js',
  authentication: 'http://localhost:7236/entry.js',
  authenticationStore: 'http://localhost:7236/store.js',
  configService: 'http://localhost:7237/configService.js',
  configServiceStore: 'http://localhost:7237/store.js',

}

const prodDependencies = {
  imports: {
    '@manager/config': `${manifest.registerConfig}`,
    '@manager/globalReducer': `${manifest.globalReducer}`,
    '@manager/navbar': `${manifest.navBar}`,
    '@portal/authentication': `${manifest.authentication}`,
    '@portal/authentication/store': `${manifest.authenticationStore}`,
    '@portal/configService': `${manifest.configService}`,
    '@portal/configService/store': `${manifest.configServiceStore}`,
  }
}

const devMode = process.env.NODE_ENV === 'development';
if (devMode) {
  insertNewImportMap(devDependencies)
} else {
  insertNewImportMap(prodDependencies)
}
