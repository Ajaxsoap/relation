Router.route('/', function () {
  this.render('Main');
});

Router.route('/enrollments', function () {
  this.render('Enrollments');
});

Router.route('/enrollments/create', function () {
  this.render('AddEnrollee');
});

Router.route('/enrollments/update', function () {
  var enrollee = Enrollments.findOne({_id: this.params._id});
  this.render('EditEnrollee', {data: enrollee});
});

Router.route('/claims', function () {
  this.render('Claims');
});

Router.route('/claims/create', function () {
  this.render('AddClaims');
});

Router.route('/claims/update', function () {
  var enrollee = Enrollments.findOne({_id: this.params._id});
  this.render('EditClaims', {data: enrollee});
});
