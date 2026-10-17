const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

// Create a new Note
noteRoutes.post('/notes', async (req, res) => {
    try {
        if (!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }

        const note = new noteModel(req.body.content);
        const savedNote = await note.save();

        res.status(201).send(savedNote);
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
});

// Retrieve all Notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
});

// Retrieve a single Note
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findById(req.params.noteId);

        if (!note) {
            return res.status(404).send({
                message: "Note not found"
            });
        }

        res.status(200).send(note);
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
});

// Update a Note
noteRoutes.put('/notes/:noteId', async (req, res) => {
    try {
        if (!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }

        const note = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            req.body.content,
            { new: true, runValidators: true }
        );

        if (!note) {
            return res.status(404).send({
                message: "Note not found"
            });
        }

        res.status(200).send(note);
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
});

// Delete a Note
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findByIdAndDelete(req.params.noteId);

        if (!note) {
            return res.status(404).send({
                message: "Note not found"
            });
        }

        res.status(200).send({
            message: "Note deleted successfully"
        });
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
});

module.exports = noteRoutes;