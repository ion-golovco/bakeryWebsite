let items = [
    {
        name: "Biscu",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscuihgj al dente",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscu",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscuihgj al dente",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscu",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscuihgj al dente",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscu",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscuihgj al dente",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscu",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscuihgj al dente",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscu",

        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscuihgj al dente",

        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscu",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscuihgj al dente",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscu",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscuihgj al dente",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscu",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
    {
        name: "Biscuihgj al dente",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mdRgGDdkL.jpg",
    },
];
for (let i = 0; i < items.length; i++) {
    items[i].open = true;
    items[i].id = i;
    items[i].type = Math.round(Math.random());
    items[i].cost = Math.random() * 100;
    items[i].quantity = Math.ceil(Math.random() * 8)
    items[i].special = Math.round(Math.random());
}

export default items;
