modules.define('consist',
  ['i-bem-dom', 'BEMHTML', 'icon'],
  function(provide, bemDom, BEMHTML, Icon) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {

        }
      }
    }


  }));

});
