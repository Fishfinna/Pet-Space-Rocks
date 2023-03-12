import "./adopt.scss";

export default function Adopt() {
  return (
    <div id="adopt">
      <h1 className="text-7xl pt-[100px] text-center">ADOPT</h1>
      <h3 className="text-xl pd-10 text-center">FILTER FOR A FRIEND!</h3>
      <form>
        <label htmlFor="distance" className="label text-base-content">
          Distance From Earth:
        </label>
        <input
          type="range"
          min="0"
          max="100"
          className="range range-xs range-primary w-[500px]"
        />
        <div className="form-control ">
          <label className="label cursor-pointer">
            <span className="label-text">Hazardous:</span>
            <input
              type="radio"
              name="radio-10"
              className="radio radio-xs checked:bg-error ml-5"
              checked
            />
          </label>
          <div className="divider text-xs">OR</div>
          <label className="label cursor-pointer">
            <span className="label-text">Safe:</span>
            <input
              type="radio"
              name="radio-10"
              className="radio radio-xs checked:bg-info ml-5"
              checked
            />
          </label>
        </div>
        <select className="select select-sm select-primary w-full max-w-xs">
          <option disabled selected>
            Size
          </option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Any</option>
        </select>
        <div className="matching-list"></div>
        <button type="submit" className="btn btn-primary">
          ADOPT
        </button>
      </form>
    </div>
  );
}
