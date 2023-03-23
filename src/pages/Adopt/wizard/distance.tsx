import { useWizard } from "react-use-wizard";

export default function Distance() {
  let { nextStep } = useWizard();

  return (
    <>
      <h1 className="text-5xl mb-12">
        How far away would you like your pet to be?
      </h1>
      <input
        type="range"
        min="0"
        max="100"
        value="50"
        className="range range-secondary max-w-[60vw] m-12"
      />
      <button
        onClick={() => nextStep()}
        className="w-full max-w-xs rounded-xl m-5"
      >
        Next
      </button>
    </>
  );
}
