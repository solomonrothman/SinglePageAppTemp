  $(document).ready(function() {
      console.log('ready');
      // var theTemplate = Handlebars.compile($('#item-list-template').html());
      // Handlebars.registerPartial("item",$('#item-partial').html());
      // $('#page').append(theTemplate(testData));
      Handlebars.partials = Handlebars.templates;
      var templateScript = Handlebars.templates.itemlist(testData);
      $('#page').append(templateScript);
    });