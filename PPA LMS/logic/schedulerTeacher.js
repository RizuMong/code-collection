const months = [
  {
    int: 1,
    text: "January",
  },
  {
    int: 2,
    text: "February",
  },
  {
    int: 3,
    text: "March",
  },
  {
    int: 4,
    text: "April",
  },
  {
    int: 5,
    text: "May",
  },
  {
    int: 6,
    text: "June",
  },
  {
    int: 7,
    text: "July",
  },
  {
    int: 8,
    text: "August",
  },
  {
    int: 9,
    text: "September",
  },
  {
    int: 10,
    text: "October",
  },
  {
    int: 11,
    text: "November",
  },
  {
    int: 12,
    text: "December",
  },
];

months.forEach((month) => {
  const start_of_month = month.getStartDate();
  const end_of_month = month.getEndDate();
  const year = Current_Year;
  const month_int = month.int;
  const month_text = month.text;

  const query = `
      SELECT SUM(duration_total) as total_hour, instructor_internal_id_text
      FROM t_monthly_development_schedule
      WHERE flow_status = 'closed'
      AND type_provider = 'INTERNAL'
      AND year = year
      AND month_int = month_int
      GROUP BY instructor_internal_id_text
  `;

  const data = _queryRecord("transaction_data", query);

  data.forEach((instructor) => {
    const employment = _FindRecords(
      {
        table_group: "master_data",
        table: "t_employee",
      },
      {
        id_employee: instructor.instructor_internal_id_text,
      }
    );

    const kpi_hour_month = _FindRecord(
      {
        table_group: "transaction_data",
        table: "t_kpi_training_hour",
      },
      {
        year: year,
        month: month_int,
        "jabatan_ids.id": employment.jabatan_id.id,
      }
    ).training_hour;

    dataToInsert = {
      year: year,
      month_int: month_int,
      month_text: month_text,
      instructor_id_text: instructor.instructor_internal_id_text,
      total_hour: instructor.total_hour,
      kpi_hour: kpi_hour_month,
      achievement: instructor.total_hour / kpi_hour_month,
    };
  });
});
