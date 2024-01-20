/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, useState } from "react";


export default function useMultistepForm(steps : ReactElement[]) {
const [ currentStepIndex, setcurrentStepIndex] = useState(1)
function next() {
    setcurrentStepIndex( currIndex => {
        if (currIndex >= steps.length - 1) {
            return currIndex 
        }
        return currIndex + 1
    })
}
function back() {
    setcurrentStepIndex( currIndex => {
        if (currIndex <= 0) {
            return currIndex 
        }
        return currIndex - 1
    })
}
function goTo(index:number) {
    setcurrentStepIndex(index)
}

return{
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back
    }
}