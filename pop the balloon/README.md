# Pop the Balloon

A lightweight, browser-based arcade game built to practice vanilla JavaScript event handling, DOM manipulation, and basic state management.

This project was created as a foundational milestone to understand how front-end code handles real-time user inputs and asynchronous elements without relying on external frameworks or libraries.

---

##  Features

* **Dynamic Spawning:** Balloons are generated dynamically via JavaScript and injected into random positions within the viewport.
* **Event-Driven Mechanics:** Uses cursor-click event listeners to trigger immediate balloon destruction and score updates.
* **Score Tracking:** Real-time state management keeps track of player points directly inside the UI.

---

##  Tech Stack

* **HTML5:** Semantic layout and structural container for the game canvas.
* **CSS3:** Custom animations, responsive transitions, and dynamic absolute positioning.
* **JavaScript (ES6):** Core game loop, event listeners, interval timers, and DOM node management.

---

##  How It Works

* **The Spawn Loop:** The script relies on standard timing mechanisms (`setInterval`) to periodically create new balloon elements, assigning them randomized horizontal offsets to vary the layout.
* **Interaction Logic:** Every generated balloon is bound to an active click event listener. When a player clicks a balloon, a callback function fires to remove that specific node from the DOM tree.
* **State Updates:** Upon a successful click event, the main score variable increments, and the updated value is instantly pushed to the browser view.

---

##  How to Run Locally

1. **Clone the repository:**
```bash
git clone https://github.com/DanishAhmad5548/Games.git

```


2. **Navigate to the project folder:**
```bash
cd "pop the balloon"

```


3. **Launch the game:**
Open the `index.html` file directly in any modern web browser (Chrome, Edge, Safari, Firefox). No local server, node modules, or build configurations required.
