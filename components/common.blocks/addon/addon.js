modules.define('addon',
  ['i-bem-dom', 'icon', 'dropdown'],

function(provide, bemDom, Icon, Dropdown) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              var toppingAdded = this.findChildBlock(Icon);
              var allTopping = this.findParentBlock(Dropdown);

              this._domEvents().on('click', () => {
                this._checkToppings;
                if ( toppingAdded.hasMod('added')) {
                  toppingAdded.setMod('added', false);
                } else {
                  toppingAdded.setMod('added');
                  allTopping.findChildBlock(Icon).setMod('checked');
                }
              })
            }
        }
    },

    _checkToppings: function() {
      if ( this.findChildBlocks(Icon).hasMod('added')) {
          console.log('hello');
      }
    }
}));

});
