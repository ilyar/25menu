modules.define('addon',
  ['i-bem-dom', 'icon', 'page', 'button', 'menu','product','consist'],

function(provide, bemDom, Icon, Page, Button, Menu, Product, Consist) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              this.topping = this.findChildBlock(Icon);
              // this.toppingIcon = this.findParentBlock(Page).findChildBlock(Product).findChildElem('topping').findMixedBlock(Consist).findChildElem('adder').findChildBlock(Icon);
              this._domEvents().on('click', ( event ) => {
                  // this.menuItem = event.bemTarget.findParentBlock(Menu).findChildElem('menu-item');
                  // this.allCards = this.findParentBlock(Page).findParentBlock(Menu).findChildElems('menu-item');
                  this.topping.toggleMod('symbol', 'add', 'added');
                  // this.menuItem.toggleMod('chosen')
                  // this._checkToppings();
              })
            }
        }
    },

    _checkToppings: function() {
      if ( this.menuItem.hasMod('chosen')) {
          // this.toppingIcon.setMod('symbol', 'checked');
          console.log('first')
      } else if ( this.allCards.hasMod('chosen') ) {
          // this.toppingIcon.delMod('symbol', 'checked');
          console.log('none')
      }
    }
}));

});



              // this.allTopping = this.findParentBlock('consist').findChildElem('add_button').findChildBlock(Icon);
