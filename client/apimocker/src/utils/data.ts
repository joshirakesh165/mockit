
let productData = [
    {
        "name": "Premium Widget",
        "description": "High-quality widget with advanced features.",
        "price": 49.99,
        "category": "Electronics",
        "brand": "TechMaster",
        "rating": 4.5,
        "id": 'PROD-000'
    },
    {
        "name": "Superior Gadget",
        "description": "State-of-the-art gadget for all your needs.",
        "price": 89.95,
        "category": "Gadgets",
        "brand": "InnoTech",
        "rating": 4.2,
        "id": 'PROD-001'
    }
]

let userData = [{
    id: "USER-001",
    email: 'andrew@gmail.com',
    username: 'johnd',
    password: 'TEST$#123',
    name: {
        firstname: 'John',
        lastname: 'Doe'
    },
    address: {
        line1: 'Apt 101',
        line2: '123 Main Street',
        city: 'Cityville',
        state: 'CA',
        zipcode: '12345',
        geolocation: {
            lat: '-31.1159',
            long: '41.1496'
        }
    },
    phone: '91234567890'
},
{
    id: "USER-002",
    email: 'tot@gmail.com',
    username: 'johnd',
    password: 'TEST$#123',
    name: {
        firstname: 'John',
        lastname: 'Doe'
    },
    address: {
        line1: 'Apt 101',
        line2: '123 Main Street',
        city: 'Cityville',
        state: 'CA',
        zipcode: '12345',
        geolocation: {
            lat: '-31.1159',
            long: '41.1496'
        }
    },
    phone: '91234567890'
}];

let cartData = [{
    "id": 'CART-001',
    "userId": 'USER-001',
    "date": 1352572200000,
    "products": [
        {
            productId: 'PROD-001',
            quantity: 4
        },
        {
            productId: 'PROD-002',
            quantity: 10
        },
        {
            productId: 'PROD-003',
            quantity: 2
        }
    ]
},
{
    "id": 'CART-002',
    "userId": 'USER-002',
    "date": 1352572200000,
    "products": [
        {
            productId: 'PROD-001',
            quantity: 4
        },
        {
            productId: 'PROD-002',
            quantity: 10
        },
        {
            productId: 'PROD-003',
            quantity: 2
        }
    ]
}];

let orderData = [{
    id: 'ORDER-001',
    date: 23123123213,
    by: '',
    items: [
        { itemId: 'PROD-001', quantity: 2 },
        { itemId: 'PROD-002', quantity: 2 }
    ],
    status: 'PENDING'
},
{
    id: 'ORDER-002',
    date: 23123123213,
    by: '',
    items: [
        { itemId: 'PROD-002', quantity: 2 },
        { itemId: 'PROD-003', quantity: 4 }
    ],
    status: 'PENDING'
}]

let defaultApiData: any = {
    'Store': [
        { category: 'Store', displayName:'Product', name: 'product', data: productData },
        { category: 'Store', displayName:'User', name: 'user', data: userData },
        { category: 'Store', displayName:'Cart', name: 'cart', data: cartData },
        { category: 'Store', displayName:'Order', name: 'order', data: orderData },
    ],
    // 'Post': []
}

export default defaultApiData;