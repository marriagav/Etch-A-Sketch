import Canvas from "./Canvas.js";

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
    //Clear buttom
    const button = document.createElement("button");
    button.textContent = "Clear";
    button.self = this;
    button.addEventListener("click", this.clear);
    this.buttonList.appendChild(button);
    //Slider
    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slidecontainer");
    this.slider = document.createElement("input");
    this.slider.type = "range";
    this.slider.classList.add("slider");
    this.slider.min = this.canvas.minDimention;
    this.slider.max = this.canvas.maxDimention;
    this.slider.value = this.canvas.dimention;
    this.slider.self = this;
    this.slider.addEventListener("input", this.changeCanvasSize);
    this.sliderText = document.createElement("p");
    this.sliderText.id = "sliderText";
    this.sliderText.textContent = `${this.slider.value} x ${this.slider.value}`;
    sliderContainer.appendChild(this.sliderText);
    sliderContainer.appendChild(this.slider);
    this.buttonList.appendChild(sliderContainer);
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

  changeCanvasSize(e) {
    this.self.sliderText.textContent = `${this.value} x ${this.value}`;
    this.self.canvas.resizeCanvas(this.value);
  }
}

export default Settings;
