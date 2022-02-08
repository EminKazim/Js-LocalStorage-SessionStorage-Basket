import { getProductCount } from "./common.js"

let table = document.getElementById("table");
let countElem = document.querySelector("sup");

let products = [];
if (JSON.parse(localStorage.getItem("products")) != null) {
    products = JSON.parse(localStorage.getItem("products"));
}

getProductList(products);

function getProductList(list) {
    for (const product of list) {
        table.lastElementChild.innerHTML += `<tr>
        <th>
            <img src="${product.img}" style="height:100px" alt="">
        </th>
        <td>${product.name}</td>
        <td>${product.count}</td>
        </tr>`
    }
}

countElem.innerText = getProductCount(products);