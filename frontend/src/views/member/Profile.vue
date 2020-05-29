<template>
    <div>
        <div class="page-title">
            <h3>Профиль</h3>
        </div>

        <button class="btn waves-effect waves-light pulse" @click.prevent="SayHi()">
            Поздороваться !
            <i class="material-icons right">sentiment_very_satisfied</i>
        </button>
        <form class="form">
            <div class="input-field">
                <input
                        id="description"
                        type="text"
                >
                <label for="description">Имя</label>
                <span
                        class="helper-text invalid">name</span>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
                Обновить
                <i class="material-icons right">send</i>
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "profile",
        data: () => ({
            connection: null
        }),
        created() {
            this.connection = new WebSocket("ws://localhost:8080/");
            this.connection.onopen = function (event) {
                console.log(event + 'sucsess');
            };
            this.connection.onmessage = function (event) {
                alert(event.data.toString());
            }
        },
        methods: {
            SayHi() {
                try {
                    this.connection.send('Привет !');
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>