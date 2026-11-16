fetch("https://dummyjson.com/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const products = data.products;

    const names = products.map(function (product) {
      return product.title + " - $" + product.price;
    });
    document.getElementById("product-prices").innerHTML = names.join("<br>");

    const expensive = products.filter(function (product) {
      return product.price > 100;
    });

    const expensiveList = expensive.map(function (product) {
      return product.title + " - $" + product.price;
    });

    document.getElementById("filtered-products").innerHTML =
      expensiveList.join("<br>");

    const found = products.find(function (product) {
      return product.id === 5;
    });

    document.getElementById("search-product").innerHTML =
      found.title + " - $" + found.price;

    const titles = document.getElementById("product-titles");

    products.forEach(function (product) {
      titles.innerHTML += product.title + "<br>";
    });
  })
  .catch(function (error) {
    console.error("Error:", error);
  });
