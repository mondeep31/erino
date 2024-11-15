// import React, { useEffect, useState } from "react";
// import { Box, Container, Paper, Typography } from "@mui/material";
// import { Contact, ContactFormData } from "./types/Contact";
// import ContactForm from "./components/ContactForm";
// import ContactList from "./components/ContactList";
// import { api } from "./services/api";

// const App: React.FC = () => {
//   const [contacts, setContacts] = useState<Contact[]>([]);
//   const [editingContact, setEditingContact] = useState<Contact | null>(null);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       const fetchedContacts = await api.getContacts();
//       setContacts(fetchedContacts);
//     } catch (error) {
//       console.error("Error fetching contacts:", error);
//     }
//   };

//   const handleAddContact = async (contactData: ContactFormData) => {
//     try {
//       await api.createContact(contactData);
//       fetchContacts();
//     } catch (error) {
//       console.error("Error adding contact: ", error);
//     }
//   };

//   const handleUpdateContact = async (contactData: ContactFormData) => {
//     if (editingContact) {
//       try {
//         await api.updateContact(contactData, editingContact.id);
//         setEditingContact(null);
//         fetchContacts();
//       } catch (error) {
//         console.error("Error updating contact: ", error);
//       }
//     }
//   };

//   const handleEditContact = (contact: Contact) => {
//     setEditingContact(contact);
//   };

//   const handleDeleteContact = async (id: number) => {
//     try {
//       await api.deleteContact(id);
//       fetchContacts();
//     } catch (error) {
//       console.error("Error deleting contact: ", error);
//     }
//   };

//   const handleSelectContact = async (id: number) => {
//     try {
//       const contact = await api.getContactsById(id);
//       setSelectedContact(contact);
//     } catch (error) {
//       console.error("Error fetching contact by ID: ", error);
//     }
//   };

//   return (
//     <Container maxWidth="lg" className="py-8">
//       <Typography
//         variant="h4"
//         component="h1"
//         gutterBottom
//         className="text-center mb-8"
//       >
//         Contact Manager
//       </Typography>

//       <Paper elevation={3} className="p-6 mb-8">
//         <Typography variant="h5" component="h2" gutterBottom>
//           {editingContact ? "Edit Contact" : "Add New Contact"}
//         </Typography>
//         <ContactForm
//           onSubmit={editingContact ? handleUpdateContact : handleAddContact}
//           initialData={editingContact || undefined}
//         />
//       </Paper>

//       <Paper elevation={3} className="p-6">
//         <Typography variant="h5" component="h2" gutterBottom>
//           Contacts List
//         </Typography>
//         <Box className="mt-4">
//           <ContactList
//             contacts={contacts}
//             onEdit={handleEditContact}
//             onDelete={handleDeleteContact}
//             onSelect={handleSelectContact}
//           />
//         </Box>
//       </Paper>

//       {selectedContact && (
//         <Paper elevation={3} className="p-6 mt-8">
//           <Typography variant="h5" component="h2" gutterBottom>
//             Selected Contact Details
//           </Typography>
//           <Box>
//             <Typography>
//               Name: {selectedContact.firstName} {selectedContact.lastName}
//             </Typography>
//             <Typography>Email: {selectedContact.email}</Typography>
//             <Typography>Phone: {selectedContact.phone}</Typography>
//             <Typography>Company: {selectedContact.company}</Typography>
//             <Typography>Job Title: {selectedContact.jobTitle}</Typography>
//           </Box>
//         </Paper>
//       )}
//     </Container>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { Contact, ContactFormData } from "./types/Contact";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { api } from "./services/api";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const fetchedContacts = await api.getContacts();
      setContacts(fetchedContacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleAddContact = async (contactData: ContactFormData) => {
    try {
      await api.createContact(contactData);
      fetchContacts();
    } catch (error) {
      console.error("Error adding contact: ", error);
    }
  };

  const handleUpdateContact = async (contactData: ContactFormData) => {
    if (editingContact) {
      try {
        await api.updateContact(contactData, editingContact.id);
        setEditingContact(null);
        fetchContacts();
      } catch (error) {
        console.error("Error updating contact: ", error);
      }
    }
  };

  const handleEditContact = (contact: Contact) => {
    setEditingContact(contact);
  };

  const handleDeleteContact = async (id: number) => {
    try {
      await api.deleteContact(id);
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  };

  const handleSelectContact = async (id: number) => {
    try {
      const contact = await api.getContactsById(id);
      setSelectedContact(contact);
    } catch (error) {
      console.error("Error fetching contact by ID: ", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{ mb: 6, color: "primary.main" }}
          >
            Contact Manager
          </Typography>

          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {editingContact ? "Edit Contact" : "Add New Contact"}
            </Typography>
            <ContactForm
              onSubmit={editingContact ? handleUpdateContact : handleAddContact}
              initialData={editingContact || undefined}
            />
          </Paper>

          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Contacts List
            </Typography>
            <Box sx={{ mt: 2 }}>
              <ContactList
                contacts={contacts}
                onEdit={handleEditContact}
                onDelete={handleDeleteContact}
                onSelect={handleSelectContact}
              />
            </Box>
          </Paper>

          {selectedContact && (
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Selected Contact Details
              </Typography>
              <Box>
                <Typography>
                  Name: {selectedContact.firstName} {selectedContact.lastName}
                </Typography>
                <Typography>Email: {selectedContact.email}</Typography>
                <Typography>Phone: {selectedContact.phone}</Typography>
                <Typography>Company: {selectedContact.company}</Typography>
                <Typography>Job Title: {selectedContact.jobTitle}</Typography>
              </Box>
            </Paper>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
