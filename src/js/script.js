import API from './fetchCountries';
import errorHandler from './error-handler';
import getRefs from './get-refs';
import countriesListTpl from '../templates/countries-list.hbs';
import countryCardTpl from '../templates/country-card.hbs';

const refs = getRefs();
const debounce = require('lodash.debounce');

refs.searchFieldEl.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const searchQuery = e.target.value;
  console.log(searchQuery);

  if (!searchQuery) return;

  API.fetchCountries(searchQuery)
    .then(renderMarkup)
    .catch(error => {
      errorHandler.throwErrorNotFound();
    });
}

function renderMarkup(countries) {
  if (countries.length === 1) {
    console.log(`yay 1`);
    console.log(countries);
    renderCountryCardMarkup();
  }

  if (countries.length > 1 && countries.length <= 10) {
    console.log(`from 1 to 10`);
    console.log(countries);
    renderCountryListMarkup();
  }

  if (countries.length > 10) {
    errorHandler.throwErrorTooMany();
  }
}

function renderCountryListMarkup() {
  const markup = '<div>CountryListMarkup</div>';
  refs.cardContainerEl.innerHTML = markup;
}

function renderCountryCardMarkup() {
  const markup = '<div>CountryCardMarkup</div>';
  refs.cardContainerEl.innerHTML = markup;
}
