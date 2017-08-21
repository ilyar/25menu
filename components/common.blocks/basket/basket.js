modules.define('basket',
  ['i-bem-dom', 'BEMHTML'],
  function(provide, bemDom, BEMHTML) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
      js: {
        inited: function() {
          this._domEvents().on('click', this._show);
          this._domEvents('close').on('click', this._hide)
        }
      },

      type: {
        opened: function() {
          this._domEvents().un('click', this._show);
        },

        closed: function() {
          this._domEvents().on('click', this._show);
        }
      }
    },

    _show: function() {
      if ( this.hasMod('type', 'closed') ) {
        this.setMod('type', 'opened');
      }

    },

    _hide: function() {
      this.setMod('closingAnimation');
      this.setMod('type', 'closed');
    }
}));

});



