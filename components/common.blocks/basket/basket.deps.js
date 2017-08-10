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
        'agreement',
        {
            block: 'button',
            mods: {
                size: 'm',
                view: 'plain',
                type: 'submit',
                theme: 'islands'
            }
        }
    ]
})
