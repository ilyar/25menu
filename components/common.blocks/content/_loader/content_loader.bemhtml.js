block('content').mod('loader', true)(
  def()(function() {
    var ctx = this.ctx;
    typeof ctx.url === 'object' && // url could contain bemjson
    (ctx.url = this.reapply(ctx.url));
    return applyNext();
  }),
  tag()('a'),
  attrs()(function() {
    var ctx = this.ctx,
    attrs = { role : 'link' };

    if(!this.mods.disabled && ctx.url) {
      attrs.href = ctx.url;
    } else {
      attrs['aria-disabled'] = 'true';
    }

    ctx.target && (attrs.target = ctx.target);

    return attrs;
  })
);