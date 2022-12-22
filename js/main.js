import Canvas from "./Canvas.js";
import Settings from "./Settings.js";

const doc = document;
const dimention = 16;
const canvas = new Canvas(doc, dimention);
const settings = new Settings(doc, canvas);
