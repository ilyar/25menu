modules.define('basket',
  ['i-bem-dom', 'BEMHTML'],
  function(provide, bemDom, BEMHTML) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        this._domEvents('close').on('click', () => {
          this.setMod('type','closed');
        })
      }
    },
    type:{
      // open: function() {
      //   let _this = this;
      //   this._domEvents('close').on('click', function() {
      //     console.log('22')
      //     _this.setMod('type','closed');
      //   })
      // },
      closed: function() {
        this._domEvents().on('click', function() {
          this.setMod('type','open');
        })
      }
    }
  }
}));

});
