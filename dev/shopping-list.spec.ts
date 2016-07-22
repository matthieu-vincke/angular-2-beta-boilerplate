import {
    describe, 
    expect, 
    it,  
    beforeEach} from '@angular/core/testing';
import { ShoppingListComponent } from './shopping-list.component';

export function main() {
  describe('Shopping list', () => {
    let list: ShoppingListComponent;
    beforeEach(() => {
      list = new ShoppingListComponent();
    });
    it('has name', () => {
      expect(list.shoppingListItems[0].name).toEqual("Milk");
    });
  });
}