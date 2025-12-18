import { batteryController } from "./src/controllers/battery.controller.js";
import { startReadingEvents } from "./src/events/events.js";
import { startEngine } from "./src/engine/battery.engine.js";

batteryController();
startReadingEvents();
startEngine();
