import { batteryController } from "../controllers/battery.controller.js";

const startEngine = () => {
  setInterval(batteryController, 1000);
};

export { startEngine };
