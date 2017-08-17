modules.define('nav',
  ['i-bem-dom', 'BEMHTML', 'link'],
  function(provide, bemDom, BEMHTML, Link) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        this._domEvents('item').on('click', ( event ) => {
          var linkActive = event.bemTarget.findMixedBlock(Link);
          var linkClear = this.findChildBlocks(Link);
          linkClear.setMod('active', false);
          linkActive.setMod('active');
        })
      }
    }
  }
}));

});
