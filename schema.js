Enrollments = new Mongo.Collection("enrollments");
Claims = new Mongo.Collection("claims");

Enrollments.attachSchema(new SimpleSchema({
  fullName: {
    type: String,
    label: "Full Name"
  },
  children1: {
    type: String,
    label: "Children 1"
  },
  children2: {
    type: String,
    label: "Children 2"
  },
  children3: {
    type: String,
    label: "Children 3"
  },
  children4: {
    type: String,
    label: "Children 4"
  },
  age: {
    type: Number
  }
}));

Claims.attachSchema(new SimpleSchema({
  enrollmentId: {
    type: String,
    label: "Principal"
  },
  children: {
    type: String,
    label: "Children"
  }
}));
