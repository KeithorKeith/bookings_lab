const ObjectID = require('mongodb').ObjectID;
const express = require('express');

const createRouter = function (collection) {

    const router = express.Router();

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err});
        });
    });

    router.post('/', (req, res) => {
        newBooking = req.body;
        collection
        .insertOne(newBooking)
        .then((result) => res.json(result.ops[0]))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err});
        });
    })

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne({ _id: ObjectID(id) })
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err});
        });
    });

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection
        .findOneAndUpdate(
            { _id: ObjectID(id) },
            { $set: updatedData },
            { returnOriginal: false }
        )
        .then((result) => {
            res.json(result.value)
        })
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err});
        });
    })

    return router;
};

module.exports = createRouter;