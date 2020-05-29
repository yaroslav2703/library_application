<template>
    <div>
        <div class="table-of-contents">
            <table class="highlight centered responsive-table">
                <thead>
                <tr>
                    <th></th>
                    <th>Почта</th>
                    <th>Имя</th>
                    <th>Роль</th>
                    <th>Статус</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" :key="user.email">
                    <td></td>
                    <td>{{user.email}}</td>
                    <td>{{user.lastName}} {{user.firstName}}</td>
                    <td v-if="user.role === 'member'">читатель</td>
                    <td v-else-if="user.role === 'librarian'">библиотекарь</td>
                    <td v-if="user.disabled === false">активный</td>
                    <td v-else-if="user.disabled === true">заблокирован</td>
                    <td>
                        <a class="waves-effect waves-teal btn-flat">
                            <i class="material-icons">create</i>
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
    export default {
        name: "table",
        props: ['users']
    }
</script>

<style scoped>

</style>