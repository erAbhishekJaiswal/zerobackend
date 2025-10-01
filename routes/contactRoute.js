const express = require('express');
const { submitContactForm, getAllContacts, deleteContact, getContactById, updateContact } = require('../controllers/contactController');

const router = express.Router();

router.post('/contact', submitContactForm);
router.get('/contacts', getAllContacts);
router.delete('/contacts/:id', deleteContact);
router.get('/contacts/:id', getContactById);
router.put('/contacts/:id', updateContact);

module.exports = router;