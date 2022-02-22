export const neutralizeBack = (callback) => {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = () => {
        window.history.pushState(null, '', window.location.href);
        callback();
    };
};

const revivalBack = () => {
    window.onpopstate = undefined;
    window.history.back();
};
