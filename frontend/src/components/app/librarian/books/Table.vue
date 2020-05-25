<template>
    <div>
        <div class="table-of-contents">
            <table class="highlight centered responsive-table">
                <thead>
                <tr>
                    <th></th>
                    <th>ISBN</th>
                    <th>Название</th>
                    <th>Автор</th>
                    <th>Статус</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="book in books" :key="book.isbn">
                    <td></td>
                    <td>{{book.isbn}}</td>
                    <td>{{book.title}}</td>
                    <td>{{book.author}}</td>
                    <td v-if="book.status === 'available'">есть в наличии</td>
                    <td v-else-if="book.status === 'unavailable'">нет в наличии</td>
                    <td>
                        <a class="waves-effect waves-teal btn-flat">
                            <i class="material-icons">visibility</i>
                        </a>
                        <a class="waves-effect waves-teal btn-flat">
                            <i class="material-icons">create</i>
                        </a>
                        <a class="waves-effect waves-teal btn-flat" @click.prevent="deleteHandler(book.isbn)">
                            <i class="material-icons">clear</i>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
    import requests from "@/utils/requests";

    export default {
        name: "table",
        data() {
            return {
                books: null
            };
        },
        async mounted() {
            const response = await requests.request('/api/books/get');
            this.books = response.books;
        },
        methods: {
            async deleteHandler(isbn) {
                const formData = {
                    isbn: isbn
                };
                try {
                    const responce = await requests.request('/api/books/delete', 'DELETE', formData);
                    this.$message(responce.message);
                    if (responce.message === 'Книга удалена') {
                        await this.$router.push('/login?message=books');

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