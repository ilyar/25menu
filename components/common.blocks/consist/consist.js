modules.define('consist',
  ['i-bem-dom', 'BEMHTML', 'icon', 'addon'],
  function(provide, bemDom, BEMHTML, Icon, Addon ) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
            // this._events(this.Addon).on('click', function(){
            //   console.log('hello')
            // })
        }
      }
    }


  }));

});
