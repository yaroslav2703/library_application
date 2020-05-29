<template>
    <div>
        <div class="page-title">
            <h3>Пользователи</h3>
        </div>
        <div>
            <router-link to="/l/users/add" class="white-text">
                <button class="btn waves-effect waves-light" type="button">
                    Добавить
                    <i class="material-icons right">add</i>
                </button>
            </router-link>
        </div>
        <div class="container">
            <form @submit.prevent="submitHandler">
                <div class="row">
                    <div class="col s3 m6">
                        <div class="input-field">
                            <input
                                    id="email"
                                    type="text"
                                    v-model.trim="email"
                                    :class="{invalid: ($v.email.$dirty && !$v.email.required) ||
                                                        ($v.email.$dirty && !$v.email.email)}"
                            >
                            <label for="email">электронная почта</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.email.$dirty && !$v.email.required"
                            >Поле Email не должно быть пустым</small>
                            <small
                                    class="helper-text invalid"
                                    v-else-if="$v.email.$dirty && !$v.email.email"
                            >Введите корректный Email</small>
                        </div>
                        <div class="input-field">
                            <input
                                    id="status"
                                    type="text"
                                    v-model.trim="status"
                            >
                            <label for="status">статус</label>
                        </div>
                    </div>
                    <div class="col s3 m6">
                        <div class="input-field">
                            <input
                                    id="name"
                                    type="text"
                                    v-model.trim="firstName"
                            >
                            <label for="name">фамилия и имя</label>
                        </div>
                        <div class="input-field">
                            <input
                                    id="role"
                                    type="text"
                                    v-model.trim="role"
                            >
                            <label for="role">роль</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s2 m2 offset-s8 offset-m8">
                        <button class="btn waves-effect waves-light" type="submit">
                            Поиск
                            <i class="material-icons right">search</i>
                        </button>
                    </div>
                    <div class="col s2 m2">
                        <button class="btn waves-effect waves-light" type="reset">
                            Сброс
                            <i class="material-icons right">refresh</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="divider"></div>
        <Table v-bind:users="users"/>
    </div>
</template>

<script>
    import Table from "@/components/app/librarian/users/Table";
    import {email} from "vuelidate/lib/validators";
    import messages from "@/utils/messages";
    import requests from "../../utils/requests";

    export default {
        name: "Users",
        data: () => ({
            email: null,
            status: null,
            firstName: null,
            secondName: null,
            role: null,
            users: null
        }),
        components: {
            Table
        },
        validations: {
            email: {email}
        },
        async created() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            const response = await requests.request('/api/users/get');
            this.users = response.users;
        },
        methods: {
            async submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                if (this.role === 'читатель') {
                    this.role = 'member'
                }
                else if (this.role === 'библиотекарь') {
                    this.role = 'librarian'
                }
                if (this.status === 'активный') {
                    this.status = false
                }
                else if (this.status === 'заблокирован') {
                    this.status = true
                }
                if (this.firstName !== null) {
                    const arrayOfStrings = this.firstName.split(' ');
                    this.firstName = String(arrayOfStrings[1]);
                    this.secondName = String(arrayOfStrings[0]);
                }
                const formData = {
                    email: this.email,
                    disabled: this.status,
                    firstName: this.firstName,
                    lastName: this.secondName,
                    role: this.role,
                };
                try {
                    const responce = await requests.request('/api/users/filter', 'POST', formData);
                    this.users = responce.users;
                    this.$message(responce.message);
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>