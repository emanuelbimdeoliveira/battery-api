import { applyTheme } from "../display/battery.updateScreen.js";
import { themes } from "../state/theme.state.js";

const themeController = (darkMode) => {
  if (darkMode) {
    applyTheme(themes.dark);
  } else {
    applyTheme(themes.light);
  }
};

export { themeController };
