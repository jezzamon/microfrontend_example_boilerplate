import * as singleSpa from 'single-spa';
window.SystemJS = window.System
import isLoadRoute from './isLoadRoute';

export async function getReducer() {
    const globalReducer = await SystemJS.import('@manager/globalReducer');
    console.log(globalReducer)
}
getReducer();

export async function loadApp(name, hash, appURL, storeURL, globalEventDistributor) {

    let storeModule = {}, customProps = {globalEventDistributor: globalEventDistributor};

    // try to import the store module
    try {
        storeModule = storeURL ? await SystemJS.import(storeURL) : {storeInstance: null};
    } catch (e) {
        console.log(`Could not load store of app ${name}.`, e);
    }

    if (storeModule.storeInstance && globalEventDistributor) {
        // add a reference of the store to the customProps
        customProps.store = storeModule.storeInstance;

        // register the store with the globalEventDistributor
        globalEventDistributor.registerStore(storeModule.storeInstance);
    }

    // register the app with singleSPA and pass a reference to the store of the microfrontend as well as a reference to the globalEventDistributor
    singleSpa.registerApplication(
        // Name of the Application
        name,
        // the loading function to dynamically import the page
        () => SystemJS.import(appURL),
        // the activity helper function to check if url match exists or if always active
        isLoadRoute(hash),
        // passing customProps to the MicronFrontEnd app
        customProps
    );

}