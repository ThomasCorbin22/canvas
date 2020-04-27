let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');

let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');

let canvasSelect = document.getElementById('canvas-select');
let contextSelect = canvasSelect.getContext('2d');

let canvasZoomReal = document.getElementById('canvas-zoom-real');
let contextZoomReal = canvasZoomReal.getContext('2d');

let canvasZoomDraft = document.getElementById('canvas-zoom-draft');
let contextZoomDraft = canvasZoomDraft.getContext('2d');

let canvasZoomSelect = document.getElementById('canvas-zoom-select');
let contextZoomSelect = canvasZoomSelect.getContext('2d');

let zoomX = 0
let zoomY = 0

let canvasWidth = Math.round($('#canvas-container').width());
let canvasHeight = Math.round($('#canvas-container').height());

let curStroke = "rgba(255, 0, 0, 1)"
let curFill = "rgba(128, 0, 128, 1)"
let curFont = "50px Ariel"

let curJoin = "round"
let lineCap = 'round'
let curWidth = 5
let curMitre = 10
let curOffset = 0;
let linetype = [];

let zoomIn = false
let zoomOut = true

// For Undo and Redo
let cPushArray = new Array();
let cStep = -1;

let sliderNum = 1

let stampImg = 'images/stickerpack/alapproved.png';
let stampSize = 250

let currentFunction;
let dragging = false;
let drawing = false

let points

let selecting = false
let selectX = 0
let selectY = 0
let selectWidth = canvasWidth
let selectHeight = canvasHeight

let tab = 'welcome'

var textBox = document.getElementById("textBox");
var textFlag = false;
var textContent = "";