var bingoList = {
	"bingoTypes": {
		"end_goals": {"max": 1},
		"num_obelisks": {"max": 1},
		"num_tuningforks": {"max": 1},
		"num_golden": {"max": 1},
		"num_anti": {"max": 1},
		"num_cubes": {"max": 1},
		"num_keys": {"max": 1},
		"num_maps": {"max": 1},
		"num_artifacts": {"max": 1},
		"num_hubs": {"max": 1},
		"single_map": {"max": 2},
		"num_owls": {"max": 1}
	},

	/**
	 * As a general rule, goals are more difficult if they require the player to visit more rooms. However, this does
	 * not account for an important fact, which is the existence of little-gates. For example, getting the infinite fall
	 * golden cube is much faster than getting the writing artifact, even though they are both one room away from the
	 * Waterfall hub. This is because in order to get back to the nature hub from the writing artifact room, the player
	 * must go back through the Waterfall main area, whereas the infinite fall room has a little gate inside of it.
	 * 
	 * So, the general system for scoring goals is the sum of:
	 * - How many rooms it takes to get to that goal's hub (also called the base score).
	 * - How many room transitions it takes to get the goal and return to a hub.
	 * - Extra factors for things like how long an individual room is, whether or not there are prerequisites (i.e.
	 *   lowering the water level or getting a key).
	 * 
	 * Medium rooms count as 1 extra, Long as 2 extra, Extra-Long as 3 extra, etc.
	 */

	// Found in village.
	"monocle_anti": {"desc": "Village - Monocle room anti cube", "diff": 1},
	"achievement_anti": {"desc": "Achievement code anti cube", "diff": 1},
	"boiler_anti": {"desc": "Village - Boiler room anti cube", "diff": 2},
	"boiler_map": {"desc": "Village - Boiler room map", "diff": 2, "types": ["single_map"]},
	"complete_village": {"desc": "Fully complete Village (including all sub rooms)", "diff": 6},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// NATURE HUB GOALS (BASE DIFFICULTY: 1)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// The modifier for goals that require water lowered is +3.

	// 2 room transitions away from a hub.
	"arch_invis_anti": {"desc": "Nature - Arch invisible platforms anti cube", "diff": 3},
	"lighthouse_obelisk_anti": {"desc": "Collect the lighthouse obelisk anti cube", "diff": 3}, 
	"bell_anti": {"desc": "Nature - Bell anti cube", "diff": 4}, // 1M
	"waterfall_owl": {"desc": "Talk to the waterfall owl", "diff": 4}, // +1 for needing to make a cycle
	"black_monolith_heart": {"desc": "Collect the black monolith heart piece", "diff": 7}, // +1 for two codes

	// 3 room transitions away from a hub.
	"inf_fall_cube": {"desc": "Nature - Infinite fall golden cube", "diff": 4},
	"arch_top_cube": {"desc": "Nature - Arch five towers golden cube", "diff": 6}, // 1L
	"glitch_anti": {"desc": "Nature - Glitch room anti cube", "diff": 8}, // 1M, +3 for water

	// 4 room transitions away from a hub.
	"tree_obelisk_anti": {"desc": "Collect the tree obelisk anti cube", "diff": 5},
	"writing_artifact": {"desc": "Collect the writing artifact", "diff": 5},
	"lighthouse_map": {"desc": "Nature - Lighthouse map", "diff": 6, "types": ["single_map"]}, // +1 for needing key
	"tree_owl": {"desc": "Talk to the tree owl", "diff": 6}, // +1 for needing cycle
	"mine_cube": {"desc": "Nature - Mine golden cube", "diff": 7}, // 1L
	"security_heart": {"desc": "Collect the security question heart piece", "diff": 8}, // +3 for water
	"arch_secret_cube": {"desc": "Nature - Arch switch door golden cube", "diff": 9}, // +4 for having to carry blocks
	"lighthouse_tuning_fork": {"desc": "Nature - Lighthouse tuning fork anti cube", "diff": 9}, // +3 for water, +1 for needing key
	"sync_top_anti": {"desc": "Nature - Sync room top anti cube", "diff": 10}, // 1XL, 1L

	// 5 room transitions away from a hub.
	"arch_map": {"desc": "Nature - Arch cave map", "diff": 6, "types": ["single_map"]},
	"bell_cube": {"desc": "Nature - Bell tower golden cube", "diff": 8}, // 2M
	"visit_graveyard": {"desc": "Visit the Graveyard hub room.", "diff": 9, "synergies": {"graveyard": -8}}, // 1M, +2 for being a hub


	// 6 room transitions away from a hub.
	"waterfall_pump_map": {"desc": "Nature - Waterfall pump room map", "diff": 7, "types": ["single_map"]},
	"sync_tuning_fork": {"desc": "Nature - Sync tuning fork anti cube", "diff": 7},
	"qr_map": {"desc": "Tree - Get the QR map", "diff": 8, "types": ["single_map"], "excludes": ["qr_map_anti"]}, // 1M
	"temple_obelisk_anti": {"desc": "Collect the temple obelisk anti cube", "diff": 8}, // 1M
	"qr_map_anti": {"desc": "Tree/Nature - QR map/Lighthouse owl room anti cube", "diff": 8}, // 1M
	"zu_pathway_obelisk_anti": {"desc": "Collect the Zu pathway obelisk anti cube", "diff": 8}, // 1M
	"tetris_anti": {"desc": "Nature - Tetris puzzle anti cube", "diff": 9}, // 1M, +1 for block puzzle
	"tree_map": {"desc": "Tree - Key door map", "diff": 9, "types": ["single_map"]}, // 1M, +1 for needing key
	"visit_zu": {"desc": "Visit the Zu hub room.", "diff": 10, "synergies": {"zu": -9}}, // 1M, +2 for being a hub

	// 7 room transitions away from a hub.
	"lighthouse_invis_anti": {"desc": "Nature - Lighthouse invisible platforms anti cube", "diff": 10}, // 1M, +1 for needing key
	"visit_industrial": {"desc": "Visit the Industrial hub room.", "diff": 13, "synergies": {"industrial": -12}}, // 2M, +1 for needing key, +2 for being a hub
	
	// 8 room transitions away from a hub.
	"cube_net_anti": {"desc": "Tree - Cube net puzzle anti cube", "diff": 11}, // 1M, +1 for block puzzle

	// 11 room transitions away from a hub.
	"totem_anti": {"desc": "Nature - Totem pole puzzle anti cube", "diff": 15}, // 2M, +1 for block pluzzle

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// ZU HUB GOALS (BASE DIFFICULTY: 10)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// In hub
	"zu_map": {"desc": "Zu - Hub room map", "diff": 11, "synergies": {"zu": -9}, "types": ["single_map"]},

	// 2 room transitions away from a hub.
	"qr_wall_anti": {"desc": "Zu - QR wall anti cube", "diff": 12, "synergies": {"zu": -9}},
	"throne_anti": {"desc": "Zu - Throne room/Sewer QR room anti cube", "diff": 13, "synergies": {"zu": -9}}, // +1 for double length code
	"observatory_cube": {"desc": "Zu - Golden cube by the observatory", "diff": 14, "synergies": {"zu": -9}}, // 1L
	"clock_cube": {"desc": "Zu - Clock tower golden cube", "diff": 15, "synergies": {"zu": -9}}, // 1XL

	// 3 room transitions away from a hub.
	"squid_cube": {"desc": "Zu - Squid statue golden cube", "diff": 14, "synergies": {"zu": -9}}, // 1M
	"zu_owl": {"desc": "Talk to the Zu owl", "diff": 15, "synergies": {"zu": -9}}, // 1M, +1 for needing a cycle

	// 4 room transitions away from a hub.
	"observatory_anti": {"desc": "Zu - Observatory anti cube", "diff": 15, "synergies": {"zu": -9}}, // 1L
	"observatory_heart": {"desc": "Collect the observatory heart piece", "diff": 15, "synergies": {"zu": -9}}, // 1 L

	// 5 room transitions away from a hub.
	"rosetta_anti": {"desc": "Zu - Rosetta anti cube", "diff": 16, "synergies": {"zu": -9}}, // 1M

	// 6 room transitions away from a hub.

	// 7 room transitions away from a hub.
	"number_artifact": {"desc": "Collect the number artifact", "diff": 18, "synergies": {"zu": -9}}, // 1M

	// 8 room transitions away from a hub.

	// 9 room transitions away from a hub.

	// 10 room transitions away from a hub.
	"tome_artifact": {"desc": "Collect the tome artifact", "diff": 22, "synergies": {"zu": -9}}, // 2M

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// GRAVEYARD HUB GOALS (BASE DIFFICULTY: 9)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// 2 room transistions away from hub.
	"graveyard_map": {"desc": "Graveyard - Mausoleum map", "diff": 11, "synergies": {"graveyard": -8}, "types": ["single_map"]},
	"graveyard_skulls_anti": {"desc": "Graveyard - Rotating skulls anti cube", "diff": 12, "synergies": {"graveyard": -8}}, // +1 for puzzle

	// 3 room transistions away from hub.

	// 4 room transistions away from hub.
	"complete_graveyard_top_room": {"desc": "Graveyard - Complete room at top of mausoleum", "diff": 13, "synergies": {"graveyard": -8}},
	"grave_lesser_gate_cube": {"desc": "Graveyard - Lesser gate golden cube (middle floating island)", "diff": 14, "synergies": {"graveyard": -8}}, // 1M
	"grave_treasure_cube": {"desc": "Graveyard - Treasure golden cube (top floating island)", "diff": 15, "synergies": {"graveyard": -8}}, // 1L

	// 5 room transistions away from hub.

	// 6 room transistions away from hub.

	// 7 room transistions away from hub.

	// 8 room transistions away from hub.

	// 9 room transistions away from hub.
	"skull_artifact": {"desc": "Collect the skull artifact", "diff": 19, "synergies": {"graveyard": -8}}, // 1M

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INDUSTRIAL HUB GOALS (BASE DIFFICULTY: 13)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// 2 room transistions away from hub.
	"industrial_owl": {"desc": "Talk to the Industrial owl", "diff": 16, "synergies": {"industrial": -12}}, // +1 for needing cycle
	"industrial_map": {"desc": "Industrial - Superspin map", "diff": 17, "synergies": {"industrial": -12}, "types": ["single_map"]}, // 1L

	// 3 room transistions away from hub.
	"superspin_cube": {"desc": "Industrial - Superspin golden cube", "diff": 20, "synergies": {"industrial": -12}}, // 1XXL

	// 4 room transistions away from hub.
	"spin_plates_cube": {"desc": "Industrial - Elevator/Spinning plates golden cube", "diff": 24, "synergies": {"industrial": -12}}, // 2XL, 1L
	"visit_sewers": {"desc": "Visit the Sewers hub room.", "diff": 20, "synergies": {"industrial": -12, "sewers": -6}}, // 1M, +1 for needing key

	// 5 room transistions away from hub.

	// 6 room transistions away from hub.
	"windmill_cube": {"desc": "Industrial - Golden cube inside windmill", "diff": 20, "synergies": {"industrial": -12}}, // +1 for needing key
	"pivot_cube": {"desc": "Industrial - Pivot golden cube (after windmill)", "diff": 20, "synergies": {"industrial": -12}},	

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// SEWER HUB GOALS (BASE DIFFICULTY: 20)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Sewer is going to be the last thing most players do, so I'm only counting the rooms in one direction.

	// 1 room transition away from hub.
	"sew_pivot_cube": {"desc": "Sewers - Pivot puzzle golden cube", "diff": 21, "synergies": {"industrial": -12, "sewers": -6}},

	// 2 room transistions away from hub.
	
	// 3 room transistions away from hub.
	"lava_tuning_fork": {"desc": "Sewers - Lava tuning fork anti cube", "diff": 23, "synergies": {"industrial": -12, "sewers": -6}},
	"sew_after_pillars_cube": {"desc": "Sewers - Golden cube after the pillars", "diff": 23, "synergies": {"industrial": -12, "sewers": -6}},
	"sewer_tuning_fork": {"desc": "Sewers - Green tuning fork anti cube", "diff": 24, "synergies": {"industrial": -12, "sewers": -6}}, // +1 for needing key
	"lava_anti": {"desc": "Sewers - Rising lava anti cube", "diff": 27, "synergies": {"industrial": -12, "sewers": -6}}, // 1XXL

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// CUBE GOALS
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	"0_bits": {"desc": "Finish the run with 0 bits collected", "diff": 1, "types": ["end_goals"]},
	"1_bits": {"desc": "Finish the run with 1 bits collected", "diff": 1, "types": ["end_goals"]},
	"2_bits": {"desc": "Finish the run with 2 bits collected", "diff": 2, "types": ["end_goals"]},
	"3_bits": {"desc": "Finish the run with 3 bits collected", "diff": 2, "types": ["end_goals"]},
	"4_bits": {"desc": "Finish the run with 4 bits collected", "diff": 3, "types": ["end_goals"]},
	"5_bits": {"desc": "Finish the run with 5 bits collected", "diff": 3, "types": ["end_goals"]},
	"6_bits": {"desc": "Finish the run with 6 bits collected", "diff": 4, "types": ["end_goals"]},
	"7_bits": {"desc": "Finish the run with 7 bits collected", "diff": 4, "types": ["end_goals"]},

	"4_golden": {"desc": "Collect 4 golden cubes", "diff": 9, "types": ["num_golden"]},
	"5_golden": {"desc": "Collect 5 golden cubes", "diff": 10, "types": ["num_golden"], "excludes": ["5_cube"]},
	"6_golden": {"desc": "Collect 6 golden cubes", "diff": 11, "types": ["num_golden"], "excludes": ["5_cube", "6_cube"]},
	"7_golden": {"desc": "Collect 7 golden cubes", "diff": 12, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube"]},
	"8_golden": {"desc": "Collect 8 golden cubes", "diff": 13, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube"]},
	"9_golden": {"desc": "Collect 9 golden cubes", "diff": 15, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube"]},
	"10_golden": {"desc": "Collect 10 golden cubes", "diff": 17, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube"]},
	"11_golden": {"desc": "Collect 11 golden cubes", "diff": 19, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube"]},
	"12_golden": {"desc": "Collect 12 golden cubes", "diff": 21, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube", "12_cube"]},


	"4_anti": {"desc": "Collect 4 anti cubes", "diff": 4, "types": ["num_anti"]},
	"5_anti": {"desc": "Collect 5 anti cubes", "diff": 5, "types": ["num_anti"], "excludes": ["5_cube"]},
	"6_anti": {"desc": "Collect 6 anti cubes", "diff": 6, "types": ["num_anti"], "excludes": ["5_cube", "6_cube"]},
	"7_anti": {"desc": "Collect 7 anti cubes", "diff": 7, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube"]},
	"8_anti": {"desc": "Collect 8 anti cubes", "diff": 8, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube"]},
	"9_anti": {"desc": "Collect 9 anti cubes", "diff": 9, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube"]},
	"10_anti": {"desc": "Collect 10 anti cubes", "diff": 10, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube"]},
	"11_anti": {"desc": "Collect 11 anti cubes", "diff": 11, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube"]},
	"12_anti": {"desc": "Collect 12 anti cubes", "diff": 12, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube", "12_cube"]},
	"13_anti": {"desc": "Collect 13 anti cubes", "diff": 13, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube", "12_cube"]},
	"14_anti": {"desc": "Collect 14 anti cubes", "diff": 14, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube", "12_cube", "14_cube"]},
	"15_anti": {"desc": "Collect 15 anti cubes", "diff": 15, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube", "12_cube", "14_cube"]},
	"16_anti": {"desc": "Collect 16 anti cubes", "diff": 16, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube", "12_cube", "14_cube", "16_cube"]},

	"5_cube": {"desc": "Collect 5 total cubes", "diff": 4, "types": ["num_cubes"]},
	"6_cube": {"desc": "Collect 6 total cubes", "diff": 5, "types": ["num_cubes"]},
	"7_cube": {"desc": "Collect 7 total cubes", "diff": 6, "types": ["num_cubes"]},
	"8_cube": {"desc": "Collect 8 total cubes", "diff": 7, "types": ["num_cubes"]},
	"9_cube": {"desc": "Collect 9 total cubes", "diff": 8, "types": ["num_cubes"]},
	"10_cube": {"desc": "Collect 10 total cubes", "diff": 9, "types": ["num_cubes"]},
	"12_cube": {"desc": "Collect 12 total cubes", "diff": 11, "types": ["num_cubes"]},
	"14_cube": {"desc": "Collect 14 total cubes", "diff": 13, "types": ["num_cubes"]},
	"16_cube": {"desc": "Collect 16 total cubes", "diff": 15, "types": ["num_cubes"]},
	"18_cube": {"desc": "Collect 18 total cubes", "diff": 17, "types": ["num_cubes"]},
	"20_cube": {"desc": "Collect 20 total cubes", "diff": 19, "types": ["num_cubes"]},
	"24_cube": {"desc": "Collect 24 total cubes", "diff": 21, "types": ["num_cubes"]},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// MEMORY CORE GOALS
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	"early_flatland": {"desc": "Enter the Flatland area before the Nature hub.", "diff": 5, "excludes": ["complete_flatland"]},
	"complete_flatland": {"desc": "Fully complete the Flatland area (including all sub rooms)", "diff": 10},

	"visit_nocturne": {"desc": "Visit the Nocturne area", "diff": 8},
	"classroom_anti": {"desc": "Nocturne - Classroom anti cube", "diff": 9, "excludes": ["visit_nocturne"]},
	"complete_nocturne": {"desc": "Fully complete the Nocturne area (including all sub rooms)", "diff": 12, "excludes": ["visit_nocturne"]},

	"visit_old_zu": {"desc": "Visit Old Zu", "diff": 16},
	"complete_old_zu": {"desc": "Fully complete Old Zu (including all sub rooms)", "diff": 21, "excludes": ["visit_old_zu"]},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// VARIOUS NUMBERED GOALS
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// The table below shows what value to add to the nth easiest goal to get the oveerall rating:
	// n  | Adjustment
	// 1  | -1
	// 2  | 0
	// 3  | +1
	// 4  | +2
	// 5  | +4
	// 6  | +6

	"1_artifact": {"desc": "Collect any artifact", "diff": 4, "types": ["num_artifacts"], "excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},
	"2_artifact": {"desc": "Collect 2 artifacts", "diff": 18, "types": ["num_artifacts"], "excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},
	"3_artifact": {"desc": "Collect 3 artifacts", "diff": 20, "types": ["num_artifacts"], "excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},
	"4_artifact": {"desc": "Collect all 4 artifacts", "diff": 24, "types": ["num_artifacts"], "excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},

	"1_map": {"desc": "Collect any map", "diff": 1, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"2_map": {"desc": "Collect 2 maps", "diff": 6, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"3_map": {"desc": "Collect 3 maps", "diff": 7, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"4_map": {"desc": "Collect 4 maps", "diff": 9, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"5_map": {"desc": "Collect 5 maps", "diff": 13, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"6_map": {"desc": "Collect 6 maps", "diff": 17, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"skull_map": {"desc": "Collect all 4 pieces of the skull map puzzle", "diff": 15, "types": ["num_maps"], "excludes": ["boiler_map", "arch_map", "tree_map", "graveyard_map"]},

	"1_tuning_forks": {"desc": "Collect any tuning fork anti cube", "diff": 6, "types": ["num_tuningforks"], "excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},
	"2_tuning_forks": {"desc": "Collect 2 tuning fork anti cubes", "diff": 9, "types": ["num_tuningforks"], "excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},
	"3_tuning_forks": {"desc": "Collect 3 tuning fork anti cubes", "diff": 24, "types": ["num_tuningforks"], "excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},
	"4_tuning_forks": {"desc": "Collect all 4 tuning fork anti cubes", "diff": 26, "types": ["num_tuningforks"], "excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},

	"1_obelisk": {"desc": "Collect any obelisk anti cube", "diff": 2, "types": ["num_obelisks"], "excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},
	"2_obelisk": {"desc": "Collect 2 obelisk anti cubes", "diff": 5, "types": ["num_obelisks"], "excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},
	"3_obelisk": {"desc": "Collect 3 obelisk anti cubes", "diff": 9, "types": ["num_obelisks"], "excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},
	"4_obelisk": {"desc": "Collect all 4 obelisk anti cubes", "diff": 10, "types": ["num_obelisks"], "excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},

	"1_heart": {"desc": "Collect any heart piece", "diff": 6, "excludes": ["black_monolith_heart", "security_heart", "observatory_heart"]},
	"2_heart": {"desc": "Collect 2 heart pieces", "diff": 8, "excludes": ["black_monolith_heart", "security_heart", "observatory_heart"]},
	"3_heart": {"desc": "Collect all 3 heart pieces", "diff": 16, "excludes": ["black_monolith_heart", "security_heart", "observatory_heart"]},

	"3_keys": {"desc": "Have 3 keys in your inventory at the same time", "diff": 11, "types": ["num_keys"]},
	"4_key": {"desc": "Have 4 keys in your inventory at the same time", "diff": 17, "types": ["num_keys"]},

	"3_hub": {"desc": "Visit 3 hubs", "diff": 11, "types": ["num_hubs"], "excludes": ["visit_zu", "visit_graveyard", "visit_industrial", "visit_sewers"]},
	"4_hub": {"desc": "Visit 4 hubs", "diff": 15, "types": ["num_hubs"], "excludes": ["visit_zu", "visit_graveyard", "visit_industrial", "visit_sewers"]},
	"5_hub": {"desc": "Visit all 5 hubs", "diff": 21, "types": ["num_hubs"], "excludes": ["visit_zu", "visit_graveyard", "visit_industrial", "visit_sewers"]},

	"1_owl": {"desc": "Talk to any owl", "diff": 3, "types": ["num_owls"], "excludes": ["waterfall_owl", "tree_owl", "zu_owl", "industrial_owl"]},
	"2_owl": {"desc": "Talk to 2 owls", "diff": 6, "types": ["num_owls"], "excludes": ["waterfall_owl", "tree_owl", "zu_owl", "industrial_owl"]},
	"3_owl": {"desc": "Talk to 3 owls", "diff": 16, "types": ["num_owls"], "excludes": ["waterfall_owl", "tree_owl", "zu_owl", "industrial_owl"]},
	"4_owl": {"desc": "Talk to all 4 owls", "diff": 18, "types": ["num_owls"], "excludes": ["waterfall_owl", "tree_owl", "zu_owl", "industrial_owl"]},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// MISC
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	"perfectly_balanced": {"desc": "Finish the run with the same number of golden cubes and anti cubes (excluding bits)", "diff": 20, "types": ["end_goals"]},
	"no_warps": {"desc": "Finish the run without using any warp gates or little gates", "diff": 15, "types": ["end_goals"], "excludes": ["sync_top_anti", "clock_cube", "lava_anti"]},
	"owl_anti": {"desc": "Collect the owl room anti cube", "diff": 25, "types": ["num_owls"], "excludes": ["waterfall_owl", "tree_owl", "zu_owl", "industrial_owl"]},
}
