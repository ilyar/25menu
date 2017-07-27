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

block('card').mod('type', 'special').content()(function(){
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
          content: 'Скидка 15 % на все пиццы в день рождения'
        },{
          elem: 'add-info',
          content: 'Промокод #partytime'
        }
        ]
      }
      ]
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
          content: 'Борщик, с капусткой, но не красной'
        },{
          elem: 'weight',
          content: '300 мг.'
        }
        ]
      },
      {
        block: 'price',
        content: '150 Р'
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
        block: 'price',
        content: '150 Р'
      }
      ]
    }]
});

block('card').mod('type', 'info').content()(function(){
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
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, nam voluptas nihil non nesciunt laborum ut iure illum alias omnis. Porro, praesentium. Saepe facilis in tenetur hic, porro, dicta facere.'
        }]
        }
      ]
    }]
});

block('card').mod('type', 'chosen').content()(function(){
  return [
    {
      block: 'icon',
      mods: {
        symbol: 'cart'
      },
      mix: { block: 'card', elem: 'popup' }
    },
    {
      elem: 'inner',
      content: [
        {
          block: 'price',
          mods: {
            choosen: true
          },
          content:[{
            block: 'price',
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
    ]}
    ]
});
