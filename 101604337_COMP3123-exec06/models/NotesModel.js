const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM'],
        required: true
    },
    dateAdded: {
        type: String
    },
    dateUpdated: {
        type: String
    }
});

module.exports = mongoose.model('Note', NoteSchema);