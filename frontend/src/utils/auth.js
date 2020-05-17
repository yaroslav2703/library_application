let token;
let userId;
let storageName = 'userData';
export default {
        login(jwtToken, Id){
            token = jwtToken;
            userId = Id;

            localStorage.setItem(storageName, JSON.stringify({
                userId, token
            }))
        },
        logout(){
            token = null;
            userId = null;
            localStorage.removeItem(storageName)
        },

        /**
         * @return {boolean}
         */
        Check() {
            const data = JSON.parse(localStorage.getItem(storageName));
            return !!(data && data.token);
        }

}