export default {
    install(Vue) {
        Vue.prototype.$message = function (html) {
            window.M.toast({html})
        };
    }
}