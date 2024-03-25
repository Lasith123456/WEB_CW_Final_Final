let itemsData = [
    {
        id: 'dsdsfds',
        image: 'http://via.placeholder.com/150',
        title: '5 inch Membrane Filter',
        price: 150,
        category: 'filters',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, deserunt autem. Temporibus aliquam dolorum illum maiores cumque deleniti optio possimus.'
    },
    {
        id: 'trtret',
        image: 'http://via.placeholder.com/150',
        title: '5 inch Membrane Filter',
        price: 375  ,
        category: 'filters',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, deserunt autem. Temporibus aliquam dolorum illum maiores cumque deleniti optio possimus.'
    },
    {
        id: 'vbbcbcx',
        image: 'http://via.placeholder.com/150',
        title: '5 inch Membrane Filter',
        price: 150,
        category: 'filters',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, deserunt autem. Temporibus aliquam dolorum illum maiores cumque deleniti optio possimus.'
    },
    {
        id: 'jhgkjkghk',
        image: 'http://via.placeholder.com/150',
        title: '5 inch Membrane Filter',
        price: 150,
        category: 'filters',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, deserunt autem. Temporibus aliquam dolorum illum maiores cumque deleniti optio possimus.'
    },
    {
        id: 'rtytyty',
        image: 'http://via.placeholder.com/150',
        title: '5 inch Membrane Filter',
        price: 150,
        category: 'filters',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, deserunt autem. Temporibus aliquam dolorum illum maiores cumque deleniti optio possimus.'
    },
    {
        id: 'asfdsfsfrwear',
        image: 'http://via.placeholder.com/150',
        title: '5 inch Membrane Filter',
        price: 150,
        category: 'filters',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, deserunt autem. Temporibus aliquam dolorum illum maiores cumque deleniti optio possimus.'
    },
    {
        id: 'jkhljl',
        image: 'http://via.placeholder.com/150',
        title: '5 inch Membrane Filter',
        price: 150,
        category: 'filters',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, deserunt autem. Temporibus aliquam dolorum illum maiores cumque deleniti optio possimus.'
    },
    {
        id: 'zxcvxdfgds',
        image: 'http://via.placeholder.com/150',
        title: '5 inch Membrane Filter',
        price: 150,
        category: 'filters',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, deserunt autem. Temporibus aliquam dolorum illum maiores cumque deleniti optio possimus.'
    }


];

let item = document.getElementById("item");

let shopItem = ()=>{
    return item.innerHTML = itemsData.map((item)=>{
        return `
            <div class="item1">
                    <img src=${item.image} alt="">
                    <div class="item-content">
                        <h3 class="title">${item.title}</h3>
                        <p>${item.desc}</p>
                    </div>
                    <div class="card-footer">
                        <h3>$ ${item.price}</h3>
                        <input type="button" value="Add to Cart"onclick="addToCart(item.id)">
                    </div>
                </div>
        `
    }).join("")
}

shopItem();

let cart = [];

let addToCart = (id)=>{
    let cartItem = cart.find(item => id === item.id)

    if (cartItem){
        cartItem.quantity +=1;
        console.log(cart);
    }else{
        cart.push({id: id,quantity:1});
        console.log(cart);
    }
}

