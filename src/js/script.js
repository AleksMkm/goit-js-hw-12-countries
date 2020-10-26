import API from './fetchCountries';
import getRefs from './get-refs';
import {
  alert,
  defaultModules,
} from '../../node_modules/@pnotify/core/dist/PNotify.js';

const refs = getRefs();
const debounce = require('lodash.debounce');

refs.searchFieldEl.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  console.log(e.target.value);
  if (!e.target.value) return;
  //   API.fetchCountries(e.target.value).then(console.log);
  API.fetchCountries(e.target.value).then(renderCountryCardMarkup);
}

API.fetchCountries('uk').then(console.log);

function renderCountryListMarkup() {
  const markup = '<div>123</div>';
  refs.cardContainerEl.innerHTML = markup;
}

function renderCountryCardMarkup() {
  const markup = '<div>456</div>';
  refs.cardContainerEl.innerHTML = markup;
}

function renderMarkup() {
  renderCountryCardMarkup();
}
