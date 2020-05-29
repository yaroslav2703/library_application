<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">

        <router-link v-for="link in links" :key="link.url" tag="li" active-class="active" :to="link.url" >
            <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
    </ul>
</template>

<script>
    export default {
        name: "Sidebar",
        props: ['value'],
        data: () => ({
                links: [
                    {title: 'Пользователи', url: '/l/users'},
                    {title: 'Выдача книг', url: '/l/loans'},
                    {title: 'Книги', url: '/l/books'},
                ]
            })
    }
</script>

<style scoped>

</style>