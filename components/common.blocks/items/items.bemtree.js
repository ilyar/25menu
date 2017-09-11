block('items').content()(function() {
  return [
    { block: 'header'},
    { elem: 'card-group',
      elemMods: {
       special: true
      },
      content: [
      {
        block: 'logo',
        mods: {
          big: true
        }
      },
      {
        block: 'slider'
      },
      {
        elem: 'info-block',
        content: [
        {
          elem: 'info-block_card',
          mods: {
            points_info: true
          },
          content: [
          {
            block: 'icon'
          },
          {
            elem: 'info-block_card_title',
            content: 'Начисляем баллы за заказ'
          },
          {
            elem: 'info-block_card_offer',
            content: 'Копите и платите меньше'
          },
          {
            block: 'link',
            url: "#",
            content: 'Подробнее'
          }
          ]
        },
        {
          elem: 'info-block_card',
          mods: {
            sale_info: true
          },
          content: [
          {
            block: 'icon'
          },{
            elem: 'info-block_card_title',
            content: 'Расскажите о нас друзьям'
          },
          {
            elem: 'info-block_card_offer',
            content: 'И мы подарим скидку 300 Р'
          },
          {
            block: 'link',
            url: "#",
            content: 'Подробнее'
          }
          ]
        },
        ]
      }]
    },
    this.data.products.map(( item, index ) => {
      return [
        { elem: 'card-group',
          content: [
          {
            block: 'title',
            attrs: { id: item.name || item.code},
            content: item.name,
            mix: { block: 'items', elem: 'title' }
          },
          item.products && item.products.map( (product, index) => {
            return {
             block: 'card',
             js: {
              index: index + 1,
              product: {
                name: product.name,
                price: product.price,
                image: product.images[0],
                weight: product.weight,
                description: product.description,
                energy: product.energyAmount,
                fat: product.fatAmount,
                fiber: product.fiberAmount,
                hydrates: product.carbohydrateAmount,
                ingridients: product.additionalInfo,
                modifiers: product.modifiers
              }
             },
             mix: { block: 'items', elem: 'card' },
             mods: {
              type: 'usual',
              big: index == 0,
              'is-deleted': product.isDeleted == 1
             },
              name: product.name,
              price: product.price,
              image: product.images[0],
              weight: product.weight,
              description: product.description,
              energy: product.energyAmount,
              fat: product.fatAmount,
              fiber: product.fiberAmount,
              hydrates: product.carbohydrateAmount,
              ingridients: product.additionalInfo,
              modifiers: product.modifiers
            }
          } )
          ]
        }
    ]}),




    // { elem: 'card-group',
    //   content: [
    //     {
    //       block: 'title',
    //       content: 'Cалаты',
    //       mix: { block: 'items', elem: 'title' }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'usual'
    //       }
    //     },
    //     {
    //       elem: 'popup',
    //       content: [
    //       {
    //         block: 'product'
    //       }
    //       ]
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'info'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'pizza'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special',
    //         color: 'gray'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special',
    //         color: 'pink'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special',
    //         color: 'black'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special',
    //         color: 'black',
    //         gradient: true,
    //         new: true
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special',
    //         color: 'pink',
    //         gradient: true
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special',
    //         color: 'gray',
    //         gradient: true
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special',
    //         color: 'black',
    //         full: true
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special',
    //         color: 'pink',
    //         full: true
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special',
    //         color: 'gray',
    //         full: true
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'roll'
    //       }
    //     }
    //   ]
    // },
    // { elem: 'card-group',
    //   content: [
    //     {
    //       block: 'title',
    //       content: 'Пиццы',
    //       attrs: {
    //         id: 'pizza'
    //       },
    //       mix: { block: 'items', elem: 'title' }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'usual'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'info'
    //       }
    //     },
    //     {
    //       elem: 'popup',
    //       content: [
    //       {
    //         block: 'product',
    //         mods: {
    //           info: true
    //         }
    //       }
    //       ]
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'pizza'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'roll'
    //       }
    //     }
    //   ]
    // },
    // { elem: 'card-group',
    //   content: [
    //     {
    //       block: 'title',
    //       content: 'Cалаты',
    //       mix: { block: 'items', elem: 'title' }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'usual'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'info'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'pizza'
    //       }
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'special'
    //       }
    //     },
    //     {
    //       elem: 'popup',
    //       content: [
    //       {
    //         block: 'product',
    //         mods: {
    //           special: true,
    //           color: 'pink'
    //         }
    //       }
    //       ]
    //     },
    //     {
    //       block: 'card',
    //       mix: { block: 'items', elem: 'card' },
    //       mods: {
    //         type: 'roll'
    //       }
    //     },
    //   ]
    // },
    {
      block: 'footer',
      mix: { block: 'items', elem: 'footer' }
    }

    ]
});
