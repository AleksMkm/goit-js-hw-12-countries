import API from './fetchCountries';
import errorHandler from './error-handler';
import getRefs from './get-refs';
import markup from './markup-render';

const refs = getRefs();
const debounce = require('lodash.debounce');

refs.searchFieldEl.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const searchQuery = e.target.value;

  if (!searchQuery) {
    markup.clearMarkup();
    return;
  }

  API.fetchCountries(searchQuery)
    .then(markup.renderMarkup)
    .catch(data => {
      markup.clearMarkup();
      errorHandler.throwErrorNotFound();
    });
}
