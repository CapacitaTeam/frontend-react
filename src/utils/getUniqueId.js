export const getUniqueId = () => Math.floor(Date.now() / 1000)
export const getUniqueIdPrefix = (prefix) => prefix + '_' + Math.floor(Date.now() / 1000)
export const getUniqueIdRandom = () => Math.floor(Math.random() * (10000 - 1) + 1) + Math.floor(Date.now() / 1000)