let token;
let userId;
let userRole;
let storageName = 'userData';
export default {
        login(jwtToken, Id, role){
            token = jwtToken;
            userId = Id;
            userRole = role;
            localStorage.setItem(storageName, JSON.stringify({
                userId, userRole, token
            }))
        },
        logout(){
            token = null;
            userId = null;
            userRole = null;
            localStorage.removeItem(storageName)
        },

        /**
         * @return {boolean}
         */
        Check() {
            const data = JSON.parse(localStorage.getItem(storageName));
            return !!(data && data.token && data.userRole);
        },

        CheckRole() {
            const data = JSON.parse(localStorage.getItem(storageName));
            return data.userRole;
        },

        GetId() {
            const data = JSON.parse(localStorage.getItem(storageName));
            return data.userId;
        }

}