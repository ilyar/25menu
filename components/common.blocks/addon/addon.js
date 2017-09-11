modules.define('addon',
  ['i-bem-dom', 'icon', 'page', 'button', 'menu','product','consist'],

function(provide, bemDom, Icon, Page, Button, Menu, Product, Consist) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              this.topping = this.findChildBlock(Icon);
              this._domEvents().on('click', ( event ) => {
                  this.topping.toggleMod('symbol', 'add', 'added');

              })
            }
        }
    }
}));

});


