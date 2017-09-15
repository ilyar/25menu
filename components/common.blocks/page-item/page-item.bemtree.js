block('page-item').content()(function() {
  let content = this.data.item;
  return [
  {
    block: 'header'
  },
  {
    block: 'link',
    url: '/',
    content: 'На главную',
    mix: { block: 'page-item', elem: 'back' }
  },
  {
    block: 'product',
    mods: {
      type: 'item'
    },
    name: content[0].name,
    price: content[0].price,
    image: content[0].images,
    weight: content[0].weight,
    description: content[0].description,
    energy: content[0].energyAmount,
    fat: content[0].fatAmount,
    fiber: content[0].fiberAmount,
    hydrates: content[0].carbohydrateAmount,
    ingridients: content[0].additionalInfo,
    modifiers: content[0].modifiers,
    mix: { block: 'page-item', elem: 'good' }
  },
  {
    elem: 'controls',
    content: [
      {
        block: 'link',
        url: 'previous',
        content: 'туда',
        mix: { block: 'page-item', elem: 'previous' }
      },
      {
        block: 'link',
        url: 'next',
        content: 'сюда',
        mix: { block: 'page-item', elem: 'next' }
      }
    ]
  },
  {
    block: 'upsale'
  },
  {
    block: 'footer'
  }
  ]
});
