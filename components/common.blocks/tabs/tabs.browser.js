/**
 * @module tabs
 */

modules.define('tabs',
  ['i-bem-dom', 'radio-group', 'jquery'],
  function( provide, bemDom, radioGroup, $ ) {

/**
 * @exports
 * @class tabs
 * @bem
 */
 provide(bemDom.declBlock(this.name,  /** @lends tabs.prototype */{
  onSetMod: {
    js: {
      inited: function() {
        var theTabs = this;

        this._boxList = {};
        this._radioGroup = this.findChildElem('tabs-group').findMixedBlock( radioGroup );

        this._elems( 'box' ).forEach( function ( box ) {
          theTabs._boxList[ box.params.id ] = box;
        });
        this._onRadioGroupChange();

        this._events( this._radioGroup ).on( 'change', this._onRadioGroupChange );
      }
    }
  },

  _onRadioGroupChange: function() {
    var newVal = this._radioGroup.getVal();

    this._elems( 'box' ).delMod( 'selected' );
    this._boxList[ newVal ].setMod( 'selected' );
  },

  /**
   * Sets active tab by index number
   * @param {Number} index
   * @returns {tabs} this
   */
  changeTab: function( index ) {
      this.findChildBlock( radioGroup ).setVal( index );
      return this;
    }
  },  /** @lends tabs */{
    lazyInit: false
  }));

});
