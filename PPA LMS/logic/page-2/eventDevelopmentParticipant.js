const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const filters = {
    business_unit_ids: ["id"],
    jobsite_ids: ["id"],
    department_ids: ["id"],
    jabatan_ids: ["id"],
    event_ids: ["id"],
    year: "2024", // default 2024
    category_event: ["TRN"], // TRN, SRT, DIKLAT, null
    type_employment: "STAFF", // STAFF, NON-STAFF, ALL
    grade_ids: [] //! internal params, is not in request params
}

function filterParameters() { //! REUSEABLE FUNCTION
    if (filters.business_unit_ids.length > 0) {
        const jobsites = []

        filters.business_unit_ids.forEach(business_unit_id => {
            jobsites.push(_query("SELECT", "master_jobsite", {
                WHERE: {
                    business_unit_id: business_unit_id
                }
            }))
        });

        jobsites.forEach(jobsite_record => {
            filters.jobsite_ids.push(jobsite_record.id_job_site)
        });
    }

    if (type_employment === "STAFF") {
        const grades = _query("SELECT", "master_grade", {
            WHERE: {
                grade: {
                    IS: "Staff"
                }
            }
        })

        grades.forEach(grade => {
            filters.grade_ids.push(grade.id_grade)
        });

    } else if (type_employment === "NON-STAFF") {
        const grades = _query("SELECT", "master_grade", {
            WHERE: {
                grade: {
                    ISNOT: "Staff"
                }
            }
        })

        grades.forEach(grade => {
            filters.grade_ids.push(grade.id_grade)
        });

    } else {
        const grades = _query("SELECT", "master_grade", {})

        grades.forEach(grade => {
            filters.grade_ids.push(grade.id_grade)
        });
    }
}

const resData = [] // sample { "name": "", "uv": 0 }

function mds_query(flow_status, is_completed_text) {
    return _query(`
            SELECT COUNT(*) as total
            FROM t_training_participant
            WHERE flow_status = '${flow_status}'
            AND is_completed_text = '${is_completed_text}'
            AND year = filters.year
            AND category_event = filters.category_event
            AND event_id_text IN filters.event_ids
            AND department_id_text IN filters.department_ids
            AND jobsite_id_text IN filters.jobsite_ids
            AND jabatan_id_text IN filters.jabatan_ids
            AND grade_id_text IN filters.grade_ids
        `)[0].total
}

const status_canceled = mds_query('mds_canceled', 'NO')
resData.push({ name: 'EVENT CANCELED', uv: status_canceled })
const status_removed = mds_query('removed', 'NO')
resData.push({ name: 'PARTICIPANT CANCELED', uv: status_removed })
const status_waiting = mds_query('sent', 'NO')
resData.push({ name: 'WAITING APPROVAL', uv: status_waiting })
const status_ongoing = mds_query('approved', 'NO')
resData.push({ name: 'APPROVED & ON GOING', uv: status_ongoing })
const status_completed = mds_query('approved', 'YES')
resData.push({ name: 'COMPLETED', uv: status_completed })