<template>
    <div class="app-main-layout">
        <Navbar @click="isOpen = !isOpen"/>
        <Sidebar v-model="isOpen"/>
        <main class="app-content" :class="{full: !isOpen}">
            <div class="app-page">
                <router-view/>
            </div>
        </main>
    </div>
</template>

<script>
    import Navbar from "@/components/app/librarian/Navbar";
    import Sidebar from "@/components/app/librarian/Sidebar";
    export default {
        name: "LibrarianLayout",
        data:() => ({
            isOpen: true
        }),
        components: {
            Navbar, Sidebar
        }
    }
</script>

<style scoped>

</style>