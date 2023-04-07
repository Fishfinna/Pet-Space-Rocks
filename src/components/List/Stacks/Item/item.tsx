import SpaceRock from "../../../../types/spaceRocks";

export default function Item({ spaceRock }: { spaceRock: SpaceRock }) {
  return (
    <div className="card w-96 glass">
      <figure>
        <img src="https://images-api.nasa.gov/asset" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{spaceRock.name}</h2>
        <p>desc</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">adopt now!</button>
        </div>
      </div>
    </div>
  );
}
