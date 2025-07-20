const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const filters = {
  business_unit_ids: ["id"],
  jobsite_ids: ["id"],
  department_ids: ["id"],
  jabatan_ids: ["id"],
  event_ids: ["id"],
  year: "2024", // default 2024
  category_event: ["TRN"], // TRN, SRT, DIKLAT, null
  type_employment: "STAFF", // STAFF, NON-STAFF, ALL
  grade_ids: [], //! internal params, is not in request params
};

function filterParameters() {
  //! REUSEABLE FUNCTION
  if (filters.business_unit_ids.length > 0) {
    const jobsites = [];

    filters.business_unit_ids.forEach((business_unit_id) => {
      jobsites.push(
        _query("SELECT", "master_jobsite", {
          WHERE: {
            business_unit_id: business_unit_id,
          },
        })
      );
    });

    jobsites.forEach((jobsite_record) => {
      filters.jobsite_ids.push(jobsite_record.id_job_site);
    });
  }

  if (type_employment === "STAFF") {
    const grades = _query("SELECT", "master_grade", {
      WHERE: {
        grade: {
          IS: "Staff",
        },
      },
    });

    grades.forEach((grade) => {
      filters.grade_ids.push(grade.id_grade);
    });
  } else if (type_employment === "NON-STAFF") {
    const grades = _query("SELECT", "master_grade", {
      WHERE: {
        grade: {
          ISNOT: "Staff",
        },
      },
    });

    grades.forEach((grade) => {
      filters.grade_ids.push(grade.id_grade);
    });
  } else {
    const grades = _query("SELECT", "master_grade", {});

    grades.forEach((grade) => {
      filters.grade_ids.push(grade.id_grade);
    });
  }
}

const mtd = _query(`
        SELECT SUM(achievement) as total
        FROM p_teaching_hour
        WHERE year = filters.year
        AND month_int = _current_month
        AND jabatan_id_text IN (filters.jabatan_id_text)
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
    `)[0].total;

const ytd = _query(`
        SELECT AVG(achievement) as total
        FROM p_teaching_hour
        WHERE year = filters.year
        AND jabatan_id_text IN (filters.jabatan_id_text)
        AND jobsite_id_text IN (filters.jobsite_ids)
        AND department_id_text IN (filters.department_ids)
    `)[0].total;

const chart_data = [];

months.forEach((month) => {
  const plan = _query(`
            SELECT SUM(kpi_hour) as total
            FROM p_teaching_hour
            WHERE year = filters.year
            AND month_int = _current_month
            AND jabatan_id_text IN (filters.jabatan_id_text)
            AND jobsite_id_text IN (filters.jobsite_ids)
            AND department_id_text IN (filters.department_ids)
        `)[0].total;

  const actual = _query(`
            SELECT SUM(total_hour) as total
            FROM p_teaching_hour
            WHERE year = filters.year
            AND month_int = _current_month
            AND jabatan_id_text IN (filters.jabatan_id_text)
            AND jobsite_id_text IN (filters.jobsite_ids)
            AND department_id_text IN (filters.department_ids)
        `)[0].total;

  chart_data.push({
    name: month,
    uv: plan,
    pv: actual,
  });
});

const resData = {
  mtd: achievmentBulan, // get data bulan ini di data manager pooling teaching hours, terus sum achievement
  ytd: achievmentBulan, // get data tahun ini di data manager pooling teaching hours, terus di average achievment nya
  charts: {
    plan: kpihour, // get & sum data kpi_hour per bulan
    actual: totalhour, // get & sum data total_hour per bulan
  },
};
