# Battery Status Display

A web application that displays real-time battery information using the **Battery Status API**.  
The project shows the current battery level, charging status, visual indicators and animations, with a strong focus on **clean architecture**, **modularization** and **state-driven UI updates**.

This project represents a refactor and evolution of an older implementation, rebuilt with better structure and clearer responsibilities.

---

## 🔋 Features

- Real-time battery level display (percentage)
- Charging / disconnected status
- Animated charging indicator
- Dynamic battery fluid visualization
- Color changes based on battery level
- Light and dark theme switching
- Responsive layout

---

## 🛠️ Technologies

- **HTML** – Structure
- **CSS** – Layout, animations and themes
- **JavaScript (ES Modules)** – Application logic
- **Battery Status API** – Native browser API

---

## 🧱 Project Architecture

The project is fully modular and follows a clear separation of concerns:

- **Engine** – Controls the update cycle
- **Controller** – Orchestrates the data flow
- **State** – Centralized global state
- **Formatters** – Responsible for data transformation
- **Updaters** – DOM updates only (no logic)
- **Theme Controller** – Handles UI theme switching

Each module has a single responsibility, making the project easier to read, maintain and extend.

## 📁 Folders Architecture

```text
battery-api
│   core.md
│   index.html
│   index.js
│   style.css
└───src
    ├───api
    │       battery.api.js
    ├───controllers
    │       battery.controller.js
    │       theme.controller.js
    ├───display
    │       battery.updateScreen.js
    ├───engine
    │       battery.engine.js
    ├───events
    │       events.js
    ├───formaters
    │       formaters.js
    ├───state
    │       battery.state.js
    │       theme.state.js
    │       update.state.js
    └───updaters
            battery.updaters.js
```

---

## 🧠 What I Learned

- How to work with a **native browser API**
- Managing **asynchronous data** correctly with `async / await`
- Designing a **global state** and updating it predictably
- Separating:
  - data fetching
  - formatting
  - UI updates
- Improving an old project through **refactoring**
- Creating small, reusable functions instead of monolithic logic
- Better CSS organization for visual components and animations

---

## ⚠️ Challenges

- Understanding the asynchronous behavior of the Battery API
- Correctly handling Promises and avoiding `undefined` states
- Defining what data should live in the global state
- Decoupling UI updates from business logic
- Refactoring legacy code without breaking functionality

---

## 🔮 Possible Improvements

- Battery usage history
- Notifications for low battery
- More detailed charging time estimates
- Additional themes
- Mobile-specific UI refinements

---

## ▶️ How to Run

1. Clone the repository
2. Open the `index.html` file in a supported browser (Chrome, Edge, Firefox)

> ⚠️ Note: The Battery Status API may not be supported in all browsers.

---

## 📌 Project Status

✅ Finished and functional  
🔧 Open to future improvements

---

## 👤 Author

Developed by **Emanuel dos Santos Bim de Oliveira**
