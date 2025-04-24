function debounce(func, delay) {
    let id = null;
    return function (...args) {
        const context = this;
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            func.apply(context, args);
        }, delay)
    }
}