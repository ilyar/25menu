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
          item.parentGroup ?
          {
            block: 'title',
            attrs: { id: item.name || item.code},
            content: [
            !item.parentGroup && item.name,
            { block: 'subtitle',
              attrs: { id: item.name || item.code},
              content: item.name,
              mix: { block: 'items', elem: 'subtitle'}
            }
            ]
          }
          :
          {
            block: 'title',
            attrs: { id: item.name || item.code},
            content: item.name,
            mix: { block: 'items', elem: 'title' }
          },
          item.items && item.items.map( (product, index) => {
            let type;
            if (product.card_type !== null){
              switch (product.card_type) {
                case 'pizza':
                 type = 'pizza';
                  break;
                case 'susi':
                 type = 'roll';
                  break;
                case 'combo':
                 type = 'combo';
                  break;
                default:
                  type = 'usual';
              }
            }
            return {
             block: 'card',
             js: {
              index: index + 2,
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
              type: type,
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
    {
      block: 'footer',
      mix: { block: 'items', elem: 'footer' }
    }

    ]
});
