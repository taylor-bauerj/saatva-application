import {makeAutoObservable, observable} from 'mobx';
// if i had more time i would implement a store that would keep track of current items in cart
class CartStore {
    @observable _amountOfItems = 0;

    constructor() {
        makeAutoObservable(this);
    }


    set amountOfItems(items) {
        this._amountOfItems = items;
    }
}

export default CartStore;