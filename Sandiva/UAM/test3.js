var payload = {
  data: [
    {
      organigram_id: 42211,
      pages_id: 39049,
      privelege_pages_id: 2199320,
      type: "delete_access",
    },
    {
      organigram_id: 42211,
      pages_id: 10000000000,
      privelege_pages_id: 2199320,
      type: "add_access",
    },
  ],
  organigram_id: {
    id: 3201210,
    name: 42172,
  },
  user_mapping: [
    {
      organigram_id: 42172,
      pages_id: 38940,
      privelege_pages_id: 2199517,
    },
    {
      organigram_id: 42172,
      pages_id: 39021,
      privelege_pages_id: 2199518,
    },
    {
      organigram_id: 42172,
      pages_id: 39024,
      privelege_pages_id: 2199519,
    },
    {
      organigram_id: 42172,
      pages_id: 38944,
      privelege_pages_id: 2199520,
    },
    {
      organigram_id: 42172,
      pages_id: 39074,
      privelege_pages_id: 2199521,
    },
    {
      organigram_id: 42172,
      pages_id: 38936,
      privelege_pages_id: 2199522,
    },
    {
      organigram_id: 42172,
      pages_id: 39049,
      privelege_pages_id: 2199523,
    },
  ],
};

var NEW_ACCESS_PAGES = [];
var UPDATED_ACCESS_PAGES = [];
var i, j;

// Clone user_mapping into NEW_ACCESS_PAGES
for (i = 0; i < payload.user_mapping.length; i++) {
  NEW_ACCESS_PAGES.push(payload.user_mapping[i]);
}

// Process actions in payload.data
for (i = 0; i < payload.data.length; i++) {
  var action = payload.data[i];
  var found = false;

  for (j = 0; j < NEW_ACCESS_PAGES.length; j++) {
    if (NEW_ACCESS_PAGES[j].pages_id === action.pages_id) {
      found = true;

      if (action.type === "delete_access") {
        NEW_ACCESS_PAGES.splice(j, 1);
        break;
      }
    }
  }

  if (!found && action.type === "add_access") {
    NEW_ACCESS_PAGES.push({
      organigram_id: payload.organigram_id.name,
      pages_id: action.pages_id,
      privelege_pages_id: action.privelege_pages_id,
    });
  }
}

// Generate UPDATED_ACCESS_PAGES
for (i = 0; i < payload.data.length; i++) {
  var params = payload.data[i];

  if (params.type === "add_access") {
    UPDATED_ACCESS_PAGES.push({
      pages_id: params.pages_id,
      type: params.type,
      organigram_id: payload.organigram_id.name,
    });
  }

  for (j = 0; j < payload.user_mapping.length; j++) {
    if (payload.user_mapping[j].pages_id === params.pages_id) {
      UPDATED_ACCESS_PAGES.push({
        privelege_pages_id: payload.user_mapping[j].privelege_pages_id,
        pages_id: params.pages_id,
        type: params.type,
        organigram_id: payload.organigram_id.name,
      });
      break;
    }
  }
}

console.log("NEW_ACCESS_PAGES:", NEW_ACCESS_PAGES);
console.log("UPDATED_ACCESS_PAGES:", UPDATED_ACCESS_PAGES);
