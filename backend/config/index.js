module.exports = function get() {

    return require(`./${process.env.NODE_ENV}`);
};