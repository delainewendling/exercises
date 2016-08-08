//Create super-class function
function Plant () {
  this.height = 0
}

function Tree () {
  this.branches = 0
}

//Makes the Plant function the prototype of Tree
Tree.prototype = new Plant(Tree)
// Tree.prototype = Object.create(Plant.prototype)

Plant.prototype.increaseHeight = function (growth) {
  this.height += growth;
}

Plant.prototype.decreaseHeight = function (reduction) {
  this.height -= reduction;
}

// Tree.prototype.branches = 0

Tree.prototype.grow = function (amount) {
  this.branches += amount;
}

Tree.prototype.trim = function (amount) {
  this.branches -= amount;
}

var PearTree = new Tree()
var OakTree = new Tree()

//Set up timers that call functions
var growthInterval = setInterval(growTrees, 1000)
var trimInterval = setInterval(trimTrees, 10000)
var stopInterval = setTimeout(stopGrowth, 30000)

//Group of functions that grow the tree height
function growTrees (){
  IncreasePearHeight()
  IncreaseOakHeight()
  IncreasePearBranches()
  IncreaseOakBranches()
}

function IncreasePearHeight (){
  var PearTreeIncrease = Math.round(Math.random()*5);
  PearTree.increaseHeight.call(PearTree, PearTreeIncrease)
  console.log("pear tree height", PearTree.height)
}

function IncreaseOakHeight (){
  var OakTreeIncrease = Math.round(Math.random()*5+5)
  OakTree.increaseHeight.call(OakTree, OakTreeIncrease)
  console.log("oak tree height", OakTree.height)
}

//Group of functions that deal with the number of branches
function IncreasePearBranches (){
  var increasePearBranches = Math.round(Math.random()*3)
  PearTree.grow.call(PearTree, increasePearBranches)
  console.log("Pear Branches", PearTree.branches)

}

function IncreaseOakBranches (){
  var increaseOakBranches = Math.round(Math.random()*3)
  OakTree.grow.call(OakTree, increaseOakBranches)
  console.log("Oak Branches", OakTree.branches)
  console.log("---------------")
  printToDOM()
}

//Trim the tree branches
function trimTrees(){
  var trimPearTree = Math.round(Math.random()*3+3)
  var trimOakTree = Math.round(Math.random()*3+3)
  PearTree.trim.call(PearTree, trimPearTree)
  OakTree.trim.call(OakTree, trimOakTree)
  console.log("trim method called")
}

//Function that stops the growth of the trees
function stopGrowth (){
  clearInterval(growthInterval)
}

//DOM interaction
function printToDOM (){
  $('#treeInfo').append(`
    <p> Pear tree is now ${PearTree.height}cm tall, and has ${PearTree.branches} branches </p>
    <p> Oak tree is now ${OakTree.height}cm tall, and has ${OakTree.branches} branches</p> <br>`)
}


