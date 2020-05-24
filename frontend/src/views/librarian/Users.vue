<template>
    <div>
        <div class="page-title">
            <h3>Пользователи</h3>
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
                                    id="email"
                                    type="text"
                            >
                            <label for="email">электронная почта</label>
                            <span class="helper-text invalid">Введите e-mail</span>
                        </div>
                        <div class="input-field">
                            <input
                                    id="status"
                                    type="text"
                            >
                            <label for="status">статус</label>
                            <span class="helper-text invalid">Введите статус</span>
                        </div>
                    </div>
                    <div class="col s3 m6">
                        <div class="input-field">
                            <input
                                    id="name"
                                    type="text"
                            >
                            <label for="name">имя</label>
                            <span class="helper-text invalid">Введите имя</span>
                        </div>
                        <div class="input-field">
                            <input
                                    id="role"
                                    type="text"
                            >
                            <label for="role">роль</label>
                            <span class="helper-text invalid">Введите роль</span>
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
                        <th>Почта</th>
                        <th>Имя</th>
                        <th>Роль</th>
                        <th>Статус</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>yaroslav.pitsukha@gmail.com</td>
                        <td>Ярослав</td>
                        <td>Библиотекарь</td>
                        <td>активный</td>
                        <td>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">visibility</i>
                            </a>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">create</i>
                            </a>
                        </td>
                    <tr>
                        <td></td>
                        <td>yaroslav.pitsukha@gmail.com</td>
                        <td>Ярослав</td>
                        <td>Библиотекарь</td>
                        <td>активный</td>
                        <td>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">visibility</i>
                            </a>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">create</i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>yaroslav.pitsukha@gmail.com</td>
                        <td>Ярослав</td>
                        <td>Библиотекарь</td>
                        <td>активный</td>
                        <td>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">visibility</i>
                            </a>
                            <a class="waves-effect waves-teal btn-flat">
                                <i class="material-icons">create</i>
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
        name: "Users"
    }
</script>

<style scoped>

</style>