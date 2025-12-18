import { getBatteryLevel } from "../formaters/formaters.js";
import {
  updateLevel,
  updateStatus,
  updateBatteryFluid,
} from "../updaters/battery.updaters.js";

const root = document.querySelector(":root");
const label = document.querySelector("#label-theme-mode");
const textLabel = document.querySelector("#chose-mode");

const updateScreen = () => {
  const level = getBatteryLevel();

  updateLevel(level);
  updateStatus();
  updateBatteryFluid(level);
};

const applyTheme = (theme) => {
  root.style.setProperty("--color-light", theme.backgroundBody);
  root.style.setProperty("--grad-main", theme.backgroundMain);
  label.style.border = theme.labelBorder;
  textLabel.textContent = theme.labelText;
};

export { updateScreen, applyTheme };
