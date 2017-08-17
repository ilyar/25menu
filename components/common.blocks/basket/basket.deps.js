[{
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
            type: '*'
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
              special: true,
              theme: '25menu'
          }
        },
        'form',
        {
          block: 'form-field',
          mods: {
              theme: '25menu'
          }
        },
        'bill',
        'agreement',
        {
            block: 'button',
            mods: {
                size: 'm',
                view: 'plain',
                type: 'submit',
                theme: '25menu'
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
},
// {
//   tech: 'js',
//   mustDeps: [
//     {
//       tech: 'bemhtml',
//       block: 'form'
//     },
//     {
//       tech: 'bemhtml',
//       block: 'image'
//     },
//     {
//       tech: 'bemhtml',
//       block: 'basket',
//       mods: {
//         type: [ 'open', 'closed' ]
//       },
//     }
//   ]
// }
]
