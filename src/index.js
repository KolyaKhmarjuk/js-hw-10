import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchData } from './fetch/fetchCountries';
import { getCountryMarkupList } from './markup/markupCountries';
import { getCountryMarkup } from './markup/markupCountries';
import { refs } from './refs/refs';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputValue = e => {
  const valueIn = e.target.value.trim();
  fetchData(valueIn)
    .then(response => {
      if (!renderCountryList(response)) {
        renderCountry(response);
      }
    })
    .catch(response => {
      if (!response.ok) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
      }
    });
};

const renderCountryList = country => {
  if (country.length <= 10) {
    const markup = getCountryMarkupList(country);
    refs.countryList.innerHTML = markup;
    refs.countryInfo.innerHTML = '';
  } else {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    refs.countryList.innerHTML = '';
  }
};

const renderCountry = country => {
  if (country.length === 1) {
    const markup = getCountryMarkup(country);
    refs.countryInfo.innerHTML = markup;
    refs.countryList.innerHTML = '';
  }
};

refs.inputRef.addEventListener('input', debounce(inputValue, DEBOUNCE_DELAY));
