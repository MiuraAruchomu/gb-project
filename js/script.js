const closeBasket = () => {
    const basketEl = document.querySelector('.basket-block')
    const basketBgEl = document.querySelector('.basket-bg')
    const basketInputEl = document.querySelector('.basket-input')
    document.querySelector('.basket-exit-button').addEventListener('click', () => {
        basketEl.style.display = 'none'
        basketBgEl.style.display = 'none'
        basketInputEl.removeAttribute('checked')
    })
}

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
]

const renderGoodsItem = (title = 'Product', price = 'Price') => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`
}

const renderGoodsList = list => {
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join('')
}

const init = () => {
    closeBasket()
    renderGoodsList(goods)
}

window.onload = init
