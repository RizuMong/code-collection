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

function mds_query(flow_status, status_event, realizationApproved) {
    return _query(`
            SELECT COUNT(*) as total
            FROM t_monthly_development_schedule
            WHERE flow_status = '${flow_status}'
            AND status_event = '${status_event}'
            AND realization_approved = '${realizationApproved}'
            AND year = filters.year
            AND category_event = filters.category_event
            AND event_id_text IN filters.event_ids
            AND department_id_text IN filters.department_ids
            AND jobsite_id_text IN filters.jobsite_ids
        `)[0].total
}

const status_pending = mds_query('event_pending', 'UPCOMING', 'NO')
resData.push({ name: 'PENDING', uv: status_pending })
const status_canceled = mds_query('event_canceled', 'UPCOMING', 'NO')
resData.push({ name: 'CANCELED', uv: status_canceled })
const status_upcoming = mds_query('approved', 'UPCOMING', 'NO')
resData.push({ name: 'UPCOMING', uv: status_upcoming })
const status_ongoing = mds_query('approved', 'ONGOING', 'NO')
resData.push({ name: 'ON GOING', uv: status_ongoing })
const status_completed = mds_query('approved', 'COMPLETED', 'NO')
resData.push({ name: 'COMPLETED', uv: status_completed })
const status_closed = mds_query('closed', 'COMPLETED', 'NO')
resData.push({ name: 'CLOSED', uv: status_closed })
const status_realized = mds_query('closed', 'COMPLETED', 'YES')
resData.push({ name: 'REALIZATION APPROVED', uv: status_realized })