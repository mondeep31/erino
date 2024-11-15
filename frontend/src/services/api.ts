import axios from 'axios';
import { Contact, ContactFormData } from '../types/Contact';

const API_URL = 'http://localhost:5500/api';

export const api = {
    getContacts: async (): Promise<Contact[]> => {
        try {
            const response = await axios.get(`${API_URL}/contacts`);
            return response.data;
        } catch (error) {
            console.error("Error fetching contacts:", error);
            throw error;
        }
    },

    getContactsById: async (id: number): Promise<Contact> => {
        try {
            const response = await axios.get(`${API_URL}/contacts/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching contact with ID ${id}:`, error);
            throw error;
        }
    },

    createContact: async (contact: ContactFormData): Promise<Contact> => {
        try {
            const response = await axios.post(`${API_URL}/contacts`, contact);
            return response.data;
        } catch (error) {
            console.error("Error creating contact:", error);
            throw error;
        }
    },

    updateContact: async (contact: ContactFormData, id: number): Promise<Contact> => {
        try {
            const response = await axios.put(`${API_URL}/contacts/${id}`, contact);
            return response.data;
        } catch (error) {
            console.error(`Error updating contact with ID ${id}:`, error);
            throw error;
        }
    },

    deleteContact: async (id: number): Promise<void> => {
        try {
            await axios.delete(`${API_URL}/contacts/${id}`);
        } catch (error) {
            console.error(`Error deleting contact with ID ${id}:`, error);
            throw error;
        }
    }
}
