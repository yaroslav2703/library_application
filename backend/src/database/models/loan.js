const database = require('mongoose');
const Schema = database.Schema;

const LoanSchema = new Schema(
    {
        book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
        member: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        issueDate: { type: Date, required: true },
        dueDate: { type: Date, required: true },
        returnDate: { type: Date },
        status: { type: String, enum: [ "inProgress", "overdue", "closed" ] },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
        updatedBy: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true },
);

LoanSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

LoanSchema.set('toJSON', {
    getters: true,
});

LoanSchema.set('toObject', {
    getters: true,
});

module.exports = database.model('Loan', LoanSchema);
