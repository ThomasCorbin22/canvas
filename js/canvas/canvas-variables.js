// Setting variables for the context and canvas
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

let canvasWidth = Math.round($('#canvas-container').width());
let canvasHeight = Math.round($('#canvas-container').height());

// Default settings
let curStroke = "rgba(255, 0, 0, 1)"
let curFill = "rgba(128, 0, 128, 1)"
let curFont = "50px Arial"
let curFontSize = 50

let curJoin = "round"
let lineCap = 'round'
let curWidth = 5
let curMitre = 10
let curOffset = 0;
let linetype = [];

// Zoom In/Out settings
let zoomIn = false
let zoomOut = true
let zoomX = 0
let zoomY = 0

// For Undo and Redo
let cPushArray = new Array();
let cStep = -1;

// Default value for the slider
let sliderNum = 1

// Default stamp and size
let stampImg = 'images/stickerpack/alapproved.png';
let stampSize = 250

// Setting up variables to determine user interaction
let currentFunction;
let dragging = false;
let drawing = false

// Default values for selection when using the move / scale tool if nothing is selected
let selecting = false
let selectX = 0
let selectY = 0
let selectWidth = canvasWidth
let selectHeight = canvasHeight
let points

// Default tab shown on opening the webpage
let tab = 'welcome'

// Defining elements for the textbox
var textBox = document.getElementById("textBox");
var textFlag = false;
var textContent = "";

// Default HTML labels
let title = 'Welcome To Our Canvas App'
let subtitle = ' - Christine & Thomas - '
let description = 'This is a project that we created together at Xccelerate.<br>Click the tabs above to check out the various tools. Descriptions of how to use each tool will pop up here.'