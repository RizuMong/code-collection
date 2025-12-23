var position_approver = {
    "code": "mgr",
    "company_id": 28201,
    "created_at": 0,
    "created_by": 193062,
    "created_by_project_user": "darz2u345wux",
    "created_by_user": "",
    // "delegation_end_date": 1765472400000,
    // "delegation_position": {
    //     "code": "pcspv",
    //     "id": "Z3TudioMVUiW",
    //     "name": "Supervisor PC"
    // },
    // "delegation_start_date": 1765126800000,
    "flow_status": "",
    "id": "vlP9Lxzmozrg",
    "name": "Manager IT",
    "parent_position": null,
    "position_id": "vlP9Lxzmozrg",
    "updated_at": 1766391526505,
    "updated_by": 0,
    "updated_by_project_user": "L5s32Z2pcH2",
    "updated_by_user": ""
};

var approvers = [

]

var approvers = [];
var now = Date.now();

var position_code = position_approver && position_approver.code
    ? position_approver.code
    : null;

var is_delegation_active =
    position_approver &&
    position_approver.delegation_start_date &&
    position_approver.delegation_end_date &&
    now >= position_approver.delegation_start_date &&
    now <= position_approver.delegation_end_date;

if (
    is_delegation_active &&
    position_approver.delegation_position &&
    position_approver.delegation_position.code
) {
    position_code = position_approver.delegation_position.code;
}

approvers.push({
    position_code: position_code
});

console.log(approvers);


// 1. buat jika delegation_start_date and delegation_end_date masih valid dengan hari ini atau tidak
// 2. kalau masih valid maka position itu yang akan dipake buat validation
// 3. kalau engga valid maka pake positon_approver.code