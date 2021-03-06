block('card').content()(function() {
    return [
    {
      elem: 'header',
    },
    {
      block: 'inner',
      content: []
    }]
});

block('card').mod('type', 'special').content()(function(){
  return [
    {
      elem: 'header',
      content: [
        {
          block: 'image',
          url: 'http://lorempixel.com/196/196/cats'
        }
      ]
    },
    {
      elem: 'inner',
      content: [
        {
          block: 'description',
          content: [
            {
              elem: 'new-mark',
              content: 'NEW'
            },
            {
              elem: 'main-info',
              content: 'Скидка 15 % на все пиццы в день рождения'
            },
            {
              elem: 'add-info',
              content: 'Промокод #partytime'
            }
          ]
        }
      ]
    },
    {
      elem: 'wrapper'
    }]
});

block('card').mod('type', 'usual').content()(function(){
  return [ {
      elem: 'header',
      content: [
        {
          block: 'image',
          url: 'http://lorempixel.com/196/196/cats'
        }
      ]
    },
    {
      elem: 'inner',
      content: [ {
        block: 'description',
        content: [
        {
          elem: 'main-info',
          content: [
          'Борщик, с капусткой, но не красной',
          {
          elem: 'weight',
          content: '300 мг.',
          tag: 'span'
          }
          ]
        }]
      },
      {
        block: 'price',
        mods: {
          type: 'card'
        },
        mix: { block: 'card', elem: 'price_block'}
      }
      ]
    }]
});

block('card').mod('type', 'pizza').content()(function(){
  return [ {
      elem: 'header',
      content: [
        {
          block: 'image',
          url: 'http://lorempixel.com/196/196/cats'
        }
      ]
    },
    {
      elem: 'inner',
      content: [ {
        block: 'description',
        content: [
        {
          elem: 'main-info',
          content: [
          'Борщик, с капусткой, но не красной',
          {
          elem: 'weight',
          content: '300 мг.',
          tag: 'span'
          }
          ]
        }]
      },
      {
        block: 'selector',
        mods: {
          pizza: 'size'
        },
        tag: 'select',
        content: [
        {
          elem: 'option',
          tag: 'option',
          attrs: {
            value: 1
          },
          content: 'Ø 25 см'
        },
        {
          elem: 'option',
          tag: 'option',
          attrs: {
            value: 2
          },
          content: 'Ø 35 см'
        }
        ]
      },
      {
        block: 'selector',
        mods: {
          pizza: 'base'
        },
        tag: 'select',
        content: [
        {
          elem: 'option',
          tag: 'option',
          attrs: {
            value: 1
          },
          content: 'На тонком тесте'
        },
        {
          elem: 'option',
          tag: 'option',
          attrs: {
            value: 2
          },
          content: 'На толстом тесте'
        }
        ]
      },
      {
        block: 'price',
        mods: {
          type: 'card'
        },
        mix: { block: 'card', elem: 'price_block'},
        content: '150 Р'
      }
      ]
    }]
});

block('card').mod('type', 'info').content()(function(){
  return [
    {
      elem: 'inner',
      content: [ {
        block: 'description',
        content: [
        {
          elem: 'main-info',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, nam voluptas nihil non nesciunt laborum ut iure illum alias omnis. Porro, praesentium. Saepe facilis in tenetur hic, porro, dicta facere.'
        }]
        }
      ]
    },
    {
      elem: 'header',
      content: [
        {
          block: 'image',
          url: 'http://lorempixel.com/196/196/cats'
        }
      ]
    }
    ]
});

block('card').mod('type', 'roll').content()(function(){
  return [ {
      elem: 'header',
      content: [
        {
          block: 'image',
          url: 'http://lorempixel.com/196/196/cats'
        }
      ]
    },
    {
      elem: 'inner',
      content: [ {
        block: 'description',
        content: [
        {
          elem: 'main-info',
          content: [
          'Борщик, с капусткой, но не красной',
          {
          elem: 'weight',
          content: '300 мг.',
          tag: 'span'
          }
          ]
        },{
          elem: 'amount',
          content: '8 штук'
        }]
      },
      {
        block: 'price',
        mods: {
          type: 'card'
        },
        mix: { block: 'card', elem: 'price_block'},
        content: '150 Р'
      }
      ]
    }]
});

block('card').mod('type', 'small').content()(function(){
  return [
    {
      elem: 'header',
      content: [
        {
          block: 'image',
          url: 'http://lorempixel.com/112/112/cats'
        }
      ]
    },
    {
      elem: 'inner',
      content: [
      {
        block: 'description',
        content: [
        {
          elem: 'main-info',
          content: 'Пицца с овощами и грибами'
        },
        {
          elem: 'topping',
          content: 'С добавками, 150 Р'
        },
        {
          elem: 'type',
          content: 'Ø 35 см на толстом тесте'
        },
        {
          elem: 'amount',
          content: '8 штук'
        }
        ]
      },
      {
        block: 'price',
        mods: {
          type: 'card'
        },
        mix: { block: 'card', elem: 'price_block'},
        content: '150 Р'
      }
      ]
    }]
});

