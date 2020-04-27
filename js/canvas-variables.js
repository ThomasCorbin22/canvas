let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');

let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');

let canvasSelect = document.getElementById('canvas-select');
let contextSelect = canvasDraft.getContext('2d');

let canvasZoomReal = document.getElementById('canvas-zoom-real');
let contextZoomReal = canvasZoomReal.getContext('2d');

let canvasZoomDraft = document.getElementById('canvas-zoom-draft');
let contextZoomDraft = canvasZoomDraft.getContext('2d');

let canvasZoomSelect = document.getElementById('canvas-zoom-select');
let contextZoomSelect = canvasZoomSelect.getContext('2d');

let zoomX = 0
let zoomY = 0

let windowWidth = $(window).width();
let windowHeight = $(window).height();

let canvasWidth = windowWidth - 4
let canvasHeight = windowHeight - 200

let curStroke = "rgba(50, 50, 50, 1)"
let curFill = "rgba(255, 150, 150, 1)"

let curJoin = "round"
let lineCap = 'round'
let curWidth = 5
let curMitre = 10
let numSides = 8
let curOffset = 0;

let zoomIn = false
let zoomOut = true

// For Undo and Redo
let cPushArray = new Array();
let cStep = -1;

let blurAmt = 3;
let brightAmt = 30;
let constrastAmt = 1.4;
let sepiaAmt = 1;
let greyAmt = 1;

let stampImg = 'images/abstractCircle.png';
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