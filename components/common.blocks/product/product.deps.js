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
          block: 'icon'
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
        }
    ]
})
