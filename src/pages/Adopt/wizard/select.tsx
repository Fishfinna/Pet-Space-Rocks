import { useWizard } from "react-use-wizard";

export default function Name() {
  let { nextStep } = useWizard();

  return (
    <>
      <h1 className="text-5xl mb-12">Select your Pet!</h1>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent w-full max-w-xs focus:input-primary"
      />
      <button
        onClick={() => nextStep()}
        className="w-full max-w-xs rounded-xl "
      >
        Next
      </button>
    </>
  );
}
