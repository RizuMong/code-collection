var hitAPI = {
  data: [
    {
      application_id: 20,
      company_id: 32982,
      created_at: "2025-05-12T19:40:55+07:00",
      created_by: "20",
      icon_active:
        "https://jojonomic-frontend.s3.ap-southeast-1.amazonaws.com/static/img/60x60px/home_blue.png",
      icon_grey:
        "https://jojonomic-frontend.s3.ap-southeast-1.amazonaws.com/static/img/60x60px/home_grey.png",
      icon_id: 1,
      icon_key: "",
      icon_white:
        "https://jojonomic-frontend.s3.ap-southeast-1.amazonaws.com/static/img/60x60px/home_white.png",
      id: 146,
      id_hash: "k5W86wyaL5An3yxpIIBNX8_K-5_5xfMXufowBNTLCmw=",
      is_maintenance_mode: false,
      maintenance_mode_message: "",
      name: "Home",
      order: 0,
      parent_id: 0,
      show_option: 3,
      state: 1,
      total_component: 0,
      type: "visible",
      type_platform: 1,
      updated_at: "2025-05-12T19:40:55+07:00",
      updated_by: "0",
    },
    {
      application_id: 20,
      company_id: 32982,
      created_at: "2025-05-12T19:45:02+07:00",
      created_by: "20",
      icon_active:
        "https://jojo-receipt-new.s3.ap-southeast-1.amazonaws.com/14/60dd65f6431a4-bd3168488412addccef7348042d2572a_item-active.png",
      icon_grey:
        "https://jojo-receipt-new.s3.ap-southeast-1.amazonaws.com/14/60dd65f6431a4-bd3168488412addccef7348042d2572a_item-active.png",
      icon_id: 18,
      icon_key: "",
      icon_white:
        "https://jojo-receipt-new.s3.ap-southeast-1.amazonaws.com/14/60dd65f6cc28a-267dc2313df7ddd23acc7817f6545cb1_item-white.png",
      id: 147,
      id_hash: "Vp4Hax7KLHYfhoU8zbrka0-MhuJmKJRVLJY1pyF8CNo=",
      is_maintenance_mode: false,
      maintenance_mode_message: "",
      name: "Master",
      order: 1,
      parent_id: 0,
      show_option: 3,
      state: 1,
      total_component: 0,
      type: "menu",
      type_platform: 1,
      updated_at: "2025-05-12T19:45:02+07:00",
      updated_by: "0",
    },
    {
      application_id: 20,
      company_id: 32982,
      created_at: "2025-05-13T09:36:16+07:00",
      created_by: "20",
      icon_active:
        "https://jojonomic-frontend.s3.ap-southeast-1.amazonaws.com/static/img/60x60px/Company_blue.png",
      icon_grey:
        "https://jojonomic-frontend.s3.ap-southeast-1.amazonaws.com/static/img/60x60px/Company_grey.png",
      icon_id: 6,
      icon_key: "",
      icon_white:
        "https://jojonomic-frontend.s3.ap-southeast-1.amazonaws.com/static/img/60x60px/company_white.png",
      id: 148,
      id_hash: "EZBxjk7y7mO0Ovd7inoDKvohl3QY2TNiQz9blvmR63Y=",
      is_maintenance_mode: false,
      maintenance_mode_message: "",
      name: "Department",
      order: 9,
      parent_id: 147,
      show_option: 3,
      state: 1,
      total_component: 0,
      type: "visible",
      type_platform: 1,
      updated_at: "2025-05-30T10:58:45+07:00",
      updated_by: "0",
    },
  ],
  error: false,
  length: 18,
  message: "succesfully get list page by application id",
};

var datas = [];

for (var i = 0; i < hitAPI.data.length; i++) {
  var menu = hitAPI.data[i];

  if (menu.type === "menu") {
    var hasChild = false;

    for (var j = 0; j < hitAPI.data.length; j++) {
      var child = hitAPI.data[j];

      if (
        child.type === "visible" &&
        child.parent_id === menu.id
      ) {
        hasChild = true;
        datas.push({
          id: child.id,
          application_id: child.application_id,
          name: menu.name + " - " + child.name
        });
      }
    }
  }

  if (
    menu.type === "visible" &&
    menu.parent_id === 0
  ) {
    datas.push({
      id: menu.id,
      application_id: menu.application_id,
      name: menu.name
    });
  }
}

console.log(datas);


// var data = [
//   { id: 148, application_id: 20, name: "Master - Department" },
//   { id: 146, application_id: 20, name: "Home" },
// ];

// buat yang type menu gak ada child visible, maka hanya tampilkan menu itu saja
// dan menu yang punya child visible, tampilkan nama menu dengan nama child visible

// // expected
// [
//   {
//     "id": id,
//     "application_id": application_id,
//     "name": "Master - Department", // name with type "menu"  - name with type "visible" and parent_id in master and master menu not show
//   }
// ]
