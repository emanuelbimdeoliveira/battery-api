import { setState } from "./battery.state.js";

const updateState = (object) => {
  setState("charging", object.charging);
  setState("level", object.level);
};

export { updateState };
