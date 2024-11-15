import React, { useState } from "react";
import { ContactFormData } from "../types/Contact";
import { Box, Button, Grid, TextField } from "@mui/material";

interface ContactFormProps {
  onSubmit: (contact: ContactFormData) => void;
  initialData?: ContactFormData;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<ContactFormData>(
    initialData || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="company"
            label="Company"
            value={formData.company}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="jobTitle"
            label="Job Title"
            value={formData.jobTitle}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          {initialData ? "Update Contact" : "Add Contact"}
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
