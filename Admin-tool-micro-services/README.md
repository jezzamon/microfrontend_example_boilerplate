# Micro-Services-Admin-Tool (MF-Manager)

The Micro-Services-Admin-Tool serves the UI of the Micro-Services. Essentially, the **Micro-Service Admin tool's role is to manage the microfrontends**, for all intents and purposes, we can refer to the admin-tool-micro-services as the _MF-Manager_ (Micro-Frontend Manager).

The MF-Manager uses a small library _single-spa_ to manage microfrontend lifecycle methods, route matching and custom properties.

Each microservice will be responsible for its own UI (Micro-FrontEnd). The frontend of the microservice exposes two files which the MF-Manager will consume, the `entry.js` and `store.js` files.

### Quick start

```
# install the packages
npm install
# run the admin tool locally
npm start
```

# Register a micro-frontend with manager

There will be 3 files to update to register a micro-frontend with the MF-Manager.
**src/app-manifest.js** - map the url location of the microfront end files `entry.js` and `store.js` to be used in config.js
**src/config.js** - Responsible for registering each microfront end with MF-Manager.
**navbar/src/routes.js** - An array list of the registered name and route name of all the microfrontends (defined in `config.js`)

## 1. Map the url location in app-manifest for dynamic imports

_MicroFrontends being registered with MF-Manager should be prefixed with "@portal/"_.
Depending on the environment (dev, prod) It will build a "script" tag with the import names mapped to the urls.
The naming convention is as follows:
**@manager/** - any imports that exist within the mf-manager repo. (ie. Navigation, globalReducer, global dependencies)
**@portal/**- any imports from outside of mf-manager. (ie Microfrontend of the microservices).

```
// app-manifest.js
const  devDependencies  = {
imports: {
	"@manager/config":  'http://localhost:7233/config.js',
	"@manager/globalReducer":  "http://localhost:7238/globalReducer.js",
	"@manager/navbar":  "http://localhost:7235/navbar.js",
	"@portal/authentication":  "http://localhost:7236/authentication.js",
	"@portal/authentication/store":  "http://localhost:7236/store.js",
	"@portal/configService":  "http://localhost:7237/configService.js",
	"@portal/configService/store":  "http://localhost:7237/store.js"
	}
}
```

For each microfrontend, `app-manifest` needs to know the location of:

1.  **entry.js** Entry point for singleSpa library to consume MicroFrontEnd. Essentially a wrapper for the main micrfrontend app, which contains lifecycle methods to work with singleSpa.
2.  **store.js** The state manager for the microfrontend. The microfrontend uses redux as its state manager which is compatible with react and angular.

## 2. Register micro-frontend in config

This repo only handles consuming of microfrontends (set up in config.js), Running this example at `localhost:7233` will show errors in console as the examples configuration and authentication are not part of this repo, although it will appear in the menu.

The navbar is itself set up as a microfrontend that exists in this repo, see the example in config.js on how it is consumed as a microfrontend.

```
// config.js
// loadApp accepts the following arguments : name, route/route status, appURL, storeURL, globalEventDistributor
...
loadingPromises.push(
	loadApp('navbar', 'active', '@portal/navbar', null  /* no store */, globalEventDistributor)
);
loadingPromises.push(
	loadApp('authentication', '/authentication', '@portal/authentication', '@portal/authentication/store', globalEventDistributor)
);
// wait until all stores are loaded and all apps are registered with singleSpa
await  Promise.all(loadingPromises);
singleSpa.start();
}
init();
```

Each microfrontend will be registered using the `loadApp` function
The `loadApp` function needs the following arguments:
_ **name** - Name of micro frontend (needs to match key _"name"_ defined in `routes.js`)
_ **route name** - The route name associated with the microfrontend, this always begins with a `/`, however If microfrontend is always active / mounted (ie. navigation) we pass in the string `active` (without the `/`). (needs to match key _"href"_ defined in `routes.js`)
_ **appUrl** - The name of the app URL defined in the `app-manifest.js`. This tells the manager where to find the `portalEntry.js` to dynamically import it.
_ **storeURL** - The name of the store URL defined in the `app-manifest.js`. This tells the manager where to find the `store.js` and to import it so it may be registered with the `globalEventDistributer`. (Note navigation micrfrontend does use a store, hence the argument is passed as `null`.

## 3. Update routes.js

```
export  const  links  =  [
	{
	name:  'Authentication',
	href:  '/authentication'
	},
	{
	name:  'Configuration',
	href:  '/configService'
	},
]
```

The **name** property will be what will be displayed in the UI for navigation link.
The **href** property will be the route name to listen for (defined in `config.js`).
