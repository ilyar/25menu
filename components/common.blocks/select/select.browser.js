modules.define('select',
  ['i-bem-dom', 'BEMHTML'],
  function(provide, bemDom, BEMHTML, Select) {
/**
 * @exports
 * @class select
 * @augments control
 * @bem
 */
provide(bemDom.declBlock(Select, {
  setOptions: function( options ) {
    var isDisabled = this.hasMod( 'disabled' );
    var theme = this.getMod( 'theme' );
    var optionToMenuItem = function( option ) {
      var res = {
        block: 'menu',
        elem: 'item',
        elemMods: {
          disabled: isDisabled || option.disabled,
          checked: option.checked,
          theme: theme
        },
        val: option.val,
        js: { checkedText: option.checkedText },
        content: option.text
      };

      if (option.icon) {
        res.js.text = option.text;
        res.content = [
          option.icon,
          res.content
        ];
      }

      return res;
    };

    this._menu.setContent(BEMHTML.apply( options.map( function( optionOrGroup ) {
      return optionOrGroup.group
        ? {
            block: 'menu',
            elem: 'group',
            title: optionOrGroup.title,
            content: optionOrGroup.group.map( optionToMenuItem )
          }
        : optionToMenuItem( optionOrGroup );
    })));

  },

  /**
   * Emit change event
   * @private
   */
  _onMenuChange : function() {
    this.__base.apply(this, arguments);
    this.domElem.trigger('change');
  }

}));

});
