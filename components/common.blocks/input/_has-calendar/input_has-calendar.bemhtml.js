block('input')(

    mod('readonly', true).elem('control').attrs()(function() {
        return this.extend(applyNext(), { readonly: 'readonly' });
    }),

    mod('has-calendar', true)(

        def()(function() {
            var ctx = this.ctx,
                mods = ctx.mods,
                calendarParams = {
                    earlierLimit: ctx.earlierLimit,
                    laterLimit: ctx.laterLimit,
                    weekdays: ctx.weekdays,
                    months: ctx.months,
                    offDays: ctx.offDays
                };

            // mods['has-mask'] = true;
            ctx.js = ctx.js || {};
            ctx.js.mask = '{{99}}.{{99}}.{{9999}}';
            ctx.js.calendarParams = calendarParams;
            ctx.js.popupDirections = ctx.directions;

            return applyNext({
                _inputMods: mods,
                _calendarParams: calendarParams,
                _popupDirections: ctx.directions
            });
        })
    )
);
