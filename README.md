# cooper_k_hw2_mm_authoring
Puzzle Build
Crushing bugs plan

Bug #1

Plan step 1:
     In java script write out code to make it so when a new piece is put into the drop zone the piece that is in the dropzone. -look for online resources through google.

-update- struggling to find helpful resources. Now searching “how to make drag zone only accept one object in javascript”

Plan Step 2: 
	Ask Chat GPT for help. Feed it code that we’re working with and get solutions.
Use solutions Chat GPT gave to make each drop zone only accept one piece.

 Bug #2

Plan Step 2:
	Asked Chat GPT how to make a reset command in Javascript.

Plan Step 3:
	Added Javascript to reset puzzle pieces to their original position. Added “data-initial-position” tag with the div id to each puzzle piece in html so they went back to the “.puzzle-pieces” div every time the puzzle was reset.

Plan step 4: Try to get the puzzle images to change to the respective images that matched each button’s background image. 

Plan step 5: Created “buttonImageMap” with each respective piece per button in javascript.

Plan step 6: Fixed background image javascript so it changed upon each click because it was delayed and needed to have the button be clicked twice to show the appropriate background image with the correct puzzle pieces.


Assignment Requirements

In its current state, our puzzle game has at least a couple of bugs. You can drag and drop more than one puzzle piece into a drop zone - this shouldn’t happen. There should only be one piece in one drop zone at a time.

The second bug is the problem with pieces appearing in the drop zones on reset / choosing a new puzzle. Those should be removed / reparented back to the drag zone as well, so that the player has a fresh board to drop onto.

Solve these two problems. You can use the original drop function to solve the first problem, and another function for the second. Try experimenting with calling one function from another - you might not need to add any event handling to solve these issues, just extend the functionality.

Write out your plan FIRST. You can’t solve a problem - coding or otherwise - if you don’t understand what you need to do. Reason about the problem - think it through. Articulating the solution first will be a great help in completing the assignment successfully.

Additional Requirements

1. Include a written plan / path with your submission. Analyze the problem and provide the solution. 2. Create a Readme.md document for the repo with detailed information about the project.
3. Create a branch for each bug and its solution. Provide the JS for each.
4. Merge everything to the master branch (keep all branches in your repo).