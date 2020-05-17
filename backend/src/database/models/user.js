const database = require('mongoose');
const Schema = database.Schema;
const { FileSchema } = require('./file');

const UserSchema = new Schema(
    {
        firstName: { type: String, maxlength: 80 },
        lastName: { type: String, maxlength: 175 },
        phoneNumber: { type: String, maxlength: 24},
        email: { type: String, maxlength: 255, required: true, unique: true },
        password: { type: String, maxlength: 255, required: true },
        disabled: { type: Boolean, default: false },
        avatars: [FileSchema],
        roles: [{ type: String, required: true }],
        loans: [{ type: Schema.Types.ObjectID, ref: 'Loans' }],
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
        updatedBy: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true },
);

UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    getters: true,
});

UserSchema.set('toObject', {
    getters: true,
});

module.exports = database.model('User', UserSchema);
