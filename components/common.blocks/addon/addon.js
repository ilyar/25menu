modules.define('addon',
  ['i-bem-dom', 'icon', 'page', 'button'],

function(provide, bemDom, Icon, Page, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              this.toppingAdded = this.findChildBlock(Icon);
              this.allTopping = this.findParentBlock('consist').findChildElem('add_button').findChildBlock(Icon);
              this._domEvents().on('click', () => {
                  this.toppingAdded.toggleMod('symbol', 'add', 'added');
                  this._checkToppings();
              })
            }
        }
    },

    _checkToppings: function() {
      if ( this.toppingAdded.hasMod('symbol', 'added')) {
          this.allTopping.setMod('checked');
      }
    }
}));

});



