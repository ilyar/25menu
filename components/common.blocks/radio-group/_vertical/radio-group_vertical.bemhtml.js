block('radio-group').mod('vertical', true)(
    tag()('span'),

    attrs()({ role : 'radiogroup' }),

    js()(true),

    mix()([{ block : 'control-group' }]),

    content()(function() {
        var mods = this.mods,
            ctx = this.ctx,
            isValDef = typeof ctx.val !== 'undefined';

        return (ctx.options || []).map(function(option, i) {
            return [
                !!i && !mods.type && { tag : 'br' },
                {
                    block : 'radio',
                    mods : {
                        type : mods.type,
                        mode : mods.mode,
                        'vertical': true,
                        checked : isValDef && ctx.val === option.val,
                        disabled : option.disabled || mods.disabled,
                        size : mods.size,
                        theme : mods.theme,
                    },
                    name : ctx.name,
                    val : option.val,
                    text : option.text,
                    title : option.title,
                    icon : option.icon
                }
            ];
        });
    })
);
