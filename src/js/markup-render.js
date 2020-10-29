import countriesListTpl from '../templates/countries-list.hbs';
import countryCardTpl from '../templates/country-card.hbs';
import getRefs from './get-refs';

const refs = getRefs();

function renderMarkup(data) {
  if (data.length === 1) {
    renderCountryCardMarkup(data);
  }

  if (data.length > 1 && data.length <= 10) {
    renderCountryListMarkup(data);
  }

  if (data.length > 10) {
    clearMarkup();
    errorHandler.throwErrorTooMany();
  }
}

function renderCountryListMarkup(data) {
  const markup = countriesListTpl(data);
  refs.cardContainerEl.innerHTML = markup;
}

function renderCountryCardMarkup(data) {
  const markup = countryCardTpl(data);
  refs.cardContainerEl.innerHTML = markup;
}

function clearMarkup() {
  refs.cardContainerEl.innerHTML = '';
}

export default { renderMarkup, clearMarkup };
