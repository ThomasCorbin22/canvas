# Canvas Project

This is online Canvas web application web game. It allowed us to test out linking various mouse events to drawing junctions via the use of Jquery.

## How to Play

The general site is very user intuitive as there are multiple forms of tooltips and helpful descriptions. Click on one of the tabs at the top to go to whichever section you want and then hover over the buttons if the icons aren't clear. After you've clicked a tool, a short description of how to use the tool will come up. You can click to show and change  the additional settings like colours and font sizes on the fly with the tools at the very bottom of the toolbar and click again to exit.

### Implementation

There were various areas of this project that were especially tricky

1. Fill Bucket
2. Undo / Redo
3. Zoom In / Zoom Out
4. Move / Scale
5. Textbox
6. Colour picker

#### Fill Bucket

Fill Bucket was an extremely difficult task to accomplish as we were originally using the Brave browser, which did not allow us to access the various data pixels (little did we know!). But it was also difficult to implement due to the complex logic of the code. It would break later on when the canvas got rescaled based on window size.

#### Undo / Redo

Suprisingly not too difficult to implement, but the Undo / Redo functions were extremely useful in showing how the a Canvas project could be tracked over time. The use of drawImage would become crucial to the implementation of Zoom In / Zoom Out as well as the Scale tool.

#### Zoom In / Zoom Out

The basic premise for this tool is that the number of canvases are doubled. The zoom canvases are three times as big as the regular canvas but only zoom in by 200%. This is because I wanted users to be able to use the move tool to move around whilst being able to interact with the zoomed in canvas. Currently users can use tools on the zoomed in canvas but there is a loss of quality when the canvas zooms back out. We still need to update the Zoom Out function to take into account of the moving of the canvas.

#### Move / Scale

What a nightmare. we ended up adding a third canvas to the regular set of canvas' (taking the total to 6 as I also have a selection canvas for the moom feature). As sections of the canvas are manipulated, there are reguarly copied to the Selection canvas so as to allow users to modify the draft canvas elements whilst still not affecting the Real canvas.

#### Textbox

The concept of Textbox itself wans't very tricky, we spend most of the time resolving how to position the textbox in the canvas and keep it invisible until called. In the future we would like to add more interactivity to allow for movement after the submission of the text.

### Colour Picker

In the beginning we explored creating our own colour platte and colour picker for use in the canvas. However, due to time limitations, it would be impossible to add all the varieties of functionality we wanted to include, so we opted for a pre-built library instead.


## Built With

* [Bootstrap](https://getbootstrap.com/) - A front-end component library
* [BoilerPlate](https://html5boilerplate.com/) - A front-end template
* [William Malone](http://www.williammalone.com/articles/html5-canvas-javascript-paint-bucket-tool/) - Create a paint bucket tool in HTML5 and Javascript
* [Codicode](https://www.codicode.com/art/undo_and_redo_to_the_html5_canvas.aspx) - Undo and Redo with HTML5 Canvas
* [HTML5 Rocks](https://www.html5rocks.com/en/tutorials/canvas/imagefilters/) - Image Filters with Canvas
* [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) - Canvas Tutorial
* [Flat Icon](https://www.flaticon.com/home) - For some amazing icons
* [Simon Wep](https://github.com/Simonwep/pickr) - Color-Picker Library

## Authors

* **Thomas Corbin** **Chen Wing Ying** - *Cavas API* - [ThomasCorbin22](https://canvas-api-22.sh/)

