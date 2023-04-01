import { useWizard } from "react-use-wizard";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import colors from "tailwindcss/colors";
import axios from "axios";
import dotenv from "dotenv";
const NASA_API = import.meta.env.VITE_NASA_API;

export default function Name() {
  let { nextStep, previousStep } = useWizard();
  const [requestData, setRequestData] = useState<any>();

  // get the data from nasa
  useEffect(() => {
    let getData = async () => {
      const data = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?api_key=${NASA_API}`
      );
      setRequestData(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1 className="text-5xl mb-12">Select your Pet!</h1>

      {requestData ? (
        <p className="max-w-[500px] max-h-[600px] overflow-scroll">
          {JSON.stringify(requestData.data.near_earth_objects)}
        </p>
      ) : (
        <div className="p-10">
          <ReactLoading type="spinningBubbles" color={colors.gray[300]} />
        </div>
      )}

      <button
        onClick={() => nextStep()}
        className="w-full max-w-xs rounded-xl p-5"
      >
        Next
      </button>
      <a
        onClick={() => previousStep()}
        className=" text-gray-400 underline hover:no-underline cursor-pointer m-5"
      >
        Back
      </a>
    </>
  );
}
