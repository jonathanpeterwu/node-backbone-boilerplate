define(function(require, exports, module) {

  var ExampleView       = require('views/example');  

  module.exports = Backbone.Router.extend({

    // initialize vars
    activeViews: {},

    initialize: function() {
      // Bind to events
      $(document).on("click","a", _.bind(this.onLinkClick, this));
    },

    ////
    //    INTERCEPT LINK CLICKS
    ////

    onLinkClick: function(e) {
      var link = $(e.currentTarget);
      var isDirect = link.hasClass('direct');
      var isSilent = link.hasClass('silent');

      // Ignore direct links
      if (!isDirect) {
        // Handle backbone links
        if (link.attr('href') !== undefined) {
          e.preventDefault();
          var url = link.attr('href').replace(/^\/|\/$/g,'');
          this.navigate(url, {
            trigger: !isSilent
          });
        }
      } 
    },

    ////
    //    SHOW VIEWS
    ////

    showView: function(divId, View, options) {
      var view;
      options = options || {};
      if (this.activeViews[divId] && !(this.activeViews[divId] instanceof View)) {
        // Close currently active view
        this.activeViews[divId].close();
        this.activeViews[divId] = null;
        
      } else if (this.activeViews[divId] && this.activeViews[divId].fetchData) {
        // Fetch view's data again
        this.activeViews[divId].fetchData();
      }
 
      // Select view to render
      if (this.activeViews[divId] instanceof View) {
        view = this.activeViews[divId];
      } else {
        view = new View(options);
        this.activeViews[divId] = view;
      }

      // Render view
      $(divId).empty().append(view.render(options).el);
      $(document).scrollTop(0);
    },

    ////
    //  ROUTES
    ////

    routes: {
      '':           'showExample',
      'example':    'showExample',
    },

    showIndex: function() {
      this.navigate('/example', { trigger: true });
    },

    showExample: function() {
      this.showView('#app', ExampleView);
    },
    
  });
  
});
