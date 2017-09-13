modules.define('addon',
  ['i-bem-dom', 'icon', 'page', 'button', 'menu','product'],

function(provide, bemDom, Icon, Page, Button, Menu, Product) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              this.topping = this.findChildBlock(Icon);
              this._domEvents().on('click', () => {
                  this.topping.toggleMod('symbol', 'add', 'added');

              })
            }
        }
    }
}));

});


