<template>
    <div>
        <div class="page-title">
            <h3>Книги</h3>
        </div>
        <div>
            <router-link to="/l/books/add" class="white-text">
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
                                    id="isbn"
                                    type="text"
                                    v-model.trim="isbn"
                                    :class="{invalid: ($v.isbn.$dirty && !$v.isbn.minLength) ||
                                                        ($v.isbn.$dirty && !$v.isbn.maxLength)}"
                            >
                            <label for="isbn">ISBN</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.isbn.$dirty && !$v.isbn.maxLength"
                            >Длина поля ISBN должны быть 13</small>
                            <small
                                    class="helper-text invalid"
                                    v-else-if="$v.isbn.$dirty && !$v.isbn.minLength"
                            >Длина поля ISBN должны быть 13</small>
                        </div>

                        <div class="input-field">
                            <input
                                    id="author"
                                    type="text"
                                    v-model.trim="author"
                            >
                            <label for="author">автор</label>
                            <span class="helper-text invalid">Введите автора</span>
                        </div>
                    </div>
                    <div class="col s3 m6">
                        <div class="input-field">
                            <input
                                    id="title"
                                    type="text"
                                    v-model.trim="title"
                            >
                            <label for="title">название</label>
                            <span class="helper-text invalid">Введите название</span>
                        </div>
                        <div class="input-field">
                            <input
                                    id="status"
                                    type="text"
                                    v-model.trim="status"
                            >
                            <label for="status">статус</label>
                            <span class="helper-text invalid">Выберите статус</span>
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
        <Table v-bind:books="books"/>
    </div>
</template>

<script>
    import Table from "@/components/app/librarian/books/Table";
    import {maxLength, minLength} from "vuelidate/lib/validators";
    import messages from "@/utils/messages";
    import requests from "../../utils/requests";

    export default {
        name: "Books",
        data: () => ({
            isbn: null,
            title: null,
            author: null,
            status: null,
            books: null
        }),
        components: {
            Table
        },
        validations: {
            isbn: {minLength: minLength(13), maxLength: maxLength(13)}
        },
        async created() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            const response = await requests.request('/api/books/get');
            this.books = response.books;
        },
        methods: {
            async submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                if (this.status === 'нет в наличии') {
                    this.status = 'unavailable'
                }
                else if (this.status === 'есть в наличии') {
                    this.status = 'available'
                }
                const formData = {
                    isbn: this.isbn,
                    title: this.title,
                    author: this.author,
                    status: this.status
                };
                try {
                    const responce = await requests.request('/api/books/filter', 'POST', formData);
                    this.books = responce.books;
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