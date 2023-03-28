import "./adopt.scss";
import { Wizard } from "react-use-wizard";

// wizard steps
import Name from "./wizard/name";
import Danger from "./wizard/danger";
import Distance from "./wizard/distance";
import Select from "./wizard/select";

export default function About(): JSX.Element {
  return (
    <Wizard wrapper={<form id="wrapper" />}>
      <Name />
      <Distance />
      <Danger />
      <Select />
    </Wizard>
  );
}
