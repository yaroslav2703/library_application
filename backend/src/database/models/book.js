const database = require('mongoose');
const Schema = database.Schema;
const { FileSchema } = require('./file');

const BookSchema = new Schema(
    {
        isbn: { type: String, required: true, minlength: 13, maxlength: 13 },
        title: { type: String, required: true, maxlength: 255 },
        author: { type: String, required: true, maxlength: 255 },
        numberOfCopies: { type: Number, required: true, min: 1 },
        stock: { type: Number },
        images: [FileSchema],
        status: { type: String, enum: [ "available", "unavailable", null ] },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
        updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
        importHash: { type: String }
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