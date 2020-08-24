import store from 'store';
// helpers
import get from 'lodash/get'

// constants
import { TOKEN } from './constants'

const authService = () => {
  let redux = undefined 
  const initialize = store => (redux = store)

  const login = credentials => {
    console.log(credentials);
    store.set(TOKEN, credentials.username);
    window.location.replace('/');
  }

    /*authenticate(credentials).then(info => {
      //tracker.setUserId(info.id);
      store.set(TOKEN, info.token)
      redux.dispatch(setUserInfo(info))
      return info
    })*/

  const logout = () => store.clearAll()

  const getUser = () => store.get(TOKEN);

  const isAuthenticated = () => {
    return store.get(TOKEN);
  }

  return {
    initialize,
    isAuthenticated,
    login,
    logout,
    getUser
  }

}

export default authService();