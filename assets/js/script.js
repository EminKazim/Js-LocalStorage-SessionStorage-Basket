import { getProductCount } from "./common.js"

// let a = 5;
// a++;

// localStorage.setItem("a",5);

// localStorage.setItem("a",40);
// localStorage.setItem("b",40);


// localStorage.removeItem("a");

// localStorage.clear();

// console.log(localStorage.getItem("a"))
//  localStorage.setItem("arr",JSON.stringify([1, 2, 3, 4]));

// console.log(JSON.parse(localStorage.getItem("arr")));

//take array type from localStorage

//localStorage.setItem("arr",[1,2,3,4]);
// let str = localStorage.getItem("arr");
// let news = str.split(",");
// let arr = [];
// for (const item of news) {
//     arr.push(parseInt(item))
// }

// console.log(arr);


// sessionStorage.setItem("name","Emin");
// console.log(sessionStorage.getItem("name"))


let addBtns = document.querySelectorAll(".btn-primary");
let countElem = document.querySelector("sup");


if (JSON.parse(localStorage.getItem("products")) == null) {
    localStorage.setItem("products", JSON.stringify([]));
}


let products = JSON.parse(localStorage.getItem("products"));

addBtns.forEach(btn => {
    btn.onclick = function (e) {
        e.preventDefault();
        let productId = this.parentNode.parentNode.getAttribute("data-id");
        let productImg = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let existProduct = products.find(m => m.id == productId);

        if (existProduct == undefined) {
            products.push({
                id: productId,
                img: productImg,
                name: productName,
                count: 1
            })
        } else {
            existProduct.count += 1;
        }

        localStorage.setItem("products", JSON.stringify(products));
        countElem.innerText = getProductCount(products);
    }

})

countElem.innerText = getProductCount(products);



