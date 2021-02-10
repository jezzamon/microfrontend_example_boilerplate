import * as singleSpa from 'single-spa'
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper';



async function init() {
    const globalEventDistributor = new GlobalEventDistributor();
    const loadingPromises = [];
    // accept the following arguments : name, route/route status, appURL, storeURL, globalEventDistributor
    loadingPromises.push(
        loadApp('example', '/example', '@manager/example', null, null)
    );
    loadingPromises.push(
        loadApp('navbar', 'active', '@manager/navbar', null  /* no store */, globalEventDistributor)
    );
    loadingPromises.push(
        loadApp('authentication', '/authentication', '@portal/authentication', '@portal/authentication/store', globalEventDistributor)
    );

    loadingPromises.push(
        loadApp('configService', '/configService', '@portal/configService', '@portal/configService/store', globalEventDistributor)
    );
    // wait until all stores are loaded and all apps are registered with singleSpa
    await Promise.all(loadingPromises);

    singleSpa.start();
}
init();