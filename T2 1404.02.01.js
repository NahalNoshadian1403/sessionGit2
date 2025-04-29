let n = 10; // تعداد اعضای دنباله
let fib = [0, 1];

for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}

console.log(fib); // خروجی: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]