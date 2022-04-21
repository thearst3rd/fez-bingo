This site hosts the rules for playing bingo with the game [FEZ](http://www.fezgame.com/). The rules are in a format that can be understood by [Bingosync](https://bingosync.com), so games can be synced up online.

This bingo still needs some tweaking and balancing, so suggestions are welcome!

Enjoy!

## The Generator

<div>
	<input id="seed-text" value="" placeholder="Seed (blank for random)"/>
</div>
<div>
	<input id="generate-button" type="button" value="Generate New Board"/>
</div>
<div>
	<textarea id="output-textarea" placeholder="Generated board" cols="70" rows="7"></textarea>
</div>
<input id="copy-button" type="button" value="Copy to Clipboard"/>
<p id="copied-text" style="visibility: hidden">Copied!</p>
<script src="synergen.js"></script>
<script src="fez_bingolist_synergen.js"></script>
<script>
	const seedText = document.getElementById("seed-text")
	const generateButton = document.getElementById("generate-button")
	const outputTextarea = document.getElementById("output-textarea")
	const copyButton = document.getElementById("copy-button")
	const copiedText = document.getElementById("copied-text")
	generateButton.onclick = function()
	{
		// Generate board
		let opts = {}
		if (seedText.value.length > 0)
		{
			let seed = parseInt(seedText.value)
			if (!isNaN(seed))
			{
				seed = seed % 2147483648
				seedText.value = seed
				opts.seed = seed
			}
			else
			{
				console.log(seedText.value, "is not a valid seed, ignoring")
				seedText.value = ""
			}
		}
		let newBoard = bingoGeneratorSynerGen(JSON.parse(JSON.stringify(bingoListSynerGen)), opts)
		let json = []
		for (i = 0; i < 25; i++)
		{
			json[i] = {name: newBoard[i].name}
			if (json[i].name.startsWith("#!#"))
				json[i].name = json[i].name.substring(3, json[i].name.length - 3)
		}
		outputTextarea.value = JSON.stringify(json)
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
* Most normal rules of any% apply, specifically:
	* System clock manipulation is banned
	* Cube duplication is banned
	* Reset manipulation is banned
	* Save state manipulation is banned

## Setup Guide

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

* [Best of three submitted to Indiethon](https://youtu.be/DqVuff4dB9I)
* Some of our first ever test runs: [run 1](https://www.twitch.tv/videos/1452319274), [run 2](https://www.twitch.tv/videos/1452319276)
