block('addon').js()( true )


block('addon')(
  addJs()( function () {
    return {
      id: this.ctx.js
    }
  }),
  content()('')
)

block('addon').mod('type', 'product').content()(function(){
  return [
    {
      block: 'icon',
      mods: {
        symbol: 'add'
      },
      mix: { block: 'addon', elem: 'button' }
    },
    {
      elem: 'descr',
      content: this.ctx.name
    },
    {
      elem: 'weight',
      content: (this.ctx.weight * 1000) + ' г.'
    },
    {
      elem: 'price',
      content: this.ctx.price + ' ₽'
    }
  ]
});
