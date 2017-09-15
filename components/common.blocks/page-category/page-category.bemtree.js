block('page-category').content()(function() {

  let getProducts = node => {
    if ( node ) {
      return node.map( product => {
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
    } else {
      return ':('
    }
  };

  let getSubCategory = node => {
    if ( node.children && node.children.length ) {
      return node.children.map( child => {
        return {
          elem: 'subcategory',
          content: [
            {
              block: 'subtitle',
              mix: { block: 'items', elem: 'subtitle'},
              content: child.name
            },
            {
              elem: 'content',
              content: getProducts( child.products )
            }
          ]
        }
      } );
    } else {
      return node.products && getProducts( node.products )
    }
  };

  let getCategory = node => {
    return node.map( category => {
      return {
        elem: 'card-group',
        content: [
          {
            block: 'title',
            mix: { block: 'items', elem: 'title' },
            content: category.name
          },
          {
            elem: 'content',
            content: getSubCategory( category )
          }
        ]
      }
    } )
  };

  return [
  {
    block: 'page-category',
    elem: 'inner',
    content: [
    {
      block: 'header'
    },
    getCategory( this.data.category ),
    {
      block: 'footer'
    }
    ]
  }
  ]
});
