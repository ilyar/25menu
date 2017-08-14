modules.define('content',
  ['i-bem-dom', 'jquery'],
  function (provide, bemDom, $, Content) {

  provide(Content.declMod({modName: 'loader', modVal: true}, {
    onSetMod: {
      js: {
        inited: function(){
          this._url = this.params.url || this.domElem.attr('href');
          this._sendRequest( this._url );
        }
      }
    },

    _sendRequest: function( url ) {
      $.ajax({
        type: 'GET',
        dataType: 'html',
        cache: false,
        url: url,
        success: this._onSuccess.bind(this)
      });
    },

    _onSuccess: function( data ) {
      bemDom.replace( this.domElem, data );
    }

  }, {
    // lazyInit: true
  }));

});
