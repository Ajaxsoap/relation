Template.Enrollments.onRendered(function(){
   this.subscribe("enrollments");
});

Template.EnrolledData.helpers({
  enrollmentsList: function(){
    return Enrollments.find();
  }
});

Template.Enrollments.events({
  "click #addEnrollee": function(){
    Router.go('AddEnrollee');
  }
});
