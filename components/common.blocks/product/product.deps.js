({
    shouldDeps: [
        'title',
        'link',
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
            type: 'product'
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
              theme: 'islands',
              size: 's'
          }
        }
    ]
})
