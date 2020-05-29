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
    export default {
        name: "table",
        props: ['books'],
    }
</script>

<style scoped>

</style>