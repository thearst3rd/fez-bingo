var bingoListSynerGen = {
	"bingoTypes": {
		"numbits": {"Max": 1},
		"numobelisks": {"Max": 1},
		"numtuningforks": {"Max": 1},
		"numgolden": {"Max": 1},
		"numanti": {"Max": 1},
		"numcubes": {"Max": 1},
		"numkeys": {"Max": 1},
	},
	"maxScore": 0,

	// Goals
	"Finish the run with 0 bits collected": {"Diff": 1, "Types": ["numbits"]},
	"Finish the run with 1 bits collected": {"Types": ["numbits"], "Diff": 1},
	"Village - Monocle room anti cube": {"Diff": 1},
	"Achievement code anti cube": {"Diff": 1},

	"Finish the run with 2 bits collected": {"Diff": 2, "Types": ["numbits"]},
	"Finish the run with 3 bits collected": {"Diff": 2, "Types": ["numbits"]},
	"Village - Boiler room anti cube": {"Diff": 2},

	"Nature - Bell anti cube": {"Diff": 3},
	"Nature - Infinite fall golden cube": {"Diff": 3},
	"Finish the run with 4 bits collected": {"Diff": 3, "Types": ["numbits"]},
	"Finish the run with 5 bits collected": {"Diff": 3, "Types": ["numbits"]},

	"Finish the run with 6 bits collected": {"Diff": 4, "Types": ["numbits"]},
	"Finish the run with 7 bits collected": {"Diff": 4, "Types": ["numbits"]},
	"Nature - Tetris puzzle anti cube": {"Diff": 4},

	"Talk to the waterfall owl": {"Diff": 5},
	"Collect the writing artifact": {"Diff": 5},

	"Nature - Arch invisible platforms anti cube": {"Diff": 6},
	"Nature - Mine golden cube": {"Diff": 6},
	"Fully complete Village": {"Diff": 6},

	"Nature - Sync room top anti cube": {"Diff": 7},
	"Nature - Bell tower golden cube": {"Diff": 7},
	"Collect 3 obelisk anti cubes": {"Diff": 7, "Types": ["numobelisks"]},
	"Collect 2 tuning fork anti cubes": {"Diff": 7, "Types": ["numtuningforks"]},

	"Tree/Nature - QR map/Lighthouse owl room anti cube": {"Diff": 8},
	"Nature - Top of arch golden cube": {"Diff": 8},
	"Do not collect any of the bits in the village climb": {"Diff": 8},

	"Collect 4 golden cubes": {"Diff": 9, "Types": ["numgolden"]},
	"Collect all 4 obelisk anti cubes": {"Diff": 9, "Types": ["numobelisks"]},
	"Collect 3 maps": {"Diff": 9, "Types": ["nummaps"]},

	"Fully complete the Flatland area": {"Diff": 10},
	"Collect the security question heart piece": {"Diff": 10},
	"Nature - Arch secret room golden cube": {"Diff": 10},
	"Collect 8 anti cubes": {"Diff": 10, "Types": ["numanti"]},

	"Tree - Cube net puzzle anti cube": {"Diff": 11},
	"Zu - QR wall anti cube": {"Diff": 11},
	"Collect the black monolith heart piece": {"Diff": 11},
	"Have 3 keys in your inventory at the same time": {"Diff": 11, "Types": ["numkeys"]},

	"Graveyard - Lesser gate golden cube": {"Diff": 12},
	"Fully complete the Nocturne area": {"Diff": 12},
	"Collect the number artifact": {"Diff": 12},
	"Collect 12 total cubes": {"Diff": 12, "Types": ["numcubes"]},

	"Graveyard - Treasure golden cube": {"Diff": 13},
	"Zu - Golden cube by the observatory": {"Diff": 13},
	"Zu - Squid statue golden cube": {"Diff": 13},
	"Collect 8 golden cubes": {"Diff": 13, "Types": ["numgolden"]},
	"Collect all 3 heart pieces": {"Diff": 13},
	"Collect 4 maps": {"Diff": 13, "Types": ["nummaps"]},

	"Talk to the tree owl": {"Diff": 14},
	"Visit 3 hubs": {"Diff": 14},
	"Zu - Observatory anti cube": {"Diff": 14},
	"Collect the observatory heart piece": {"Diff": 14},
	"Zu - Rosetta anti cube": {"Diff": 14},

	"Collect 12 anti cubes": {"Diff": 15, "Types": ["numanti"]},
	"Zu - Clock tower golden cube": {"Diff": 15},
	"Nature - Lighthouse invisible platforms anti cube": {"Diff": 15},
	"Do not lower the water level in waterfall": {"Diff": 15},

	"Nocturne - Classroom anti cube": {"Diff": 16},
	"Graveyard - Rotating skulls anti cube": {"Diff": 16},
	"Collect the tome artifact": {"Diff": 16},
	"Talk to the Zu owl": {"Diff": 16},

	"Industrial - Golden cube inside windmill": {"Diff": 17},
	"Collect 16 total cubes": {"Diff": 17, "Types": ["numcubes"]},
	"Have 4 keys in your inventory at the same time": {"Diff": 17, "Types": ["numkeys"]},

	"Industrial - Pivot golden cube (after windmill)": {"Diff": 18},
	"Visit 4 hubs": {"Diff": 18},
	"Collect 6 maps": {"Diff": 18, "Types": ["nummaps"]},

	"Industrial - Superspin golden cube": {"Diff": 19},
	"Collect the skull artifact": {"Diff": 19},
	"Talk to the Industrial owl": {"Diff": 19},

	"Collect 12 golden cubes": {"Diff": 20, "Types": ["numgolden"]},
	"Industrial - Elevator/Spinning plates golden cube": {"Diff": 20},
	"Collect all 4 pieces of the skull map puzzle": {"Diff": 20},
	"Finish the run with the same number of golden cubes and anti cubes (excluding bits)": {"Diff": 20},

	"Fully complete the Industrial hub": {"Diff": 21},
	"Collect 20 total cubes": {"Diff": 21, "Types": ["numcubes"]},

	"Collect the bit at the top of Old Zu": {"Diff": 22, "Types": ["completezu"]},
	"Visit all 5 hubs": {"Diff": 22},

	"Fully complete Old Zu": {"Diff": 23, "Types": ["completezu"]},
	"Sewers - Golden cube after the pillars": {"Diff": 23},
	"Do not use any warp gates or little gates": {"Diff": 23},

	"Sewers - Pivot puzzle golden cube": {"Diff": 24},
	"Collect all 4 tuning fork anti cubes": {"Diff": 24, "Types": ["numtuningforks"]},
	"Do not collect any anti cubes": {"Diff": 24, "Types": ["numanti"]},

	"Sewers - Rising lava anti cube": {"Diff": 25},
	"Talk to all 4 owls and collect owl room anti cube": {"Diff": 25},
}
