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

months.forEach(month => {
    const avg_month = _query(`
            SELECT AVG(training_hour) as 'average'
            FROM t_training_participant
            WHERE is_completed_text = 'YES'
            AND date_start_plan >= start_date_of_(month.getTimestamp())
            AND date_start_plan <= end_date_of_(month.getTimestamp())
            AND year = filters.year
            AND categor     y_event IN (filters.category_event)
            AND jobsite_id_text IN (filters.jobsite_ids)
            AND department_id_text IN (filters.department_ids)
            AND event_id_text IN (filters.event_ids)
            AND jabatan_id_text IN (filters.jabatan_ids)
            AND grade_id_text IN (filters.grade_ids)
        `)

    resData.push({
        "name": month,
        "uv": avg_month[0].average
    })
});