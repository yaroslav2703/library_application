<template>
    <div>
        <div class="page-title">
            <h3>Выдача книг</h3>
        </div>
        <div>
            <router-link to="/l/loans/add" class="white-text">
                <button class="btn waves-effect waves-light" type="submit">
                    Добавить
                    <i class="material-icons right">add</i>
                </button>
            </router-link>
        </div>
        <div class="container">
            <form @submit.prevent="submitHandler">
                <div class="row">
                    <div class="col s3 m6">
                        <div class="input-field">
                            <input
                                    id="book"
                                    type="text"
                                    v-model.trim="book"
                                    :class="{invalid: ($v.book.$dirty && !$v.book.minLength) ||
                                                        ($v.book.$dirty && !$v.book.maxLength)}"
                            >
                            <label for="book">ISBN книги</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.book.$dirty && !$v.book.maxLength"
                            >Длина поля ISBN книги должны быть 13</small>
                            <small
                                    class="helper-text invalid"
                                    v-else-if="$v.book.$dirty && !$v.book.minLength"
                            >Длина поля ISBN книги должны быть 13</small>
                        </div>
                        <div class="input-field">
                            <input
                                    id="issueDate"
                                    type="text"
                                    v-model.trim="issueDate"
                            >
                            <label for="issueDate">дата выдачи</label>
                        </div>
                        <div class="input-field">
                            <input
                                    id="returnDate"
                                    type="text"
                                    v-model.trim="returnDate"
                            >
                            <label for="returnDate">реальная дата возврата</label>
                        </div>
                    </div>
                    <div class="col s3 m6">
                        <div class="input-field">
                            <input
                                    id="member"
                                    type="text"
                                    v-model.trim="member"
                                    :class="{invalid: ($v.member.$dirty && !$v.member.email)}"
                            >
                            <label for="member">e-mail читателя</label>
                            <small
                                    class="helper-text invalid"
                                    v-if="$v.member.$dirty && !$v.member.email"
                            >Введите корректный Email</small>
                        </div>
                        <div class="input-field">
                            <input
                                    id="dueDate"
                                    type="text"
                                    v-model.trim="dueDate"
                            >
                            <label for="dueDate">дата возврата</label>
                        </div>
                        <div class="input-field">
                            <input
                                    id="status"
                                    type="text"
                                    v-model.trim="status"
                            >
                            <label for="status">статус</label>
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
        <Table v-bind:loans="loans"/>
    </div>
</template>

<script>
    import Table from "@/components/app/librarian/loans/Table";
    import {maxLength, minLength, email} from "vuelidate/lib/validators";
    import messages from "@/utils/messages";
    import requests from "../../utils/requests";

    export default {
        name: "Loans",
        data: () => ({
            book: null,
            issueDate: null,
            returnDate: null,
            member: null,
            dueDate: null,
            status: null,
            loans: null
        }),
        components: {
            Table
        },
        validations: {
            book: {minLength: minLength(13), maxLength: maxLength(13)},
            member: {email}
        },
        async created() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            const response = await requests.request('/api/loans/get');
            this.loans = response.loans;

            for (let loan in this.loans) {
                const formDataM = {
                    _id: this.loans[loan].member
                };
                const formDataB = {
                    _id: this.loans[loan].book
                };
                this.loans[loan].member = await requests.request('/api/loans/get_member', 'POST', formDataM);
                this.loans[loan].book = await requests.request('/api/loans/get_book', 'POST', formDataB);
                this.loans[loan].issueDate = String(this.loans[loan].issueDate).substr(0, 10);
                this.loans[loan].dueDate = String(this.loans[loan].dueDate).substr(0, 10);
                if ( this.loans[loan].returnDate !== undefined) {
                    this.loans[loan].returnDate = String(this.loans[loan].returnDate).substr(0, 10);
                }
            }
        },
        methods: {
            async submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                if (this.status === 'продолжается') {
                    this.status = "inProgress"
                }
                else if (this.status === 'просрочено') {
                    this.status = "overdue"
                }
                else if (this.status === 'закрыто') {
                    this.status = "closed"
                }
                const formData = {
                    isbn: this.book,
                    issueDate: this.issueDate,
                    returnDate: this.returnDate,
                    email: this.member,
                    dueDate: this.dueDate,
                    status: this.status,
                };
                try {
                    const responce = await requests.request('/api/loans/filter', 'POST', formData);
                    this.loans = responce.loans;
                    for (let loan in this.loans) {
                        const formDataM = {
                            _id: this.loans[loan].member
                        };
                        const formDataB = {
                            _id: this.loans[loan].book
                        };
                        this.loans[loan].member = await requests.request('/api/loans/get_member', 'POST', formDataM);
                        this.loans[loan].book = await requests.request('/api/loans/get_book', 'POST', formDataB);
                        this.loans[loan].issueDate = String(this.loans[loan].issueDate).substr(0, 10);
                        this.loans[loan].dueDate = String(this.loans[loan].dueDate).substr(0, 10);
                        if ( this.loans[loan].returnDate !== undefined) {
                            this.loans[loan].returnDate = String(this.loans[loan].returnDate).substr(0, 10);
                        }
                    }
                    this.$message(responce.message);
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>