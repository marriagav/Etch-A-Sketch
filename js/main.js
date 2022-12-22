import Canvas from "./Canvas.js";
import Settings from "./Settings.js";

const doc = document;
const dimention = 16;
const minDimention = 1;
const maxDimention = 64;

const canvas = new Canvas(doc, minDimention, maxDimention, dimention);
const settings = new Settings(doc, canvas);
