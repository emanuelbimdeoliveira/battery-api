import { themeController } from "../controllers/theme.controller.js";

const startReadingEvents = () => {
  const toggleSwitch = document.querySelector("#check");
  toggleSwitch.addEventListener("change", (event) => {
    themeController(event.target.checked);
  });
};

export { startReadingEvents };
