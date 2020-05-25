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
            <form>
                <div class="row">
                    <div class="col s3 m6">
                        <div class="input-field">
                            <input
                                    id="isbn"
                                    type="text"
                            >
                            <label for="isbn">ISBN</label>
                            <span class="helper-text invalid">Введите ISBN</span>
                        </div>

                        <div class="input-field">
                            <input
                                    id="author"
                                    type="text"
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
                            >
                            <label for="title">название</label>
                            <span class="helper-text invalid">Введите название</span>
                        </div>
                        <div class="input-field">
                            <input
                                    id="status"
                                    type="text"
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
        <Table/>

    </div>
</template>

<script>
    import Table from "@/components/app/librarian/books/Table";
    export default {
        name: "Books",
        components: {
            Table
        }
    }
</script>

<style scoped>

</style>