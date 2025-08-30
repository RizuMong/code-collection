var days = [
  {
    day_date: "5 August 2025",
    speakers: [
      {
        image:
          "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/28122/6885924ba7afd-Card.png",
        is_main: false,
        job_title: "Minister of Health of the Republic of Indonesia",
        speaker_id: {
          id: "bqWfUBfZxnmv",
          name: "Budi Gunadi Sadikin",
        },
        topic: "Coaching Clinic Sertifikasi Halal ",
      },
    ],
    title: "5 August 2025",
  },
  {
    day_date: "5 August 2025",
    speakers: [
      {
        image:
          "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/28122/6885924ba7afd-Card.png",
        is_main: false,
        job_title: "Minister of Health of the Republic of Indonesia",
        speaker_id: {
          id: "bqWfUBfZxnmv",
          name: "Budi Gunadi Sadikin",
        },
        topic: "Coaching Clinic Sertifikasi Halal ",
      },
    ],
    title: "5 August 2025",
  },
  {
    day_date: "6 August 2025",
    speakers: [
      {
        image:
          "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/28122/689d613be33f8-Helianti-Hilman.jpg",
        is_main: true,
        job_title: "Founder Javara",
        speaker_id: {
          id: "8gVwD19RE0Ym",
          name: "Helianti Hilman",
        },
        topic: "AI in Retail",
      },
    ],
    title: "6 August 2025",
  },
];

var moderators = [
  [
    {
      id: "izuWtwQDjfJ",
      image:
        "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/28122/688596a71b8a8-Rectangle-3.png",
      job_title: "Business & Operations Director, Sekretaris Jenderal",
      name: "Haryanto Pratantara",
    },
  ],
  [
    {
      id: "izuWtwQDjfJ",
      image:
        "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/28122/688596a71b8a8-Rectangle-3.png",
      job_title: "Business & Operations Director, Sekretaris Jenderal",
      name: "Haryanto Pratantara",
    },
  ],
  [
    {
      id: "izuWtwQDjfJ",
      image:
        "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/28122/688596a71b8a8-Rectangle-3.png",
      job_title: "Business & Operations Director, Sekretaris Jenderal",
      name: "Haryanto Pratantara",
    },
  ],
  [
    {
      id: "FpKvcerGNXJ2",
      image:
        "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/28122/688596cb81b9b-Card.png",
      job_title: "President Director",
      name: "Imelda Lim",
    },
  ],
];

// Moderators
var uniqueModerators = [];
var moderatorIdMap = {};
var outerIndex = 0;
var innerIndex = 0;

for (outerIndex = 0; outerIndex < moderators.length; outerIndex++) {
  var moderatorGroup = moderators[outerIndex];

  for (innerIndex = 0; innerIndex < moderatorGroup.length; innerIndex++) {
    var moderatorData = moderatorGroup[innerIndex];
    var moderatorId = moderatorData.id;

    if (!moderatorIdMap[moderatorId]) {
      moderatorIdMap[moderatorId] = true;
      uniqueModerators.push(moderatorData);
    }
  }
}

// Days
// --- Hilangkan duplicate day_date + merge speakers ---
var uniqueDaysMap = {};
var uniqueDays = [];
var i, key;

// loop semua days
for (i = 0; i < days.length; i++) {
  var d = days[i];

  if (!uniqueDaysMap.hasOwnProperty(d.day_date)) {
    // kalau belum ada, simpan
    uniqueDaysMap[d.day_date] = {
      day_date: d.day_date,
      speakers: d.speakers.slice() // clone array ES5
    };
  } else {
    // kalau sudah ada, merge speakers-nya
    uniqueDaysMap[d.day_date].speakers = uniqueDaysMap[d.day_date].speakers.concat(d.speakers);
  }
}

// convert hasil map ke array dengan numbering Day N
var dayCounter = 1;
for (key in uniqueDaysMap) {
  if (uniqueDaysMap.hasOwnProperty(key)) {
    var dayData = uniqueDaysMap[key];

    uniqueDays.push({
      day_date: dayData.day_date,
      title: "Day " + dayCounter + " - " + dayData.day_date,
      speakers: dayData.speakers
    });

    dayCounter++;
  }
}

console.log(uniqueDays);
// console.log(days);
