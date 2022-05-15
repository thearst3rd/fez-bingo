/**
 * Custom bingo generator, taking into account dynamic difficulty.
 */

 var bingo_list_custom = {
	"bingo_types": {
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
	"max_score": 0,

	// Found in village.
	"monocle_anti": {"desc": "Village - Monocle room anti cube", "diff": 1},
	"achievement_anti": {"desc": "Achievement code anti cube", "diff": 1},
	"boiler_anti": {"desc": "Village - Boiler room anti cube", "diff": 2},
	"boiler_map": {"desc": "Village - Boiler room map", "diff": 2, "types": ["single_map"]},
	"complete_village": {"desc": "Fully complete Village (including all sub rooms)", "diff": 6},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// NATURE HUB GOALS (BASE DIFFICULTY: 3)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// The formula for goals that require water lowered is max(num_rooms_away_goals_diff) + 2

	// 1 room away from nature hub
	"bell_anti": {"desc": "Nature - Bell anti cube", "diff": 3},
	"arch_invis_anti": {"desc": "Nature - Arch invisible platforms anti cube", "diff": 3},
	"arch_top_cube": {"desc": "Nature - Top of arch golden cube", "diff": 4},
	"waterfall_owl": {"desc": "Talk to the waterfall owl", "diff": 4},
	// Requires water, +1 for 2 codes.
	"black_monolith_heart": {"desc": "Collect the black monolith heart piece", "diff": 7},

	// 2 rooms away from the nature hub
	"tetris_anti": {"desc": "Nature - Tetris puzzle anti cube", "diff": 5},
	"inf_fall_cube": {"desc": "Nature - Infinite fall golden cube", "diff": 5},
	"tree_obelisk_anti": {"desc": "Collect the tree obelisk anti cube", "diff": 5},
	"tree_owl": {"desc": "Talk to the tree owl", "diff": 6},
	"writing_artifact": {"desc": "Collect the writing artifact", "diff": 6},
	"lighthouse_map": {"desc": "Nature - Lighthouse map", "diff": 6, "types": ["single_map"]},
	// Requires water lowered.
	"lighthouse_obelisk_anti": {"desc": "Collect the lighthouse obelisk anti cube", "diff": 7},
	"waterfall_pump_map": {"desc": "Nature - Waterfall pump room map", "diff": 7, "types": ["single_map"]},
	"security_heart": {"desc": "Collect the security question heart piece", "diff": 8},
	"glitch_anti": {"desc": "Nature - Glitch room anti cube", "diff": 8},
	"lighthouse_tuning_fork": {"desc": "Nature - Lighthouse tuning fork anti cube", "diff": 8},

	// 3 rooms away from nature hub
	"temple_obelisk_anti": {"desc": "Collect the temple obelisk anti cube", "diff": 7},
	"bell_cube": {"desc": "Nature - Bell tower golden cube", "diff": 7},
	"mine_cube": {"desc": "Nature - Mine golden cube", "diff": 7},
	"sync_tuning_fork": {"desc": "Nature - Sync tuning fork anti cube", "diff": 7},
	"arch_map": {"desc": "Nature - Arch cave map", "diff": 7, "types": ["single_map"]},
	"tree_map": {"desc": "Tree - Key door map", "diff": 8, "types": ["single_map"]},
	"sync_top_anti": {"desc": "Nature - Sync room top anti cube", "diff": 8},

	// 4 rooms away from nature hub
	"qr_map": {"desc": "Tree - Get the QR map", "diff": 9, "types": ["single_map"]},
	"visit_graveyard": {"desc": "Visit the Graveyard hub room.", "diff": 9, "synergies": {"graveyard": -8}},
	"arch_secret_cube": {"desc": "Nature - Arch switch door golden cube", "diff": 10},

	// 5 rooms away from nature hub
	"zu_pathway_obelisk_anti": {"desc": "Collect the Zu pathway obelisk anti cube", "diff": 10},
	"cube_net_anti": {"desc": "Tree - Cube net puzzle anti cube", "diff": 10},

	// 6 rooms away from nature hub
	"qr_map_anti": {"desc": "Tree/Nature - QR map/Lighthouse owl room anti cube", "diff": 11},
	"visit_zu": {"desc": "Visit the Zu hub room.", "diff": 11, "synergies": {"zu": -10}},
	"lighthouse_invis_anti": {"desc": "Nature - Lighthouse invisible platforms anti cube", "diff": 11},

	// 7 rooms away from nature hub
	"totem_anti": {"desc": "Nature - Totem pole puzzle anti cube", "diff": 12},
	"visit_industrial": {"desc": "Visit the Industrial hub room.", "diff": 14, "synergies": {"industrial": -13}},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// ZU HUB GOALS (BASE DIFFICULTY: 12)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// In hub
	"zu_map": {"desc": "Zu - Hub room map", "diff": 12, "synergies": {"zu": -10}, "types": ["single_map"]},

	// 1 room away from Zu hub
	"qr_wall_anti": {"desc": "Zu - QR wall anti cube", "diff": 13, "synergies": {"zu": -10}},
	"throne_anti": {"desc": "Zu - Throne room/Sewer QR room anti cube", "diff": 13, "synergies": {"zu": -10}},
	"observatory_cube": {"desc": "Zu - Golden cube by the observatory", "diff": 14, "synergies": {"zu": -10}},
	"clock_cube": {"desc": "Zu - Clock tower golden cube", "diff": 15, "synergies": {"zu": -10}},

	// 2 rooms away from Zu hub
	"zu_owl": {"desc": "Talk to the Zu owl", "diff": 15, "synergies": {"zu": -10}},
	"squid_cube": {"desc": "Zu - Squid statue golden cube", "diff": 15, "synergies": {"zu": -10}},
	"observatory_anti": {"desc": "Zu - Observatory anti cube", "diff": 16, "synergies": {"zu": -10}},
	"observatory_heart": {"desc": "Collect the observatory heart piece", "diff": 16, "synergies": {"zu": -10}},

	// 3 rooms away from Zu hub
	"rosetta_anti": {"desc": "Zu - Rosetta anti cube", "diff": 16, "synergies": {"zu": -10}},

	// 4 rooms away from Zu hub
	"number_artifact": {"desc": "Collect the number artifact", "diff": 17, "synergies": {"zu": -10}},

	// 5 rooms away from Zu hub
	"tome_artifact": {"desc": "Collect the tome artifact", "diff": 18, "synergies": {"zu": -10}},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// GRAVEYARD HUB GOALS (BASE DIFFICULTY: 10)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// 1 room away from graveyard hub
	"graveyard_map": {"desc": "Graveyard - Mausoleum map", "diff": 11, "synergies": {"graveyard": -8}, "types": ["single_map"]},

	// 2 rooms away from graveyard hub
	"graveyard_skulls_anti": {"desc": "Graveyard - Rotating skulls anti cube", "diff": 12, "synergies": {"graveyard": -8}},
	"complete_graveyard_top_room": {"desc": "Graveyard - Complete room at top of mausoleum", "diff": 13, "synergies": {"graveyard": -8}},

	// 3 rooms away from graveyard hub
	"grave_lesser_gate_cube": {"desc": "Graveyard - Lesser gate golden cube (middle floating island)", "diff": 14, "synergies": {"graveyard": -8}},
	"grave_treasure_cube": {"desc": "Graveyard - Treasure golden cube (top floating island)", "diff": 15, "synergies": {"graveyard": -8}},

	// 4+ rooms away from graveyard hub
	"skull_artifact": {"desc": "Collect the skull artifact", "diff": 20, "synergies": {"graveyard": -8}},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INDUSTRIAL HUB GOALS (BASE DIFFICULTY: 15)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// 1 room away from industrial hub
	"industrial_owl": {"desc": "Talk to the Industrial owl", "diff": 16, "synergies": {"industrial": -13}},

	// 2 rooms away from industrial hub
	"industrial_map": {"desc": "Industrial - Superspin map", "diff": 17, "synergies": {"industrial": -13}, "types": ["single_map"]},
	"superspin_cube": {"desc": "Industrial - Superspin golden cube", "diff": 20, "synergies": {"industrial": -13}},

	// 3 rooms away from industrial hub
	"windmill_cube": {"desc": "Industrial - Golden cube inside windmill", "diff": 18, "synergies": {"industrial": -13}},
	"spin_plates_cube": {"desc": "Industrial - Elevator/Spinning plates golden cube", "diff": 24, "synergies": {"industrial": -13}},

	// 4 rooms away from industrial hub
	"visit_sewers": {"desc": "Visit the Sewers hub room.", "diff": 19, "synergies": {"industrial": -13}},

	// 5 rooms away from industrial hub
	"pivot_cube": {"desc": "Industrial - Pivot golden cube (after windmill)", "diff": 20, "synergies": {"industrial": -13}},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// SEWER HUB GOALS (BASE DIFFICULTY: 20)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// 1 room away from sewer hub
	"sew_pivot_cube": {"desc": "Sewers - Pivot puzzle golden cube", "diff": 21, "synergies": {"industrial": -13, "sewers": -5}},

	// 2 rooms away from sewer hub

	// 3 rooms away from sewer hub
	"lava_tuning_fork": {"desc": "Sewers - Lava tuning fork anti cube", "diff": 22, "synergies": {"industrial": -13, "sewers": -5}},
	"sewer_tuning_fork": {"desc": "Sewers - Green tuning fork anti cube", "diff": 23, "synergies": {"industrial": -13, "sewers": -5}},
	"sew_after_pillars_cube": {"desc": "Sewers - Golden cube after the pillars", "diff": 23, "synergies": {"industrial": -13, "sewers": -5}},
	"lava_anti": {"desc": "Sewers - Rising lava anti cube", "diff": 25, "synergies": {"industrial": -13, "sewers": -5}},
	
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
	"5_golden": {"desc": "Collect 5 golden cubes", "diff": 10, "types": ["num_golden"]},
	"6_golden": {"desc": "Collect 6 golden cubes", "diff": 11, "types": ["num_golden"], "excludes": ["5_cube"]},
	"7_golden": {"desc": "Collect 7 golden cubes", "diff": 12, "types": ["num_golden"], "excludes": ["5_cube", "6_cube"]},
	"8_golden": {"desc": "Collect 8 golden cubes", "diff": 13, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube"]},
	"9_golden": {"desc": "Collect 9 golden cubes", "diff": 15, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube"]},
	"10_golden": {"desc": "Collect 10 golden cubes", "diff": 17, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube"]},
	"11_golden": {"desc": "Collect 11 golden cubes", "diff": 19, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube"]},
	"12_golden": {"desc": "Collect 12 golden cubes", "diff": 21, "types": ["num_golden"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube"]},


	"4_anti": {"desc": "Collect 4 anti cubes", "diff": 4, "types": ["num_anti"]},
	"5_anti": {"desc": "Collect 5 anti cubes", "diff": 5, "types": ["num_anti"]},
	"6_anti": {"desc": "Collect 6 anti cubes", "diff": 6, "types": ["num_anti"], "excludes": ["5_cube"]},
	"7_anti": {"desc": "Collect 7 anti cubes", "diff": 7, "types": ["num_anti"], "excludes": ["5_cube", "6_cube"]},
	"8_anti": {"desc": "Collect 8 anti cubes", "diff": 8, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube"]},
	"9_anti": {"desc": "Collect 9 anti cubes", "diff": 9, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube"]},
	"10_anti": {"desc": "Collect 10 anti cubes", "diff": 10, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube"]},
	"11_anti": {"desc": "Collect 11 anti cubes", "diff": 11, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube"]},
	"12_anti": {"desc": "Collect 12 anti cubes", "diff": 12, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube"]},
	"13_anti": {"desc": "Collect 13 anti cubes", "diff": 13, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube", "12_cube"]},
	"14_anti": {"desc": "Collect 14 anti cubes", "diff": 14, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube", "12_cube"]},
	"15_anti": {"desc": "Collect 15 anti cubes", "diff": 15, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube", "12_cube", "14_cube"]},
	"16_anti": {"desc": "Collect 16 anti cubes", "diff": 16, "types": ["num_anti"], "excludes": ["5_cube", "6_cube", "7_cube", "8_cube", "9_cube", "10_cube", "12_cube", "14_cube"]},

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

	"early_flatland": {"desc": "Enter the Flatland area before the Nature hub.", "diff": 5},
	"complete_flatland": {"desc": "Fully complete the Flatland area (including all sub rooms)", "diff": 10},

	"visit_nocturne": {"desc": "Visit the Nocturne area", "diff": 8},
	"classroom_anti": {"desc": "Nocturne - Classroom anti cube", "diff": 9, "excludes": ["visit_nocturne"]},
	"complete_nocturne": {"desc": "Fully complete the Nocturne area (including all sub rooms)", "diff": 12},

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

	"1_artifact": {"desc": "Collect any artifact", "diff": 5, "types": ["num_artifacts"], "excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},
	"2_artifact": {"desc": "Collect 2 artifacts", "diff": 17, "types": ["num_artifacts"], "excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},
	"3_artifact": {"desc": "Collect 3 artifacts", "diff": 19, "types": ["num_artifacts"], "excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},
	"4_artifact": {"desc": "Collect all 4 artifacts", "diff": 22, "types": ["num_artifacts"], "excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},

	"1_map": {"desc": "Collect any map", "diff": 1, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"2_map": {"desc": "Collect 2 maps", "diff": 6, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"3_map": {"desc": "Collect 3 maps", "diff": 8, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"4_map": {"desc": "Collect 4 maps", "diff": 9, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"5_map": {"desc": "Collect 5 maps", "diff": 13, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"6_map": {"desc": "Collect 6 maps", "diff": 17, "types": ["num_maps"], "excludes": ["boiler_map", "lighthouse_map", "waterfall_pump_map", "arch_map", "tree_map", "qr_map", "zu_map", "graveyard_map", "insudtrial_map"]},
	"skull_map": {"desc": "Collect all 4 pieces of the skull map puzzle", "diff": 15, "excludes": ["boiler_map", "arch_map", "tree_map", "graveyard_map"]},

	"1_tuning_forks": {"desc": "Collect any tuning fork anti cube", "diff": 6, "types": ["num_tuningforks"], "excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},
	"2_tuning_forks": {"desc": "Collect 2 tuning fork anti cubes", "diff": 8, "types": ["num_tuningforks"], "excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},
	"3_tuning_forks": {"desc": "Collect 3 tuning fork anti cubes", "diff": 23, "types": ["num_tuningforks"], "excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},
	"4_tuning_forks": {"desc": "Collect all 4 tuning fork anti cubes", "diff": 25, "types": ["num_tuningforks"], "excludes": ["lighthouse_tuning_fork", "sync_tuning_fork", "sewer_tuning_fork", "lava_tuning_fork"]},

	"1_obelisk": {"desc": "Collect any obelisk anti cube", "diff": 4, "types": ["num_obelisks"], "excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},
	"2_obelisk": {"desc": "Collect 2 obelisk anti cubes", "diff": 7, "types": ["num_obelisks"], "excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},
	"3_obelisk": {"desc": "Collect 3 obelisk anti cubes", "diff": 8, "types": ["num_obelisks"], "excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},
	"4_obelisk": {"desc": "Collect all 4 obelisk anti cubes", "diff": 12, "types": ["num_obelisks"], "excludes": ["tree_obelisk_anti", "lighthouse_obelisk_anti", "temple_obelisk_anti", "zu_pathway_obelisk_anti"]},

	"1_heart": {"desc": "Collect any heart piece", "diff": 6, "excludes": ["black_monolith_heart", "security_heart", "observatory_heart"]},
	"2_heart": {"desc": "Collect 2 heart pieces", "diff": 8, "excludes": ["black_monolith_heart", "security_heart", "observatory_heart"]},
	"3_heart": {"desc": "Collect all 3 heart pieces", "diff": 18, "excludes": ["black_monolith_heart", "security_heart", "observatory_heart"]},

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
	"owl_anti": {"desc": "Collect the owl room anti cube", "diff": 25, "excludes": ["waterfall_owl", "tree_owl", "zu_owl", "industrial_owl"]},
}

bingoGeneratorCustom = function(bingo_list, opts)
{
    //Make sure everything exists that should, pull out maxScore and bingoTypes from bingoList
    var bingo_types = bingo_list.bingo_types
    delete bingo_list.bingo_types
    var max_score = bingo_list.max_score
    delete bingo_list.max_score
    preprocessBingoList(bingo_list)

    //Create counts for all types
    var types = { }
    for (const key of Object.keys(bingo_types)) {
        if (!bingo_types[key].hasOwnProperty("max"))
            bingo_types[key].max = 5
        types[key] = bingo_types[key].max
    }

    // Create a 5x5 grid of empty objects.
    board = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => new BingoGoal()))

    var score_target = 60

	filling_order = [
		[2, 2],
		[1, 2],
		[3, 2],
		[1, 3],
		[3, 1],
		[2, 3],
		[2, 1],
		[3, 3],
		[1, 1],
		[0, 4],
		[4, 0],
		[1, 4],
		[3, 0],
		[2, 4],
		[2, 0],
		[3, 4],
		[1, 0],
		[4, 4],
		[0, 0],
		[4, 3],
		[0, 1],
		[4, 2],
		[0, 2],
		[4, 1],
		[0, 3]
	]

	var unchosen_goals = bingo_list

	for(var i = 0; i < filling_order.length; i++)
	{
		var row_idx = filling_order[i][0]
		var col_idx = filling_order[i][1]
		var goal = selectGoal(board, row_idx, col_idx, score_target, unchosen_goals)
		board[row_idx][col_idx].setGoal(goal)
		// Remove the chosen goal from the available goals.
		for(const key in unchosen_goals)
		{
			if(unchosen_goals[key] == goal)
			{
				delete unchosen_goals[key]
			}
		}
	}

	var goals_list = []
	for(var row_idx = 0; row_idx < 5; row_idx++)
	{
		for(var col_idx = 0; col_idx < 5; col_idx++)
		{
			goals_list.push({"name": board[row_idx][col_idx].desc})
		}
	}

	console.log(JSON.stringify(goals_list))

	var diff_sums = []

	diff_sums.push(getRow(board, 0).diffSum())
	diff_sums.push(getRow(board, 1).diffSum())
	diff_sums.push(getRow(board, 2).diffSum())
	diff_sums.push(getRow(board, 3).diffSum())
	diff_sums.push(getRow(board, 4).diffSum())
	diff_sums.push(getCol(board, 0).diffSum())
	diff_sums.push(getCol(board, 1).diffSum())
	diff_sums.push(getCol(board, 2).diffSum())
	diff_sums.push(getCol(board, 3).diffSum())
	diff_sums.push(getCol(board, 4).diffSum())
	diff_sums.push(getTLBR(board).diffSum())
	diff_sums.push(getTRBL(board).diffSum())

	console.log(diff_sums)
	console.log("Max: ", Math.max(...diff_sums))
	console.log("Min: ", Math.min(...diff_sums))

}

/**
 * Get the cells in the top left to bottom right (\) diagonal.
 * 
 * @param {Array} grid The current board state. 
 * 
 * @returns A BingoGroup containing the cells in the diagonal.
 */
function getTLBR(grid)
{
    return new BingoGroup([grid[0][0], grid[1][1], grid[2][2], grid[3][3], grid[4][4]])
}

/**
 * Get the cells in the top right to bottom left (/) diagonal.
 * 
 * @param {Array} grid The current board state. 
 * 
 * @returns A BingoGroup containing the cells in the diagonal.
 */
function getTRBL(grid)
{
    return new BingoGroup([grid[0][4], grid[1][3], grid[2][2], grid[3][1], grid[4][0]])
}

/**
 * Get the cells in the given row.
 * 
 * @param {Array} grid The current board state. 
 * @param {Number} row_idx The row to get (zero-indexed).
 * 
 * @returns A BingoGroup containing the cells in the row.
 */
function getRow(grid, row_idx)
{
    return new BingoGroup(grid[row_idx])
}

/**
 * Get the cells in the given column.
 * 
 * @param {Array} grid The current board state. 
 * @param {Number} row_idx The column to get (zero-indexed).
 * 
 * @returns A BingoGroup containing the cells in the column.
 */
function getCol(grid, col_idx)
{
    return new BingoGroup([grid[0][col_idx], grid[1][col_idx], grid[2][col_idx], grid[3][col_idx], grid[4][col_idx]])
}

/**
 * @brief Return an array, whose elements are BingoGroups containing the cells in each group that the given cell is a
 *        member of.
 * 
 * For example, running this function on the cell (0,0) will return an array containing the first row, the first column,
 * and the TL-BR diagonal.
 * 
 * @param {Array} grid The current board state.
 * @param {Number} row_idx The row index of the cell to search (zero-indexed)
 * @param {Number} col_idx The column index of the cell to search (zero-indexed)
 */
function getGroups(grid, row_idx, col_idx)
{
	var groups = [getRow(grid, row_idx), getCol(grid, col_idx)]
	// The TL-BR diagonal's cells all have the same row and column number.
	if(row_idx == col_idx) groups.push(getTLBR(grid))
	// The TR-BL diagonal has cells whose coordinates add to 4.
	if(row_idx + col_idx == 4) groups.push(getTRBL(grid))
	return groups
}

function selectRandomGoal(goals)
{
    var index = Math.floor(Math.random() * goals.length)
    return goals[index]
}

//Reduces fluff in bingoList object if there's a method to set defaults
function preprocessBingoList(bingo_list) {
    for (const key of Object.keys(bingo_list)) {
        bingo_list[key].name = key

        if (!bingo_list[key].hasOwnProperty("desc"))
            delete bingo_list[key]

        if (!bingo_list[key].hasOwnProperty("diff"))
            bingo_list[key].diff = 0

        if (!bingo_list[key].hasOwnProperty("types"))
            bingo_list[key].types = []

        if (!bingo_list[key].hasOwnProperty("excludes"))
            bingo_list[key].excludes = []

        if (!bingo_list[key].hasOwnProperty("synergy"))
            bingo_list[key].synergy = []

        if (!bingo_list[key].hasOwnProperty("score"))
            bingo_list[key].score = 0
    }
}

function selectGoal(grid, row_idx, col_idx, target_diff, unchosen)
{
	// The maximum and minimum difficulty for goals.
	const max_goal_diff = 25
	const min_goal_diff = 1
	
	var groups = getGroups(grid, row_idx, col_idx)
	var intersecting_goals = groups.reduce(function f(acc, x) { return acc.concat(x.chosenGoals()) }, [])
	var intersecting_goal_names = intersecting_goals.reduce(function f(acc, x) { return acc.concat(x.name) }, [])

	// Get all the constraints from cells that are already filled in.
	var chosen_types = []
	var excludes = []
	for(var i = 0; i < intersecting_goals.length; i++)
	{
		if(intersecting_goals[i].hasOwnProperty("types"))
		{
			chosen_types.push(...intersecting_goals[i].types)
		}
		if(intersecting_goals[i].hasOwnProperty("excludes"))
		{
			excludes.push(...intersecting_goals[i].excludes)
		}
	}

	// If any group this intersects with has 2 cube collection goals already, do not let it have a third.
	for(var i = 0; i < groups.length; i++)
	{
		if(groups[i].hasTwoCubeGoals())
		{
			excludes.push("num_golden", "num_anti", "num_cubes")
			break
		}
	}

	// Put all the available goals into a list.
	var available_goals = []
	for(const key in unchosen)
	{
		var curr_goal = unchosen[key]
		var is_valid = true
		if(curr_goal.hasOwnProperty("types"))
		{
			for(var i = 0; i < curr_goal.types.length; i++)
			{
				if(chosen_types.includes(curr_goal.types[i]))
				{
					is_valid = false
				}
			}
		}
		if(curr_goal.hasOwnProperty("excludes"))
		{
			for(var i = 0; i < curr_goal.excludes.length; i++)
			{
				if(intersecting_goal_names.includes(curr_goal.excludes[i]))
				{
					is_valid = false
				}
			}
		}
		if(excludes.includes(key))
		{
			is_valid = false
		}
		if(is_valid)
		{
			available_goals.push(unchosen[key])
		}
	}

	// Get the groups that have the largest number of elements.
	var biggest_groups = []
	var num_chosen_in_biggest_group = -1
	for(var i = 0; i < groups.length; i++)
	{
		var num_chosen_in_curr_group = groups[i].numChosen()
		if(num_chosen_in_curr_group > num_chosen_in_biggest_group)
		{
			biggest_groups = [groups[i]]
			num_chosen_in_biggest_group = num_chosen_in_curr_group
		}
		else if (num_chosen_in_curr_group == num_chosen_in_biggest_group)
		{
			biggest_groups.push(groups[i])
		}
	}

	var biggest_group_diffs = biggest_groups.reduce(function f(acc, x) { return acc.concat(x.diffSum()) }, [])

	var diff

	if(num_chosen_in_biggest_group == 4)
	{
		if(biggest_groups.length == 1)
		{
			diff = target_diff - biggest_groups[0].diffSum()
		}
		else
		{
			diff = target_diff - Math.min(...biggest_group_diffs)
		}
		if(diff < 1) diff = 1
		if(diff > 25) diff = 25
	}
	else
	{
		// The groups with the max and min sums, so far.
		var max_group = groups[0]; var min_group = groups[0]

		for(var i = 1; i < groups.length; i++)
		{
			if(groups[i].diffSum() > max_group.diffSum())
			{
				max_group = groups[i]
			}
			if(groups[i].diffSum() < min_group.diffSum())
			{
				min_group = groups[i]
			}
		}

		// Find the minimum and mximum possible difficulty values, assuming the remaining goals are all filled in with
		// the maximum or minimum possible.
		var min_score_left = target_diff - max_group.diffSum()
		var max_score_left = target_diff - min_group.diffSum()
		var min_diff = Math.max(max_score_left - (4 - min_group.numChosen()) * (max_goal_diff - 2), min_goal_diff)
		var max_diff = Math.min(min_score_left - (4 - max_group.numChosen()) * (min_goal_diff + 2), max_goal_diff)


		var possible_diffs = []
		for(var i = min_diff; i <= max_diff; i++)
		{
			if(!containsCloseToDiff(intersecting_goals, i))
			{
				possible_diffs.push(i)
			}
		}
		if(possible_diffs.length == 0)
		{
			for(var i = min_diff; i <= max_diff; i++)
			{
				possible_diffs.push(i)
			}
		}
		if(possible_diffs.length == 0)
		{
			possible_diffs.push(min_diff)
		}

		diff = possible_diffs[Math.floor(Math.random() * possible_diffs.length)]
	}

	var correct_diff_goals = searchForGoals(available_goals, [diff], target_diff, groups)

	if(correct_diff_goals.length == 0)
	{
		console.log("No groups found with correct difficulty.")
		for(var i = 0; i <= max_goal_diff; i++)
		{
			var new_diffs = [diff + i, diff - i];
			correct_diff_goals = searchForGoals(available_goals, new_diffs, target_diff, groups)
			if(correct_diff_goals.length > 0)
			{
				return correct_diff_goals[Math.floor(Math.random() * correct_diff_goals.length)]
			}
		}
		console.log("All goals found to be impossible.")
	}
	else
	{
		return correct_diff_goals[Math.floor(Math.random() * correct_diff_goals.length)]
	}
}

function searchForGoals(available_goals, diffs, target_diff, groups)
{
	var correct_diff_goals = []
	for(var goal_idx = 0; goal_idx < available_goals.length; goal_idx++)
	{
		if(available_goals[goal_idx].hasOwnProperty("synergies"))
		{
			var goal = available_goals[goal_idx]
			var is_correct_diff = false
			for(var group_idx = 0; group_idx < groups.length; group_idx++)
			{
				if(!groups[group_idx].is_possible(goal, target_diff))
				{
					is_correct_diff = false
					break;
				}
				if(diffs.includes(groups[group_idx].get_additional_diff(goal)))
				{
					is_correct_diff = true
				}
			}
			if(is_correct_diff)
			{
				correct_diff_goals.push(goal)
			}
		}
		else
		{
			if(diffs.includes(available_goals[goal_idx].diff))
			{
				correct_diff_goals.push(available_goals[goal_idx])
			}
		}
	}
	return correct_diff_goals
}

function containsDiff(grid, diff)
{
	var flattened_grid = grid.flatten()
	var diffs = flattened_grid.reduce(function f(x, y) { return y.hasOwnProperty("diff") ? x.concat(y.diff) : x }, [])
	return diffs.indexOf(diff) != -1
}

function containsCloseToDiff(list, diff)
{
	var diffs = list.reduce(function f(x, y) { return y.hasOwnProperty("diff") ? x.concat(y.diff) : x }, [])
	for(var i = 0; i < diffs.length; i++)
	{
		if(Math.abs(diff - diffs[i]) < 3.0)
		{
			return true
		}
	}
	return false
}

Array.prototype.avg = function ()
{
	return this.sum() / this.length
}

Array.prototype.sum = function ()
{
	return this.reduce(function f(x, y) { return x + y }, 0)
}

Array.prototype.flatten = function ()
{
	return this.reduce(function f(x, y) { return x.concat(y) }, [])
}

class BingoGoal
{
	constructor()
	{
		this.is_valid = false
	}

	setGoal(goal)
	{
		this.is_valid = true
		this.name = goal.name
		this.desc = goal.desc
		this.diff = goal.diff
		this.types = goal.types
		this.excludes = goal.excludes
		this.synergies = goal.synergies
	}
}

class BingoGroup
{
	constructor(goals)
	{
		this.goals = goals
	}

	diffs()
	{
		var diffs = []
		var synergies = []
		for(var i = 0; i < this.goals.length; i++)
		{
			if(!this.goals[i].is_valid) continue
			if(this.goals[i].hasOwnProperty("synergies"))
			{
				var diff = this.goals[i].diff
				for (const key in this.goals[i].synergies)
				{
					if(synergies.indexOf(key) == -1)
					{
						synergies.push(key)
					}
					else
					{
						diff += this.goals[i].synergies[key]
					}
				}
				diffs.push(diff)
			}
			else
			{
				diffs.push(this.goals[i].diff)
			}
		}
		return diffs
	}

	diffSum()
	{
		return this.diffs().sum()
	}

	synergies()
	{
		var synergies = []
		for(var i = 0; i < this.goals.length; i++)
		{
			if(this.goals[i].hasOwnProperty("synergies"))
			{
				for(const key in this.goals[i].synergies)
				{
					if(!synergies.includes(key))
					{
						synergies.push(key)
					}
				}
			}
		}
		return synergies
	}

	types()
	{
		var types = []
		for(var i = 0; i < this.goals.length; i++)
		{
			var curr_goal = this.goals[i]
			if(curr_goal.hasOwnProperty("types"))
			{
				for(var j = 0; j < curr_goal.types.length; j++)
				{
					var curr_type = curr_goal.types[j]
					if(!types.includes(curr_type))
					{
						types.push(curr_type)
					}
				}
			}
		}
		return types
	}

	hasTwoCubeGoals()
	{
		var types = this.types()
		var num_goals = 0
		if(types.includes("num_cubes")) num_goals++
		if(types.includes("num_anti")) num_goals++
		if(types.includes("num_golden")) num_goals ++
		return (num_goals > 2)
	}

	numChosen()
	{
		return this.goals.reduce(function f(acc, x) { return x.is_valid ? acc + 1 : acc }, 0)
	}

	chosenGoals()
	{
		return this.goals.reduce(function f(acc, x) { return x.is_valid ? acc.concat(x) : acc }, [])
	}

	get_additional_diff(goal)
	{
		var synergies = this.synergies()
		var goal_diff = goal.diff
		if(goal.hasOwnProperty("synergies"))
		{
			for(const key in goal.synergies)
			{
				if(synergies.includes(key))
				{
					goal_diff += goal.synergies[key]
				}
			}
		}
		return goal_diff
	}

	is_possible(goal, target_diff)
	{
		var goals_left = 4 - this.chosenGoals()
		var total_diff = this.diffSum() + this.get_additional_diff(goal)
		var diff_remaining_per_goal = (target_diff - total_diff) / goals_left
		if((diff_remaining_per_goal > 24) || (diff_remaining_per_goal < 2))
		{
			return false
		}
		else
		{
			return true
		}
	}
}

bingoGeneratorCustom(bingo_list_custom, {})
