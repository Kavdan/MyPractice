export const selectSearch = (state) => state.controls.search;
export const selectVisibleCountries = (state, {search = "", region = ""}) => (
    state.countries.list.filter(country => country.name.toLowerCase().includes(search.toLowerCase()) 
                                && country.region.includes(region)) 
)
export const selectRegion = (state) => state.controls.region
export const selectControls = (state) => state.controls