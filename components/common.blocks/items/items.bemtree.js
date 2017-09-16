block('items').content()(function() {
  // Функция для слайдера
  let slider = [];
  const cardPerSlide = 4;
  const banner = [
    {
      name: 'Доставка готовых блюд в Петербурге',
      text: 'В Красногвардейском, Невском и Фрунзенском районах.'
    },
    ...this.data.banner
  ];
  let cards = banner.length;
  const slidesCount = ( ( cards - ( cards % cardPerSlide ) ) / cardPerSlide ) + ( cards % cardPerSlide ? 1 : 0 );

  for (let slidePage = 0; slidePage < slidesCount; slidePage++) {
    slider[ slidePage ] = [];
    for (let cardCount = 0; cards > 0 && cardCount < cardPerSlide; cardCount++, cards--) {
      let currentCard = banner[ banner.length - cards ];
      let color;
      let form;
      if ( currentCard.hasOwnProperty('template') ){
          if (currentCard.type == 'promo' ) {
            let bannerType = [];
            bannerType = currentCard.template.split("_");
            switch (bannerType[0]) {
              case 'blur':
                form = 'full';
                break;
              case 'promo':
               form = 'gradient';
                break;
              default:
                break;
            }
            switch (bannerType[1]) {
              case 'black': // &
                color = 'black';
                break;
              case 'pink': // <
                color = 'pink';
                break;
              case 'white': // >
                color = 'gray';
                break;
              default:
                break;
            }
        } else if (currentCard.type == 'action' ) {
          let bannerType = [];
            bannerType = currentCard.template.split("_");
            switch (bannerType[0]) {
              case 'blur':
                form = 'full';
                break;
              case 'promo':
               form = 'gradient';
                break;
              default:
                break;
            }
            switch (bannerType[1]) {
              case 'black': // &
                color = 'black';
                break;
              case 'pink': // <
                color = 'pink';
                break;
              case 'white': // >
                color = 'gray';
                break;
              default:
                color = 'black';
            }
      }
      }

      let img = currentCard.product && currentCard.product.images ? currentCard.product.images : currentCard.img;

      slider[ slidePage ][ cardCount ] = currentCard.hasOwnProperty('product') ?
        {
          block: 'card',
          mix: { block: 'items', elem: 'card' },
          js: currentCard.product && {
            product: {
              name: currentCard.product.name,
              price: currentCard.product.price,
              image: currentCard.product.images,
              weight: currentCard.product.weight,
              description: currentCard.product.description,
              energy: currentCard.product.energyAmount,
              fat: currentCard.product.fatAmount,
              fiber: currentCard.product.fiberAmount,
              hydrates: currentCard.product.carbohydrateAmount,
              ingridients: currentCard.product.additionalInfo,
              modifiers: currentCard.product.modifiers,
              code: currentCard.product.code
            }
          },
          mods: {
            type: 'special',
            color: color,
            full: form == 'full',
            gradient: form == 'gradient'
          },
          title: currentCard.name,
          image: img,
          text: currentCard.text
        }
        :
        {
          block: 'card',
          mix: { block: 'items', elem: 'card' },
          mods: {
            type: 'map'
          },
          title: currentCard.name,
          text: currentCard.text
        }
    }
  }


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
        block: 'slider',
        content: slider
      },
      {
        elem: 'info-block',
        content: [
        {
          elem: 'info-block_card',
          elemMods: {
            points: true
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
          elemMods: {
            sale: true
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

      var title =
      item.parentGroup
        ? [
          {
            block: 'title',
            attrs: { id: item.site_id },
            mix: { block: 'items', elem: 'title_hide' },
            content: item.name,
          },
          {
            block: 'subtitle',
            content: item.name,
            mix: { block: 'items', elem: 'subtitle'}
          }
          ]
        :
        {
          block: 'title',
          attrs: { id: item.site_id },
          content: item.name,
          mix: { block: 'items', elem: 'title' }
        }

      return [
        { elem: 'card-group',
          content: [
          title,
          item.products.map( (product, index) => {

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
                modifiers: product.modifiers,
                code: product.code,
                type: product.card_type,
                product_id: product.id
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
              modifiers: product.modifiers,
              code: product.code,
              type: product.card_type,
              product_id: product.id
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
