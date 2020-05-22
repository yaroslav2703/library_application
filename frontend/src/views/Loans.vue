<template>
    <div>
        <div class="page-title">
            <h3>Аренда книг</h3>
        </div>
        <div>
            <button class="btn waves-effect waves-light" type="submit">
                Добавить
                <i class="material-icons right">add</i>
            </button>
        </div>
        <div class="container">
            <form>
                <div class="row">
                    <div class="col s3 m6">
                        <div class="input-field">
                            <input
                                    id="book"
                                    type="text"
                            >
                            <label for="book">книга</label>
                            <span class="helper-text invalid">Введите название книги</span>
                        </div>
                        <div class="input-field">
                            <input
                                    id="issueDate"
                                    type="text"
                            >
                            <label for="issueDate">дата выдачи</label>
                            <span class="helper-text invalid">Введите дату выдачи</span>
                        </div>
                        <div class="input-field">
                            <input
                                    id="returnDate"
                                    type="text"
                            >
                            <label for="returnDate">реальная дата возврата</label>
                            <span class="helper-text invalid">Введите реальную дату возврата</span>
                        </div>
                    </div>
                    <div class="col s3 m6">
                        <div class="input-field">
                            <input
                                    id="member"
                                    type="text"
                            >
                            <label for="member">e-mail читателя</label>
                            <span class="helper-text invalid">Введите e-mail читателя</span>
                        </div>
                        <div class="input-field">
                            <input
                                    id="dueDate"
                                    type="text"
                            >
                            <label for="dueDate">дата возврата</label>
                            <span class="helper-text invalid">Введите дату возврата</span>
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
                        <th>Книга</th>
                        <th>Читатель</th>
                        <th>Дата выдачи</th>
                        <th>Дата возврата</th>
                        <th>Реальная дата выдачи</th>
                        <th>Статус</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>Рожь-Пушкин</td>
                        <td>yaroslav.pitsukha@gmail.com</td>
                        <td>20.05.20</td>
                        <td>25.05.20</td>
                        <td>24.05.20</td>
                        <td>закрыта</td>
                        <td>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">visibility</i>
                            </a>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">create</i>
                            </a>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">clear</i>
                            </a>
                        </td>
                    <tr>
                        <td></td>
                        <td>Рожь-Пушкин</td>
                        <td>yaroslav.pitsukha@gmail.com</td>
                        <td>20.05.20</td>
                        <td>25.05.20</td>
                        <td>24.05.20</td>
                        <td>закрыта</td>
                        <td>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">visibility</i>
                            </a>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">create</i>
                            </a>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">clear</i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Рожь-Пушкин</td>
                        <td>yaroslav.pitsukha@gmail.com</td>
                        <td>20.05.20</td>
                        <td>25.05.20</td>
                        <td>24.05.20</td>
                        <td>закрыта</td>
                        <td>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">visibility</i>
                            </a>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">create</i>
                            </a>
                            <a class="waves-effect waves-teal btn-flat">
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
    </div>
</template>

<script>
    export default {
        name: "Loans"
    }
</script>

<style scoped>

</style>