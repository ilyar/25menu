({
    shouldDeps: [
        'title',
        'link',
        'image',
        {
          block: 'close-btn',
          mods: {
            type: 'product'
          }
        },
        {
          block: 'icon',
          mods: {
            symbol: '*',
            revert: true
          }
        },
        {
          block: 'price',
          mods: {
            type: '*'
          }
        },
        {
          block: 'consist',
          mods: {
            type: '*'
          }
        },
        {
          block: 'value',
          mods: {
            type: 'product'
          }
        },
        {
          block: 'dropdown',
          mods: {
              switcher: 'button',
              theme: '25menu',
              size: 's'
          }
        },
        {
          block: 'button',
          mods: {
              theme: '25menu'
        }
    }
    ]
})
