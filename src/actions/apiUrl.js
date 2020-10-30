const prod = 'https://devapi.capacita.tech/'
const dev = 'http://api.capacita.tech:3002/'
const local = 'http://localhost:3001/';

const api = `${dev}`

const API = {
    base: api,
    graphql: api + 'graphql',
    graphql2: api + 'ch/graphql'
}

export default API