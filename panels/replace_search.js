import Configurator from 'bookingbug-configurator-js';
import { bbAuthorisation } from 'bookingbug-core-js';



async function clientSearchReplacer( params ){

  // get the company
  this.company = bbAuthorisation.getCompany();
  
  // get the app
  this.app = await this.company.$get('apps', {app_name: 'custom_client_search' });

  // call the search script
  const results = await this.app.$post('admin_script', {name: "client_search"}, params);

  return results.data.results;

}

Configurator.registerReplacer('searchAllClients', clientSearchReplacer)