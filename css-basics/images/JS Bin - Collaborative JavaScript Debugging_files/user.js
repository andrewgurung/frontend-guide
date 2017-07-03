var jsbin = {
  'root': 'https://jsbin.com',
  'shareRoot': 'https://jsbin.com',
  'runner': 'https://null.jsbin.com/runner',
  'static': 'https://static.jsbin.com',
  'version': '4.0.4',
  user: {"avatar":"https://www.gravatar.com/avatar/b43106594e82c88738fa093b124c52e0?s=29&d=https%3A%2F%2Fjsbin-gravatar.herokuapp.com%2Fandrewgurung.png","name":"andrewgurung","bincount":41,"created":"2014-02-08T16:50:53.000Z","pro":0,"settings":{"panels":["html","css","live"],"editor":{},"font":14,"addons":{"closebrackets":true,"highlight":false,"vim":false,"emacs":false,"trailingspace":false,"fold":false,"sublime":false,"tern":false,"activeline":true,"matchbrackets":false},"includejs":false,"gui":{"toppanel":false}},"large_avatar":"https://www.gravatar.com/avatar/b43106594e82c88738fa093b124c52e0?s=120&d=blank"},
};

(function () {
  if (jsbin.user && jsbin.user.name) {
    if (window.FS) {
      FS.identify(jsbin.user.name, {
        displayName: jsbin.user.name,
        reviewsWritten_int: 14,
      });
    }
    $('.loggedout').hide();
    var menu = $('.loggedin').show();
    var html = $('#profile-template').text();
    var $html = $(html.replace(/({.*?})/g, function (all, match) {
      var key = match.slice(1, -1).trim(); // ditch the wrappers
      return jsbin.user[key] || '';
    }));
    if (jsbin.user.pro) {
      document.documentElement.className += ' pro';
      $html.find('.gopro').remove();
    } else {
      $html.find('.pro').remove();
    }
    $('#control .loggedin').append($html);
  } else {
    $('.loggedin').hide();
    $('.loggedout').show();
  }
})();
