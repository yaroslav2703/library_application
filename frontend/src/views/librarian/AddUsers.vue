<template>
    <div>
        <div class="page-title">
            <h3>Новая книга</h3>
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
                            <label for="email">email</label>
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
                                    id="firstName"
                                    type="text"
                                    v-model.trim="firstName"
                                    :class="{invalid: ($v.firstName.$dirty && !$v.firstName.required)}"
                            >
                            <label for="firstName">имя</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.firstName.$dirty && !$v.firstName.required"
                            >Поле не должно быть пустым</small>
                        </div>
                        <div class="input-field">
                            <input
                                    id="secondName"
                                    type="text"
                                    v-model.trim="secondName"
                                    :class="{invalid: ($v.secondName.$dirty && !$v.secondName.required)}"
                            >
                            <label for="secondName">фамилия</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.secondName.$dirty && !$v.secondName.required"
                            >Поле не должно быть пустым</small>
                        </div>
                        <div class="input-field">
                            <input
                                    id="phoneNumber"
                                    type="text"
                                    v-model.trim="phoneNumber"
                                    :class="{invalid: ($v.phoneNumber.$dirty && !$v.phoneNumber.required)}"
                            >
                            <label for="phoneNumber">номер телефона</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.phoneNumber.$dirty && !$v.phoneNumber.required"
                            >Поле не должно быть пустым</small>
                        </div>
                        <div class="input-field">
                            <input
                                    id="role"
                                    type="text"
                                    v-model.trim="role"
                                    :class="{invalid: ($v.role.$dirty && !$v.role.required)}"
                            >
                            <label for="role">роль</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.role.$dirty && !$v.role.required"
                            >Поле не должно быть пустым</small>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s2 m2 offset-s2 offset-m2">
                        <button class="btn waves-effect waves-light" type="submit">
                            Сохранить
                            <i class="material-icons right">save</i>
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
    </div>
</template>

<script>
    import {email, required} from "vuelidate/lib/validators";
    import messages from "@/utils/messages";
    import requests from "../../utils/requests";

    export default {
        name: "AddUsers",
        data : () => ({
            email: '',
            firstName: '',
            secondName: '',
            phoneNumber: '',
            role: ''
        }),
        validations: {
            email: {email, required},
            firstName: {required},
            secondName: {required},
            phoneNumber: {required},
            role: {required}
        },
        mounted() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
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
                const formData = {
                    email: this.email,
                    firstName: this.firstName,
                    secondName: this.secondName,
                    phoneNumber: this.phoneNumber,
                    role: this.role
                };
                try {
                    const responce = await requests.request('/api/users/add', 'POST', formData);
                    this.$message(responce.message);
                    if (responce.message === 'Пользователь добавлен') {
                        await this.$router.push('/l/users')
                    }
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>