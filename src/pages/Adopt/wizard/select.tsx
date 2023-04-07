import { useWizard } from "react-use-wizard";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Item from "../../../components/List/Stacks/Item/item";
import colors from "tailwindcss/colors";
import axios from "axios";
const NASA_API = import.meta.env.VITE_NASA_API;
import SpaceRock from "../../../types/spaceRocks";

export default function Select() {
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
        <div className="max-w-[500px] max-h-[600px] overflow-scroll">
          {requestData.data.near_earth_objects[
            new Date().toISOString().split("T")[0]
          ].map((spaceRock: SpaceRock) => (
            <Item spaceRock={spaceRock} />
          ))}
        </div>
      ) : (
        <div className="p-10">
          <ReactLoading type="spinningBubbles" color={colors.gray[300]} />
        </div>
      )}

      <a
        onClick={() => previousStep()}
        className=" text-gray-400 underline hover:no-underline cursor-pointer m-5"
      >
        Back
      </a>
    </>
  );
}
