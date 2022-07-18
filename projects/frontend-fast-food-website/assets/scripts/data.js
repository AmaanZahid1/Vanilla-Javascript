const menu = [
    {
        img: { src: "./assets/img/logo.png", alt: "Burgers - Chicken Zinger" },
        name: "Chicken Zinger",
        price: "1.99",
        ingredients: ["Chicken", "Cheese", "Lattice", "Burger Sauce"],
        category: "burgers",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Burgers - Chicken Patty Burger",
        },
        name: "Chicken Patty Burger",
        price: "1.20",
        ingredients: ["Chicken", "Cheese", "Lattice", "Burger Sauce"],
        category: "burgers",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Burgers - Chicken Jalapeno Burger",
        },
        name: "Chicken Jalapeno Burger",
        price: "2.50",
        ingredients: [
            "Chicken",
            "Cheese",
            "Lattice",
            "Burger Sauce",
            "Jalapeno",
        ],
        category: "burgers",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Burgers - Mighty Chicken Burger",
        },
        name: "Mighty Chicken Burger",
        price: "4.99",
        ingredients: [
            "Chicken",
            "Cheese",
            "Pickle",
            "Onion",
            "Lattice",
            "Burger Sauce",
        ],
        category: "burgers",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Burgers - Beef Patty Burger",
        },
        name: "Beef Patty Burger",
        price: "3.99",
        ingredients: [
            "Beef",
            "Pickle",
            "Onion",
            "Cheese",
            "Tomato",
            "Burger Sauce",
        ],
        category: "burgers",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Pizza - FF Special" },
        name: "FF Special",
        price: "9.99",
        ingredients: [
            "Special Sauce",
            "Onion",
            "Capsicum",
            "Mushroom",
            "Olives",
            "Chicken",
            "Cheese",
        ],
        category: "pizza",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Pizza - Bonfire" },
        name: "Bonfire",
        price: "9.99",
        ingredients: [
            "Garlic Sauce",
            "Capsicum",
            "Tomato",
            "Onion",
            "Jalapeno",
            "Cheese",
        ],
        category: "pizza",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Pizza - Cheese Lover" },
        name: "Cheese Lover",
        price: "9.99",
        ingredients: ["Mix Sauce", "Cheese"],
        category: "pizza",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Pizza - Chicken Fajita" },
        name: "Chicken Fajita",
        price: "9.99",
        ingredients: ["Fajita Topping", "Sauce", "Cheese", "Onion"],
        category: "pizza",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Pizza - Vegetable Lover" },
        name: "Vegetable Lover",
        price: "9.99",
        ingredients: [
            "Garlic Sauce",
            "Onion",
            "Tomato",
            "Capsicum",
            "Mushroom",
            "Cheese",
            "Olives",
            "Jalapeno",
        ],
        category: "pizza",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Fried Chicken - Crispy Fried Chicken",
        },
        name: "Crispy Fried Chicken",
        price: "2.99",
        ingredients: ["Chicken", "Spices"],
        category: "fried-chicken",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Fried Chicken - Honey Chilli Wings 8pcs",
        },
        name: "Honey Chilli Wings 8pcs",
        price: "2.99",
        ingredients: ["Honey", "Chicken Wings", "Spices"],
        category: "fried-chicken",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Fried Chicken - Bufallo Wings 8pcs",
        },
        name: "Bufallo Wings 8pcs",
        price: "4.99",
        ingredients: ["Chicken Wings", "Spices", "Secret Mix"],
        category: "fried-chicken",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Fried Chicken - Nuggets 12pcs",
        },
        name: "Nuggets 12pcs",
        price: "4.99",
        ingredients: ["Chicken", "Spices"],
        category: "fried-chicken",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Fried Chicken - Hot Shots 12pcs",
        },
        name: "Hot Shots 12pcs",
        price: "3.99",
        ingredients: ["Chicken", "Spices"],
        category: "fried-chicken",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Fries - Regular Fires" },
        name: "Regular Fires",
        price: "0.99",
        ingredients: ["Potato", "Salt", "Pepper"],
        category: "fries",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Fries - Loaded Fries" },
        name: "Loaded Fries",
        price: "1.99",
        ingredients: ["Potato", "Mozrella", "Chedder", "Special Sauce"],
        category: "fries",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Fries - Fajita Fries" },
        name: "Fajita Fries",
        price: "2.99",
        ingredients: [
            "Potato",
            "Mozrella",
            "Chedder",
            "Chicken",
            "Onion",
            "Special Sauce",
            "Olives",
        ],
        category: "fries",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Shakes - Vanilla" },
        name: "Vanilla",
        price: "5.99",
        ingredients: ["Vanilla", "Milk", "Sugar", "Special Topping"],
        category: "shakes",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Shakes - Banana" },
        name: "Banana",
        price: "5.99",
        ingredients: ["Banana", "Milk", "Sugar", "Special Topping"],
        category: "shakes",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Shakes - Strawberry" },
        name: "Strawberry",
        price: "5.99",
        ingredients: ["Strawberry", "Milk", "Sugar", "Special Topping"],
        category: "shakes",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Shakes - Dates" },
        name: "Dates",
        price: "5.99",
        ingredients: ["Dates", "Milk", "Sugar", "Special Topping"],
        category: "shakes",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Shakes - Mangoe" },
        name: "Mangoe",
        price: "5.99",
        ingredients: ["Mangoe", "Milk", "Sugar", "Special Topping"],
        category: "shakes",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Shakes - Chocolate" },
        name: "Chocolate",
        price: "5.99",
        ingredients: ["Chocolate", "Milk", "Sugar", "Special Topping"],
        category: "shakes",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Shakes - Coffee" },
        name: "Coffee",
        price: "5.99",
        ingredients: ["Coffee", "Milk", "Sugar", "Special Topping"],
        category: "shakes",
    },
    {
        img: { src: "./assets/img/logo.png", alt: "Shakes - Apple" },
        name: "Apple",
        price: "5.99",
        ingredients: ["Apple", "Milk", "Sugar", "Special Topping"],
        category: "shakes",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Ice Cream - Vanilla Ice Cream",
        },
        name: "Vanilla Ice Cream",
        price: "7.99",
        ingredients: ["Milk", "Sugar", "Artificial Flavours"],
        category: "icecream",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Ice Cream - Banana Ice Cream",
        },
        name: "Banana Ice Cream",
        price: "7.99",
        ingredients: ["Milk", "Sugar", "Artificial Flavours"],
        category: "icecream",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Ice Cream - Strawberry Ice Cream",
        },
        name: "Strawberry Ice Cream",
        price: "7.99",
        ingredients: ["Milk", "Sugar", "Artificial Flavours"],
        category: "icecream",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Ice Cream - Dates Ice Cream",
        },
        name: "Dates Ice Cream",
        price: "7.99",
        ingredients: ["Milk", "Sugar", "Artificial Flavours"],
        category: "icecream",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Ice Cream - Mangoe Ice Cream",
        },
        name: "Mangoe Ice Cream",
        price: "7.99",
        ingredients: ["Milk", "Sugar", "Artificial Flavours"],
        category: "icecream",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Ice Cream - Chocolate Ice Cream",
        },
        name: "Chocolate Ice Cream",
        price: "7.99",
        ingredients: ["Milk", "Sugar", "Artificial Flavours"],
        category: "icecream",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Ice Cream - Coffee Ice Cream",
        },
        name: "Coffee Ice Cream",
        price: "7.99",
        ingredients: ["Milk", "Sugar", "Artificial Flavours"],
        category: "icecream",
    },
    {
        img: {
            src: "./assets/img/logo.png",
            alt: "Ice Cream - Apple Ice Cream",
        },
        name: "Apple Ice Cream",
        price: "7.99",
        ingredients: ["Milk", "Sugar", "Artificial Flavours"],
        category: "icecream",
    },
];
const offers = [
    {
        img: {
            src: "assets/img/offers/deal-1.png",
            alt: "Super Hour Offer# 1",
        },
        title: "Offer# 1",
        price: "5.99",
        items: [{ title: "1 x Zinger Burger" }, { title: "1 x Coke 350ml" }],
        category: "super-hour",
    },
    {
        img: {
            src: "assets/img/offers/deal-2.png",
            alt: "Midnight Treats Offer# 1",
        },
        title: "Offer# 2",
        price: "3.99",
        items: [
            { title: "1 x Zinger Burger" },
            { title: "1 x Coke 350ml" },
            { title: "1 x Small Fries" },
        ],
        category: "midnight-treats",
    },
    {
        img: {
            src: "assets/img/offers/deal-1.png",
            alt: "Family Meals Offer# 1",
        },
        title: "Offer# 3",
        price: "2.99",
        items: [{ title: "1 x Zinger Burger" }, { title: "1 x Coke 350ml" }],
        category: "family-meals",
    },
    {
        img: {
            src: "assets/img/offers/deal-2.png",
            alt: "Weekend Fun Offer# 1",
        },
        title: "Offer# 4",
        price: "3.99",
        items: [
            { title: "1 x Zinger Burger" },
            { title: "1 x Coke 350ml" },
            { title: "1 x Small Fries" },
        ],
        category: "weekend-fun",
    },
    {
        img: {
            src: "assets/img/offers/deal-1.png",
            alt: "Super Hour Offer# 2",
        },
        title: "Offer# 5",
        price: "5.99",
        items: [{ title: "1 x Zinger Burger" }, { title: "1 x Coke 350ml" }],
        category: "super-hour",
    },
    {
        img: {
            src: "assets/img/offers/deal-2.png",
            alt: "Midnight Treats Offer# 2",
        },
        title: "Offer# 6",
        price: "3.99",
        items: [
            { title: "1 x Zinger Burger" },
            { title: "1 x Coke 350ml" },
            { title: "1 x Small Fries" },
        ],
        category: "midnight-treats",
    },
    {
        img: {
            src: "assets/img/offers/deal-1.png",
            alt: "Family Meals Offer# 2",
        },
        title: "Offer# 7",
        price: "2.99",
        items: [{ title: "1 x Zinger Burger" }, { title: "1 x Coke 350ml" }],
        category: "family-meals",
    },
    {
        img: {
            src: "assets/img/offers/deal-2.png",
            alt: "Weekend Fun Offer# 2",
        },
        title: "Offer# 8",
        price: "3.99",
        items: [
            { title: "1 x Zinger Burger" },
            { title: "1 x Coke 350ml" },
            { title: "1 x Small Fries" },
        ],
        category: "weekend-fun",
    },
    {
        img: { src: "assets/img/offers/deal-1.png", alt: "Random Offer# 9" },
        title: "Offer# 9",
        price: "6.99",
        items: [{ title: "1 x Zinger Burger" }, { title: "1 x Coke 350ml" }],
        category: "random",
    },
    {
        img: { src: "assets/img/offers/deal-2.png", alt: "Random Offer# 10" },
        title: "Offer# 10",
        price: "6.99",
        items: [
            { title: "1 x Zinger Burger" },
            { title: "1 x Coke 350ml" },
            { title: "1 x Small Fries" },
        ],
        category: "random",
    },
];
