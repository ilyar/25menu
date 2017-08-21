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
        type: '*',
        closingAnimation: true
      }
    },
    'sidebar',
    'body',
    'footer'
  ]
})


