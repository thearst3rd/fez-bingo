/**
 * Custom bingo generator, taking into account dynamic difficulty.
 */

var RandomGen = {};
(function(j, i, g, m, k, n, o) { function q(b) { var e, f, a = this, c = b.length, d = 0, h = a.i = a.j = a.m = 0; a.S = []; a.c = []; for (c || (b = [c++]); d < g;) a.S[d] = d++; for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e; a.g = function(b) { var c = a.S, d = a.i + 1 & g - 1, e = c[d], f = a.j + e & g - 1, h = c[f]; c[d] = h; c[f] = e; for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1]; a.i = d; a.j = f; return i }; a.g(g) } function p(b, e, f, a, c) { f = []; c = typeof b; if (e && c == "object") for (a in b) if (a.indexOf("S") < 5) try { f.push(p(b[a], e - 1)) } catch (d) {} return f.length ? f : b + (c != "string" ? "\0" : "") } function l(b, e, f, a) { b += ""; for (a = f = 0; a < b.length; a++) { var c = e, d = a & g - 1, h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a); c[d] = h & g - 1 } b = ""; for (a in e) b += String.fromCharCode(e[a]); return b } i.seedrandom = function(b, e) { var f = [], a; b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f); a = new q(f); l(a.S, j); i.random = function() { for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1); for (; c >= n;) c /= 2, d /= 2, b >>>= 1; return (c + b) / d }; return b }; o = Math.pow(g, m); k = Math.pow(2, k); n = k * 2; l(Math.random(), j) })([], RandomGen, 256, 6, 52);

bingoGeneratorCustom = function(bingo_list, opts)
{
	//Make sure everything exists that should, pull out maxScore and bingoTypes from bingoList
	var bingo_types = bingo_list.bingo_types
	delete bingo_list.bingo_types
	var max_score = bingo_list.max_score
	delete bingo_list.max_score
	preprocessBingoList(bingo_list)

	//Seed the random
	seed = RandomGen.seedrandom(opts.seed || Math.ceil(999999 * Math.random()));

	//Create counts for all types
	var types = { }
	for (const key of Object.keys(bingo_types)) {
		if (!bingo_types[key].hasOwnProperty("max"))
			bingo_types[key].max = 5
		types[key] = bingo_types[key].max
	}

	var score_target = 60

	var board
	var metTarget = false

	// Do up to 1000 iterations to find a suitable board.
	for(var i = 0; i < 1000; i++)
	{
		board = createBoard(score_target, bingo_list)
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

		if((Math.min(...diff_sums) > score_target - 5) && (Math.max(...diff_sums) < score_target + 10))
		{
			metTarget = true
			break
		}
	}

	if(!metTarget)
	{
		console.log("WARNING: Board did not meet requirements.")
	}

	console.log(diff_sums)
	console.log("Max: ", Math.max(...diff_sums))
	console.log("Min: ", Math.min(...diff_sums))

	var goals_list = []
	for(var row_idx = 0; row_idx < 5; row_idx++)
	{
		for(var col_idx = 0; col_idx < 5; col_idx++)
		{
			goals_list.push({"name": board[row_idx][col_idx].desc})
		}
	}

	return goals_list
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
	var index = Math.floor(RandomGen.random() * goals.length)
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

function createBoard(score_target, bingo_list)
{
	// Create a 5x5 grid of empty objects.
	var board = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => new BingoGoal()))

	const filling_order = [
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

	var unchosen_goals = {...bingo_list}

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

	return board
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

		diff = possible_diffs[Math.floor(RandomGen.random() * possible_diffs.length)]
	}

	var correct_diff_goals = searchForGoals(available_goals, [diff], target_diff, groups)

	if(correct_diff_goals.length == 0)
	{
		for(var i = 0; i <= max_goal_diff; i++)
		{
			var new_diffs = [diff + i, diff - i];
			correct_diff_goals = searchForGoals(available_goals, new_diffs, target_diff, groups)
			if(correct_diff_goals.length > 0)
			{
				return correct_diff_goals[Math.floor(RandomGen.random() * correct_diff_goals.length)]
			}
		}
		console.log("FATAL: All goals found to be impossible.")
	}
	else
	{
		return correct_diff_goals[Math.floor(RandomGen.random() * correct_diff_goals.length)]
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
