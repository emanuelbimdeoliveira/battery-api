import { getBattery } from "../api/battery.api.js";
import { updateScreen } from "../display/battery.updateScreen.js";
import { updateState } from "../state/update.state.js";

const batteryController = async () => {
  // getBattery from API
  const battery = await getBattery();
  if (!battery) return;
  updateState(battery);
  updateScreen();
};

export { batteryController };
