if (Meteor.isClient) {
  Template.hello.events({
    'click #run' : function (e,template) {
      var code = $(template.find('textarea')).val();
      Meteor.call('serverEval',code,function(error,result){
        error && console.error(error);
        result && console.log(result);
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    serverEval: function(code) {
      eval(code);
    }
  });
}
