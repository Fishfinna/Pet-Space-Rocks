import "./adopt.scss";
import * as React from "react";
import { Wizard, useWizard } from "react-use-wizard";

export default function About(): JSX.Element {
  return (
    <Wizard>
      <Step1 />
    </Wizard>
  );
}

const Step1 = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    alert("Going to step 2");
  });

  return (
    <>
      <button onClick={() => previousStep()}>Previous ⏮️</button>
      <button onClick={() => nextStep()}>Next ⏭</button>
    </>
  );
};
