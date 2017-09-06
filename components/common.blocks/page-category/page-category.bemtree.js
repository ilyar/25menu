block('page-category').content()(function() {
  return [
  {
    block: 'page-category',
    elem: 'inner',
    content: [
    {
      block: 'header'
    },
    // this.data.products.map(( item, index ) => {
    //   return [
    //     { elem: 'card-group',
    //       content: [
    //       {
    //         block: 'title',
    //         attrs: { id: item.name || item.code},
    //         content: item.name,
    //         mix: { block: 'items', elem: 'title' }
    //       },
    //       item.products && item.products.map( product => {
    //         return {
    //          block: 'card',
    //          mix: { block: 'items', elem: 'card' },
    //          mods: {
    //           type: 'usual'
    //          },
    //           name: product.name,
    //           price: product.price,
    //           image: product.images[0],
    //           weight: product.weight
    //         }
    //       } )
    //       ]
    //     }
    // ]}),

    { elem: 'card-group',
      content: [
        {
          block: 'title',
          content: 'Cалаты',
          mix: { block: 'items', elem: 'title' }
        },
        {
          block: 'items',
          elem: 'card',
          content: [
            {
              block: 'card',
              mods: {
                type: 'info'
              }
            }
          ]
        },
        {
          block: 'items',
          elem: 'card',
          content: [
            {
              block: 'card',
              mods: {
                type: 'pizza'
              }
            }
          ]
        },
        {
          block: 'items',
          elem: 'card',
          content: [
            {
              block: 'card',
              mods: {
                type: 'special'
              }
            }
          ]
        },
        {
          block: 'items',
          elem: 'card',
          content: [
            {
              block: 'card',
              mods: {
                type: 'roll'
              }
            }
          ]
        }
      ]
    },


    {
      block: 'footer'
    }
    ]
  }
  ]
});
