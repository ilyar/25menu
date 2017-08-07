block('page-item').content()(function() {
  return [
  {
    block: 'header'
  },
  {
    block: 'link',
    url: '/',
    content: 'Название раздела',
    mix: { block: 'product', elem: 'back' }
  },
  {
    block: 'product',
    mods: {
      type: 'item'
    }
  },
  {
    block: 'upsale'
  },
  {
    block: 'footer'
  }
  ]
});
