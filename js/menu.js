let checkoutButton = document.querySelector('.checkout');

// Event listener for the checkout button
checkoutButton.addEventListener('click', () => {
    // Perform any necessary actions before redirecting, e.g., sending data to the server
    
    // Redirect to the book.html page
    window.location.href = 'una.html';
});



let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Beef Burger',
        image: '1.PNG',
        price: 79
    },
    {
        id: 2,
        name: 'Cheese Burger',
        image: '2.PNG',
        price: 89
    },
    {
        id: 3,
        name: 'Beef Bacon',
        image: '3.PNG',
        price: 89
    },
    {
        id: 4,
        name: 'Chicken Burger',
        image: '4.PNG',
        price: 79
    },
    {
        id: 5,
        name: 'Chicken Overload',
        image: '5.PNG',
        price: 105
    },
    {
        id: 6,
        name: 'Cheese Burger Combo',
        image: '6.PNG',
        price: 125
    },
    {
        id: 7,
        name: 'Deluxe Cheese Burger',
        image: '7.PNG',
        price: 125
    },
    {
        id: 8,
        name: 'Chicken Burger Combo',
        image: '8.PNG',
        price: 125
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let price = value.price.toFixed(2); // Ensure two decimal places
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">₱${price}</div> <!-- Add the peso sign and double zeros here -->
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
       
    }
    reloadCard();
}


