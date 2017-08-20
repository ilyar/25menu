modules.define('addon',
  ['i-bem-dom', 'icon'],

function(provide, bemDom, Icon) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              var topping = this.findChildBlock(Icon);
              this._domEvents().on('click', () => {
              topping.setMod('added');
              })
            }
        }
    }
}));

});
