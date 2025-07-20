const response = {
  error: false,
  message: "Success Get Data",
  statusCode: 200,
  data: {
    // t_training_participant
    
    upcomingTraining: [ 
      {
        eventName: "lorem ipsum",
        mdsNumber: "BED-HO-PROD-211",
        dateStartPlan: 199920222,
        venue: "lorem",
      },
    ],

    ongoingTraining: [
      {
        eventName: "lorem ipsum",
        mdsNumber: "BED-HO-PROD-211",
        dateStartPlan: 199920222,
        venue: "lorem",
      },
    ],
    expiringCertification: [
      {
        certificationName: "lorem ipsum",
        dateRelease: 199920222,
        dateExpired: 199920222,
      },
    ],
    upcomingCertification: [
      {
        eventName: "lorem ipsum",
        mdsNumber: "BED-HO-PROD-211",
        dateStartPlan: 199920222,
        venue: "lorem",
      },
    ],
    reminders: [
      {
        title: "Quiz Assessment",
        description: "lorem ipsum",
      },
    ],
  },
};
