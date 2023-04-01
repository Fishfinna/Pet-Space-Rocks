import { useWizard } from "react-use-wizard";

export default function Name() {
  let { nextStep, previousStep } = useWizard();

  return (
    <>
      <h1 className="text-5xl mb-12">Select your Pet!</h1>
      {/* query here maybe */}
      <button onClick={() => nextStep()} className="w-full max-w-xs rounded-xl">
        Next
      </button>
      <a
        onClick={() => previousStep()}
        className=" text-gray-400 underline hover:no-underline cursor-pointer"
      >
        Back
      </a>
    </>
  );
}
