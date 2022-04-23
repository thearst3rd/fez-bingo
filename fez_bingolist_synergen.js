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
	},
	"maxScore": 0,

	// Goals
	"0_bits": {"Desc": "Finish the run with 0 bits collected", "Diff": 1, "Types": ["num_bits"]},
	"1_bits": {"Desc": "Finish the run with 1 bits collected", "Diff": 1, "Types": ["num_bits"]},
	"monocle_anti": {"Desc": "Village - Monocle room anti cube", "Diff": 1},
	"achievement_anti": {"Desc": "Achievement code anti cube", "Diff": 1},

	"2_bits": {"Desc": "Finish the run with 2 bits collected", "Diff": 2, "Types": ["num_bits"]},
	"3_bits": {"Desc": "Finish the run with 3 bits collected", "Diff": 2, "Types": ["num_bits"]},
	"boiler_anti": {"Desc": "Village - Boiler room anti cube", "Diff": 2},

	"bell_anti": {"Desc": "Nature - Bell anti cube", "Diff": 3},
	"inf_fall_cube": {"Desc": "Nature - Infinite fall golden cube", "Diff": 3},
	"4_bits": {"Desc": "Finish the run with 4 bits collected", "Diff": 3, "Types": ["num_bits"]},
	"5_bits": {"Desc": "Finish the run with 5 bits collected", "Diff": 3, "Types": ["num_bits"]},

	"6_bits": {"Desc": "Finish the run with 6 bits collected", "Diff": 4, "Types": ["num_bits"]},
	"7_bits": {"Desc": "Finish the run with 7 bits collected", "Diff": 4, "Types": ["num_bits"]},
	"tetris_anti": {"Desc": "Nature - Tetris puzzle anti cube", "Diff": 4},

	"2_map": {"Desc": "Collect 2 maps", "Diff": 5, "Types": ["num_maps"]},
	"waterfall_owl": {"Desc": "Talk to the waterfall owl", "Diff": 5},
	"any_artifact": {"Desc": "Collect any artifact", "Diff": 5, "Types": ["num_artifacts"], "Excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},

	"arch_invis_anti": {"Desc": "Nature - Arch invisible platforms anti cube", "Diff": 6},
	"mine_cube": {"Desc": "Nature - Mine golden cube", "Diff": 6},
	"complete_village": {"Desc": "Fully complete Village (including all small sub rooms)", "Diff": 6},
	"writing_artifact": {"Desc": "Collect the writing artifact", "Diff": 6},

	"sync_top_anti": {"Desc": "Nature - Sync room top anti cube", "Diff": 7},
	"bell_cube": {"Desc": "Nature - Bell tower golden cube", "Diff": 7},
	"3_obelisks": {"Desc": "Collect 3 obelisk anti cubes", "Diff": 7, "Types": ["num_obelisks"]},
	"2_tuning_forks": {"Desc": "Collect 2 tuning fork anti cubes", "Diff": 7, "Types": ["num_tuningforks"]},

	"qr_map_anti": {"Desc": "Tree/Nature - QR map/Lighthouse owl room anti cube", "Diff": 8},
	"arch_top_cube": {"Desc": "Nature - Top of arch golden cube", "Diff": 8},
	"glitch_anti": {"Desc": "Nature - Glitch room anti cube", "Diff": 8},

	"4_golden": {"Desc": "Collect 4 golden cubes", "Diff": 9, "Types": ["num_golden"]},
	"4_anti": {"Desc": "Collect all 4 obelisk anti cubes", "Diff": 9, "Types": ["num_obelisks"]},
	"3_map": {"Desc": "Collect 3 maps", "Diff": 9, "Types": ["num_maps"]},

	"complete_flatland": {"Desc": "Fully complete the Flatland area (including all small sub rooms)", "Diff": 10},
	"security_heart": {"Desc": "Collect the security question heart piece", "Diff": 10},
	"arch_secret_cube": {"Desc": "Nature - Arch secret room golden cube", "Diff": 10},
	"8_anti": {"Desc": "Collect 8 anti cubes", "Diff": 10, "Types": ["num_anti"]},
	"totem_anti": {"Desc": "Nature - Totem pole puzzle anti cube", "Diff": 10},
	"2_artifact": {"Desc": "Collect 2 artifacts", "Diff": 10, "Types": ["num_artifacts"], "Excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},

	"cube_net_anti": {"Desc": "Tree - Cube net puzzle anti cube", "Diff": 11},
	"qr_wall_anti": {"Desc": "Zu - QR wall anti cube", "Diff": 11},
	"black_monolith_heart": {"Desc": "Collect the black monolith heart piece", "Diff": 11},
	"3_keys": {"Desc": "Have 3 keys in your inventory at the same time", "Diff": 11, "Types": ["num_keys"]},

	"grave_lesser_gate_cube": {"Desc": "Graveyard - Lesser gate golden cube", "Diff": 12},
	"complete_nocturne": {"Desc": "Fully complete the Nocturne area (including all small sub rooms)", "Diff": 12},
	"number_artifact": {"Desc": "Collect the number artifact", "Diff": 12},
	"12_cube": {"Desc": "Collect 12 total cubes", "Diff": 12, "Types": ["num_cubes"]},

	"grave_treasure_cube": {"Desc": "Graveyard - Treasure golden cube", "Diff": 13},
	"observatory_cube": {"Desc": "Zu - Golden cube by the observatory", "Diff": 13},
	"squid_cube": {"Desc": "Zu - Squid statue golden cube", "Diff": 13},
	"8_golden": {"Desc": "Collect 8 golden cubes", "Diff": 13, "Types": ["num_golden"]},
	"3_heart": {"Desc": "Collect all 3 heart pieces", "Diff": 13},
	"4_map": {"Desc": "Collect 4 maps", "Diff": 13, "Types": ["num_maps"]},

	"tree_owl": {"Desc": "Talk to the tree owl", "Diff": 14},
	"3_hub": {"Desc": "Visit 3 hubs", "Diff": 14, "Types": ["num_hubs"]},
	"observatory_anti": {"Desc": "Zu - Observatory anti cube", "Diff": 14},
	"observatory_heart": {"Desc": "Collect the observatory heart piece", "Diff": 14},
	"rosetta_anti": {"Desc": "Zu - Rosetta anti cube", "Diff": 14},

	"12_anti": {"Desc": "Collect 12 anti cubes", "Diff": 15, "Types": ["num_anti"]},
	"clock_cube": {"Desc": "Zu - Clock tower golden cube", "Diff": 15},
	"lighthouse_invis_anti": {"Desc": "Nature - Lighthouse invisible platforms anti cube", "Diff": 15},
	"no_water_lower": {"Desc": "Finish the run without lowering the water level in waterfall", "Diff": 15},
	"3_artifact": {"Desc": "Collect 3 artifacts", "Diff": 15, "Types": ["num_artifacts"], "Excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},

	"classroom_anti": {"Desc": "Nocturne - Classroom anti cube", "Diff": 16},
	"graveyard_skulls_anti": {"Desc": "Graveyard - Rotating skulls anti cube", "Diff": 16},
	"tome_artifact": {"Desc": "Collect the tome artifact", "Diff": 16},
	"zu_owl": {"Desc": "Talk to the Zu owl", "Diff": 16},
	"4_map": {"Desc": "Collect 4 maps", "Diff": 16, "Types": ["num_maps"]},

	"windmill_cube": {"Desc": "Industrial - Golden cube inside windmill", "Diff": 17},
	"16_cube": {"Desc": "Collect 16 total cubes", "Diff": 17, "Types": ["num_cubes"]},
	"4_key": {"Desc": "Have 4 keys in your inventory at the same time", "Diff": 17, "Types": ["num_keys"]},

	"pivot_cube": {"Desc": "Industrial - Pivot golden cube (after windmill)", "Diff": 18},
	"4_hub": {"Desc": "Visit 4 hubs", "Diff": 18, "Types": ["num_hubs"]},
	"6_map": {"Desc": "Collect 6 maps", "Diff": 18, "Types": ["num_maps"]},

	"superspin_cube": {"Desc": "Industrial - Superspin golden cube", "Diff": 19},
	"skull_artifact": {"Desc": "Collect the skull artifact", "Diff": 19},
	"industrial_owl": {"Desc": "Talk to the Industrial owl", "Diff": 19},

	"12_golden": {"Desc": "Collect 12 golden cubes", "Diff": 20, "Types": ["num_golden"]},
	"spin_plates_golden": {"Desc": "Industrial - Elevator/Spinning plates golden cube", "Diff": 20},
	"skull_map": {"Desc": "Collect all 4 pieces of the skull map puzzle", "Diff": 20},
	"truly_balanced": {"Desc": "Finish the run with the same num_ber of golden cubes and anti cubes (excluding bits)", "Diff": 20},

	"complete_industrial_hub": {"Desc": "Fully complete the Industrial hub (including all small sub rooms)", "Diff": 21},
	"20_cube": {"Desc": "Collect 20 total cubes", "Diff": 21, "Types": ["num_cubes"]},
	"4_artifact": {"Desc": "Collect all 4 artifacts", "Diff": 21, "Types": ["num_artifacts"], "Excludes": ["writing_artifact", "number_artifact", "tome_artifact", "skull_artifact"]},

	"old_zu_bit": {"Desc": "Collect the bit at the top of Old Zu", "Diff": 22, "Types": ["completezu"]},
	"5_hub": {"Desc": "Visit all 5 hubs", "Diff": 22, "Types": ["num_hubs"]},

	"complete_old_zu": {"Desc": "Fully complete Old Zu (including all small sub rooms)", "Diff": 23, "Types": ["completezu"]},
	"sew_after_pillars_cube": {"Desc": "Sewers - Golden cube after the pillars", "Diff": 23},
	"no_warps": {"Desc": "Finish the run without using any warp gates or little gates", "Diff": 23},

	"sew_pivot_cube": {"Desc": "Sewers - Pivot puzzle golden cube", "Diff": 24},
	"4_tuning_forks": {"Desc": "Collect all 4 tuning fork anti cubes", "Diff": 24, "Types": ["num_tuningforks"]},
	"no_antis": {"Desc": "Finish the run without collecting any anti cubes", "Diff": 24, "Types": ["num_anti"]},

	"lava_anti": {"Desc": "Sewers - Rising lava anti cube", "Diff": 25},
	"owl_anti": {"Desc": "Talk to all 4 owls and collect owl room anti cube", "Diff": 25},
}
