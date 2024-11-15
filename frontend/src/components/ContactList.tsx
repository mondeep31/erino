
import React from "react";
import { Contact } from "../types/Contact";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ContactItem from "./ContactItem";

interface ContactListProps {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
  onSelect: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onEdit,
  onDelete,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Company</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Job Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
