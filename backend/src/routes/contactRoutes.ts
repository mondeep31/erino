import express from 'express'
import { createContact, deleteContacts, getContacts, updateContacts, getContactbyId } from '../controllers/contactController';

const router = express.Router();

router.get("/contacts", (req,res) => {


})

router.post('/contacts', createContact);
router.get('/contacts', getContacts);
router.get('/contacts/:id', getContactbyId);
router.put('/contacts/:id', updateContacts);
router.delete('/contacts/:id', deleteContacts);

export default router;