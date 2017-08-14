block('user-media')(
  match( function() { return typeof this.ctx.user !== 'undefined'; } ).replace()( function () {
    var user = this.ctx.user;
    this.ctx.mods.auth = true;
    return {
      block: 'button',
      mods: {
        view: 'plain',
        inverse: true,
        size: 'm',
        theme: '25menu'
      },
      mix: this.ctx.mix,
      icon: [
        ( user.userpic ) ? {
          block: 'icon',
          tag: 'img',
          attrs: {
            src: this.ctx.user.userpic,
            title: this.ctx.user.fullname
          },
          mods: {
            circle: true,
            size: 'xl',
            theme: '25menu'
          }
        } : ''
      ],
      text: [
        {
          block: 'text',
          mods: {
            truncate: true,
            format: 'as-is',
            theme: '25menu'
          },
          content: [
            ( user.fullname ) ? user.fullname : '',
            ( user.status || user.area ) ? '<br>' : '',
            ( user.status ) ? {
              block: 'text',
              mods: {
                special: true,
                size: 's',
                theme: '25menu'
              },
              content: user.status + '&nbsp;'
            } : '',
            ( user.area ) ? {
              block: 'text',
              mods: {
                nude: true,
                caps: true,
                size: 's',
                theme: '25menu'
              },
              content: user.area
            } : ''
          ]
        }
      ]
    };
  }),
  elem('content').content()( function () {
    return this.ctx.text || [
      {
        block: 'text',
        mods: {
          size: 'l',
          caps: true,
          theme: '25menu'
        },
        content: 'Log in'
      },
      '<br>',
      'Via a social network'
    ]
  } ),
  content()({
    elem: 'content'
  })
)
