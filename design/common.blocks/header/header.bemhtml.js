block('header')(
    js()(false),
    content()(function() {
        return this.ctx.content
    })
);