function delay(num) {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(num);
        },3000);
    })
}

//takes 6 seconds
const serial = async () => {
    console.log("Serial Execution started");
    const a = await delay(3);
    const b = await delay(3);
    return a + b;
}

//takes 3 seconds
const parallel = async () => {
    console.log("Parallel Execution started");
    const a = delay(3);
    const b = delay(3);
    return await a + await b;
}

// serial().then((data) => console.log(data));
parallel().then((data) => console.log(data));

//Do not confuse await for Promise.all
//In serial(), execution suspends 3 seconds for the first await, and then again another 3 seconds for the second await. The second timer is not created until the first has already fired. In parallel(),  both timers are created, and then both are awaited. This leads it to resolve in 3 rather than 6 seconds, because the timers are running concurrently. But both of the await calls are still run in series, not in parallel: this is not some automatic application of Promise.all. If you wish to await two or more promises in parallel, you must still use Promise.all.