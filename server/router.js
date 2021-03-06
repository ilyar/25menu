const render = require('./render').render,
  axios = require('axios');

const client = axios.create({
  baseURL: 'http://delivery.breadhead.ru'
});

const request = options => {
  const onSuccess = response => {
    return response.data;
  }

  const onError = error => {
    console.error('Request Failed:', error.config);

    if (error.response) {
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return client(options)
    .then(onSuccess)
    .catch(onError);
}

const isCallerMobile = req => {
  let ua = req.headers['user-agent'].toLowerCase(),
      isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));

  return !!isMobile;
}

module.exports = function( app ) {

  let menu = [];
  request({url: '/api/catalog'}).then(request => {
    menu = request;
  })

  // let basket = [];
  // request({url: '/api/basket'}).then(request => {
  //   basket = request;
  // })

  app.get( '/', function( req, res ) {
    render( req, res, {
      page: 'index',
      bundle: isCallerMobile( req ) ? 'touch' : 'desktop',
      menu: menu,
      items: [
        {
          title: 'Title',
          price: 500,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores amet, pariatur obcaecati vel perspiciatis aspernatur nam, voluptatum, nemo eveniet maiores, velit quidem natus beatae? Ut eos reiciendis tenetur, fugiat minima.'
        }
      ]
    } )
  });

  app.get( '/about/', function( req, res ) {
    request( { url: 'users/bem' } )
      .then(response => render( req, res, { page: 'about', api: response } ) )
      .catch(() => render(req, res, { page: 'index', view: '404' }) );
  });

  app.get('/cabinet', function(req, res) {
  render(req, res, {
    page: 'cabinet',
    bundle: isCallerMobile( req ) ? 'touch' : 'desktop'
    })
  });

  app.get('/order/', function(req, res) {
  render(req, res, {
    page: 'order',
    bundle: isCallerMobile( req ) ? 'touch' : 'desktop',
    title: req.params.order
    })
  });

  app.get('/i/:category', function(req, res) {
  render(req, res, {
    page: 'category',
    bundle: isCallerMobile( req ) ? 'touch' : 'desktop',
    title: req.params.category
    })
  });

  app.get('/i/:category/:item', function(req, res) {
  render(req, res, {
    page: 'item',
    bundle: isCallerMobile( req ) ? 'touch' : 'desktop',
    title: req.params.item,
    })
  });

}

