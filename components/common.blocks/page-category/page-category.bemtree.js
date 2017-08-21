block('page-category').content()(function() {
  return [
  {
    block: 'page-category',
    elem: 'inner',
    content: [
    {
      block: 'header'
    },
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
