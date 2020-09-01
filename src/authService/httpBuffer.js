import $http from 'axios';

const httpBuffer = () => {
    /** Holds all the requests, so they can be re-requested in future. */
    let buffer = [];

    const retryHttpRequest = (config, deferred) => {
        const successCallback = (response) => {
            deferred.resolve(response);
        };
        const errorCallback = (response) => {
            deferred.reject(response);
        };
        $http(config).then(successCallback, errorCallback);
    };

    /**
     * Appends HTTP request configuration object with deferred response attached to buffer.
     * @return {Number} The new length of the buffer.
     */
    const append = (config, deferred) =>
        buffer.push({
            config: config,
            deferred: deferred
        });

    /**
     * Abandon or reject (if reason provided) all the buffered requests.
     */
    const rejectAll = (reason) => {
        if (reason) {
            for (let i = 0; i < buffer.length; ++i) {
                buffer[i].deferred.reject(reason);
            }
        }
        buffer = [];
    };

    /**
     * Retries all the buffered requests clears the buffer.
     */
    const retryAll = (updater) => {
        for (let i = 0; i < buffer.length; ++i) {
            let _cfg = updater(buffer[i].config);
            if (_cfg !== false)
                retryHttpRequest(_cfg, buffer[i].deferred);
        }
        buffer = [];
    };

    return {
        append,
        rejectAll,
        retryAll
    };
};

export default httpBuffer();