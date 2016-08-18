var SeasonalSales = (function(sales){

  sales.printItems = function(products, categories){
    console.log("products", products)
    var results = ""
    products.forEach((product, i)=>{
      if (i%3 === 0){
        results += `<div class="row row-eq-height">`
      }
      results += `<div class="product col-xs-4"><h3> ${product.name}</h3><h4 class="price"> Price: $${product.price}</h4><p> Seasonally on Sale in: <strong class="season"> ${categories[product.category_id-1].season_discount} </strong></p></div>`
      if ((i+1)%3===0){
        results+=`</div>`
      }
    })
    $(".productsContainer").append(results)
    selectedItem(products, categories)
  }

  function selectedItem (products, categories) {
    $(".dropdown-menu li").click(function(e){
      discountedPrices(products, categories, $(this).attr('id'))
    });
  }

  function discountedPrices (products, categories, season) {
    var newProducts = ""
    var newPrice;
    products.forEach((product)=>{
    $(".productsContainer").html("")
    if(`${product.category_id}`=== season){
      newPrice = Math.round(product.price*(1-categories[product.category_id-1].discount)*100)/100
      discount = categories[product.category_id-1].discount*100
      newProducts += `<div class="onSaleNow col-xs-4"><h3> ${product.name}</h3><h4 class="price" style="text-decoration: line-through"> Price: $${product.price}</h4><h4 class="newPrice"> $${newPrice}</h4><p class="onSale"> <strong> Discounted ${discount}% right now! </strong></p></div>`
    } else {
      newProducts += `<div class="product col-xs-4"><h3> ${product.name}</h3><h4 class="price"> Price: $${product.price}</h4><p class="newPrice"></p><p > Seasonally on Sale in: <strong class="season"> ${categories[product.category_id-1].season_discount} </strong></p></div>`
    }
  })
    $(".productsContainer").append(newProducts)
  }
    // var seasons = document.querySelectorAll(".season")
    // seasons.forEach((seasonItem)=>{
    //   if(seasonItem.innerText === season){
    //     console.log("season is", seasonItem)
    //     season
    //   }
    // })

  return sales
})(SeasonalSales || {})