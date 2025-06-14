const products = [
      { name: "iPhone", category: "phone", rating: 4.5 },
      { name: "Samsung Galaxy", category: "phone", rating: 4.0 },
      { name: "MacBook", category: "laptop", rating: 4.8 },
      { name: "Dell XPS", category: "laptop", rating: 4.2 }
    ];

    function filterProducts() {
      const filter = document.getElementById("filter").value;
      const sort = document.getElementById("sort").value;

      let filtered = products.filter(p => filter === "all" || p.category === filter);

      if (sort === "high") filtered.sort((a, b) => b.rating - a.rating);
      if (sort === "low") filtered.sort((a, b) => a.rating - b.rating);

      const list = document.getElementById("productList");
      list.innerHTML = "";


      filtered.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
        <div class="product-title">${p.name}</div>
        <div class="product-category">${p.category.toUpperCase()}</div>
        <div class="product-rating">⭐ ${p.rating}</div>`;
        list.appendChild(div);
      });

    }

    filterProducts();