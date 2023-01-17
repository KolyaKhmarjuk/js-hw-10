const BASE_URL_FILLTER = 'https://restcountries.com/v2/name';

const fetchCountries = country => {
  return fetch(
    `${BASE_URL_FILLTER}/${country}?fields=name,capital,population,flags,languages`
  ).then(respons => {
    if (respons.ok) {
      return respons.json();
    }
  });
};

const fetchData = id => fetchCountries(`${id}`);

export { fetchData };
