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
                            <a class="waves-effect waves-teal btn-flat" @click.prevent="updateHandler(loan.dueDate, loan._id)">
                                <i class="material-icons">create</i>
                            </a>
                        <a class="waves-effect waves-teal btn-flat" @click.prevent="deleteHandler(loan._id)">
                            <i class="material-icons">clear</i>
                        </a>
                    </td>
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
        props: ['loans'],
        methods: {
            async deleteHandler(_id) {
                const formData = {
                    _id: _id
                };
                try {
                    const responce = await requests.request('/api/loans/delete', 'DELETE', formData);
                    this.$message(responce.message);
                    if (responce.message === 'Данные о выбранной выдаче книги удалены') {
                        await this.$router.push('/login?message=loans');

                    }
                } catch (e) {
                    console.log(e.message)
                }
            },



            async updateHandler(dueDate, _id) {
                var returnDate = await prompt('Введите реальную дату возврата?', dueDate);
                const formData = {
                    _id: _id,
                    returnDate: returnDate
                };
                try {
                    const responce = await requests.request('/api/loans/update', 'PUT', formData);
                    this.$message(responce.message);
                    if (responce.message === 'Данные о выбранной выдаче книги обновлены') {
                        await this.$router.push('/login?message=loans');

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