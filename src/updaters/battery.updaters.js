import {
  formatAnimationStatus,
  formatBatteryFluid,
} from "../formaters/formaters.js";

const batteryDisplay = document.querySelectorAll(
  "[class*=battery-percentage-display]"
);
const batteryFluid = document.querySelector("#battery-fluid");

const statusIcon = document.querySelector("#status-icon");
const statusText = document.querySelector("#status-text");

const updateLevel = (level) => {
  for (let element of batteryDisplay) {
    element.textContent = `${level}%`;
  }
};

const updateStatus = () => {
  const { iconCodeText, statusTextData } = formatAnimationStatus();

  statusIcon.textContent = iconCodeText;
  statusText.textContent = statusTextData;
};

const updateBatteryFluid = (level) => {
  const fluidColor = formatBatteryFluid();

  batteryFluid.style.height = `${level}%`;
  batteryFluid.style.background = fluidColor;
};

export { updateStatus, updateLevel, updateBatteryFluid };
