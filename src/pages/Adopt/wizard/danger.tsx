import { useWizard } from "react-use-wizard";

export default function Danger() {
  let { nextStep, previousStep } = useWizard();

  return (
    <>
      <h1 className="text-5xl mb-12">Would you like a Danger Rock?</h1>
      <div className="flex flex-col">
        <div className="labeled">
          <label>Either:</label>
          <input type="radio" name="radio" className="radio" />
        </div>
        <div className="labeled">
          <label>Safe:</label>
          <input type="radio" name="radio" className="radio radio-info" />
        </div>
        <div className="labeled">
          <label>Hazardous:</label>
          <input type="radio" name="radio" className="radio radio-error" />
        </div>
      </div>
      <button
        onClick={() => nextStep()}
        className="w-full max-w-xs rounded-xl m-10"
      >
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
