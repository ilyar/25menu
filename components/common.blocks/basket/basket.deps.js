({
    shouldDeps: [
        {
          block: 'icon',
          mods: {
            symbol: '*'
          }
        },
        {
          block: 'close-btn',
          mods: {
            type: 'basket'
          }
        },
        {
        block: 'input',
          mods: {
              size: 'm',
              'has-mask': true,
              'has-calendar': true,
              special: true
          }
        },
        'form',
        {
            block: 'button',
            mods: {
                size: 'm',
                view: 'plain'
            }
        }
    ]
})
