var SeasonalSales = (function(sales){

  sales.printItems = function(products, categories){
    console.log("products", products)
    products.forEach((product)=>{
    $(".productsContainer").append(`<div class="product col-xs-4"><h3> ${product.name}</h3><h4 class="price"> Price: $${product.price}</h4><p> Seasonally on Sale in: ${categories[product.category_id-1].season_discount}</p></div>`)
    })
    selectedItem(products, categories)
  }

  function selectedItem (products, categories) {
    $(".dropdown-menu li a").click(function(e){
      console.log("id", $(this).attr('id'))
    // $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    // $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });
  }

  return sales
})(SeasonalSales || {})