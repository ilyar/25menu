modules.define('consist',
  ['i-bem-dom', 'BEMHTML', 'addon'],
  function(provide, bemDom, BEMHTML, Addon ) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        // this._domEvents('adder').on('click', () => {
          // console.log('hello')
          // this.setMod('type','closed');
        // })
      }
    }
  }

}));

});
