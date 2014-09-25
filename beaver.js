if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

Test = new Mongo.Collection("test");

if (Meteor.isServer) {
  Meteor.startup(function () {
    Test.insert({name: "test value"});
  });
}
