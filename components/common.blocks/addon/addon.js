modules.define('addon',
  ['i-bem-dom', 'icon'],

function(provide, bemDom, Icon) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              var toppingAdd = this.findChildBlock(Icon);
              this._domEvents().on('click', () => {
                if ( toppingAdd.hasMod('added')) {
                  toppingAdd.setMod('added', false);
                } else {
                  toppingAdd.setMod('added');
                }
              })
            }
        }
    }
}));

});
