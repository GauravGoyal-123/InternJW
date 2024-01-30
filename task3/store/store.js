const div = document.querySelector(".music");
const arr = [
    {
        id : 1,
        Name : "Album1",
        img : "../images/musicImg.jpg",
        cost : "$12.99"
    },
    {
        id : 2,
        Name : "Album2",
        img : "../images/musicImg.jpg",
        cost : "$12.99"
    },
    {
        id : 3,
        Name : "Album3",
        img : "../images/musicImg.jpg",
        cost : "$12.99"
    },
    {
        id : 4,
        Name : "Album4",
        img : "../images/musicImg.jpg",
        cost : "$12.99"
    },
    {
        id : 5,
        Name : "Album5",
        img : "../images/musicImg.jpg",
        cost : "$12.99"
    },
    {
        id : 6,
        Name : "Album6",
        img : "../images/musicImg.jpg",
        cost : "$12.99"
    }
]

const arr2 = [
    {
        id : 7,
        Name : "T Shirt1",
        img : "../images/tshirtImg.jpg",
        cost : "$12.99"
    },
    {
        id : 8,
        Name : "T Shirt2",
        img : "../images/tshirtImg.jpg",
        cost : "$12.99"
    },
    {
        id : 9,
        Name : "T Shirt3",
        img : "../images/tshirtImg.jpg",
        cost : "$12.99"
    }
]

const card_body1 = document.querySelector('.card-body1');
const card_body2 = document.querySelector('.card-body2');

for(let i = 0; i < arr.length; i++) {
    let div = document.createElement('div');
    div.className = "card";
    let h = document.createElement('div');
    h.textContent = arr[i].Name;
    h.className = "div1"
    div.appendChild(h);
    
    let img = document.createElement('div');
    let a = document.createElement('img');
    a.setAttribute("src", arr[i].img);
    img.appendChild(a);
    img.className = "div2"
    div.appendChild(img);

    let foot = document.createElement('div');
    let p = document.createElement('p');
    foot.className = "div3"
    p.textContent = arr[i].cost;
    foot.appendChild(p);
    let btn = document.createElement('button');
    btn.type = "submit";
    btn.className = "add-to-cart"
    btn.id = arr[i].id;
    btn.textContent = "Add to cart"
    foot.appendChild(btn);
    div.appendChild(foot);

    card_body1.appendChild(div);
}

for(let i = 0; i < arr2.length; i++) {
    let div = document.createElement('div');
    div.className = "card";
    let h = document.createElement('div');
    h.textContent = arr2[i].Name;
    h.className = "div1"
    div.appendChild(h);
    
    let img = document.createElement('div');
    let a = document.createElement('img');
    a.setAttribute("src", arr2[i].img);
    img.appendChild(a);
    img.className = "div2"
    div.appendChild(img);

    let foot = document.createElement('div');
    let p = document.createElement('p');
    foot.className = "div3"
    p.textContent = arr2[i].cost;
    foot.appendChild(p);
    let btn = document.createElement('button');
    btn.type = "submit";
    btn.className = "add-to-cart"
    btn.textContent = "Add to cart"
    btn.id = arr2[i].id;
    foot.appendChild(btn);
    div.appendChild(foot);

    card_body2.appendChild(div);    
}

var buttons = document.getElementsByClassName('add-to-cart');
// console.log(buttons);
let cart_arr = [];
let cart_items = document.querySelector(".cart-items");

function fun(obj) {
    let cart_arr1 = localStorage.getItem("cart-item");
    let cart_arr = JSON.parse(cart_arr1);
    let exist = false;
    for(let i = 0; i < cart_arr.length; i++) {
        if(cart_arr[i].id === obj.id) {
            cart_arr[i].count++;
            document.getElementById(`p-${cart_arr[i].id}`).innerHTML = cart_arr[i].count;
            exist = true;
        }
    }
    if(!exist) {
        let newobj = {...obj, count : 1};
        cart_arr.push(newobj);
        let div = document.createElement('div');
        div.className = "cart-item1"
        div.id = `div-${newobj.id}`;
        let div1 = document.createElement('div');
        let item_img = document.createElement('img');
        item_img.src = newobj.img
        let item_name = document.createElement('p');
        item_name.textContent = newobj.Name;
        div1.appendChild(item_img);
        div1.appendChild(item_name);
        div1.className = "item-h1"
        div.appendChild(div1);
    
        let div2 = document.createElement('div');
        div2.className = "price-h1";
        let cp = document.createElement('p');
        cp.textContent = newobj.cost;
        div2.appendChild(cp);
        div.appendChild(div2);
    
        let div3 = document.createElement('div');
        div3.className = "quantity-h1";
        let qp = document.createElement('p');
        qp.id = `p-${newobj.id}`;
        qp.textContent = newobj.count;
        let rbtn = document.createElement('button');
        rbtn.textContent = "Remove";
        rbtn.type = "submit"
        rbtn.id = `rmv-btn-${newobj.id}`;
        rbtn.className = "rmv-btn";
        rbtn.addEventListener('click', ()=> {
            removeFromCart(newobj.id);
        });
        div3.appendChild(qp);
        div3.appendChild(rbtn);
        div.appendChild(div3);
        cart_items.append(div);
    }
    localStorage.setItem('cart-item', JSON.stringify(cart_arr));
    
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var buttonId = this.id;
        let obj;
        if(buttonId > 6) {    
            obj = arr2[buttonId - 7];
        }
        else {
            obj = arr[buttonId - 1];
        }
        fun(obj);        
    });
}

function removeFromCart(id) {
    const div = document.getElementById(`div-${id}`);
    let LSA = localStorage.getItem('cart-item');
    let larr = JSON.parse(LSA);
    let newLSarr = [];
    for(let i = 0; i < larr.length; i++) {
        if(larr[i].id !== id) {
            // console.log(larr[i]);
            newLSarr.push(larr[i]);
        }
    }
    localStorage.setItem('cart-item', JSON.stringify(newLSarr));
    div.remove();
    
}

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");
    var playPauseBtn = document.getElementById("playPauseBtn");

    playPauseBtn.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
  });

if(localStorage.length === 0 || !localStorage.length) {
    localStorage.setItem("cart-item", "[]");
}
else {
    let arr2 = localStorage.getItem("cart-item");
    let Arr = JSON.parse(arr2);
    for(let i = 0; i < Arr.length; i++) {
        let div = document.createElement('div');
        div.className = "cart-item1"
        div.id = `div-${Arr[i].id}`;
        let div1 = document.createElement('div');
        let item_img = document.createElement('img');
        item_img.src = Arr[i].img
        let item_name = document.createElement('p');
        item_name.textContent = Arr[i].Name;
        div1.appendChild(item_img);
        div1.appendChild(item_name);
        div1.className = "item-h1"
        div.appendChild(div1);
    
        let div2 = document.createElement('div');
        div2.className = "price-h1";
        let cp = document.createElement('p');
        cp.textContent = Arr[i].cost;
        div2.appendChild(cp);
        div.appendChild(div2);
    
        let div3 = document.createElement('div');
        div3.className = "quantity-h1";
        let qp = document.createElement('p');
        qp.id = `p-${Arr[i].id}`;
        qp.textContent = Arr[i].count // update it dynamically;
        let rbtn = document.createElement('button');
        rbtn.addEventListener
        rbtn.textContent = "Remove";
        rbtn.type = "submit"
        rbtn.id = `rmv-btn-${Arr[i].id}`;
        // console.log(rbtn);
        rbtn.addEventListener('click', ()=> {
            removeFromCart(Arr[i].id);
        });
        rbtn.className = "rmv-btn";
        div3.appendChild(qp);
        div3.appendChild(rbtn);
        div.appendChild(div3);
        cart_items.append(div);
    }
}


// function update() {
//     // console.log(cart_items);
//     let divsToRemove = document.querySelectorAll('.cart-item1');
//     console.log(divsToRemove);
//     for (var i = 0; i < divsToRemove.length; i++) {
//         divsToRemove[i].remove();
//       }
//     for(let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         const obj = JSON.parse(localStorage.getItem(key));
//         // console.log(obj);
//         // const obj = cart_arr[i];
        
//         let div = document.createElement('div');
//         div.className = "cart-item1"
//         let div1 = document.createElement('div');
//         let item_img = document.createElement('img');
//         item_img.src = obj.img
//         let item_name = document.createElement('p');
//         item_name.textContent = obj.Name;
//         div1.appendChild(item_img);
//         div1.appendChild(item_name);
//         div1.className = "item-h1"
//         div.appendChild(div1);
    
//         let div2 = document.createElement('div');
//         div2.className = "price-h1";
//         let cp = document.createElement('p');
//         cp.textContent = obj.cost;
//         div2.appendChild(cp);
//         div.appendChild(div2);
    
//         let div3 = document.createElement('div');
//         div3.className = "quantity-h1";
//         let qp = document.createElement('p');
//         qp.textContent = obj.count // update it dynamically;
//         let rbtn = document.createElement('button');
//         rbtn.textContent = "Remove";
//         rbtn.type = "submit"
//         rbtn.id = obj.id;
//         rbtn.className = "rmv-btn";
//         div3.appendChild(qp);
//         div3.appendChild(rbtn);
//         div.appendChild(div3);
//         // console.log(div);
//         cart_items.append(div);
//     }
// }



// let found = false;
    // for(let i = 0; i < cart_arr.length; i++) {
    //     if(cart_arr[i].id === obj.id) {
    //         cart_arr[i].count++;
    //         found = true;
    //     }
    // }

    // if(!found) {
    //     let newobj = {...obj, count : 1};
    //     cart_arr.push(newobj);
    // }

    // local storage concept;
    // let exist = localStorage.getItem(obj.id);
    // if(!exist) {
    //     // let
    //     let newobj = {...obj, count : 1};
    //     localStorage.setItem(obj.id, JSON.stringify(newobj))
    // }
    // else {
    //     let newobj = JSON.parse(exist);
    //     newobj.count++; 
    //     localStorage.setItem(obj.id, JSON.stringify(newobj));
    // }
    // update();