var SeasonalSales = (function(load){
  var products;
  var departments;

  load.loadItems = function(){
    Promise.all([
    $.getJSON('products.json'),
    $.getJSON('departments.json')
    ])
    .then(function(results){
      products = results[0].products;
      // console.log("products", products)
      departments = results[1].categories;
      console.log("deparments", departments)
      SeasonalSales.printItems(products, departments)
    })
  }

  return load
})(SeasonalSales || {})
SeasonalSales.loadItems()