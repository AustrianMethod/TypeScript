import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    sum(): number { 
        return this._items.reduce( ( sum, curr ) => { 
            return sum + curr.price;
        }, 0)
    }

    sumDisc(discount: number): number { 
        return this._items.reduce( ( sum, curr ) => { 
            return sum + curr.price * (1 - discount);
        }, 0)
    }
    
    delObj(id: number): void {
        const elById = this._items.findIndex(elem => elem.id === id);
        this._items.splice(elById, 1);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}

