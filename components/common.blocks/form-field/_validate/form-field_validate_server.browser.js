/**
 * @module form-field
 */
 modules.define('form-field',
  ['vow'],
  function(provide, Vow, FormField) {
/**
 * Card form-field validation
 * @exports
 * @class form-field
 * @bem
 */
 FormField.declMod({ modName : 'validate', modVal : 'server' }, /** @lends form-field.prototype */{

  onSetMod : {
    'js' : {
      inited : function() {
        this.__base.apply(this, arguments);
        this.getValidator().push(this._validateServer(this));
      }
    }
  },

  _validateServer : function ( field ) {
    return function (val) {
      console.log( field.getValidationMessage('server') );
      return field.getValidationMessage('server') ? {
        field : field.getName() || field.getId(),
        message : field.getValidationMessage('server')
      } : false;
    }
  }

});

 provide(FormField);

});
