var payload = {
  data: [
    {
      organigram_id: 42211,
      pages_id: 39049,
      privelege_pages_id: 2199320,
      type: "delete_access",
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

var UPDATED_ACCESS_PAGES = [];
var NEW_ACCESS_PAGES = payload.user_mapping;

for (var i = 0; i < payload.user_mapping.length; i++) {
  var data = payload.user_mapping[i];

  for (var j = 0; j < payload.data.length; j++) {
    var params = payload.data[j];

    if (data.pages_id === params.pages_id) {
      UPDATED_ACCESS_PAGES.push({
        privelege_pages_id: data.privelege_pages_id,
        pages_id: data.pages_id,
        type: params.type,
        organigram_id: payload.organigram_id.name,
      });
    };
  }
}

console.log(UPDATED_ACCESS_PAGES);
