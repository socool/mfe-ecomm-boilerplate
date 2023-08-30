import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
  //document.querySelector("#dev-products").innerHTML = products;
};
// Context/Situation #1
// running file in development in isolation
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  // assuming our container doesnt have an element
  // with id 'dev-products'
  if (el) {
    mount(el);
  }
}

export { mount };
