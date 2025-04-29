for (let i = 3; i <= 5; i++) {
    console.log(`جدول ضرب عدد ${i}`);
    for (let j = 1; j <= 10; j++) {
        if (j % 3 === 0) continue;
        console.log(`${i} × ${j} = ${i * j}`);
    }
    console.log('---------------------');
}
