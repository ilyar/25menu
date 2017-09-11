block('slider').content()(function() {

    return [
    {
      elem: 'control',
      content:[
      {
        elem: 'left',
      },
      {
        elem: 'right'
      }
      ]
    },
    {
      elem: 'content',
      content: this.data.banner.map(( item, index ) => {
      let color;
      let type;
      if (item.template !== null){
        let banner = [];
        banner = item.template.split("_");

        switch (banner[0]) {
          case 'blur':
           type = 'gradient';
            break;
          case 'full':
           type = 'full';
            break;
          default:
            break;
        }

        switch (banner[1]) {
          case 'black': // &
            color = 'black';
            break;
          case 'pink': // <
            color = 'pink';
            break;
          case 'gray': // >
            color = 'gray';
            break;
          default:
            color = 'black';
        }
      }

        return {
          elem: 'item',
          content: [
            {
              block: 'card',
              mods: {
                type: 'special',
                color: color,
                full: type == 'full',
                gradient: type == 'gradient'
              },
              title: item.name,
              image: item.img,
              text: item.text
            }
          ]
        }
      })
    },
    {
      block: 'pagination',
      mix: { block: 'slider', elem: 'pagination' }
    }
  ]
});


block('slider').mod('type', 'order').content()(function(){
    this.ctx.items = [
      { title: 'hello 1' },
      { title: 'hello 2' },
      { title: 'hello 3' },
      { title: 'hello 4' },
      { title: 'hello 5' },
      { title: 'hello 6' },
      { title: 'hello 7' }
    ]

    return [
    {
      elem: 'control',
      content:[
      {
        elem: 'left',
      },
      {
        elem: 'right'
      },
      ]
    },
    {
      elem: 'content',
      content: this.ctx.items.map( item => {
        return {
          elem: 'item',
          content: [
            {
              block: 'card',
              mods: {
                type: 'small'
              },
              mix: { block: 'slider', elem: 'order-item' },
              content: item
            }
          ]
        }
      })
    }
  ]
});
