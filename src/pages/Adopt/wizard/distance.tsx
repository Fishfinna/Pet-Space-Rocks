import { useWizard } from "react-use-wizard";

export default function Distance() {
  let { nextStep } = useWizard();

  return (
    <>
      <h1 className="text-5xl mb-12">Name your new pet!</h1>
      <input
        type="range"
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
