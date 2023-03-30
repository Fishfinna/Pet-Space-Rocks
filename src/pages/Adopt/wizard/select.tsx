import { useWizard } from "react-use-wizard";

export default function Name() {
  let { nextStep } = useWizard();

  return (
    <>
      <h1 className="text-5xl mb-12">Select your Pet!</h1>
      <button onClick={() => nextStep()} className="w-full max-w-xs rounded-xl">
        Next
      </button>
    </>
  );
}
