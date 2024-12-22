import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    recipient: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    websiteLink: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
});

export const Person = mongoose.model('Person', personSchema);
