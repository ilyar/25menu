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
          block: 'img',
          attrs: {
            style: 'background-image: url("' + '//delivery.breadhead.ru' + this.ctx.image + '252x252' + '");'
          }
          // url: '//delivery.breadhead.ru' + this.ctx.image + '252x252'
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
              content: this.ctx.title
            },
            {
              elem: 'add-info',
              content: this.ctx.text
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
  return [
    {
      elem: 'header',
      content: [
        {
          block: 'img',
          attrs: {
            style: 'background-image: url("' + '//delivery.breadhead.ru' + this.ctx.image + '252x252' + '");'
          }
          // url: '//delivery.breadhead.ru' + this.ctx.image + '252x252'
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
          this.ctx.name,
          {
          elem: 'weight',
          content: (this.ctx.weight*1000) + ' г.',
          tag: 'span'
          },
          this.ctx.ingridients && {
            elem: 'ingridients',
            content: this.ctx.ingridients
          }
          ]
        }]
      },
      {
        block: 'price',
        mods: {
          type: 'card'
        },
        mix: { block: 'card', elem: 'price_block'},
        price: this.ctx.price
      }
      ]
    }]
});

block('card').mod('type', 'pizza').content()(function(){
  return [
    {
      elem: 'header',
      content: [
        {
          block: 'img',
          attrs: {
            style: 'background-image: url("' + '//delivery.breadhead.ru' + this.ctx.image + '252x252' + '");'
          }
          // url: '//delivery.breadhead.ru' + this.ctx.image + '252x252'
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
          this.ctx.name,
          {
          elem: 'weight',
          content: (this.ctx.weight*1000) + ' г.',
          tag: 'span'
          }
          ]
        },
        this.ctx.ingridients && {
          elem: 'ingridients',
          content: this.ctx.ingridients
        }]
      },
      {
        elem: 'options',
        content: [
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
          }
      ]},
      {
        block: 'price',
        mods: {
          type: 'card'
        },
        mix: { block: 'card', elem: 'price_block'},
        price: this.ctx.price
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
          block: 'img',
          attrs: {
            style: 'background-image: url("' + '//delivery.breadhead.ru' + this.ctx.image + '252x252' + '");'
          }
          // url: '//delivery.breadhead.ru' + this.ctx.image + '252x252'
        }
      ]
    }
    ]
});

block('card').mod('type', 'roll').content()(function(){
  return [
    {
      elem: 'header',
      content: [
        {
          block: 'img',
          attrs: {
            style: 'background-image: url("' + '//delivery.breadhead.ru' + this.ctx.image + '252x252' + '");'
          }
          // url: '//delivery.breadhead.ru' + this.ctx.image + '252x252'
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
          content: [
          this.ctx.name,
          {
          elem: 'weight',
          content: (this.ctx.weight*1000) + ' г.',
          tag: 'span'
          },
          this.ctx.ingridients && {
            elem: 'ingridients',
            content: this.ctx.ingridients
          }]
        }]
      },
      {
        elem: 'options',
        content: [
        {
          block: 'selector',
          mix: { block: 'description', elem: 'amount' },
          mods: {
            amount: true
          },
          tag: 'select',
          content: [
          {
            elem: 'option',
            tag: 'option',
            attrs: {
              value: 1
            },
            content: '4 шт.'
          },
          {
            elem: 'option',
            tag: 'option',
            attrs: {
              value: 2
            },
            content: '8 шт.'
          }
          ]
        },
        ]
      },
      {
        block: 'price',
        mods: {
          type: 'card'
        },
        mix: { block: 'card', elem: 'price_block'},
        price: this.ctx.price
      }
      ]
    }]
});

block('card').mod('type', 'combo').content()(function(){
  return [
    {
      elem: 'header',
      content: [
        {
          block: 'img',
          attrs: {
            style: 'background-image: url("' + '//delivery.breadhead.ru' + this.ctx.image + '252x252' + '");'
          }
          // url: '//delivery.breadhead.ru' + this.ctx.image + '252x252'
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
          this.ctx.name,
          {
          elem: 'weight',
          content: (this.ctx.weight*1000) + ' г.',
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
        mix: { block: 'card', elem: 'price_block'},
        price: this.ctx.price
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
          block: 'img',
          attrs: {
            style: 'background-image: url("' + '//delivery.breadhead.ru' + this.ctx.image + '252x252' + '");'
          }
          // url: '//delivery.breadhead.ru' + this.ctx.image + '252x252'
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


