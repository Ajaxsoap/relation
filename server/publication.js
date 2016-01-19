// Meteor.publishRelations('claimEnrollments', function (fullName) {
//   check(fullName, Match.Optional(String));
//
//   if (!fullName)
//     return Enrollments.find();
//
//   // {fullName} = {fullName: fullName}
//   let cursor = Enrollments.find({fullName}, {fields: {fullName: 1, children1: 1, children2: 1}});
//
//   this.cursor(cursor, function (id, doc) {
//     this.cursor(Claims.find({
//       principal: fullName,
//       dependent: {$in: [doc.children1, doc.children2, doc.children3, doc.children4]}
//     }))
//   })
//
//   return this.ready()
// });

Meteor.publish("enrollments", function(){
  return Enrollments.find();
});
