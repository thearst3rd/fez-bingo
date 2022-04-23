var bingoListSynerGen = {
	"bingoTypes": {
		"num_bits": {"Max": 1},
		"num_obelisks": {"Max": 1},
		"num_tuningforks": {"Max": 1},
		"num_golden": {"Max": 1},
		"num_anti": {"Max": 1},
		"num_cubes": {"Max": 1},
		"num_keys": {"Max": 1},
		"num_maps": {"Max": 1},
		"num_artifacts": {"Max": 1},
		"num_hubs": {"Max": 1},
		"single_map": {"Max": 2}
	},
	"maxScore": 0,

	// Found in village.
	"monocle_anti": {"Desc": "Village - Monocle room anti cube", "Diff": 1},
	"achievement_anti": {"Desc": "Achievement code anti cube", "Diff": 1},
	"boiler_anti": {"Desc": "Village - Boiler room anti cube", "Diff": 2},
	"boiler_map": {"Desc": "Village - Boiler room map", "Diff": 2, "Types": ["single_map"]},
	"complete_village": {"Desc": "Fully complete Village (including all sub rooms)", "Diff": 6},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// NATURE HUB GOALS (BASE DIFFICULTY: 3)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// The formula for goals that require water lowered is max(num_rooms_away_goals_diff) + 2

	// 1 room away from nature hub
	"bell_anti": {"Desc": "Nature - Bell anti cube", "Diff": 3},
	"arch_invis_anti": {"Desc": "Nature - Arch invisible platforms anti cube", "Diff": 3},
	"arch_top_cube": {"Desc": "Nature - Top of arch golden cube", "Diff": 4},
	"waterfall_owl": {"Desc": "Talk to the waterfall owl", "Diff": 4},
	// Requires water, +1 for 2 codes.
	"black_monolith_heart": {"Desc": "Collect the black monolith heart piece", "Diff": 7},

	// 2 rooms away from the nature hub
	"tetris_anti": {"Desc": "Nature - Tetris puzzle anti cube", "Diff": 5},
	"inf_fall_cube": {"Desc": "Nature - Infinite fall golden cube", "Diff": 5},
	"tree_obelisk_anti": {"Desc": "Collect the tree obelisk anti cube", "Diff": 5},
	"tree_owl": {"Desc": "Talk to the tree owl", "Diff": 6},
	"writing_artifact": {"Desc": "Collect the writing artifact", "Diff": 6},
	"lighthouse_map": {"Desc": "Nature - Lighthouse map", "Diff": 6, "Types": ["single_map"]},
	// Requires water lowered.
	"lighthouse_obelisk_anti": {"Desc": "Collect the lighthouse obelisk anti cube", "Diff": 7},
	"waterfall_pump_map": {"Desc": "Nature - Waterfall pump room map", "Diff": 7, "Types": ["single_map"]},
	"security_heart": {"Desc": "Collect the security question heart piece", "Diff": 8},
	"glitch_anti": {"Desc": "Nature - Glitch room anti cube", "Diff": 8},
	"lighthouse_tuning_fork": {"Desc": "Nature - Lighthouse tuning fork anti cube", "Diff": 8},

	// 3 rooms away from nature hub
	"temple_obelisk_anti": {"Desc": "Collect the temple obelisk anti cube", "Diff": 7},
	"bell_cube": {"Desc": "Nature - Bell tower golden cube", "Diff": 7},
	"mine_cube": {"Desc": "Nature - Mine golden cube", "Diff": 7},
	"sync_tuning_fork": {"Desc": "Nature - Sync tuning fork anti cube", "Diff": 7},
	"arch_map": {"Desc": "Nature - Arch cave map", "Diff": 7, "Types": ["single_map"]},
	"tree_map": {"Desc": "Tree - Key door map", "Diff": 8, "Types": ["single_map"]},
	"sync_top_anti": {"Desc": "Nature - Sync room top anti cube", "Diff": 8},

	// 4 rooms away from nature hub
	"qr_map": {"Desc": "Tree - Get the QR map", "Diff": 9, "Types": ["single_map"]},
	"visit_graveyard": {"Desc": "Visit the Graveyard hub room.", "Diff": 9},
	"arch_secret_cube": {"Desc": "Nature - Arch switch door golden cube", "Diff": 10},

	// 5 rooms away from nature hub
	"zu_pathway_obelisk_anti": {"Desc": "Collect the Zu pathway obelisk anti cube", "Diff": 10},
	"cube_net_anti": {"Desc": "Tree - Cube net puzzle anti cube", "Diff": 10},

	// 6 rooms away from nature hub
	"qr_map_anti": {"Desc": "Tree/Nature - QR map/Lighthouse owl room anti cube", "Diff": 11},
	"visit_zu": {"Desc": "Visit the Zu hub room.", "Diff": 11},
	"lighthouse_invis_anti": {"Desc": "Nature - Lighthouse invisible platforms anti cube", "Diff": 11},

	// 7 rooms away from nature hub
	"totem_anti": {"Desc": "Nature - Totem pole puzzle anti cube", "Diff": 12},
	"visit_industrial": {"Desc": "Visit the Industrial hub room.", "Diff": 14},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// ZU HUB GOALS (BASE DIFFICULTY: 12)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// In hub
	"zu_map": {"Desc": "Zu - Hub room map", "Diff": 12, "Types": ["single_map"]},

	// 1 room away from Zu hub
	"qr_wall_anti": {"Desc": "Zu - QR wall anti cube", "Diff": 13},
	"throne_anti": {"Desc": "Zu - Throne room/Sewer QR room anti cube", "Diff": 13},
	"observatory_cube": {"Desc": "Zu - Golden cube by the observatory", "Diff": 14},
	"clock_cube": {"Desc": "Zu - Clock tower golden cube", "Diff": 15},

	// 2 rooms away from Zu hub
	"zu_owl": {"Desc": "Talk to the Zu owl", "Diff": 15},
	"squid_cube": {"Desc": "Zu - Squid statue golden cube", "Diff": 15},
	"observatory_anti": {"Desc": "Zu - Observatory anti cube", "Diff": 16},
	"observatory_heart": {"Desc": "Collect the observatory heart piece", "Diff": 16},

	// 3 rooms away from Zu hub
	"rosetta_anti": {"Desc": "Zu - Rosetta anti cube", "Diff": 16},

	// 4 rooms away from Zu hub
	"number_artifact": {"Desc": "Collect the number artifact", "Diff": 17},

	// 5 rooms away from Zu hub
	"tome_artifact": {"Desc": "Collect the tome artifact", "Diff": 18},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// GRAVEYARD HUB GOALS (BASE DIFFICULTY: 10)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// 1 room away from graveyard hub
	"graveyard_map": {"Desc": "Graveyard - Mausoleum map", "Diff": 11, "Types": ["single_map"]},

	// 2 rooms away from graveyard hub
	"graveyard_skulls_anti": {"Desc": "Graveyard - Rotating skulls anti cube", "Diff": 12},
	"complete_graveyard_top_room": {"Desc": "Graveyard - Complete room at top of mausoleum", "Diff": 13},

	// 3 rooms away from graveyard hub
	"grave_lesser_gate_cube": {"Desc": "Graveyard - Lesser gate golden cube (middle floating island)", "Diff": 14},
	"grave_treasure_cube": {"Desc": "Graveyard - Treasure golden cube (top floating island)", "Diff": 15},

	// 4+ rooms away from graveyard hub
	"skull_artifact": {"Desc": "Collect the skull artifact", "Diff": 20},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INDUSTRIAL HUB GOALS (BASE DIFFICULTY: 15)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// 1 room away from industrial hub
	"industrial_owl": {"Desc": "Talk to the Industrial owl", "Diff": 16},

	// 2 rooms away from industrial hub
	"industrial_map": {"Desc": "Industrial - Superspin map", "Diff": 17, "Types": ["single_map"]},
	"superspin_cube": {"Desc": "Industrial - Superspin golden cube", "Diff": 18},

	// 3 rooms away from industrial hub
	"windmill_cube": {"Desc": "Industrial - Golden cube inside windmill", "Diff": 18},
	"spin_plates_cube": {"Desc": "Industrial - Elevator/Spinning plates golden cube", "Diff": 20},

	// 4 rooms away from industrial hub
	"visit_sewers": {"Desc": "Visit the Sewers hub room.", "Diff": 19},

	// 5 rooms away from industrial hub
	"pivot_cube": {"Desc": "Industrial - Pivot golden cube (after windmill)", "Diff": 20},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// SEWER HUB GOALS (BASE DIFFICULTY: 20)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// 1 room away from sewer hub
	"sew_pivot_cube": {"Desc": "Sewers - Pivot puzzle golden cube", "Diff": 21},

	// 2 rooms away from sewer hub

	// 3 rooms away from sewer hub
	"lava_tuning_fork": {"Desc": "Sewers - Lava tuning fork anti cube", "Diff": 22},
	"sewer_tuning_fork": {"Desc": "Sewers - Tuning fork anti cube", "Diff": 23},
	"sew_after_pillars_cube": {"Desc": "Sewers - Golden cube after the pillars", "Diff": 23},
	"lava_anti": {"Desc": "Sewers - Rising lava anti cube", "Diff": 25},
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// CUBE GOALS
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	"0_bits": {"Desc": "Finish the run with 0 bits collected", "Diff": 1, "Types": ["num_bits"]},
	"1_bits": {"Desc": "Finish the run with 1 bits collected", "Diff": 1, "Types": ["num_bits"]},
	"2_bits": {"Desc": "Finish the run with 2 bits collected", "Diff": 2, "Types": ["num_bits"]},
	"3_bits": {"Desc": "Finish the run with 3 bits collected", "Diff": 2, "Types": ["num_bits"]},
	"4_bits": {"Desc": "Finish the run with 4 bits collected", "Diff": 3, "Types": ["num_bits"]},
	"5_bits": {"Desc": "Finish the run with 5 bits collected", "Diff": 3, "Types": ["num_bits"]},
	"6_bits": {"Desc": "Finish the run with 6 bits collected", "Diff": 4, "Types": ["num_bits"]},
	"7_bits": {"Desc": "Finish the run with 7 bits collected", "Diff": 4, "Types": ["num_bits"]},

	"4_golden": {"Desc": "Collect 4 golden cubes", "Diff": 9, "Types": ["num_golden"]},
	"5_golden": {"Desc": "Collect 5 golden cubes", "Diff": 10, "Types": ["num_golden"]},
	"6_golden": {"Desc": "Collect 6 golden cubes", "Diff": 11, "Types": ["num_golden"]},
	"7_golden": {"Desc": "Collect 7 golden cubes", "Diff": 12, "Types": ["num_golden"]},
	"8_golden": {"Desc": "Collect 8 golden cubes", "Diff": 13, "Types": ["num_golden"]},
	"9_golden": {"Desc": "Collect 9 golden cubes", "Diff": 15, "Types": ["num_golden"]},
	"10_golden": {"Desc": "Collect 10 golden cubes", "Diff": 17, "Types": ["num_golden"]},
	"11_golden": {"Desc": "Collect 11 golden cubes", "Diff": 19, "Types": ["num_golden"]},
	"12_golden": {"Desc": "Collect 12 golden cubes", "Diff": 21, "Types": ["num_golden"]},
	"13_golden": {"Desc": "Collect 13 golden cubes", "Diff": 23, "Types": ["num_golden"]},
	"14_golden": {"Desc": "Collect 14 golden cubes", "Diff": 25, "Types": ["num_golden"]},

	"4_anti": {"Desc": "Collect 4 anti cubes", "Diff": 4, "Types": ["num_anti"]},
	"5_anti": {"Desc": "Collect 5 anti cubes", "Diff": 5, "Types": ["num_anti"]},
	"6_anti": {"Desc": "Collect 6 anti cubes", "Diff": 6, "Types": ["num_anti"]},
	"7_anti": {"Desc": "Collect 7 anti cubes", "Diff": 7, "Types": ["num_anti"]},
	"8_anti": {"Desc": "Collect 8 anti cubes", "Diff": 8, "Types": ["num_anti"]},
	"9_anti": {"Desc": "Collect 9 anti cubes", "Diff": 9, "Types": ["num_anti"]},
	"10_anti": {"Desc": "Collect 10 anti cubes", "Diff": 10, "Types": ["num_anti"]},
	"11_anti": {"Desc": "Collect 11 anti cubes", "Diff": 11, "Types": ["num_anti"]},
	"12_anti": {"Desc": "Collect 12 anti cubes", "Diff": 12, "Types": ["num_anti"]},
	"13_anti": {"Desc": "Collect 13 anti cubes", "Diff": 13, "Types": ["num_anti"]},
	"14_anti": {"Desc": "Collect 14 anti cubes", "Diff": 14, "Types": ["num_anti"]},
	"15_anti": {"Desc": "Collect 15 anti cubes", "Diff": 15, "Types": ["num_anti"]},
	"16_anti": {"Desc": "Collect 16 anti cubes", "Diff": 17, "Types": ["num_anti"]},
	"17_anti": {"Desc": "Collect 17 anti cubes", "Diff": 19, "Types": ["num_anti"]},
	"18_anti": {"Desc": "Collect 18 anti cubes", "Diff": 21, "Types": ["num_anti"]},
	"19_anti": {"Desc": "Collect 19 anti cubes", "Diff": 23, "Types": ["num_anti"]},
	"20_anti": {"Desc": "Collect 20 anti cubes", "Diff": 25, "Types": ["num_anti"]},

	"5_cube": {"Desc": "Collect 5 total cubes", "Diff": 4, "Types": ["num_cubes"]},
	"6_cube": {"Desc": "Collect 6 total cubes", "Diff": 5, "Types": ["num_cubes"]},
	"7_cube": {"Desc": "Collect 7 total cubes", "Diff": 6, "Types": ["num_cubes"]},
	"8_cube": {"Desc": "Collect 8 total cubes", "Diff": 7, "Types": ["num_cubes"]},
	"9_cube": {"Desc": "Collect 9 total cubes", "Diff": 8, "Types": ["num_cubes"]},
	"10_cube": {"Desc": "Collect 10 total cubes", "Diff": 9, "Types": ["num_cubes"]},
	"12_cube": {"Desc": "Collect 12 total cubes", "Diff": 11, "Types": ["num_cubes"]},
	"14_cube": {"Desc": "Collect 14 total cubes", "Diff": 13, "Types": ["num_cubes"]},
	"16_cube": {"Desc": "Collect 16 total cubes", "Diff": 15, "Types": ["num_cubes"]},
	"18_cube": {"Desc": "Collect 18 total cubes", "Diff": 17, "Types": ["num_cubes"]},
	"20_cube": {"Desc": "Collect 20 total cubes", "Diff": 19, "Types": ["num_cubes"]},
	"24_cube": {"Desc": "Collect 24 total cubes", "Diff": 21, "Types": ["num_cubes"]},
	"28_cube": {"Desc": "Collect 28 total cubes", "Diff": 23, "Types": ["num_cubes"]},
	"32_cube": {"Desc": "Collect 32 total cubes", "Diff": 25, "Types": ["num_cubes"]},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// MEMORY CORE GOALS
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	"early_flatland": {"Desc": "Enter the Flatland area before the Nature hub.", "Diff": 5},
	"complete_flatland": {"Desc": "Fully complete the Flatland area (including all sub rooms)", "Diff": 10},

	"visit_nocturne": {"Desc": "Visit the Nocture area", "Diff": 8},
	"classroom_anti": {"Desc": "Nocturne - Classroom anti cube", "Diff": 9, "Excludes": ["visit_nocturne"]},
	"complete_nocturne": {"Desc": "Fully complete the Nocturne area (including all sub rooms)", "Diff": 12},

	"visit_old_zu": {"Desc": "Visit Old Zu", "Diff": 16},
	"complete_old_zu": {"Desc": "Fully complete Old Zu (including all sub rooms)", "Diff": 21, "Excludes": ["visit_old_zu"]},

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

	"1_artifact": {"Desc": "Collect any artifact", "Diff": 5, "Types": ["num_artifacts"], "Excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},
	"2_artifact": {"Desc": "Collect 2 artifacts", "Diff": 17, "Types": ["num_artifacts"], "Excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},
	"3_artifact": {"Desc": "Collect 3 artifacts", "Diff": 19, "Types": ["num_artifacts"], "Excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},
	"4_artifact": {"Desc": "Collect all 4 artifacts", "Diff": 22, "Types": ["num_artifacts"], "Excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},

	"1_map": {"Desc": "Collect any map", "Diff": 1, "Types": ["num_maps"], "Excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"2_map": {"Desc": "Collect 2 maps", "Diff": 6, "Types": ["num_maps"], "Excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"3_map": {"Desc": "Collect 3 maps", "Diff": 8, "Types": ["num_maps"], "Excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"4_map": {"Desc": "Collect 4 maps", "Diff": 9, "Types": ["num_maps"], "Excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"5_map": {"Desc": "Collect 5 maps", "Diff": 13, "Types": ["num_maps"], "Excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"6_map": {"Desc": "Collect 6 maps", "Diff": 17, "Types": ["num_maps"], "Excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"skull_map": {"Desc": "Collect all 4 pieces of the skull map puzzle", "Diff": 15, "Excludes": ["boiler_map", "arch_map", "tree_map", "graveyard_map"]},

	"1_tuning_forks": {"Desc": "Collect any tuning fork anti cube", "Diff": 6, "Types": ["num_tuningforks"], "Excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},
	"2_tuning_forks": {"Desc": "Collect 2 tuning fork anti cubes", "Diff": 8, "Types": ["num_tuningforks"], "Excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},
	"3_tuning_forks": {"Desc": "Collect 3 tuning fork anti cubes", "Diff": 23, "Types": ["num_tuningforks"], "Excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},
	"4_tuning_forks": {"Desc": "Collect all 4 tuning fork anti cubes", "Diff": 25, "Types": ["num_tuningforks"], "Excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},

	"1_obelisk": {"Desc": "Collect any obelisk anti cube", "Diff": 4, "Types": ["num_obelisks"], "Excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},
	"2_obelisk": {"Desc": "Collect 2 obelisk anti cubes", "Diff": 7, "Types": ["num_obelisks"], "Excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},
	"3_obelisk": {"Desc": "Collect 3 obelisk anti cubes", "Diff": 8, "Types": ["num_obelisks"], "Excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},
	"4_obelisk": {"Desc": "Collect all 4 obelisk anti cubes", "Diff": 12, "Types": ["num_obelisks"], "Excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},

	"1_heart": {"Desc": "Collect any heart piece", "Diff": 6, "Excludes": ["black_monolith_heart", "security_heart", "observatory_heart"]},
	"2_heart": {"Desc": "Collect 2 heart pieces", "Diff": 8, "Excludes": ["black_monolith_heart", "security_heart", "observatory_heart"]},
	"3_heart": {"Desc": "Collect all 3 heart pieces", "Diff": 18, "Excludes": ["black_monolith_heart", "security_heart", "observatory_heart"]},

	"3_keys": {"Desc": "Have 3 keys in your inventory at the same time", "Diff": 11, "Types": ["num_keys"]},
	"4_key": {"Desc": "Have 4 keys in your inventory at the same time", "Diff": 17, "Types": ["num_keys"]},

	"3_hub": {"Desc": "Visit 3 hubs", "Diff": 11, "Types": ["num_hubs"], "Excludes": ["visit_zu", "visit_graveyard", "visit_industrial", "visit_sewers"]},
	"4_hub": {"Desc": "Visit 4 hubs", "Diff": 15, "Types": ["num_hubs"], "Excludes": ["visit_zu", "visit_graveyard", "visit_industrial", "visit_sewers"]},
	"5_hub": {"Desc": "Visit all 5 hubs", "Diff": 21, "Types": ["num_hubs"], "Excludes": ["visit_zu", "visit_graveyard", "visit_industrial", "visit_sewers"]},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// MISC
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	"perfectly_balanced": {"Desc": "Finish the run with the same number of golden cubes and anti cubes (excluding bits)", "Diff": 20},
	"no_warps": {"Desc": "Finish the run without using any warp gates or little gates", "Diff": 23, "Excludes": ["sync_top_anti", "clock_cube", "lava_anti"]},
	"owl_anti": {"Desc": "Talk to all 4 owls and collect owl room anti cube", "Diff": 25, "Excludes": ["waterfall_owl", "tree_owl", "zu_owl", "industrial_owl"]},
}
