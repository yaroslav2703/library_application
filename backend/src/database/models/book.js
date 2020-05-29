const database = require('mongoose');
const Schema = database.Schema;

const BookSchema = new Schema(
    {
        isbn: { type: String, required: true, minlength: 13, maxlength: 13, unique: true },
        title: { type: String, required: true, maxlength: 255 },
        author: { type: String, required: true, maxlength: 255 },
        numberOfCopies: { type: Number, required: true, min: 1 },
        status: { type: String, required: true, enum: [ "available", "unavailable"] },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
        updatedBy: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true },
);

BookSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

BookSchema.set('toJSON', {
    getters: true,
});

BookSchema.set('toObject', {
    getters: true,
});

module.exports = database.model('Book', BookSchema);