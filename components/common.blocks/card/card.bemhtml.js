block('card').content()(function() {
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
      block: 'inner',
      content: []
    }]
});

block('card').mod('special', true).content()(function(){
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
      block: 'inner',
      content: [ {
        block: 'description',
        content: [
        {
          elem: 'main-info',
          content: 'Пицца, вкусне, сочне, сладке'
        },{
          elem: 'add-info',
          content: 'до 32 августа!'
        }
        ]
      }
      ]
    }]
});

block('card').mod('usual', true).content()(function(){
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
      block: 'inner',
      content: [ {
        block: 'description',
        content: [
        {
          elem: 'main-info',
          content: 'Борщик, с капусткой, но не красной'
        },{
          elem: 'weight',
          content: '300 мг.'
        }
        ]
      },
      {
        block: 'button',
        content: '150 Р'
      }
      ]
    }]
});

block('card').mod('pizza', true).content()(function(){
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
      block: 'inner',
      content: [ {
        block: 'description',
        content: [
        {
          elem: 'main-info',
          content: 'Борщик, с капусткой, но не красной'
        },{
          elem: 'weight',
          content: '300 мг.'
        }
        ]
      },
      {
        block: 'select',
        mods: {
          pizza: 'size'
        }
      },
      {
        block: 'select',
        mods: {
          pizza: 'base'
        }
      },
      {
        block: 'button',
        content: '150 Р'
      }
      ]
    }]
});

block('card').mod('info', true).content()(function(){
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
      block: 'inner',
      content: [ {
        block: 'description',
        content: 'Готовим супер-пупер вкусности'
      },
      {
        block: 'button',
        content: 'Узнать больше'
      }
      ]
    }]
});


block('card').mod('chosen', true).content()(function(){
  return [
    {
      block: 'icon',
      mods: {
        symbol: 'cart'
      },
      mix: { block: 'card', elem: 'popup' }
    },
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
      block: 'inner',
      content: [ {
        block: 'description',
        content: 'Супер салат'
      },
      {
        block: 'button',
        mods: {
          choosen: true
        },
        content:[{
          block: 'button',
          mods: {
           counter: true
          },
          content: [
          {
            elem: 'minus',
            content: '-'
          },
          {
            elem: 'quantity',
            content: '25'
          },
          {
            elem: 'plus',
            content: '+'
          },
          ]
        }]
      },
      ]
    }]
});
