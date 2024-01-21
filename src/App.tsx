/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Box, Paper, Stepper, Step, StepLabel, Button, Alert, Snackbar, } from "@mui/material";
import useMultistepForm from "./hooks/useMultistepForm";
import UserForm from "./components/UserForm";
import AddressForm from "./components/AddressForm";
import AccountForm from "./components/AccountForm";
import FormWraper from "./components/FormWraper";
import { FormEvent, useRef, useState } from "react";

const INITIALDATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}
export type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}
export type FormProps = {
  updateFields: (fields: Partial<FormData>) => void
} & Partial<FormData>

function App() {
  const [data, setData] = useState(INITIALDATA)
  const stepsTitle = ["User Detail", "Address", "Account Creation"];
  const allSteps = [
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />
  ];
  const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } = useMultistepForm(allSteps)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successfull Account Creation.")
  }

  return (
    < >
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Stepper activeStep={currentStepIndex} sx={{ pt: 3, pb: 5 }}>
            {stepsTitle.map((label, i) => (
              <Step key={i}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form onSubmit={onSubmit}>
            <FormWraper title={stepsTitle[currentStepIndex]} >
              {step}
            </FormWraper>
            <Box gap={2} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
              {!isFirstStep && (
                <Button
                  onClick={back}
                  sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                // onClick={next}
                sx={{ mt: 3, ml: 1 }}
                type="submit"
              >
                {isLastStep ? "Finish" : "Next"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </ >
  )
}

export default App
