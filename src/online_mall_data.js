export const Shops = [
    { 
        Name: "Kids Collection", 
        Owner: "Yogesh", 
        Description: "This is kids collection",
        shopId: 1
    },
    { 
        Name: "Sports Corner", 
        Owner: "Sahil", 
        Description: "This is sports store",
        shopId: 2
    } 
]

export const Products = [
    { 
        Name: "Jockey Tshirt", 
        Price: 767, 
        shops: [2,1]
    },
    { 
        Name: "Crocket ball", 
        Price: 455, 
        shops: [1]
    } 
]

export const MallUsers = [
    {
        username:'admin1',
        password:'admin123',
        name:'Admin',
        role:'admin'
    },
    {
        username:'sahil',
        password:'sahil23',
        name:'Sahil',
        role:'shopkeeper'
    },
    {
        username:'raj',
        password:'raj23',
        name:'Raj',
        role:'guest'
    }
]
