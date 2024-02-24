// variables always go at the top -> this is step 1
// these are the connections that you're making to elements on the page 
// use CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable -> querySelector("queryString")
// let theButton = document.querySelector("#buttonOne");

// create a 1 to many connection with a variable -> querySelectorAll("queryString")
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-image"),
	dropZones =document.querySelectorAll('.drop-zone'),
	reset = document.querySelector('#resetBut'),
	
	// store the dragged piece in a global variable
	// because we need it in the handleDrop function
	draggedPiece;

	const buttonImageMap = {
		"0": ["images/topLeft0.jpg", "images/topRight0.jpg", "images/bottomLeft0.jpg", "images/bottomRight0.jpg"],
		"1": ["images/topLeft1.jpg", "images/topRight1.jpg", "images/bottomLeft1.jpg", "images/bottomRight1.jpg"],
		"2": ["images/topLeft2.jpg", "images/topRight2.jpg", "images/bottomLeft2.jpg", "images/bottomRight2.jpg"],
		"3": ["images/topLeft3.jpg", "images/topRight3.jpg", "images/bottomLeft3.jpg", "images/bottomRight3.jpg"]
	};

// step 3
// functionality always goes in the middle -> how do we want
// the app to behave?
function changeBGImage() {
	console.log('Drop Zone empty:', document.querySelector('.drop-zone img') === null);
    if (document.querySelector('.drop-zone img') === null){
		puzzleBoard.style.backgroundImage =`url(images/backGround${this.id}.jpg)`;
	}

const images=buttonImageMap[this.id];
puzzlePieces.forEach((piece,index)=> {
	piece.src=images[index];
});


	// the `` is a JavaScript template string. It tells the JS enging to evaluate the expression
	// inside the braces - run that little bit of code. In this case it's just pulling the ID of the
	// button we clicked on and putting it at the end of the image name (0, 1, 2, 3)
	// and updating the background-image style of the puzzle board element.

	// bug fix #2 should go here. it's at most 3 lines of JS code.

	
}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}


function handleDragOver(event){
	event.preventDefault();
	console.log('dragged over a zone');
}   




function handleDrop(event) {
	console.log('handleDrop function called');
	event.preventDefault();
	console.log('dropped in the zone!');
	if(!this.hasChildNodes() && !draggedPiece.parentNode.classList.contains('puzzle-board')) {
		this.appendChild(draggedPiece);
	}
}


function resetPuzzleBoard(){
	dropZones.forEach(zone=> {
		zone.innerHTML='';
	});

	
		puzzlePieces.forEach(piece => {
			const container =piece.dataset.initialPosition;
        document.querySelector(container).appendChild(piece);
	});

}


// 1 to many event handling
// add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// add the drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone=> {
	zone.addEventListener('dragover', handleDragOver);
	zone.addEventListener('drop',handleDrop);
});	

reset.addEventListener("click", resetPuzzleBoard);