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
            (filters.jobsite_ids).push(jobsite_record.id_job_site)
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

const ytd_plan = _query(`
        SELECT SUM(quantity_participant) as total
        FROM t_admp_monthly_breakdown
        WHERE admp_approved	 = 'YES'
        AND year = filters.year
        AND category_event IN (filters.category_event)
        AND event_id_text IN (filters.event_ids)
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
    `)[0].total

const ytd_actual = _query(`
        SELECT SUM(participant_actual) as total
        FROM t_monthly_development_schedule
        WHERE flow_status = 'closed'
        AND year = filters.year
        AND category_event IN (filters.category_event)
        AND event_id_text IN (filters.event_ids)
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
    `)[0].total

const mtd_plan = _query(`
        SELECT SUM(quantity_participant) as total
        FROM t_admp_monthly_breakdown
        WHERE admp_approved	 = 'YES'
        AND month_int = current_MONTH
        AND year = filters.year
        AND category_event IN (filters.category_event)
        AND event_id_text IN (filters.event_ids)
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
    `)[0].total

const mtd_actual = _query(`
        SELECT SUM(participant_actual) as total
        FROM t_monthly_development_schedule
        WHERE flow_status = 'closed'
        AND date_start_plan >= start_of_current_MONTH
        AND date_start_plan <= end_of_current_MONTH
        AND year = filters.year
        AND category_event IN (filters.category_event)
        AND event_id_text IN (filters.event_ids)
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
    `)[0].total

const chart_data = []

months.forEach(month => {
    const plan = _query(`
            SELECT SUM(participant_actual) as total
            FROM t_admp_monthly_breakdown
            WHERE admp_approved	 = 'YES'
            AND month_int = MONTH
            AND year = filters.year
            AND category_event IN (filters.category_event)
            AND event_id_text IN (filters.event_ids)
            AND jobsite_id_text IN (filters.jobsite_ids)
            AND department_id_text IN (filters.department_ids)
        `)[0].total

    const actual = _query(`
            SELECT SUM(participant_actual) as total
            FROM t_monthly_development_schedule
            WHERE flow_status = 'closed'
            AND date_start_plan >= start_of_MONTH
            AND date_start_plan <= end_of_MONTH
            AND year = filters.year
            AND category_event IN (filters.category_event)
            AND event_id_text IN (filters.event_ids)
            AND jobsite_id_text IN (filters.jobsite_ids)
            AND department_id_text IN (filters.department_ids)
        `)[0].total

    chart_data.push({
        name: month,
        uv: plan,
        pv: actual
    })
});


const resData = {
    mtd: mtd_actual / mtd_plan * 100,
    ytd: ytd_actual / ytd_plan * 100,
    charts: chart_data // sample { "name": "", "uv": 0, "pv": 0 }
}