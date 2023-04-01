// call api
let productList = [];
let productPickedList = JSON.parse(localStorage.getItem("doan_cart")) || [];
document.getElementById("cart").innerHTML = productPickedList.length;

const getProducts = async () => {
  const data = await axios({
    method: "GET",
    url: "https://63f0c2245703e063fa4beca0.mockapi.io/JSI16-valorantbundlegobrrrr",
  });
  productList = [...data.data];
  return data.data;
};

const calculateBill = () => {
  const totalBill = productPickedList.reduce((total, productPicked) => {
    return total + productPicked.salePrice
  }, 0)
  document.getElementById('total').innerHTML = totalBill
}

calculateBill()

var removeItemPicked = (index) => {
  productPickedList.splice(index, 1)
  renderProductPickedList(productPickedList)
  localStorage.setItem('doan_cart', JSON.stringify(productPickedList))
  calculateBill()
  document.getElementById("cart").innerHTML = productPickedList.length;
}

var renderProductPickedList = (productPickedList) => {
  if (productPickedList.length === 0) {
    document.getElementById("modal-cart-content").innerHTML = `
      <p class="text-center">Bạn chưa thêm sản phẩm nào vào giỏ hàng</p>
    `;
  } else {
    const htmlString = productPickedList.reduce((accHTML, productPicked, index) => {
      return (
        accHTML +
        `
          <div class="card myCard">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div>
                    <img src="${productPicked.img}" class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                  </div>
                  <div class="ms-3">
                    <h5>${productPicked.name}</h5>
                    <p style="width: 300px;" class="text-truncate fst-italic myDesc">${productPicked.desc}</p>
                  </div>
                 
                </div>
                <div class="d-flex flex-row align-items-center">
                  <div style="margin-right: 30px;">
                    <span class="mb-0">${productPicked.salePrice}</span>
                    <span>₫</span>
                  </div>
                  <span style="color: red;" onclick='removeItemPicked(${index})'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
      `
      );
    }, "");
    document.getElementById('modal-cart-content').innerHTML = htmlString
  }
};

renderProductPickedList(productPickedList);

let addToCart = (id) => {
  const itemPicked = productList.find((product) => product.id == id);
  productPickedList.push(itemPicked);
  localStorage.setItem("doan_cart", JSON.stringify(productPickedList));
  document.getElementById("cart").innerHTML = productPickedList.length;
  renderProductPickedList(productPickedList);
  console.log(productPickedList);
};

const renderProductList = () => {
  const htmlString = productList.reduce((accHTML, product) => {
    return (
      accHTML +
      `
    <div class="product card shadow-sm">
      <img
        src='${product.img}'
        class="card-img-top flex-fill"
        alt="..."
        style='height: 300px;'
      />
      <div class="card-body">
        <h5 class="card-title text-truncate">${product.name}</h5>
        <b class="text-danger">${product.salePrice}₫ </b>
        <button class="btn btn-primary w-100 text-start mt-4" onclick="addToCart(${product.id})">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
          </svg>
          <span style="margin-left: 8px;">add to cart</span>
        </button>
      </div>
    </div>
    `
    );
  }, "");
  document.getElementById("product-list").innerHTML = htmlString;
};

getProducts().then((results) => {
  console.log(results);
  renderProductList();
});
