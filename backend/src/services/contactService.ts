import { Contact, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

export const ContactService = {

    //create contact
    async createContact(data: Omit<Contact, 'id'>): Promise<Contact> {
        return prisma.contact.create({ data });
      },

    // get all contacts
    async getAllContacts(): Promise<Contact[]> {
        return prisma.contact.findMany();
    },

    //get contacts by id
    async getContactbyId(id: number): Promise<Contact | null> {
        return prisma.contact.findUnique({
            where: {
                id
            },  
        })
    },
 
    // delete contacts
    async deleteContact(id: number) : Promise<Contact | null>{
        return prisma.contact.delete({
            where: {
                id
            }
        })
    },

    //update contact
    async updateContact(id: number, data: Partial<Contact>) : Promise<Contact | null >{
        return prisma.contact.update({
            where: {
                id
            },
            data,
        })
    }

}
