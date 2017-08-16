/**
 * @module form
 */
 modules.define('form', ['jquery'], function(provide, $, Form) {
/**
 * form block
 */
 provide(Form.declMod({ modName: 'has-validation', modVal: true }, /** @lends form.prototype */{

  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply(this, arguments);
        this._action = this._getAction();
        this._method = this._getMethod();
        this._domEvents().on( 'submit', function( e, val ) {
          this.validate()
            .then( function ( fieldsStatuses ) {
              if ( this.checkFields( fieldsStatuses ) ) {
                this.getMessage().hide();
                var form = this;
                $.ajax({
                  url: form._action,
                  type: form._method,
                  dataType: 'json',
                  cache: false,
                  data: form.getVal(),
                  success: function( response ) {
                    for ( fieldId in response ) {
                      if ( response.hasOwnProperty( fieldId ) ) {
                        invalidField = form.getFieldByName( fieldId );
                        invalidField.setStatus('invalid');
                        invalidField.setValidationMessage( 'server', response[ fieldId ].join('') );
                      } else {
                        console.log( 'have not error. Submit!' );
                      }
                    }
                    form.setMessageVal( JSON.stringify( response ) );
                    form.getMessage().show();
                    form.getInvalidFields()
                      .then(function (invalidFields) {
                        invalidFields[0].getControl().setMod('focused');
                      });
                  }
                });
              } else {
                this.setMessageVal(this._concatMessages(fieldsStatuses));
                this.getMessage().show();
                this.getInvalidFields()
                  .then(function (invalidFields) {
                    invalidFields[0].getControl().setMod('focused');
                  });
              }
            }.bind( this ) );
        });
      }
    }
  },

  _getAction : function() {
    return this.domElem.attr( 'action' ) || window.location.href;
  },

  _setAction : function( url ) {
    this.domElem.attr( 'action', url );
  },

  _getMethod : function() {
    return ( this.domElem.attr( 'method' ) || 'post' ).toUpperCase();
  },

  _setMethod : function( method ) {
    var newMethod = [ 'post', 'get', 'put', 'delete' ].some( function( available ) {
      available === method.toLowerCase();
    } ) ? method.toUpperCase() : 'POST';
    this.domElem.attr( 'method', newMethod );
  },

  _concatMessages : function(fieldsStatuses) {
    var messages = [];
    for(var i = 0, l = fieldsStatuses.length; i < l; i++) {
      if(fieldsStatuses[i] !== null) {
        messages.push([
          fieldsStatuses[i]['field'],
          ': ',
          fieldsStatuses[i]['message']
          ].join(''));
      }
    }
    return messages.join('<br>');
  }

}));

});