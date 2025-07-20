function generateCandidates(initialCandidates, totalData, currentCount) {
  var dataCandidates = [];
  var startId = parseInt(initialCandidates.id_candidate); // Ubah jadi id_candidate

  for (var i = 0; i < totalData; i++) {
    var newCandidate = {};
    for (var key in initialCandidates) {
      if (initialCandidates.hasOwnProperty(key)) {
        newCandidate[key] = initialCandidates[key];
      }
    }

    // Increment id_candidate sebagai string berdasarkan currentCount
    newCandidate.id_candidate = String(startId + currentCount + i); // Ubah jadi id_candidate

    // Increment job_application_id (tetap sebagai number, sesuaikan jika perlu)
    newCandidate.job_application_id += (currentCount + i);

    // Increment email
    var emailParts = newCandidate.email.split('@');
    var emailPrefix = emailParts[0].replace(/(\d+)$/, '');
    var currentEmailNumberMatch = emailParts[0].match(/(\d+)$/);
    var currentEmailNumber = currentEmailNumberMatch ? parseInt(currentEmailNumberMatch[0]) : 1;
    newCandidate.email = emailPrefix + (currentEmailNumber + currentCount + i) + '@' + emailParts[1];

    // Update candidate_name, first_name
    var nameMatch = newCandidate.candidate_name.match(/New Joiner (\d+)/);
    var newJoinerNumber = nameMatch ? parseInt(nameMatch[1]) + currentCount + i : 2 + currentCount + i;
    newCandidate.candidate_name = 'New Joiner ' + (newJoinerNumber < 10 ? '0' : '') + newJoinerNumber + ' tue 4 feb 25';
    newCandidate.first_name = 'New Joiner ' + (newJoinerNumber < 10 ? '0' : '') + newJoinerNumber;

    dataCandidates.push(newCandidate);
  }

  return dataCandidates;
}

// Konfigurasi awal
var initialCandidates = {
  candidate_id: 10000,
  id_candidate: "10000",
  job_application_id: 15467,
  company_id: 10,
  job_id: 8130,
  job_position_id: 487192,
  job_position_name: "Job Testing",
  branch_id: 137,
  branch_name: "DEPOK",
  organization_id: 138266,
  organization_name: "B1",
  candidate_name: "New Joiner 02 tue 4 feb 25",
  first_name: "New Joiner 02",
  last_name: "tue 4 feb 25",
  email: "newjoiner01@yopmail.com",
  phone_number: "081208120812",
  last_job_position: "",
  last_company: "",
  last_education: 0,
  last_education_level: "No Qualification",
  avatar: "mekari_image_ehw5n4.png",
  applied_date: "2025-02-04T07:05:07.485345Z",
  status: 1,
  source: 1,
  source_name: "Career Page",
  last_stage_id: 9299,
  last_stage_name: "Candidate Review !@#🥳",
  hiring_stage_id: 37,
  hiring_stage_status: 0,
  hired_date: "2025-02-16",
  joining_date: null,
  new_joiner_status: "Yes to fill",
  new_joiner_expired_date: "2025-02-11"
};

var generatedData1 = generateCandidates(initialCandidates, 1, 0);
console.log(generatedData1);