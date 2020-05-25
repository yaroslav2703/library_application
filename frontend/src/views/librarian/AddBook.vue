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
                                    id="isbn"
                                    type="text"
                                    v-model.trim="isbn"
                                    :class="{invalid: ($v.isbn.$dirty && !$v.isbn.required) ||
                                                        ($v.isbn.$dirty && !$v.isbn.minLength) ||
                                                        ($v.isbn.$dirty && !$v.isbn.maxLength)}"
                            >
                            <label for="isbn">ISBN</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.isbn.$dirty && !$v.isbn.required"
                            >Поле не должно быть пустым</small>
                            <small
                                    class="helper-text invalid"
                                    v-else-if="$v.isbn.$dirty && !$v.isbn.maxLength"
                            >Длина поля ISBN должны быть 13</small>
                            <small
                                    class="helper-text invalid"
                                    v-else-if="$v.isbn.$dirty && !$v.isbn.minLength"
                            >Длина поля ISBN должны быть 13</small>
                        </div>
                        <div class="input-field">
                            <input
                                    id="title"
                                    type="text"
                                    v-model.trim="title"
                                    :class="{invalid: ($v.title.$dirty && !$v.title.required)}"
                            >
                            <label for="title">название</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.title.$dirty && !$v.title.required"
                            >Поле не должно быть пустым</small>
                        </div>
                        <div class="input-field">
                            <input
                                    id="author"
                                    type="text"
                                    v-model.trim="author"
                                    :class="{invalid: ($v.author.$dirty && !$v.author.required)}"
                            >
                            <label for="author">автор</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.author.$dirty && !$v.author.required"
                            >Поле не должно быть пустым</small>
                        </div>
                        <div class="input-field">
                            <input
                                    id="number"
                                    type="text"
                                    v-model.trim="number"
                                    :class="{invalid: ($v.number.$dirty && !$v.number.required)}"
                            >
                            <label for="number">общее количество копий</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.number.$dirty && !$v.number.required"
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
    import {maxLength, minLength, required} from "vuelidate/lib/validators";
    import messages from "@/utils/messages";
    import requests from "../../utils/requests";

    export default {
        name: "AddBook",
        data : () => ({
            isbn: '',
            title: '',
            author: '',
            number: ''
        }),
        validations: {
            isbn: {required, minLength: minLength(13), maxLength: maxLength(13)},
            title: {required},
            author: {required},
            number: {required}
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
                    title: this.title,
                    author: this.author,
                    numberOfCopies: this.number
                };
                try {
                    const responce = await requests.request('/api/books/add', 'POST', formData);
                    this.$message(responce.message);
                    if (responce.message === 'Книга добавлена') {
                        await this.$router.push('/l/books')
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