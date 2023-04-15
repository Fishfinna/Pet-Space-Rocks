import { useWizard } from "react-use-wizard";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Item from "../../../components/List/Stacks/Item/item";
import BackButton from "../../../components/backButton";
import colors from "tailwindcss/colors";
import axios from "axios";
const NASA_API = import.meta.env.VITE_NASA_API;
import SpaceRock from "../../../types/spaceRocks";

export default function Select() {
  let { nextStep, previousStep } = useWizard();
  let [position, updatePosition] = useState<number>(0);
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
      {console.log(
        { position },
        requestData?.data.near_earth_objects[
          new Date().toISOString().split("T")[0]
        ].length,
        requestData?.data.near_earth_objects[
          new Date().toISOString().split("T")[0]
        ]
      )}
      <h1 className="text-5xl mb-12">Select your Pet!</h1>

      {requestData ? (
        <div className="flex items-center">
          <button
            type="button"
            className="material-symbols-rounded btn default"
            disabled={position < 2}
            onClick={(e) => {
              updatePosition(position - 1);
              e.preventDefault();
            }}
          >
            chevron_left
          </button>

          {[
            requestData.data.near_earth_objects[
              new Date().toISOString().split("T")[0]
            ][position],
          ].map((spaceRock: SpaceRock) => (
            <Item spaceRock={spaceRock} key={spaceRock.id} />
          ))}

          <button
            type="button"
            className="material-symbols-rounded btn default"
            disabled={
              !(
                position + 1 <
                requestData.data.near_earth_objects[
                  new Date().toISOString().split("T")[0]
                ].length
              )
            }
            onClick={(e) => {
              e.preventDefault;
              updatePosition(position + 1);
            }}
          >
            chevron_right
          </button>
        </div>
      ) : (
        <div className="p-10">
          <ReactLoading type="spinningBubbles" color={colors.gray[300]} />
        </div>
      )}

      <BackButton previous={() => previousStep()} />
    </>
  );
}
