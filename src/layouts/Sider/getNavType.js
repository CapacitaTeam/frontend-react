// helpers
import has from 'lodash/has';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
// includes
const getNavType = (states=[], type='', include='') =>
    filter(states, (state) =>
        includes(state.name, include) &&
        has(state, 'data.nav') &&
        (state.data.nav.type === type)
    ).sort((r1, r2) => r1.data.nav.sort - r2.data.nav.sort);

export default getNavType;