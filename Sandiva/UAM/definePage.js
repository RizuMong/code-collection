var payload = {
  data: [
    {
      application_id: "4249",
      organigram_id: "4249",
      privelege_application_id: 87453,
      type: "delete_access",
    },
    {
      application_id: "4243",
      organigram_id: "4249",
      privelege_application_id: 87453,
      type: "add_access",
    },
  ],
  organigram_id: {
    id: 3201210,
    name: 42172,
  },
  user_mapping: [
    {
      application_id: "4249",
      organigram_id: "4249",
      privelege_application_id: 87453,
    },
  ],
};

function _log(msg) {
  console.log(msg);
}

var NEW_ACCESS_APP = payload.user_mapping.slice(); // Clone the user_mapping
var UPDATED_ACCESS_APP = [];

// Sync master_role_employee_access
payload.data.forEach(function (action) {
  var foundIndex = NEW_ACCESS_APP.findIndex(function (app) {
    return app.application_id === action.application_id;
  });

  if (action.type === "delete_access" && foundIndex !== -1) {
    NEW_ACCESS_APP.splice(foundIndex, 1);
  } else if (action.type === "add_access" && foundIndex === -1) {
    NEW_ACCESS_APP.push({
      application_id: action.application_id,
      organigram_id: payload.organigram_id.name,
      privelege_application_id: action.privelege_application_id,
    });
  }
});

// Sync Native
payload.data.forEach(function (params) {
  var userMappingMatch = payload.user_mapping.find(function (userApp) {
    return userApp.application_id === params.application_id;
  });

  if (params.type === "add_access") {
    UPDATED_ACCESS_APP.push({
      application_id: params.application_id,
      organigram_id: payload.organigram_id.name,
      type: params.type,
    });
  }

  if (userMappingMatch) {
    UPDATED_ACCESS_APP.push({
      privelege_application_id: userMappingMatch.privelege_application_id,
      application_id: parseInt(params.application_id),
      type: params.type,
      organigram_id: payload.organigram_id.name,
    });
  }
});

_log({
  NEW_ACCESS_APP: NEW_ACCESS_APP,
  UPDATED_ACCESS_APP: UPDATED_ACCESS_APP,
});
