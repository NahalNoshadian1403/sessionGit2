let orders = {
    book: { name: "Book", model: "A1", price: 20, count: 2 },
    pen: { name: "Pen", model: "B2", price: 5, count: 5 },
    laptop: { name: "Laptop", model: "C3", price: 1000, count: 1 }
};


let total = 0;
for (let key in orders) {
    orders[key].count += 10;
    total += orders[key].price * orders[key].count;
}

console.log("مبلغ کل خرید:", total);
