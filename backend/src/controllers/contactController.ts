import { NextFunction, Request, Response } from "express"
import { ContactService } from "../services/contactService"



export const createContact = async(req: Request,res: Response, next: NextFunction) => {
    try{
        const body = req.body;
        const contacts= await ContactService.createContact(body);
        res.status(201).json(contacts);
    }catch(error){
        // res.status(500).json({ error: 'Internal server error' });
        next(error);
    }
}


export const getContacts = async(req:Request, res: Response, next: NextFunction) => {
    try{

        const contacts = await ContactService.getAllContacts();

        res.json(contacts);
    }catch(error){
        // res.status(500).json({ error: 'Internal server error' });
        console.error("error here is ", error);
        next(error)
    }

}


export const getContactbyId = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const id = parseInt(req.params.id);
        const contact = await ContactService.getContactbyId(id);
        if (!contact){
            res.status(404).json({ error: 'Contact not found' });
        }
        res.json(contact);
    }catch(error){
        // res.status(500).json({ error: 'Internal server error' });
        next(error);
    }
}

export const updateContacts = async(req:Request, res: Response, next: NextFunction) => {
    try{
        const id = parseInt(req.params.id)
        const updatedContact = await ContactService.updateContact(id, req.body);
        if (!updatedContact){
            res.status(404).json({
                message: 'Contact not found'
            })
        }
        res.json(updatedContact)
    }catch(error){
        // res.status(500).json({ error: 'Internal server error' });
        next(error);
    }
}

export const deleteContacts = async(req:Request, res: Response, next: NextFunction) => {
    try{
        const deletedContact = await ContactService.deleteContact(Number(req.params.id))
        if (!deletedContact) {
            res.status(404).json({
                message: 'Contact not found'
            })
        }
        res.json({message: 'Contact deleted successfully'})
    }catch(error){
        // res.status(500).json({ error: 'Internal server error' });
        next(error);
    }

}
