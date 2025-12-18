import { state } from "../state/battery.state.js";

const getBatteryLevel = () => {
  return Math.round(state.level * 100);
};

let animationIndex = 0;
const chargingAnimation = [
  { text: "Carregando", icon: "battery_charging_20" },
  { text: "Carregando.", icon: "battery_charging_50" },
  { text: "Carregando..", icon: "battery_charging_80" },
  { text: "Carregando...", icon: "battery_charging_90" },
];

const formatAnimationStatus = () => {
  const charging = state.charging;

  if (!charging) {
    return {
      iconCodeText: "power_off",
      statusTextData: "Desconectado",
    };
  }

  const frame = chargingAnimation[animationIndex];
  animationIndex = (animationIndex + 1) % chargingAnimation.length;

  return {
    iconCodeText: frame.icon,
    statusTextData: frame.text,
  };
};

const formatBatteryFluid = () => {
  const batteryLevel = getBatteryLevel();

  if (batteryLevel < 30) {
    return "linear-gradient(180deg, #b84a4a, #8f2d2d)";
  } else if (batteryLevel < 70) {
    return "linear-gradient(180deg, #d4b04a, #b8922f)";
  } else {
    return "linear-gradient(180deg, #4caf7d, #2e7d5b);";
  }
};

export { getBatteryLevel, formatAnimationStatus, formatBatteryFluid };
