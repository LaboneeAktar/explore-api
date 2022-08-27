const user = { id: 1, name: 'Gorib Amir', job: 'actor' };
//JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);                       //{ id: 1, name: 'Gorib Amir', job: 'actor' }
// console.log(stringified);               //{"id":1,"name":"Gorib Amir","job":"actor"}

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet Voot er Goli',
        city: 'Ranvir',
        country: 'BD'
    },
    products: ['Laptop', 'Mobile', 'Mic', 'Keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);




