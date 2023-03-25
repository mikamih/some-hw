// call api
let productList = []
const getProducts = async () => {
  const data = await axios({
    method: "GET",
    url: "https://63f0c2245703e063fa4beca0.mockapi.io/JSI16-valorantbundlegobrrrr",
  });
  productList = [...data.data]
  return data.data;
};

let addToCart = (id) => {
  console.log('Xin chào', id)
  // đề. từ id của sự kiện click. hãy tìm ra sản phẩm {} tương ứng với id đó trong productList
  // gợi ý: filter => find
  // console.log(thông tin san phẩm được chọn từ id)
}

const renderProductList = () => {
  const htmlString = productList.reduce((accHTML, product) => {
    return accHTML + `
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
          <span style="margin-left: 8px;">Thêm vào giỏ hàng</span>
          </button>
          </div>
        </div>
        `
      }, '')
      document.getElementById('product-list').innerHTML = htmlString
    }
<div class="card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <div>
                  <img src="${productPicked.img}" class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                </div>
                <div class="ms-3">
                  <h5>${productPicked.name}</h5>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">





                
              </div>
getProducts().then((results) => {
  console.log(results);
  renderProductList()
});
