export const TOKEN = 'CAPACITA_TECH_TOKEN';

const prefix = 'event:';

export const EVENT = {
    LOGIN_REQUIRED  : prefix + 'loginRequired',
    LOGIN_CONFIRMED : prefix + 'loginConfirmed',
    LOGIN_CANCELLED : prefix + 'loginCancelled',
    FORBIDDEN       : prefix + 'forbidden',
    REFRESH_APP     : prefix + 'refreshApp',
    TWO_FACTOR_REQUIRED: prefix + 'twoFactorRequired',
    TWO_FACTOR_CONFIRMED: prefix + 'twoFactorConfirmed',
    TWO_FACTOR_CANCELLED: prefix + 'twoFactorCancelled'
};