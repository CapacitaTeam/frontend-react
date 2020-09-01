import { EventEmitter } from 'fbemitter';

class Event {
    /**
     * Initiate the event emitter
     */
    constructor() {
        this.eventEmitter = new EventEmitter();
    }

    /**
     * Adds the @listener function to the end of the listeners array
     * for the event named @eventName
     * Will ensure that only one time the listener added for the event
     *
     * @param {string} eventName
     * @param {function} listener
     */
    addListener(eventName, listener) {
        return this.eventEmitter.addListener(eventName, listener);
    }

    /**
     * Will temove the specified @listener from @eventname list
     *
     * @param {string} eventName
     */
    removeAllListeners(eventName) {
        return this.eventEmitter.removeAllListeners(eventName);
    }

    /**
     * Will emit the event on the evetn name with the @payload
     * and if its an error set the @error value
     *
     * @param {string} event
     * @param {object} payload
     * @param {boolean} error
     */
    emit(event, payload, error = false) {
        return this.eventEmitter.emit(event, payload, error);
    }

    /**
     * Returns the event emitter
     * Used for testing purpose and avoid using this during development
     */
    getEventEmitter(eventName) {
        return this.eventEmitter.listeners(eventName);
    }
}

export default new Event();