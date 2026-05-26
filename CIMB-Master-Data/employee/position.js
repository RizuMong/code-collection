var findPositions = [
    {
        "code": "5601893-Client Relationship Manager - (BsM 2) - Business Owners - PSO",
        "company_id": 25236,
        "core_flow_id": 41515,
        "created_at": 1779243218369,
        "created_by": 189544,
        "dibuat_oleh": "elvina.faustine@cimbniaga.co.id",
        "diedit_oleh": "elvina.faustine@cimbniaga.co.id",
        "division": {
            "id": "HTGNFHKNR",
            "name": "1611-47009-3533 | HR L&D - CIPTA APPRENTICESHIP"
        },
        "division_code": "1611-47009-3533",
        "employee_email": {
            "id": "s2hPOM1Dg",
            "name": "haidir.fadillah@cimbniaga.co.id"
        },
        "employee_email_temp": {
            "id": "",
            "name": ""
        },
        "employee_name": "HAIDIR FADILLAH ",
        "end_date": null,
        "flag_temp": false,
        "id": "-p4lOGJDg",
        "id_master_position": "-p4lOGJDg",
        "is_position_yoda": true,
        "layer": {
            "id": "X3asYhiIg",
            "name": "D-5"
        },
        "layer_new": {
            "id": "X3asYhiIg",
            "name": "D-5"
        },
        "layer_old": {
            "id": "X3asYhiIg",
            "name": "D-5"
        },
        "name": "5601893-Client Relationship Manager - (BsM 2) - Business Owners - PSO",
        "old_employee_email": {
            "id": "s2hPOM1Dg",
            "name": "haidir.fadillah@cimbniaga.co.id"
        },
        "old_parent": {
            "id": "",
            "name": ""
        },
        "organigram_id": 73063,
        "parent_position": {
            "id": "-H0mCLZIg",
            "name": "3008535-Learning Infrastructure Head"
        },
        "start_date": null,
        "updated_at": 1779243321272,
        "updated_by": 189544
    }
];

var datas = [
    {
        "ID": 14994,
        "EMPLOYEE_ID": null,
        "EMPLOYEE_CODE": 5601893,
        "ID_GFMS": null,
        "MAIN_POSITION": "5601893-Client Relationship Manager - (BsM 1) - Business Owners - PSO",
        "EMPLOYEE_NAME": "J DEVON LAKSANA SAMOSIR",
        "OFFICE_EMAIL": "j.samosir@cimbniaga.co.id",
        "EMPLOYEE_STATUS": "ACTIVE",
        "EMPLOYEE_ARJUNA": true,
        "User_Company_ID": 189996,
        "TODO": "PATCHING MAIN POSITION - BEDA DENGAN DATA HR\/POSISI",
        "MAIN_POSITION_NEW": "5601893-Client Relationship Manager - (BsM 2) - Business Owners - PSO",
        "Hasil": "5601893-Client Relationship Manager - (BsM 1) - Business Owners - PSO",
        "CEK": false
    }
];

var result = [];
var positionMap = {};
var i;
var j;

// Build hashmap biar lookup O(1)
for (i = 0; i < findPositions.length; i++) {
    positionMap[findPositions[i].code] = findPositions[i];
}

// Loop datas
for (i = 0; i < datas.length; i++) {
    var data = datas[i];
    var position = positionMap[data.MAIN_POSITION_NEW];

    // Kalau ketemu position
    if (position) {
        var obj = {};

        // Clone object
        for (j in data) {
            obj[j] = data[j];
        }

        // Tambah ID_POSITION
        obj.ID_POSITION = position.id;

        result.push(obj);
    }
}

console.log(result);


// buatkan logic untuk cari MAIN_POSITION_NEW dari datas ke findPositions terus cari ke code kalau nemu yang sama maka push datanya ke result dengan bentukan object di datas tapi ditambah property baru ID_POSITION yang diambil dari findPositions