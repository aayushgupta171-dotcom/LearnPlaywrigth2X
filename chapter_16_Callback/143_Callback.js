function print() {
    console.log("Normal Function is called");
}

function placeOrder(ClipboardItem, ayushCallback) {
    console.log("Hi, You order is placed");
    ayushCallback();
}

// First Way
placeOrder("Pizza", print);

// Sencond Way Anoy
placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});

// Third Way - Arrow Fn
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});

