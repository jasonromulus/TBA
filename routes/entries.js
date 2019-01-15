// const express = require('express');
// const router = express.Router();
// const Entry = require('../models/entry')

// // NEW
// router.get('/entries/new', (req, res) => {
//     res.render('entries-new', {});
// })

// // CREATE
// router.post('/entries', (req, res) => {
//     console.log("req.body:", req.body)
//     Entry.create(req.body)
//         .then((entry) => {
//             console.log("new entry:", entry)
//             res.redirect(`/entries/${entry.id}`)
//         })
//         .catch((err) => {
//             console.log(err.message)
//         })
// })

// // SHOW
// router.get('/entries/:id', (req, res) => {
//     Entry.findById(req.params.id)
//         .then((entry) => {
//             Entry.find({ entryId: req.params.id})
//                 .then(entries => {
//                     res.render('entries-show', {entry: entry})
//                 })
//             })
//         .catch((err) => {
//             console.log(err.message)
//     })
// })

// // EDIT
// router.get('/entries/:id/edit', (req, res) => {
//     Entry.findById(req.params.id, function(err, entry) {
//         res.render('entries-edit', {entry: entry})
//     })
// })

// // UPDATE
// router.put('/entries/:id', (req, res) => {
//     Entry.findByIdAndUpdate(req.params.id, req.body)
//         .then(entry => {
//             res.redirect(`/entries/${entry._id}`)
//         })
//         .catch(err => {
//             console.log(err.message)
//         })
// })

// // DELETE
// router.delete('/entries/:id', function(req, res) {
//     console.log('entry deleted')
//     Entry.findByIdAndRemove(req.params.id).then((entry) => {
//         res.redirect('/')
//     }).catch((err => {
//         console.log(err.message)
//     }))
// })

// module.exports = router;