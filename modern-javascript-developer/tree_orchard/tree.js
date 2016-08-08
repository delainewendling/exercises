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

}

Tree.prototype.trim = function (amount) {
  this.branches -= amount;
  console.log("branches")
}

var PearTree = new Tree()
var OakTree = new Tree()

var growthInterval = setInterval(growTrees, 1000)

// var trimInterval = setInterval(trimTrees(1), 10000)

function trimTrees(amount){
  PearTree.trim.call(PearTree, amount)
  OakTree.trim.call(OakTree, amount)
  console.log("pear tree branches", PearTree.branches)
  console.log("oak tree branches", OakTree.branches)
}

function growTrees (){
  IncreasePearHeight()
  IncreaseOakHeight()
}

function IncreasePearHeight (){
  var PearTreeIncrease = Math.round(Math.random()*5);
  PearTree.increaseHeight.call(PearTree, PearTreeIncrease)
  console.log("pear tree height", PearTree.height)
}

function IncreaseOakHeight (){
  var OakTreeIncrease = Math.round(Math.random()*5+5)
  OakTree.increaseHeight.call(OakTree, OakTreeIncrease)
  printToDOM()
  console.log("oak tree height", OakTree.height)
  console.log("---------------")
}

//Stops Growth of the Trees
var stopInterval = setTimeout(stopGrowth, 30000)

function stopGrowth (){
  clearInterval(growthInterval)
}

//DOM interaction
function printToDOM (){
  $('#treeInfo').append(`
    <p> Pear tree is now ${PearTree.height}cm tall, and has ... branches </p>
    <p> Oak tree is now ${OakTree.height}cm tall, and has ... branches</p>`)
}


