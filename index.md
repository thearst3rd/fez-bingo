This site hosts the rules for playing bingo with the game [FEZ](http://www.fezgame.com/). The rules are in a format that can be understood by [Bingosync](https://bingosync.com), so games can be synced up online.

This bingo still needs some tweaking and balancing, so suggestions are welcome!

Enjoy!

## The Generator

<input id="generate-button" type="button" value="Generate New Board"/>
<textarea id="output-textarea" placeholder="Generated board" cols="50" rows="5"></textarea>
<input id="copy-button" type="button" value="Copy to Clipboard"/>
<p id="copied-text" style="visibility: hidden">Copied!</p>
<script>
	const generateButton = document.getElementById("generate-button")
	const outputTextarea = document.getElementById("output-textarea")
	const copyButton = document.getElementById("copy-button")
	const copiedText = document.getElementById("copied-text")
	generateButton.onclick = function()
	{
		outputTextarea.value = "fake board " + Math.random()
		copiedText.style.visibility = "hidden"
	}
	copyButton.onclick = function()
	{
		navigator.clipboard.writeText(outputTextarea.value)
		copiedText.style.visibility = "visible"
	}
</script>

## The Rules

* The bingo game begins on starting a new game in Speedrun mode, at which point the runners should reveal the bingo card
* The bingo game ends when one runner fills in a row, column, or diagonal (beating the game is not required)
* Any square that says "do not X" may be marked completed at the start, then unmarked when a player has done that thing
* Most normal rules of any% apply, specifically:
	* System clock manipulation is banned
	* Cube duplication is banned
	* Reset manipulation is banned
	* Save state manipulation is banned

## How To Play

1. Go to [https://bingosync.com](https://bingosync.com)
2. In the "New Room" section, create a room name, password, and give yourself a nickname
3. For the settings, select:
	* "Game" = "Custom (Advanced)"
	* "Variant" = "Fixed Board"
	* "Mode" = "Non-Lockout"
4. In the above generator, press "Generate New Board" and copy the output into "Board" on Bingosync
5. Set the other settings to your preference and make the room
6. When all runners have joined and are ready, the game can begin

## Example Games

A few games played by Jokertyf and I can be found here:

* [https://youtu.be/DqVuff4dB9I](https://youtu.be/DqVuff4dB9I)
* [https://www.twitch.tv/videos/1452319274](https://www.twitch.tv/videos/1452319274)
* [https://www.twitch.tv/videos/1452319276](https://www.twitch.tv/videos/1452319276)
