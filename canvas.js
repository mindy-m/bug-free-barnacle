var canvas = document.getElementById("masterpiece");
console.log("What is canvas?", canvas);

var renderingContext = canvas.getContext("2d");
console.log("What is rendering context?", renderingContext);

renderingContext.fillStyle = "orchid";
/* Get RECT */
renderingContext.fillRect(0, 0, 1, 1);
renderingContext.fillRect(1, 1, 1, 1);
renderingContext.fillRect(7, 7, 1, 1);


/* Start of horrific "smiley face" */
renderingContext.fillStyle = "yellow";
renderingContext.fillRect(2,2,1,1);
renderingContext.fillRect(4,2,1,1);

renderingContext.fillStyle = "red";
renderingContext.fillRect(1,4,1,1);
renderingContext.fillRect(2,5,3,1);
renderingContext.fillRect(5,4,1,1);
/* End of horrific "smiley face" */


/* Last item in rgba is alpha */
renderingContext.fillStyle = "rgba(0,255,0,0.5)";
renderingContext.fillRect(1, 1, 1, 1);

var imageBuffer = renderingContext.getImageData(0, 0, 8, 8);
/* 4 will make all the red for 2nd pixel*/
imageBuffer.data[4] = 255;
/* 7 for ALL the opacity for 2nd pixel*/
imageBuffer.data[7] = 255;
/* Draw the stuff */
renderingContext.putImageData(imageBuffer, 0, 0);