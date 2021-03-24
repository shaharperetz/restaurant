export const itemService = {
    getItems
}

const items = [
    { title: 'Seared Salmon Fillet', desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.', path: '../assets/images/homepage/menu-items/menu-item1.jpg' },
    { title: 'Rosemary Filet Mignon', desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.', path: '../assets/images/homepage/menu-items/menu-item2.jpg' },
    { title: 'Summer Fruit Chocolate Mousse', desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.', path: '../assets/images/homepage/menu-items/menu-item3.jpg' },
]



function getItems() {
    return Promise.resolve(items)
}

