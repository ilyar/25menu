modules.define('page-item',
['i-bem-dom', 'sidebar'],

function(provide, bemDom, Sidebar) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              this._domEvents().on('scroll', () => {
                this._showSideLogo();
              })
            }
        }
    },

    _showSideLogo: function() {
      var scrolled = this.domElem.scrollTop();
      var hiddenLogo = this.findParentBlock(Page).findChildBlock(Sidebar).findChildElem('scroll-area');
      if ( scrolled > 220 ) {
        hiddenLogo.setMod('hide', false)
      } else {
        hiddenLogo.setMod('hide', true)
      }
    }
}));

});
