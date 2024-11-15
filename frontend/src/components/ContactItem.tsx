// import React from "react";
// import { Contact } from "../types/Contact";
// import { IconButton, TableCell, TableRow } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// interface ContactItemProps {
//   contact: Contact;
//   onEdit: (contact: Contact) => void;
//   onDelete: (id: number) => void;
// }

// const ContactItem: React.FC<ContactItemProps> = ({
//   contact,
//   onEdit,
//   onDelete,
// }) => {
//   return (
//     <TableRow>
//       <TableCell>{contact.firstName}</TableCell>
//       <TableCell>{contact.lastName}</TableCell>
//       <TableCell>{contact.email}</TableCell>
//       <TableCell>{contact.phone}</TableCell>
//       <TableCell>{contact.company}</TableCell>
//       <TableCell>{contact.jobTitle}</TableCell>
//       <TableCell>
//         <IconButton
//           onClick={() => onEdit(contact)}
//           color="primary"
//           size="small"
//         >
//           <EditIcon />
//         </IconButton>
//         <IconButton
//           onClick={() => onDelete(contact.id)}
//           color="secondary"
//           size="small"
//         >
//           <EditIcon />
//         </IconButton>
//       </TableCell>
//     </TableRow>
//   );
// };

// export default ContactItem;

import React from "react";
import { Contact } from "../types/Contact";
import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface ContactItemProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  onEdit,
  onDelete,
}) => {
  return (
    <TableRow hover>
      <TableCell>{contact.firstName}</TableCell>
      <TableCell>{contact.lastName}</TableCell>
      <TableCell>{contact.email}</TableCell>
      <TableCell>{contact.phone}</TableCell>
      <TableCell>{contact.company}</TableCell>
      <TableCell>{contact.jobTitle}</TableCell>
      <TableCell>
        <IconButton
          onClick={() => onEdit(contact)}
          color="primary"
          size="small"
          sx={{ mr: 1 }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => onDelete(contact.id)}
          color="error"
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ContactItem;
