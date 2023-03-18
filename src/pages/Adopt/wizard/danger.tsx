import { useWizard } from "react-use-wizard";

export default function Danger() {
  let { nextStep } = useWizard();

  return (
    <>
      <h1 className="text-5xl mb-12">Would you like a Danger Rock?</h1>
      <div>
        <label>Safe:</label>
        <input type="radio" name="radio" className="radio radio-info" />
      </div>
      <div>
        <label>Hazardous:</label>
        <input type="radio" name="radio" className="radio radio-error" />
      </div>
      <button
        onClick={() => nextStep()}
        className="w-full max-w-xs rounded-xl "
      >
        Next
      </button>
    </>
  );
}
