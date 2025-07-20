var getPosition = {
  code: "Business Support & Internal Control Specialist - 2",
  company_id: 25236,
  core_flow_id: 4389,
  created_at: 1685432082131,
  created_by: 166448,
  dibuat_oleh: "cimbsmartoosuat@mailnator.com",
  diedit_oleh: "SUBANDI@mailinator.com",
  division: {
    id: "pgVgFYQVg",
    name: "FSAC - 1611-47077-3013",
  },
  division_code: "1611-47077-3013",
  employee_email: {
    id: "OUjjpUQ4R",
    name: "SUBANDI@mailinator.com",
  },
  employee_email_temp: {
    id: "AlhX7cSHR",
    name: "henny.nur@mekari.com",
  },
  employee_name: "Subandi Subandi",
  end_date: 1740675600000,
  flag_temp: false,
  id: "IPA1J8QVR",
  id_master_position: "IPA1J8QVR",
  is_position_yoda: false,
  layer: {
    id: "oaJCdLQ4g",
    name: "D-4",
  },
  layer_new: {
    id: "oaJCdLQ4g",
    name: "D-4",
  },
  layer_old: {
    id: "oaJCdLQ4g",
    name: "D-4",
  },
  name: "Business Support & Internal Control Specialist - 2",
  old_employee_email: {
    id: "OUjjpUQ4R",
    name: "SUBANDI@mailinator.com",
  },
  old_parent: {
    id: "YWKXTUQVg",
    name: "System Reconciliation Head - System Reconciliation Head",
  },
  organigram_id: 30611,
  parent_position: {
    id: "CbRyT8QVRz",
    name: "Payment & Accounting Support Head",
  },
  start_date: 1735664400000,
  updated_at: 1738308490894,
  updated_by: 166467,
};

var newFlow = [];
var currentDate = new Date().getTime();

for (var i = 0; i < getFlows.flow.length; i++) {
    var data = {
        organigram_id: getFlows.flow[i].organigram_id
    };

    var useTemporaryPosition = false;
    var getPosition = _hitFunction("func_get_position_temporary_by_organigram_id", data);

    if (
        !!getPosition.employee_email_temp &&
        !!getPosition.employee_email_temp.name
    ) {
        if (
            (!getPosition.start_date ||
                getPosition.start_date < currentDate) &&
            (!getPosition.end_date ||
                currentDate < getPosition.end_date)
        ) {
            useTemporaryPosition = true;
        }
    };

    if (useTemporaryPosition) {
        _log("Masuk Case Temporary");
        var getPositionTemp = _hitFunction("func_get_position_temporary", {
            employee_email: {
                "id": getPosition.employee_email_temp.id,
                "name": getPosition.employee_email_temp.name
            }
        });

        newFlow.push({
            "core_id": getPositionTemp.core_flow_id,
            "organigram_id": getPositionTemp.organigram_id,
            "position": {
                id: getPositionTemp.id_master_position,
                name: getPositionTemp.code,
            },
        });
    };

    _log(useTemporaryPosition);

    if (!useTemporaryPosition) {
        _log("Masuk Case Normal");
        newFlow.push({
            "core_id": getPosition.core_flow_id,
            "organigram_id": getPosition.organigram_id,
            "position": {
                id: getPosition.id_master_position,
                name: getPosition.code,
            },
        });
    };
};

getFlows.flow = newFlow;
_log(newFlow);
