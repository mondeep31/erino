export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
}

export type ContactFormData = Omit<Contact, 'id'>