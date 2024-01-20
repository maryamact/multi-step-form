import { Container, Box, Paper, Typography, Stepper, Step, StepLabel, Button } from "@mui/material";
import useMultistepForm from "./hooks/useMultistepForm";

function App() {
  const stepss = [<div>one</div>, <div>two</div>, <div>three</div>];
  const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } = useMultistepForm(stepss)
  return (
    < >
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h6" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={currentStepIndex} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label, i) => (
              <Step key={i}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box gap={3} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
            <Typography component="h1" variant="h6" align="center">
              {step}
            </Typography>

            {!isFirstStep && (
              <Button
                onClick={back}
                sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            )}
            <Button
              variant="contained"
              onClick={next}
              sx={{ mt: 3, ml: 1 }}
            >
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </ >
  )
}

export default App
