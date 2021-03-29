'use strict'

// Map URL:
// https://i.imgur.com/rAe8QIy.jpg

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var cities = [
  {
    name: 'PortoAlegre',
    h: 2708,
    nearby: [
      {
        name: 'Florianopolis',
        cost: 376,
        h: 2643,
      },
    ],
  },
  {
    name: 'Florianopolis',
    h: 2643,
    nearby: [
      {
        name: 'PortoAlegre',
        cost: 376,
        h: 2708,
      },
      {
        name: 'Curitiba',
        cost: 251,
        h: 2415,
      },
    ],
  },
  {
    name: 'Curitiba',
    h: 2415,
    nearby: [
      {
        name: 'Florianopolis',
        cost: 251,
        h: 2643,
      },
      {
        name: 'SaoPaulo',
        cost: 338,
        h: 2465,
      },
      {
        name: 'CampoGrande',
        cost: 780,
        h: 1636,
      },
    ],
  },
  {
    name: 'SaoPaulo',
    h: 2465,
    nearby: [
      {
        name: 'Curitiba',
        cost: 338,
        h: 2415,
      },
      {
        name: 'RiodeJaneiro',
        cost: 357,
        h: 2709,
      },
      {
        name: 'BeloHorizonte',
        cost: 489,
        h: 2481,
      },
      {
        name: 'Brasilia',
        cost: 873,
        h: 1902,
      },
      {
        name: 'Cuiaba',
        cost: 1326,
        h: 1139,
      },
    ],
  },
  {
    name: 'CampoGrande',
    h: 1636,
    nearby: [
      {
        name: 'Curitiba',
        cost: 780,
        h: 2415,
      },
      {
        name: 'Cuiaba',
        cost: 559,
        h: 1139,
      },
    ],
  },
  {
    name: 'Cuiaba',
    h: 1139,
    nearby: [
      {
        name: 'SaoPaulo',
        cost: 1326,
        h: 2465,
      },
      {
        name: 'CampoGrande',
        cost: 559,
        h: 1636,
      },
      {
        name: 'Brasilia',
        cost: 873,
        h: 1133,
      },
      {
        name: 'PortoVelho',
        cost: 1137,
        h: 0,
      },
    ],
  },
  {
    name: 'PortoVelho',
    h: 0,
    nearby: [
      {
        name: 'Cuiaba',
        cost: 1137,
        h: 1139,
      },
      {
        name: 'RioBranco',
        cost: 449,
        h: 450,
      },
      {
        name: 'Manaus',
        cost: 761,
        h: 760,
      },
    ],
  },
  {
    name: 'RioBranco',
    h: 450,
    nearby: [
      {
        name: 'PortoVelho',
        cost: 449,
        h: 0,
      },
      {
        name: 'Manaus',
        cost: 1149,
        h: 760,
      },
    ],
  },
  {
    name: 'Manaus',
    h: 760,
    nearby: [
      {
        name: 'PortoVelho',
        cost: 761,
        h: 0,
      },
      {
        name: 'RioBranco',
        cost: 1149,
        h: 450,
      },
      {
        name: 'Brasilia',
        cost: 1932,
        h: 1902,
      },
      {
        name: 'Belem',
        cost: 1292,
        h: 3012,
      },
      {
        name: 'BoaVista',
        cost: 661,
        h: 1337,
      },
    ],
  },
  {
    name: 'BoaVista',
    h: 1337,
    nearby: [
      {
        name: 'Manaus',
        cost: 661,
        h: 760,
      },
    ],
  },
  {
    name: 'Belem',
    h: 3012,
    nearby: [
      {
        name: 'Manaus',
        cost: 1292,
        h: 760,
      },
      {
        name: 'Macapa',
        cost: 329,
        h: 1726,
      },
    ],
  },
  {
    name: 'Macapa',
    h: 1726,
    nearby: [
      {
        name: 'Belem',
        cost: 329,
        h: 3012,
      },
    ],
  },
  {
    name: 'RiodeJaneiro',
    h: 2709,
    nearby: [
      {
        name: 'Vitoria',
        cost: 412,
        h: 2841,
      },
      {
        name: 'Salvador',
        cost: 1209,
        h: 2812,
      },
      {
        name: 'BeloHorizonte',
        cost: 339,
        h: 2481,
      },
      {
        name: 'SaoPaulo',
        cost: 357,
        h: 2465,
      },
    ],
  },
  {
    name: 'BeloHorizonte',
    h: 2481,
    nearby: [
      {
        name: 'RiodeJaneiro',
        cost: 339,
        h: 2709,
      },
      {
        name: 'SaoPaulo',
        cost: 489,
        h: 2465,
      },
      {
        name: 'Brasilia',
        cost: 624,
        h: 1902,
      },
    ],
  },
  {
    name: 'Brasilia',
    h: 1902,
    nearby: [
      {
        name: 'SaoPaulo',
        cost: 873,
        h: 2465,
      },
      {
        name: 'BeloHorizonte',
        cost: 624,
        h: 2481,
      },
      {
        name: 'Goiania',
        cost: 173,
        h: 1814,
      },
      {
        name: 'Cuiaba',
        cost: 873,
        h: 1139,
      },
      {
        name: 'Manaus',
        cost: 1932,
        h: 760,
      },
      {
        name: 'Palmas',
        cost: 620,
        h: 1715,
      },
      {
        name: 'Fortaleza',
        cost: 1687,
        h: 2858,
      },
    ],
  },
  {
    name: 'Goiania',
    h: 1814,
    nearby: [
      {
        name: 'Brasilia',
        cost: 173,
        h: 1902,
      },
    ],
  },
  {
    name: 'Palmas',
    h: 1715,
    nearby: [
      {
        name: 'Brasilia',
        cost: 620,
        h: 1902,
      },
    ],
  },
  {
    name: 'Vitoria',
    h: 2841,
    nearby: [
      {
        name: 'RiodeJaneiro',
        cost: 412,
        h: 2709,
      },
    ],
  },
  {
    name: 'Salvador',
    h: 123,
    nearby: [
      {
        name: 'RiodeJaneiro',
        cost: 1209,
        h: 2709,
      },
      {
        name: 'Aracaju',
        cost: 277,
        h: 2948,
      },
      {
        name: 'Natal',
        cost: 875,
        h: 3181,
      },
      {
        name: 'Fortaleza',
        cost: 1028,
        h: 2858,
      },
    ],
  },
  {
    name: 'Aracaju',
    h: 2948,
    nearby: [
      {
        name: 'Maceio',
        cost: 201,
        h: 3093,
      },
      {
        name: 'Salvador',
        cost: 277,
        h: 2812,
      },
    ],
  },
  {
    name: 'Maceio',
    h: 3093,
    nearby: [
      {
        name: 'Aracaju',
        cost: 201,
        h: 2948,
      },
      {
        name: 'Recife',
        cost: 202,
        h: 3193,
      },
    ],
  },
  {
    name: 'Recife',
    h: 3193,
    nearby: [
      {
        name: 'Maceio',
        cost: 202,
        h: 3093,
      },
      {
        name: 'Fortaleza',
        cost: 629,
        h: 2858,
      },
      {
        name: 'JoaoPessoa',
        cost: 104,
        h: 3203,
      },
    ],
  },
  {
    name: 'JoaoPessoa',
    h: 3203,
    nearby: [
      {
        name: 'Recife',
        cost: 104,
        h: 3193,
      },
      {
        name: 'Natal',
        cost: 151,
        h: 3181,
      },
    ],
  },
  {
    name: 'Natal',
    h: 3181,
    nearby: [
      {
        name: 'JoaoPessoa',
        cost: 151,
        h: 3203,
      },
      {
        name: 'Salvador',
        cost: 875,
        h: 2812,
      },
      {
        name: 'Fortaleza',
        cost: 435,
        h: 2858,
      },
    ],
  },
  {
    name: 'Fortaleza',
    h: 2858,
    nearby: [
      {
        name: 'Natal',
        cost: 435,
        h: 3181,
      },
      {
        name: 'Recife',
        cost: 629,
        h: 3193,
      },
      {
        name: 'Salvador',
        cost: 1028,
        h: 2812,
      },
      {
        name: 'Brasilia',
        cost: 1687,
        h: 1902,
      },
      {
        name: 'Teresina',
        cost: 495,
        h: 2365,
      },
      {
        name: 'SaoLuis',
        cost: 652,
        h: 2276,
      },
    ],
  },
  {
    name: 'Teresina',
    h: 2365,
    nearby: [
      {
        name: 'Fortaleza',
        cost: 495,
        h: 2858,
      },
    ],
  },
  {
    name: 'SaoLuis',
    h: 2276,
    nearby: [
      {
        name: 'Fortaleza',
        cost: 652,
        h: 2858,
      },
    ],
  },
]

// Implementing Romania as a Map()

var Romania = new Map()
for (var i = 0; i < cities.length; i++) {
  console.log(cities[i].name)
  Romania.set(cities[i].name, cities[i].nearby)
}

// searchNodes are created during the algorithm's search.
// this.action = the action taken to reach this city from the previous
//     search node
// this.state = city name
// this.parent = the previous city in the search

var searchNode = (function () {
  function searchNode(action, state, parent) {
    _classCallCheck(this, searchNode)

    this.action = action
    this.state = state
    this.parent = parent
  }

  // Uninformed Search Algorithms
  // * Breadth-first Search
  // * Depth-first Search
  // * Uniform Cost Search

  // Returns a list of pairs corresponding to
  // the path starting at the top (root) of the tree.

  _createClass(searchNode, [
    {
      key: 'path',
      value: function path() {
        if (this.parent === null) {
          return [this.state, this.action]
        } else {
          return this.parent.path() + ' -> ' + [this.state, this.action.cost]
        }
      },
    },
    {
      key: 'pathCost',
      value: function pathCost() {
        if (this.parent === null) {
          return 0
        } else {
          return this.parent.pathCost() + this.action.cost
        }
      },

      // Returns true if the state occurs anywhere in the path
      // from the root to the node.
    },
    {
      key: 'inPath',
      value: function inPath(findState) {
        if (findState == this.state) {
          return true
        } else if (this.parent == null) {
          return false
        } else {
          return this.parent.inPath(findState)
        }
      },
    },
  ])

  return searchNode
})()

function breadthFirstSearch(initialState, goalTest, actions, successor) {
  // The fringe is a Queue
  // Actions other than push() and shift() are prohibited.
  var fringe = []
  if (goalTest(initialState)) {
    console.log('Initial state is the goal state.')
    return [initialState]
  }

  // Add the initialState to the fringe.
  fringe.push(new searchNode(null, initialState, null))
  var expanded = []
  while (fringe.length !== 0) {
    console.log(
      'Fringe: ' +
        fringe.map(function (city) {
          return city.state
        })
    )

    // Pop an element out of the queue to expand.
    var _parent = fringe.shift()
    console.log('Popped: ', _parent.state)
    var newChildStates = []

    // Child states of the current node
    var actionsList = actions(_parent.state)
    console.log(
      'Found ' +
        actionsList.length +
        ' successors of ' +
        _parent.state +
        ' : ' +
        actionsList.map(function (item) {
          return item.name
        })
    )

    // Add the node to the expanded list to prevent re-expansion.
    expanded.push(_parent.state)
    console.log('Expanded list: ', expanded)
    console.log('\n')

    // Create successors of each node and push them onto the fringe.
    for (var i = 0; i < actionsList.length; i++) {
      var newS = successor(_parent.state, actionsList[i])
      var newN = new searchNode(actionsList[i], newS, _parent)

      // If the goal is found,
      // returns the path to the goal.
      if (goalTest(newS)) {
        console.log('FOUND GOAL!', newS)
        return newN.path() + ' with path cost ' + newN.pathCost()
      }

      // If the successor is already expanded,
      // don't add it to the fringe.
      else if (expanded.indexOf(newS) !== -1) {
        console.log('Successor ' + newS + ' of ' + _parent.state + ' already expanded.')
        console.log('Not adding ' + newS + ' to the fringe.')
        console.log('\n')
      }

      // If the successor is already in the fringe,
      // don't add it to the fringe again.
      else if (
        fringe
          .map(function (item) {
            return item.state
          })
          .indexOf(newN.state) !== -1
      ) {
        console.log(newS + ' is already in the fringe.')
      }

      // Push new successors to the fringe.
      else {
        console.log('Discovered ' + newN.state + ' with step cost ' + actionsList[i].cost + ' from ' + _parent.state)
        console.log('Pushing to fringe: ' + newS)
        newChildStates.push(newS)
        fringe.push(newN)
        console.log('Path: ', newN.path())
        console.log(
          'Current fringe: ' +
            fringe.map(function (city) {
              return city.state
            })
        )
        console.log('\n')
      }
    }
  }
}

function depthFirstSearch(initialState, goalTest, actions, successor) {
  // The fringe is a Stack
  // Actions other than unshift() and shift() are prohibited.
  var fringe = []
  if (goalTest(initialState)) {
    console.log('Initial state is the goal state.')
    return [initialState]
  }

  // Add the initialState to the fringe.
  fringe.push(new searchNode(null, initialState, null))
  var expanded = []
  while (fringe.length !== 0) {
    console.log(
      'Fringe: ' +
        fringe.map(function (city) {
          return city.state
        })
    )

    // Pop an element out of the queue to expand.
    var _parent2 = fringe.shift()
    console.log('Popped: ', _parent2.state)
    var newChildStates = []

    // Child states of the current node
    var actionsList = actions(_parent2.state)
    console.log(
      'Found ' +
        actionsList.length +
        ' successors of ' +
        _parent2.state +
        ' : ' +
        actionsList.map(function (item) {
          return item.name
        })
    )

    // Add the node to the expanded list to prevent re-expansion.
    expanded.push(_parent2.state)
    console.log('Expanded list: ', expanded)
    console.log('\n')

    // Create successors of each node and push them onto the fringe.
    for (var i = 0; i < actionsList.length; i++) {
      var newS = successor(_parent2.state, actionsList[i])
      var newN = new searchNode(actionsList[i], newS, _parent2)

      // If the goal is found,
      // returns the path to the goal.
      if (goalTest(newS)) {
        console.log('FOUND GOAL!', newS)
        return newN.path() + ' with path cost ' + newN.pathCost()
      }

      // If the successor is already expanded,
      // don't add it to the fringe.
      else if (expanded.indexOf(newS) !== -1) {
        console.log('Successor ' + newS + ' of ' + _parent2.state + ' already expanded.')
        console.log('Not adding ' + newS + ' to the fringe.')
        console.log('\n')
      }

      // If the successor is already in the fringe,
      // don't add it to the fringe again.
      else if (
        fringe
          .map(function (item) {
            return item.state
          })
          .indexOf(newN.state) !== -1
      ) {
        console.log(newS + ' is already in the fringe.')
      }

      // Push new successors to the fringe.
      else {
        console.log('Discovered ' + newN.state + ' with step cost ' + actionsList[i].cost + ' from ' + _parent2.state)
        console.log('Pushing to fringe: ' + newS)
        newChildStates.push(newS)
        fringe.unshift(newN)
        console.log('Path: ', newN.path())
        console.log(
          'Current fringe: ' +
            fringe.map(function (city) {
              return city.state
            })
        )
        console.log('\n')
      }
    }
  }
}

// TODO
// Implement a priority queue for Uniform Cost Search

function uniformCostSearch(initialState, goalTest, actions, successor) {
  // The fringe is a Priority Queue
  // Actions other than shift() and enqueue() are prohibited.
  var fringe = []
  if (goalTest(initialState)) {
    console.log('Initial state is the goal state.')
    return [initialState]
  }

  fringe.enqueue = function (item) {
    var added = false
    for (var i = 0; i < fringe.length; i++) {
      console.log('ITEM: ', fringe[i].state)
      console.log('COST: ', fringe[i].pathCost())
      if (item.pathCost() < fringe[i].pathCost()) {
        fringe.splice(i, 0, item)
        added = true
        return
      }
    }

    if (!added) {
      fringe.push(item)
    }
  }

  // Add the initialState to the fringe.
  fringe.enqueue(new searchNode(null, initialState, null))
  var expanded = []
  var shortestPath = { state: null, pathCost: null, path: null }

  while (fringe.length !== 0) {
    console.log(
      'Fringe: ' +
        fringe.map(function (city) {
          return city.state
        })
    )

    // Pop an element out of the queue to expand.
    var _parent3 = fringe.shift()
    console.log('Popped: ', _parent3.state)
    var newChildStates = []

    // Child states of the current node
    var actionsList = actions(_parent3.state)
    console.log(
      'Found ' +
        actionsList.length +
        ' successors of ' +
        _parent3.state +
        ' : ' +
        actionsList.map(function (item) {
          return item.name
        })
    )

    // Add the node to the expanded list to prevent re-expansion.
    expanded.push(_parent3.state)
    console.log('Expanded list: ', expanded)
    console.log('\n')

    // Create successors of each node and push them onto the fringe.
    for (var i = 0; i < actionsList.length; i++) {
      var newS = successor(_parent3.state, actionsList[i])
      var newN = new searchNode(actionsList[i], newS, _parent3)

      // If the goal is found,
      // returns the path to the goal.
      if (goalTest(newS)) {
        console.log('FOUND GOAL!', newS, ' with path cost ', newN.pathCost())
        console.log('Continuing search to find optimal path.')
        if (newN.pathCost() < shortestPath.pathCost || shortestPath.pathCost === null) {
          shortestPath.pathCost = newN.pathCost()
          shortestPath.path = newN.path()
          shortestPath.state = newS
        }
      }

      // If the successor is already expanded,
      // don't add it to the fringe.
      else if (expanded.indexOf(newS) !== -1) {
        console.log('Successor ' + newS + ' of ' + _parent3.state + ' already expanded.')
        console.log('Not adding ' + newS + ' to the fringe.')
        console.log('\n')
      }

      // Push new successors to the fringe.
      else {
        console.log('Discovered ' + newN.state + ' with step cost ' + actionsList[i].cost + ' from ' + _parent3.state)
        console.log('Pushing to fringe: ' + newS)
        newChildStates.push(newS)
        fringe.enqueue(newN)
        console.log('Path: ', newN.path())
        console.log(
          'Current fringe: ' +
            fringe.map(function (city) {
              return city.state
            })
        )
        console.log('\n')
      }
    }
  }

  if (shortestPath.pathCost === null) {
    return "Couldn't find path."
  } else {
    return shortestPath.path + ' with path cost ' + shortestPath.pathCost
  }
}

function aStarSearch(initialState, goalTest, actions, successor) {
  // The fringe is a Priority Queue
  // Actions other than shift() and enqueue() are prohibited.
  var fringe = []
  if (goalTest(initialState)) {
    console.log('Initial state is the goal state.')
    return [initialState]
  }

  fringe.enqueue = function (item) {
    var added = false

    var heuristic = null
    // Finding heuristic value
    for (var i = 0; i < cities.length; i++) {
      if (cities[i].name === item.state) {
        heuristic = cities[i].h
      }
    }

    function findHeuristic(item) {
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].name === item.state) {
          return cities[i].h
        }
      }
    }

    for (var i = 0; i < fringe.length; i++) {
      console.log('Iteration in fringe: ', fringe[i].state)
      console.log(
        'COST: ',
        fringe[i].pathCost(),
        'HEURISTIC COST: ',
        findHeuristic(fringe[i]),
        'TOTAL COST: ',
        fringe[i].pathCost() + findHeuristic(fringe[i])
      )
      if (item.pathCost() + heuristic < fringe[i].pathCost() + findHeuristic(fringe[i])) {
        fringe.splice(i, 0, item)
        added = true
        return
      }
    }

    if (!added) {
      fringe.push(item)
    }
  }

  // Add the initialState to the fringe.
  fringe.enqueue(new searchNode(null, initialState, null))
  var expanded = []
  var shortestPath = { state: null, pathCost: null, path: null }

  while (fringe.length !== 0) {
    console.log(
      'Fringe: ' +
        fringe.map(function (city) {
          return city.state
        })
    )

    // Pop an element out of the queue to expand.
    var _parent4 = fringe.shift()
    console.log('Popped: ', _parent4.state)
    var newChildStates = []

    // Child states of the current node
    var actionsList = actions(_parent4.state)
    console.log(
      'Found ' +
        actionsList.length +
        ' successors of ' +
        _parent4.state +
        ' : ' +
        actionsList.map(function (item) {
          return item.name
        })
    )

    // Add the node to the expanded list to prevent re-expansion.
    expanded.push(_parent4.state)
    console.log('Expanded list: ', expanded)
    console.log('\n')

    // Create successors of each node and push them onto the fringe.
    for (var i = 0; i < actionsList.length; i++) {
      var newS = successor(_parent4.state, actionsList[i])
      var newN = new searchNode(actionsList[i], newS, _parent4)

      // If the goal is found,
      // returns the path to the goal.
      if (goalTest(newS)) {
        console.log('FOUND GOAL!', newS, ' with path cost ', newN.pathCost())
        console.log('Continuing search to find optimal path.')
        if (newN.pathCost() < shortestPath.pathCost || shortestPath.pathCost === null) {
          shortestPath.pathCost = newN.pathCost()
          shortestPath.path = newN.path()
          shortestPath.state = newS
        }
      }

      // If the successor is already expanded,
      // don't add it to the fringe.
      else if (expanded.indexOf(newS) !== -1) {
        console.log('Successor ' + newS + ' of ' + _parent4.state + ' already expanded.')
        console.log('Not adding ' + newS + ' to the fringe.')
        console.log('\n')
      }

      // Push new successors to the fringe.
      else {
        console.log('Discovered ' + newN.state + ' with step cost ' + actionsList[i].cost + ' from ' + _parent4.state)
        console.log('Pushing to fringe: ' + newS)
        newChildStates.push(newS)
        fringe.enqueue(newN)
        console.log('Path: ', newN.path())
        console.log(
          'Current fringe: ' +
            fringe.map(function (city) {
              return city.state
            })
        )
        console.log('\n')
      }
    }
  }

  if (shortestPath.pathCost === null) {
    return "Couldn't find path."
  } else {
    return shortestPath.path + ' with path cost ' + shortestPath.pathCost
  }
}

function goalTest(state) {
  return state === goalCity
}

function actions(state) {
  // Returns an array of objects
  // [{ name: string, cost: integer }, ... ]
  return Romania.get(state)
}

function successor(state, action) {
  return action.name
}

var goalCity = null
var startCity = null
var setResult = function setResult(result) {
  var element = document.getElementById('search-result')
  while (element.firstChild !== null) {
    // remove all existing content
    element.removeChild(element.firstChild)
  }
  element.appendChild(document.createTextNode(result))
}

function setSearchInput() {
  startCity = null
  goalCity = null
  var start = document.getElementById('start')
  var goal = document.getElementById('goal')
  if (start.value.length > 0 && goal.value.length > 0) {
    startCity = start.value
    goalCity = goal.value
    return true
  } else {
    setResult('Error: Coloque uma cidade válida')
    return false
  }
}

function bfs() {
  document.getElementById('path').innerHTML = 'Path:'
  if (setSearchInput()) {
    setResult(breadthFirstSearch(startCity, goalTest, actions, successor))
  }
}

function dfs() {
  document.getElementById('path').innerHTML = 'Path:'
  if (setSearchInput()) {
    setResult(depthFirstSearch(startCity, goalTest, actions, successor))
  }
}

function ucs() {
  document.getElementById('path').innerHTML = 'Optimal path:'
  if (setSearchInput()) {
    setResult(uniformCostSearch(startCity, goalTest, actions, successor))
  }
}

function astar() {
  document.getElementById('path').innerHTML = 'Optimal path with straight-line distance heuristic:'
  // if (goalCity !== 'PortoVelho') {
  //   setResult(
  //     'Erro: Os valores heurísticos são calculados apenas de qualquer cidade inicial para PortoVelho. Altere a cidade-fim para PortoVelho e tente novamente.'
  //   )
  // } else {
    setResult(aStarSearch(startCity, goalTest, actions, successor))
  // }
}
//# sourceMappingURL=romania-compiled.js.map
