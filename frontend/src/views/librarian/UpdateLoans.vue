<template>
    <div>
        <div class="page-title">
            <h3>Оформление взятия книги читателем</h3>
        </div>
        <div class="container">
            <form @submit.prevent="submitHandler">
                <div class="row">
                    <div class="col s3 m6">


                        <div class="input-field">
                            <input
                                    id="returnDate"
                                    type="text"
                                    v-model.trim="Date"
                                    class="datepicker"
                                    :class="{invalid: ($v.issueDate.$dirty && !$v.issueDate.required)}"
                            >
                            <label for="returnDate">Реальная дата возврата</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.issueDate.$dirty && !$v.issueDate.required"
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
    import {maxLength, minLength, email, required} from "vuelidate/lib/validators";
    import messages from "@/utils/messages";
    import requests from "../../utils/requests";
    export default {
        name: "AddLoans",
        data : () => ({
            isbn: '',
            member: '',
            issueDate: ''
        }),
        validations: {
            isbn: {required, minLength: minLength(13), maxLength: maxLength(13)},
            member: {email, required},
            issueDate: {required}
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
                const formData = {
                    isbn: this.isbn,
                    email: this.member,
                    issueDate: this. issueDate
                };
                try {
                    const responce = await requests.request('/api/loans/add', 'POST', formData);
                    this.$message(responce.message);
                    if (responce.message === 'Данные о выдаче книги успешно занесены') {
                        console.log(responce.message);
                        await this.$router.push('/l/loans')
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