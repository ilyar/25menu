block('page-item').content()(function() {
  return [
  {
    block: 'header'
  },
  {
    block: 'link',
    url: '/',
    content: 'Название раздела',
    mix: { block: 'page-item', elem: 'back' }
  },
  {
    block: 'product',
    mods: {
      type: 'item'
    },
    mix: { block: 'page-item', elem: 'good' }
  },
  {
    elem: 'controls',
    content: [
      {
        block: 'link',
        url: 'previous',
        content: 'туда',
        mix: { block: 'page-item', elem: 'previous' }
      },
      {
        block: 'link',
        url: 'next',
        content: 'сюда',
        mix: { block: 'page-item', elem: 'next' }
      }
    ]
  },
  {
    block: 'upsale'
  },
  {
    block: 'footer'
  }
  ]
});
