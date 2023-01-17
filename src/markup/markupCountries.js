const getCountryMarkupList = countries => {
  return countries
    .map(
      ({ name, flags: { svg: svgFlag } }) =>
        `<li class="country-list_list">
    <img width="25" height="16" src="${svgFlag}" alt="${name}">
    <p class="country-list_text">${name}</p>
    </li>`
    )
    .join('');
};

const getCountryMarkup = countries => {
  const namesLanguages = countries[0].languages.map(x => x.name);
  const {
    name,
    flags: { svg: svgFlag },
    capital,
    population,
  } = countries[0];

  return `<li class="country-info_markup">
  <img width="50" height="25" src="${svgFlag}" alt="${name}">
  <h2 class="country-info_title">${name}</h2>
  </li>
  <p class="text"> <b>Capital:</b> ${capital}</p>
  <p class="text"> <b>Population:</b> ${population}</p>
  <p class="text"> <b>Languages:</b> ${namesLanguages}</p>`;
};

export { getCountryMarkup, getCountryMarkupList };
