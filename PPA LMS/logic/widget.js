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

const resData = {
    "total_event_count_all": 0,
    "total_hours_staff": 0,
    "total_hours_non_staff": 0,
    "total_cost_event": 0,
    "certificate_received": 0,
    "certificate_unreceived": 0,
    "certificate_unavailable": 0
}

resData.total_event_count_all = _query(`
        SELECT COUNT(*) FROM t_training_participant AS total
        WHERE is_completed_text = 'YES'
        AND year = filters.year
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
        AND event_id_text IN (filters.event_ids)
        AND category_event IN (filters.category_event)
        AND jabatan_id_text IN (filters.jabatan_ids)
        AND grade_id_text IN (filters.grade_ids)
    `)

resData.total_hours_staff = _query(`
        SELECT SUM(training_hour) AS total
        FROM t_training_participant
        WHERE is_completed_text = 'YES'
        AND year = filters.year
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
        AND event_id_text IN (filters.event_ids)
        AND category_event IN (filters.category_event)
        AND jabatan_id_text IN (filters.jabatan_ids)
        AND grade_id.name = 'Staff'
    `)

resData.total_hours_non_staff = _query(`
        SELECT SUM(training_hour) AS total
        FROM t_training_participant
        WHERE is_completed_text = 'YES'
        AND year = filters.year
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
        AND event_id_text IN (filters.event_ids)
        AND category_event IN (filters.category_event)
        AND jabatan_id_text IN (filters.jabatan_ids)
        AND grade_id.name != 'Staff'
    `)

resData.total_cost_event = _query(`
        SELECT SUM(cost) AS total
        FROM t_training_participant
        WHERE is_completed_text = 'YES'
        AND year = filters.year
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
        AND event_id_text IN (filters.event_ids)
        AND category_event IN (filters.category_event)
        AND jabatan_id_text IN (filters.jabatan_ids)
        AND grade_id_text IN (filters.grade_ids)
    `)

resData.certificate_received = _query(`
        SELECT COUNT(*) AS total
        FROM t_certificate
        WHERE flow_status = 'sent'
        AND certificate_result = 'CERTIFICATE AVAILABLE'
        AND mds_year = filters.year
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
        AND event_id_text IN (filters.event_ids)
        AND category_event IN (filters.category_event)
        AND jabatan_id_text IN (filters.jabatan_ids)
        AND grade_id_text IN (filters.grade_ids)
    `)

resData.certificate_unreceived = _query(`
        SELECT COUNT(*) AS total
        FROM t_certificate
        WHERE flow_status != 'sent'
        AND certificate_result = 'CERTIFICATE AVAILABLE'
        AND mds_year = filters.year
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
        AND event_id_text IN (filters.event_ids)
        AND category_event IN (filters.category_event)
        AND jabatan_id_text IN (filters.jabatan_ids)
        AND grade_id_text IN (filters.grade_ids)
    `)

resData.certificate_unavailable = _query(`
        SELECT COUNT(*) AS total
        FROM t_certificate
        WHERE flow_status = 'sent'
        AND certificate_result = 'NO CERTIFICATE'
        AND mds_year = filters.year
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
        AND event_id_text IN (filters.event_ids)
        AND category_event IN (filters.category_event)
        AND jabatan_id_text IN (filters.jabatan_ids)
        AND grade_id_text IN (filters.grade_ids)
    `)