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

const ytd = _query(`
        SELECT SUM(training_hour) as actual, (SUM(normalized_kpi) / filters.category_event.length) as plan
        FROM p_employee_kpi_hour
        WHERE year = filters.year
        AND department_id_text IN filters.department_ids
        AND jabatan_id_text IN filters.jabatan_ids
        AND jobsite_id_text IN filters.jobsite_ids
        AND grade_id_text IN filters.grade_ids
        AND category_event IN filters.category_event
    `)

const mtd = _query(`
        SELECT SUM(training_hour) as actual, (SUM(normalized_kpi) / filters.category_event.length) as plan
        FROM p_employee_kpi_hour
        WHERE year = filters.year
        AND month_int = current_month.getInt() + 1
        AND department_id_text IN filters.department_ids
        AND jabatan_id_text IN filters.jabatan_ids
        AND jobsite_id_text IN filters.jobsite_ids
        AND grade_id_text IN filters.grade_ids
        AND category_event IN filters.category_event
    `)

const chartData = []
const queryData = _query(`
        SELECT SUM(training_hour) as actual, (SUM(normalized_kpi) / filters.category_event.length) as plan, month_text
        FROM p_employee_kpi_hour
        WHERE year = filters.year
        AND department_id_text IN filters.department_ids
        AND jabatan_id_text IN filters.jabatan_ids
        AND jobsite_id_text IN filters.jobsite_ids
        AND grade_id_text IN filters.grade_ids
        AND category_event IN filters.category_event
        GROUP BY month_text
        SORT BY month_int ASC
    `).forEach(month_data => {
        chartData.push({
            name: month_data.month_text,
            uv: month_data.plan,
            pv: month_data.actual
        })
    });

const resData = {
    "mtd": mtd[0].actual / mtd[0].plan * 100,
    "ytd": ytd[0].actual / ytd[0].plan * 100,
    "charts": chartData //[{ "name": "", "uv": 0, "pv": 0 }]
}
