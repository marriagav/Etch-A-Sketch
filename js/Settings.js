const randomColors = [];

for (let _ = 0; _ < 50; _++) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColors.push(`#${randomColor}`);
}

let pencil = {
  name: "Pencil",
  colors: ["#000000"],
};

let rainbow = {
  name: "Rainbow",
  colors: randomColors,
};

let eraser = {
  name: "Eraser",
  colors: ["#FFFFFF"],
};

const defaultModes = [pencil, rainbow, eraser];

class Settings {
  constructor(document, canvas, modes = defaultModes) {
    this.buttonList = document.querySelector(".options");
    this.modes = modes;
    this.canvas = canvas;
    this.makeSettings();
  }

  makeSettings() {
    this.modes.forEach((mode) => {
      const button = document.createElement("button");
      button.textContent = mode.name;
      button.self = this;
      button.mode = mode;
      this.previous = button;
      button.addEventListener("click", this.changeMode);
      this.buttonList.appendChild(button);
    });
    const button = document.createElement("button");
    button.textContent = "Clear";
    button.self = this;
    button.addEventListener("click", this.clear);
    this.buttonList.appendChild(button);
  }

  changeMode(e) {
    this.self.canvas.currentColors = this.mode.colors;
    this.self.previous.classList.remove("active");
    this.classList.add("active");
    this.self.previous = this;
  }

  clear(e) {
    this.self.canvas.clear();
  }
}

export default Settings;
