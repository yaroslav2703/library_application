<template>
    <div>
        <div class="page-title">
            <h3>Книги</h3>
        </div>
        <div>

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
                        <button class="btn waves-effect waves-light" type="submit">
                            Сброс
                            <i class="material-icons right">refresh</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="divider"></div>
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
                    <tr>
                        <td></td>
                        <td>53774</td>
                        <td>Рожь</td>
                        <td>Пушкин</td>
                        <td>Доступна</td>
                        <td>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">visibility</i>
                            </a>
                        </td>
                    <tr>
                        <td></td>
                        <td>53774</td>
                        <td>Рожь</td>
                        <td>Пушкин</td>
                        <td>Доступна</td>
                        <td>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">visibility</i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>53774</td>
                        <td>Рожь</td>
                        <td>Пушкин</td>
                        <td>Доступна</td>
                        <td>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">visibility</i>
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Books"
    }
</script>

<style scoped>

</style>