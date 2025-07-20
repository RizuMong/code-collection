[
  {
    $match: {
      customer_id: "80561601",
      destination_branch_id: "TGR",
      destination_urban_village_name: "KOSAMBI BARAT",
      id_parent: "0wbglfuIR",
      origin_branch_id: "SMI",
      origin_urban_village_name: "CIBADAK",
    },
  },
  { $project: { _id: 0 } },
];
