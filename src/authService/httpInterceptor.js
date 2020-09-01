/*eslint-disable default-case */
import httpProvider from 'axios'
import httpBuffer from './httpBuffer'
import store from 'store'
// events
import event from './events'
// constants
import { TOKEN, EVENT } from './constants'

/**
 * http interceptor.
 * On 401 response (without 'ignoreAuth' option) stores the request
 * On 403 response (without 'ignoreAuth' option) discards the request
 */

const Interceptor = () => ({
  registerInterceptor: () => {
    httpProvider.interceptors.response.use(undefined, rejection => {
      const config = rejection.config || {}

      if (config.headers && !config.headers.ignoreAuth) {
        const response = rejection.response || {}

        switch (response.status) {
          case -1:
          case 0:
            // logger.warning(HTTP_NETWORK_ERROR_MSG);
            break

          case 401:
            return new Promise((resolve, reject) => {
              const bufferLength = httpBuffer.append(config, {
                resolve,
                reject
              })
              if (bufferLength === 1)
                event.emit(EVENT.LOGIN_REQUIRED, rejection.response)
            })

          case 402:
            event.emit(EVENT.REFRESH_APP, rejection.response)
            break

          case 403:
            event.emit(EVENT.FORBIDDEN, rejection.response)
            break

          case 599:
            return new Promise((resolve, reject) => {
              const bufferLength = httpBuffer.append(config, {
                resolve,
                reject
              })

              if (bufferLength === 1)
                event.emit(EVENT.TWO_FACTOR_REQUIRED, rejection.response)
            })
        }
      }

      return Promise.reject(rejection)
    })

    httpProvider.interceptors.request.use(config => {
      config.headers = config.headers || {}

      const { Version } = window
      const token = store.get(TOKEN)

      if (token) config.headers.Authorization = token
      if (Version) config.headers.Version = Version

      return config
    }, undefined)
  }
})

export default Interceptor()
