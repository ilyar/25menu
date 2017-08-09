modules.define('input',
    ['jquery__formatter'],
    function(provide, $, Input) {

provide(Input.declMod({ modName: 'has-mask' }, {

    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                $(this._elem('control')).formatter({
                    pattern: this.params.mask
                });
            }
        }
    }

}));

});
