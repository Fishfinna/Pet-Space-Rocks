import SpaceRock from "../../../../types/spaceRocks";
import { Link } from "react-router-dom";

export default function Item({ spaceRock }: { spaceRock: SpaceRock }) {
  return (
    <div className="card w-96 shadow-md bg-secondary m-10">
      <div className="card-body">
        <h2 className="card-title">{spaceRock.name}</h2>
        <div>
          <p>distance from earth: </p>
          <p>size: </p>
          <p>hazardous: </p>
        </div>
        <div className="card-actions justify-end">
          <Link to="/profile" className="btn btn-primary">
            adopt now!
          </Link>
        </div>
      </div>
    </div>
  );
}
