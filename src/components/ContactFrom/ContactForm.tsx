import { Button, FormControl, TextField } from "@mui/material"
import { useState } from "react"
import envVariables from "../../utils/envUtils"

const initialState = {
  name: "",
  email: "",
  contactInfo: "",
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState)

  const formUpdate = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const id = event.target.id
    setFormData({ ...formData, [id]: event.target.value })
  }

  const handleFormSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()

    const data = { ...formData }

    fetch(envVariables.formUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    console.log("Was here")

    setFormData(initialState)
  }

  return (
    <FormControl>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={(event) => formUpdate(event)}
        required
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        onChange={(event) => formUpdate(event)}
        value={formData.email}
        required
      />
      <TextField
        id="contactInfo"
        value={formData.contactInfo}
        onChange={(event) => formUpdate(event)}
        placeholder="More information..."
        label="Contact Information"
        multiline
        minRows={2}
        maxRows={20}
      />
      <Button
        variant="outlined"
        color="primary"
        sx={{ borderRadius: "15px" }}
        type="submit"
        onClick={(event) => handleFormSubmit(event)}
      >
        Contact me!
      </Button>
      <div
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          position: "absolute",
          textIndent: "-99999px",
        }}
        aria-hidden="true"
      >
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
    </FormControl>
  )
}

export default ContactForm
