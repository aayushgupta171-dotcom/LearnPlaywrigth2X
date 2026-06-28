class ICICI {
    #balance; // # means private in JS, In Typescript - private

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let ayush = new ICICI("Ayush", 1000);
console.log(ayush.getBalance());
ayush.setBalance(10000000, false);
console.log(ayush.getBalance());

let ayush_father = new ICICI("Ayush", 2000);
console.log(ayush_father.getBalance());
ayush_father.setBalance(300000, true);
console.log(ayush_father.getBalance());