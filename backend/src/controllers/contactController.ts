import { NextFunction, Request, Response } from "express"
import { ContactService } from "../services/contactService"
import { Contact } from "lucide-react";


export const createContact = async(req: Request,res: Response, next: NextFunction) => {
    try{
        const body = req.body;
        const contact = await ContactService.createContact(body);
        res.status(201).json(contact);
    }catch(error){
        next(error);
    }
}


export const getContacts = async(req:Request, res: Response, next: NextFunction) => {
    try{
        const contacts = await ContactService.getAllContacts();
        res.json(contacts);
    }catch(error){
        next(error);
    }

}


export const getContactbyId = async(req: Request, res: Response, next: NextFunction) => {
    try{

        const contact = await ContactService.getContactbyId(Number(req.params.id));
        if (!contact){
            return res.status(404).json({
                message: 'Contact not found'
            })
        }
        res.json(contact);
    }catch(error){
        next(error);
    }
}

export const updateContacts = async(req:Request, res: Response, next: NextFunction) => {
    try{
        const updatedContact = await ContactService.updateContact(Number(req.params.id), req.body);
        if (!updatedContact){
            return res.status(404).json({
                message: 'Contact not found'
            })
        }
        res.json(updatedContact)
    }catch(error){
        next(error);
    }
}

export const deleteContacts = async(req:Request, res: Response, next: NextFunction) => {
    try{
        const deletedContact = await ContactService.deleteContact(Number(req.params.id))
        if (!deletedContact) {
            return res.status(404).json({
                message: 'Contact not found'
            })
        }
        res.json({message: 'Contact deleted successfully'})
    }catch(error){
        next(error);
    }

}
