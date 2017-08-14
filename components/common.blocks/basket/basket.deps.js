({
    shouldDeps: [
        {
          block: 'icon',
          mods: {
            symbol: '*'
          }
        },
        {
          block: 'product',
          mods: {
            type: 'basket'
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
        'bill',
        'agreement',
        {
            block: 'button',
            mods: {
                size: 'm',
                view: 'plain',
                type: 'submit',
                theme: 'islands'
            }
        },
        {
        block: 'select',
          mods: {
              mode: 'radio',
              theme: '25menu',
              size: 'm'
          }
        }
    ]
})
