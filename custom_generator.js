// Custom bingo generator, taking into account dynamic difficulty.
// Some code taken from SynerGen

let RandomGen = {};
(function(j, i, g, m, k, n, o) { function q(b) { var e, f, a = this, c = b.length, d = 0, h = a.i = a.j = a.m = 0; a.S = []; a.c = []; for (c || (b = [c++]); d < g;) a.S[d] = d++; for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e; a.g = function(b) { var c = a.S, d = a.i + 1 & g - 1, e = c[d], f = a.j + e & g - 1, h = c[f]; c[d] = h; c[f] = e; for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1]; a.i = d; a.j = f; return i }; a.g(g) } function p(b, e, f, a, c) { f = []; c = typeof b; if (e && c == "object") for (a in b) if (a.indexOf("S") < 5) try { f.push(p(b[a], e - 1)) } catch (d) {} return f.length ? f : b + (c != "string" ? "\0" : "") } function l(b, e, f, a) { b += ""; for (a = f = 0; a < b.length; a++) { var c = e, d = a & g - 1, h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a); c[d] = h & g - 1 } b = ""; for (a in e) b += String.fromCharCode(e[a]); return b } i.seedrandom = function(b, e) { var f = [], a; b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f); a = new q(f); l(a.S, j); i.random = function() { for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1); for (; c >= n;) c /= 2, d /= 2, b >>>= 1; return (c + b) / d }; return b }; o = Math.pow(g, m); k = Math.pow(2, k); n = k * 2; l(Math.random(), j) })([], RandomGen, 256, 6, 52);

bingoGenerator = function(bingoList, opts)
{
	// Make sure everything exists that should, pull out bingoTypes from bingoList
	let bingoTypes = bingoList.bingoTypes
	delete bingoList.bingoTypes
	preprocessBingoList(bingoList)

	// Seed the random
	seed = RandomGen.seedrandom(opts.seed || Math.ceil(999999 * Math.random()));

	// Create counts for all types
	let types = {}
	for (const key of Object.keys(bingoTypes))
	{
		if (!bingoTypes[key].hasOwnProperty("max"))
			bingoTypes[key].max = 5
		types[key] = bingoTypes[key].max
	}

	let scoreTarget = 60

	let board
	let diffSums
	let metTarget = false

	// Do a number of iterations until we find suitable board.
	for (let i = 0; i < 1000; i++)
	{
		board = createBoard(scoreTarget, bingoList)
		diffSums = []

		diffSums.push(getRow(board, 0).diffSum())
		diffSums.push(getRow(board, 1).diffSum())
		diffSums.push(getRow(board, 2).diffSum())
		diffSums.push(getRow(board, 3).diffSum())
		diffSums.push(getRow(board, 4).diffSum())
		diffSums.push(getCol(board, 0).diffSum())
		diffSums.push(getCol(board, 1).diffSum())
		diffSums.push(getCol(board, 2).diffSum())
		diffSums.push(getCol(board, 3).diffSum())
		diffSums.push(getCol(board, 4).diffSum())
		diffSums.push(getTLBR(board).diffSum())
		diffSums.push(getTRBL(board).diffSum())

		// It's ok if a column is slightly too hard, but we really don't want a column to be too easy since all runners
		// will likely go with that column. So, we bias the score target just a little bit higher
		if ((Math.min(...diffSums) > scoreTarget - 5) && (Math.max(...diffSums) < scoreTarget + 10))
		{
			metTarget = true
			break
		}
	}

	if (!metTarget)
	{
		console.log("WARNING: Board did not meet requirements.")
	}

	console.log(diffSums)
	console.log("Max: ", Math.max(...diffSums))
	console.log("Min: ", Math.min(...diffSums))

	let goalsList = []
	for (let rowIndex = 0; rowIndex < 5; rowIndex++)
	{
		for (let colIndex = 0; colIndex < 5; colIndex++)
		{
			goalsList.push({"name": board[rowIndex][colIndex].desc})
		}
	}

	return goalsList
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
 * @param {Number} rowIndex The row to get (zero-indexed).
 *
 * @returns A BingoGroup containing the cells in the row.
 */
function getRow(grid, rowIndex)
{
	return new BingoGroup(grid[rowIndex])
}

/**
 * Get the cells in the given column.
 *
 * @param {Array} grid The current board state.
 * @param {Number} colIndex The column to get (zero-indexed).
 *
 * @returns A BingoGroup containing the cells in the column.
 */
function getCol(grid, colIndex)
{
	return new BingoGroup([grid[0][colIndex], grid[1][colIndex], grid[2][colIndex], grid[3][colIndex],
			grid[4][colIndex]])
}

/**
 * @brief Return an array, whose elements are BingoGroups containing the cells in each group that the given cell is a
 *        member of.
 *
 * For example, running this function on the cell (0,0) will return an array containing the first row, the first column,
 * and the TL-BR diagonal.
 *
 * @param {Array} grid The current board state.
 * @param {Number} rowIndex The row index of the cell to search (zero-indexed)
 * @param {Number} colIndex The column index of the cell to search (zero-indexed)
 */
function getGroups(grid, rowIndex, colIndex)
{
	let groups = [getRow(grid, rowIndex), getCol(grid, colIndex)]
	// The TL-BR diagonal's cells all have the same row and column number.
	if (rowIndex == colIndex)
		groups.push(getTLBR(grid))
	// The TR-BL diagonal has cells whose coordinates add to 4.
	if (rowIndex + colIndex == 4)
		groups.push(getTRBL(grid))
	return groups
}

function selectRandomGoal(goals)
{
	let index = Math.floor(RandomGen.random() * goals.length)
	return goals[index]
}

// Reduces fluff in bingoList object if there's a method to set defaults
function preprocessBingoList(bingoList) {
	for (const key of Object.keys(bingoList)) {
		bingoList[key].name = key

		if (!bingoList[key].hasOwnProperty("desc"))
			delete bingoList[key]

		if (!bingoList[key].hasOwnProperty("diff"))
			bingoList[key].diff = 0

		if (!bingoList[key].hasOwnProperty("types"))
			bingoList[key].types = []

		if (!bingoList[key].hasOwnProperty("excludes"))
			bingoList[key].excludes = []
	}
}

function createBoard(scoreTarget, bingoList)
{
	// Create a 5x5 grid of empty objects.
	let board = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => new BingoGoal()))

	const fillingOrder = [
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

	let unchosenGoals = {...bingoList}

	for (let i = 0; i < fillingOrder.length; i++)
	{
		let rowIndex = fillingOrder[i][0]
		let colIndex = fillingOrder[i][1]
		let goal = selectGoal(board, rowIndex, colIndex, scoreTarget, unchosenGoals)
		board[rowIndex][colIndex].setGoal(goal)
		// Remove the chosen goal from the available goals.
		for (const key in unchosenGoals)
		{
			if (unchosenGoals[key] == goal)
			{
				delete unchosenGoals[key]
			}
		}
	}

	return board
}

function selectGoal(grid, rowIndex, colIndex, targetDiff, unchosen)
{
	// The maximum and minimum difficulty for goals.
	const maxGoalDiff = 25
	const minGoalDiff = 1

	let groups = getGroups(grid, rowIndex, colIndex)
	let intersectingGoals = groups.reduce(function f(acc, x) { return acc.concat(x.chosenGoals()) }, [])
	let intersectingGoalNames = intersectingGoals.reduce(function f(acc, x) { return acc.concat(x.name) }, [])

	// Get all the constraints from cells that are already filled in.
	let chosenTypes = []
	let excludes = []
	for (let i = 0; i < intersectingGoals.length; i++)
	{
		if (intersectingGoals[i].hasOwnProperty("types"))
		{
			chosenTypes.push(...intersectingGoals[i].types)
		}
		if (intersectingGoals[i].hasOwnProperty("excludes"))
		{
			excludes.push(...intersectingGoals[i].excludes)
		}
	}

	// If any group this intersects with has 2 cube collection goals already, do not let it have a third.
	for (let i = 0; i < groups.length; i++)
	{
		if (groups[i].hasTwoCubeGoals())
		{
			excludes.push("num_golden", "num_anti", "num_cubes")
			break
		}
	}

	// Put all the available goals into a list.
	let availableGoals = []
	for (const key in unchosen)
	{
		let currGoal = unchosen[key]
		let isValid = true
		if (currGoal.hasOwnProperty("types"))
		{
			for (let i = 0; i < currGoal.types.length; i++)
			{
				if (chosenTypes.includes(currGoal.types[i]))
				{
					isValid = false
				}
			}
		}
		if (currGoal.hasOwnProperty("excludes"))
		{
			for (let i = 0; i < currGoal.excludes.length; i++)
			{
				if (intersectingGoalNames.includes(currGoal.excludes[i]))
				{
					isValid = false
				}
			}
		}
		if (excludes.includes(key))
		{
			isValid = false
		}
		if (isValid)
		{
			availableGoals.push(unchosen[key])
		}
	}

	// Get the groups that have the largest number of elements.
	let biggestGroups = []
	let numChosenInBiggestGroup = -1
	for (let i = 0; i < groups.length; i++)
	{
		let numChosenInCurrGroup = groups[i].numChosen()
		if (numChosenInCurrGroup > numChosenInBiggestGroup)
		{
			biggestGroups = [groups[i]]
			numChosenInBiggestGroup = numChosenInCurrGroup
		}
		else if (numChosenInCurrGroup == numChosenInBiggestGroup)
		{
			biggestGroups.push(groups[i])
		}
	}

	let biggestGroupDiffs = biggestGroups.reduce(function f(acc, x) { return acc.concat(x.diffSum()) }, [])

	let diff

	if (numChosenInBiggestGroup == 4)
	{
		if (biggestGroups.length == 1)
		{
			diff = targetDiff - biggestGroups[0].diffSum()
		}
		else
		{
			diff = targetDiff - Math.min(...biggestGroupDiffs)
		}
		if (diff < 1)
			diff = 1
		if (diff > 25)
			diff = 25
	}
	else
	{
		// The groups with the max and min sums, so far.
		let maxGroup = groups[0]
		let minGroup = groups[0]

		for (let i = 1; i < groups.length; i++)
		{
			if (groups[i].diffSum() > maxGroup.diffSum())
			{
				maxGroup = groups[i]
			}
			if (groups[i].diffSum() < minGroup.diffSum())
			{
				minGroup = groups[i]
			}
		}

		// Find the minimum and mximum possible difficulty values, assuming the remaining goals are all filled in with
		// the maximum or minimum possible.
		let minScoreLeft = targetDiff - maxGroup.diffSum()
		let maxScoreLeft = targetDiff - minGroup.diffSum()
		let minDiff = Math.max(maxScoreLeft - (4 - minGroup.numChosen()) * (maxGoalDiff - 2), minGoalDiff)
		let maxDiff = Math.min(minScoreLeft - (4 - maxGroup.numChosen()) * (minGoalDiff + 2), maxGoalDiff)

		let possibleDiffs = []
		for (let i = minDiff; i <= maxDiff; i++)
		{
			if (!containsCloseToDiff(intersectingGoals, i))
			{
				possibleDiffs.push(i)
			}
		}
		if (possibleDiffs.length == 0)
		{
			for (let i = minDiff; i <= maxDiff; i++)
			{
				possibleDiffs.push(i)
			}
		}
		if (possibleDiffs.length == 0)
		{
			possibleDiffs.push(minDiff)
		}

		diff = possibleDiffs[Math.floor(RandomGen.random() * possibleDiffs.length)]
	}

	let correctDiffGoals = searchForGoals(availableGoals, [diff], targetDiff, groups)

	if (correctDiffGoals.length == 0)
	{
		for (let i = 0; i <= maxGoalDiff; i++)
		{
			let newDiffs = [diff + i, diff - i];
			correctDiffGoals = searchForGoals(availableGoals, newDiffs, targetDiff, groups)
			if (correctDiffGoals.length > 0)
			{
				return correctDiffGoals[Math.floor(RandomGen.random() * correctDiffGoals.length)]
			}
		}
		console.log("FATAL: All goals found to be impossible.")
	}
	else
	{
		return correctDiffGoals[Math.floor(RandomGen.random() * correctDiffGoals.length)]
	}
}

function searchForGoals(availableGoals, diffs, targetDiff, groups)
{
	let correctDiffGoals = []
	for (let goalIndex = 0; goalIndex < availableGoals.length; goalIndex++)
	{
		if (availableGoals[goalIndex].hasOwnProperty("synergies"))
		{
			let goal = availableGoals[goalIndex]
			let isCorrectDiff = false
			for (let groupIndex = 0; groupIndex < groups.length; groupIndex++)
			{
				if (!groups[groupIndex].isPossible(goal, targetDiff))
				{
					isCorrectDiff = false
					break;
				}
				if (diffs.includes(groups[groupIndex].getAdditionalDiff(goal)))
				{
					isCorrectDiff = true
				}
			}
			if (isCorrectDiff)
			{
				correctDiffGoals.push(goal)
			}
		}
		else
		{
			if (diffs.includes(availableGoals[goalIndex].diff))
			{
				correctDiffGoals.push(availableGoals[goalIndex])
			}
		}
	}
	return correctDiffGoals
}

function containsDiff(grid, diff)
{
	let flattenedGrid = grid.flatten()
	let diffs = flattenedGrid.reduce(function f(x, y) { return y.hasOwnProperty("diff") ? x.concat(y.diff) : x }, [])
	return diffs.indexOf(diff) != -1
}

function containsCloseToDiff(list, diff)
{
	let diffs = list.reduce(function f(x, y) { return y.hasOwnProperty("diff") ? x.concat(y.diff) : x }, [])
	for (let i = 0; i < diffs.length; i++)
	{
		if (Math.abs(diff - diffs[i]) < 3.0)
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
		this.isValid = false
	}

	setGoal(goal)
	{
		this.isValid = true
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
		let diffs = []
		let synergies = []
		for (let i = 0; i < this.goals.length; i++)
		{
			if (!this.goals[i].isValid)
				continue
			if (this.goals[i].hasOwnProperty("synergies"))
			{
				let diff = this.goals[i].diff
				for (const key in this.goals[i].synergies)
				{
					if (synergies.indexOf(key) == -1)
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
		let synergies = []
		for (let i = 0; i < this.goals.length; i++)
		{
			if (this.goals[i].hasOwnProperty("synergies"))
			{
				for (const key in this.goals[i].synergies)
				{
					if (!synergies.includes(key))
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
		let types = []
		for (let i = 0; i < this.goals.length; i++)
		{
			let currGoal = this.goals[i]
			if (currGoal.hasOwnProperty("types"))
			{
				for (let j = 0; j < currGoal.types.length; j++)
				{
					let currType = currGoal.types[j]
					if (!types.includes(currType))
					{
						types.push(currType)
					}
				}
			}
		}
		return types
	}

	hasTwoCubeGoals()
	{
		let types = this.types()
		let numGoals = 0
		if (types.includes("num_cubes"))
			numGoals++
		if (types.includes("num_anti"))
			numGoals++
		if (types.includes("num_golden"))
			numGoals++
		return (numGoals >= 2)
	}

	numChosen()
	{
		return this.goals.reduce(function f(acc, x) { return x.isValid ? acc + 1 : acc }, 0)
	}

	chosenGoals()
	{
		return this.goals.reduce(function f(acc, x) { return x.isValid ? acc.concat(x) : acc }, [])
	}

	getAdditionalDiff(goal)
	{
		let synergies = this.synergies()
		let goalDiff = goal.diff
		if (goal.hasOwnProperty("synergies"))
		{
			for (const key in goal.synergies)
			{
				if (synergies.includes(key))
				{
					goalDiff += goal.synergies[key]
				}
			}
		}
		return goalDiff
	}

	isPossible(goal, targetDiff)
	{
		let goalsLeft = 4 - this.chosenGoals()
		let totalDiff = this.diffSum() + this.getAdditionalDiff(goal)
		let diffRemainingPerGoal = (targetDiff - totalDiff) / goalsLeft
		if ((diffRemainingPerGoal > 24) || (diffRemainingPerGoal < 2))
		{
			return false
		}
		else
		{
			return true
		}
	}
}
