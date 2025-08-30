var conference = {
  moderators: [
    {
      id: "8gVGLuiR50M0",
      image:
        "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/28122/68ac4756a388a-Screenshot-2025-08-25-182149.png",
      job_title: "Executive Director Hippindo",
      name: "Joseph V. Buntaran",
    },
  ],
  speakers: [
    {
      image:
        "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/28122/68ac07d6c5ff3-16A57305-4D74-4951-8050-A037A0C53193.jpeg",
      is_main: false,
      job_title: "President Director ShopComm Solusi Indonesia",
      speaker_id: {
        id: "eVbLGOX6VlXU",
        name: "Irwan Ardiansyah",
      },
      topic: "Opening",
    },
    {
      image:
        "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/28122/68ac089254f90-4B8CC78F-87CD-4F9B-B338-41D4B317BFAF.jpeg",
      is_main: false,
      job_title: "CEO at Mekari",
      speaker_id: {
        id: "JrSqMEDagE3V",
        name: "Suwandi Soh",
      },
      topic: "Opening Ceremony",
    },
  ],
};

var moderatorUpdated = [];
var speakerUpdated = [];

conference.moderators.forEach(function (moderator) {
    var getModeratorUpdated = _hitFunction("get_moderator_updated", {
        "id": moderator.id,
    });

  moderatorUpdated.push({
    id: moderator.id,
    image: getModeratorUpdated.image,
    job_title: getModeratorUpdated.job_title,
    name: getModeratorUpdated.name,
  });
});

conference.speakers.forEach(function (speaker) {
    var getSpeakerUpdated = _hitFunction("get_speaker_updated", {
        "id": speaker.speaker_id.id,
    });

  speakerUpdated.push({
    image: getSpeakerUpdated.image,
    is_main: speaker.is_main,
    job_title: getSpeakerUpdated.job_title,
    speaker_id: {
      id: speaker.speaker_id.id,
      name: getSpeakerUpdated.name,
    },
    topic: speaker.topic,
  });
});