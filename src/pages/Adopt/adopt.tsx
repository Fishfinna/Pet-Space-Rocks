import "./adopt.scss";
import { Wizard } from "react-use-wizard";

// wizard steps
import Name from "./wizard/name";

export default function About(): JSX.Element {
  return (
    <Wizard wrapper={<form id="wrapper" />}>
      <Name />
    </Wizard>
  );
}
