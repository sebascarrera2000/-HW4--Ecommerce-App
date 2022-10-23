

let elMeliBtn = document.getElementById("meli-btn");
let productsContainerMeli = document.getElementById("products-container-meli");

let action = null;

const isOk = true;

const customFetch = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve(task);
      } else {
        reject("Error");
      }
    }, time);
  });
};

/* Guia html
*       <div class="product" data-name="p-1">
            <img src="https://picsum.photos/200/300" alt="product">
            <h3>Producto 1</h3>
            <div class="price">100</div>
        </div>
*
* */


const apiUrl = "https://api.mercadolibre.com/sites/MLC/search";
const getMeliProducts = async () => {
  let productsContainerMeli = document.getElementById(
    "products-container-meli"
  );
  productsContainerMeli.removeAttribute("style");

  try {
    const respuesta = await axios.get(apiUrl, {
      params: {
        q: "agua",
      },
    });
    respuesta.data.results.forEach((product) => {
      console.log(product, "product");
      let divProduct = document.createElement("div");
      divProduct.classList.add("product");
      divProduct.setAttribute("data-name", `p-${product.id}`);
      productsContainerMeli.append(divProduct);

      let img = document.createElement("img");
      img.classList.add("img");
      console.log(img.src); /*  <div>Agua con gas 1.5L</div> */
      img.src = product.thumbnail;
      divProduct.append(img);

      let h3 = document.createElement("h3");
      h3.innerHTML = product.title;
      divProduct.append(h3);

      let divQty = document.createElement("div");
      divQty.classList.add("Qty");
      divQty.innerHTML = Number(product.available_quantity);
      divQty.classList.add("currQty");
      divProduct.append(divQty);

      let divPrice = document.createElement("div");
      divPrice.classList.add("price");
      divPrice.innerHTML = Number(product.price).toLocaleString("es-CL");
      divPrice.classList.add("currSign");
      divProduct.append(divPrice);

      let divboton = document.createElement("div");
      divboton.innerHTML = "Add to Cart";
      divboton.classList.add("addtocart");
      divProduct.append(divboton);
  
    });
    console.log(respuesta.data.results, "respuestaMeli");
  } catch (error) {
    console.log(error);
  }
};
elMeliBtn.addEventListener("click", getMeliProducts, false);
