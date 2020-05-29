<template>
    <div>
        <div class="table-of-contents">
            <table class="highlight centered responsive-table">
                <thead>
                <tr>
                    <th>Книга</th>
                    <th>Читатель</th>
                    <th>Дата выдачи</th>
                    <th>Дата возврата</th>
                    <th>Реальная дата возврата</th>
                    <th>Статус</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="loan in loans" :key="loan._id">
                    <td>{{loan.book.book.title}} - {{loan.book.book.author}} - {{loan.book.book.isbn}}</td>
                    <td>{{loan.member.user.email}} - {{loan.member.user.firstName}} - {{loan.member.user.lastName}}</td>
                    <td>{{loan.issueDate}}</td>
                    <td>{{loan.dueDate}}</td>
                    <td>{{loan.returnDate}}</td>
                    <td v-if="loan.status === 'inProgress'">продолжается</td>
                    <td v-else-if="loan.status === 'overdue'">просрочено</td>
                    <td v-else-if="loan.status === 'closed'">закрыто</td>
                    <td>
                    </td>
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
        props: ['loans'],
        methods: {

        }
    }
</script>

<style scoped>

</style>