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
      block: 'sidebar',
      mods: {
        order: true
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
