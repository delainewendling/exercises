//Create super-class function
function Plant () {

}

function Tree () {

}

Tree.prototype = Object.create(Plant.prototype)

Plant.prototype.height = 0

Plant.prototype.increaseHeight = function (growth) {
  Plant.prototype.height += growth;
}

Plant.prototype.decreaseHeight = function (reduction) {
  Plant.prototype.height = height - reduction;
}

Tree.prototype.branches = 0

Tree.prototype.grow = function (amount) {

}

Tree.prototype.trim = function (amount) {
  Tree.prototype.branches -= amount;
  console.log("branches")
}

var PearTree = new Tree()
var OakTree = new Tree()

var growthInterval = setInterval(growTrees, 1000)

var trimInterval = setInterval(trimTrees(1), 10000)

function trimTrees(amount){
  PearTree.trim(amount)
  OakTree.trim(amount)
  console.log("pear tree branches", PearTree.branches)
  console.log("oak tree branches", OakTree.branches)
}

function growTrees (){
  IncreasePearHeight()
  IncreaseOakHeight()
}

function IncreasePearHeight (){
  var PearTreeIncrease = Math.round(Math.random()*5);
  PearTree.increaseHeight(PearTreeIncrease)
  console.log("pear tree height", PearTree.height)
}

function IncreaseOakHeight (){
  var OakTreeIncrease = Math.round(Math.random()*5+5)
  OakTree.increaseHeight(OakTreeIncrease)
  console.log("oak tree height", OakTree.height)
  console.log("---------------")
}
clearInterval(growthInterval)

console.log("current height", PearTree.height)
// console.log("height now", interval)

console.log("Plant", Plant)
console.log("Tree", Tree)
console.log("PearTree", PearTree)
console.log("OakTree", OakTree)
