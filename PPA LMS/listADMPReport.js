var dataMDS = [
  {
    _id: "67015ae8d832e181429be184",
    event_id: {
      id: "1FqB9hzNR",
      name: "PREVENTIVE MAINTENANCE HEAVY DUTY TRUCK HD465",
    },
    id_mds: "MV0q51kNR",
    jobsite_id: {
      id: "28OQBnyVg",
      name: "HEAD OFFICE",
    },
    participant_actual: 7,
    year: "2025",
  },
];

var dataTraining = [
  {
    _id: "67001943d832e1814241fb08",
    budget_estimation: 484,
    category_event: "DIKLAT",
    quantity_batch: 1,
    quantity_person: 10,
    event_development_id: {
      id: "1FqB9hzNR",
      name: "PREVENTIVE MAINTENANCE HEAVY DUTY TRUCK HD465",
    },
    id_training_program: "XHYp3hkNR",
    jobsite_id: {
      id: "28OQBnyVg",
      name: "HEAD OFFICE",
    },
    price_per_event: 22,
    price_per_person: 0,
    schedule_month: ["FEBUARY", "JUNE", "SEPTEMBER"],
    type_pricing: "PER EVENT",
    vendor_ids: [
      {
        id: "U3X92zzHg",
        name: "PT. ASBC",
      },
    ],
    venue: "SSS",
    year: "2025",
  },
  {
    _id: "67001943d832e1814241fb08",
    budget_estimation: 484,
    category_event: "DIKLAT",
    quantity_batch: 1,
    quantity_person: 5,
    event_development_id: {
      id: "1FqB9hzNR",
      name: "PREVENTIVE MAINTENANCE HEAVY DUTY TRUCK HD465",
    },
    id_training_program: "XHYp3hkNR",
    jobsite_id: {
      id: "28OQBnyVg",
      name: "HEAD OFFICE",
    },
    price_per_event: 22,
    price_per_person: 0,
    schedule_month: ["FEBUARY", "JUNE", "SEPTEMBER"],
    type_pricing: "PER EVENT",
    vendor_ids: [
      {
        id: "U3X92zzHg",
        name: "PT. ASBC",
      },
    ],
    venue: "SSS",
    year: "2025",
  },
];


function groupByEventYearJobsite(dataArray, getKey) {
  var grouped = {};
  for (var i = 0; i < dataArray.length; i++) {
    var key = getKey(dataArray[i]);
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(dataArray[i]);
  }
  return grouped;
}

function calculateData(dataTraining, dataMDS) {
  var groupedTraining = groupByEventYearJobsite(dataTraining, function(item) {
    return item.event_development_id.id + '-' + item.year + '-' + item.jobsite_id.id;
  });

  var groupedMDS = groupByEventYearJobsite(dataMDS, function(item) {
    return item.event_id.id + '-' + item.year + '-' + item.jobsite_id.id;
  });

  var result = [];
  for (var key in groupedTraining) {
    if (groupedTraining.hasOwnProperty(key)) {
      var trainingGroup = groupedTraining[key];
      var mdsGroup = groupedMDS[key] || [];

      // SUM PLAN
      var plan_batch = 0;
      var plan_participant = 0;
      var mergedTraining = {};

      for (var j = 0; j < trainingGroup.length; j++) {
        plan_batch += trainingGroup[j].quantity_batch;
        plan_participant += trainingGroup[j].quantity_person;

       
        mergedTraining = {
          _id: trainingGroup[j]._id,
          budget_estimation: trainingGroup[j].budget_estimation,
          category_event: trainingGroup[j].category_event,
          quantity_batch: trainingGroup[j].quantity_batch,
          quantity_person: trainingGroup[j].quantity_person,
          event_development_id: trainingGroup[j].event_development_id,
          id_training_program: trainingGroup[j].id_training_program,
          jobsite_id: trainingGroup[j].jobsite_id,
          price_per_event: trainingGroup[j].price_per_event,
          price_per_person: trainingGroup[j].price_per_person,
          schedule_month: trainingGroup[j].schedule_month,
          type_pricing: trainingGroup[j].type_pricing,
          vendor_ids: trainingGroup[j].vendor_ids,
          venue: trainingGroup[j].venue,
          year: trainingGroup[j].year
        };
      }

      
      var actual_batch = mdsGroup.length;
      var actual_participant = 0;
      for (var k = 0; k < mdsGroup.length; k++) {
        actual_participant += mdsGroup[k].participant_actual;
      }

      // ADD SUM Data
      mergedTraining.plan_batch = plan_batch;
      mergedTraining.plan_participant = plan_participant;
      mergedTraining.actual_batch = actual_batch;
      mergedTraining.actual_participant = actual_participant;

      result.push(mergedTraining);
    }
  }
  return result;
}

var dataReport = calculateData(dataTraining, dataMDS);
console.log(dataReport);