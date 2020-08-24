const config = (router) => {
    router.urlRouter.otherwise('/');
    router.transitionService.onEnter({}, (trans, state) => document.title = "Capacita Tech | " + state.title);
};

export default config;