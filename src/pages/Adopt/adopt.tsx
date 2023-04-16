import "./adopt.scss";
import { Wizard } from "react-use-wizard";
import { motion } from "framer-motion";

// wizard steps
import Name from "./wizard/name";
import Danger from "./wizard/danger";
import Distance from "./wizard/distance";
import Select from "./wizard/select";

let pages = [Name, Danger, Distance, Select];

export default function About(): JSX.Element {
  return (
    <Wizard>
      {pages.map((Page) => (
        <motion.div
          initial={{ x: 10, y: 10, opacity: "0%" }}
          animate={{
            x: 0,
            y: 0,
            opacity: "100%",
          }}
          className="wrapper overflow-hidden max-h-[99vh] max-w-[99vw]"
        >
          <Page />
        </motion.div>
      ))}
    </Wizard>
  );
}
