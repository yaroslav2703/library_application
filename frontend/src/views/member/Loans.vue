<template>
    <div>
        <div class="page-title">
            <h3>Взятые книги</h3>
        </div>
        <div class="divider"></div>
        <Table v-bind:loans="loans"/>
    </div>
</template>

<script>
    import Table from "@/components/app/member/loans/Table";
    import {maxLength, minLength, email} from "vuelidate/lib/validators";
    import messages from "@/utils/messages";
    import requests from "../../utils/requests";
    import auth from "@/utils/auth";

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
            const formDataU = {
                _id: auth.GetId()
            };
            const response = await requests.request('/api/loans/get_by_user', 'POST', formDataU);
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
        }

    }
</script>

<style scoped>

</style>