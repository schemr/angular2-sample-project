import { Ingredient } from '../shared/ingredient'
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  itemChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private items: Ingredient[] = [];
  constructor() { }

  getItem(index: number){
    return this.items[index];
  }
  addItems(items: Ingredient[]){
    //Array.prototype.push.apply(this.items, items);
    this.items.push(...items);
    this.itemChanged.next(this.items.slice());
  }
  editItem(index: number, newItem: Ingredient){
    this.items[index] = newItem;
    this.itemChanged.next(this.items.slice());
  }
  deleteItem(index: number){
    this.items.splice(index, 1);
    this.itemChanged.next(this.items.slice());
  }
}
