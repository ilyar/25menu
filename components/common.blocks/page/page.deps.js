({
  shouldDeps: [
    {
      block: 'page',
      mods: {
        theme: '25menu'
      }
    },
    {
      mods: { view: ['404'] }
    },
    {
      block: 'basket',
      mods: {
        type: '*'
      }
    },
    'sidebar',
    'body',
    'footer',
    'items',
    {
    block: 'product',
    mods: {
      type: 'item'
    }
    }
  ]
})
