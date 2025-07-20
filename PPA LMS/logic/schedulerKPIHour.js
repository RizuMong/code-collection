const months = [
  {
      int: 1,
      text: "January"
  },
  {
      int: 2,
      text: "February"
  },
  {
      int: 3,
      text: "March"
  },
  {
      int: 4,
      text: "April"
  },
  {
      int: 5,
      text: "May"
  },
  {
      int: 6,
      text: "June"
  },
  {
      int: 7,
      text: "July"
  },
  {
      int: 8,
      text: "August"
  },
  {
      int: 9,
      text: "September"
  },
  {
      int: 10,
      text: "October"
  },
  {
      int: 11,
      text: "November"
  },
  {
      int: 12,
      text: "December"
  }
];

const employees = _FindRecords('t_employee')
let insert_data = []

employees.forEach(employee => {

  months.forEach(month => {
      const start_of_month = month.getStartDate()
      const end_of_month = month.getEndDate()
      const year = Current_Year;
      
      const month_int = month.int
      const month_text = month.text

      const event_registrations = _FindRecords({
          table_group: "transaction_data",
          table: "t_training_participant"
      }, {
          "employee_id.id": employee.id_employee,
          year: year,
          date_start_plan: date_start_plan >= start_of_month && date_start_plan <= end_of_month
      })

      const kpi_hour_month = _FindRecord({
          table_group: "transaction_data",
          table: "t_kpi_training_hour"
      }, {
          year: year,
          month: month_int,
          "jabatan_ids.id": employee.jabatan_id.id
      }).training_hour

      const category_data = _query(`
              SELECT COUNT(category_event) as countCategory, category_event
              FROM t_training_participant
              WHERE employee_id_text = employee.id_employee
              AND year = year
              AND date_start_plan >= start_of_month
              AND date_start_plan <= end_of_month
          `)

      event_registrations.forEach(registration_record => {
          const categoryCount = category_data.find(category => category.category_event === registration_record.category_event).countCategory

          const normalized_kpi = kpi_hour_month / categoryCount

          insert_data.push({
              employee_id_text: employee.id_employee,
              jabatan_id_text: employee.jabatan_id.id,
              grade_id_text: employee.grade_id.id,
              department_id_text: employee.department_id.id,
              jobsite_id_text: employee.jobsite_id.id,
              year: year,
              month_int: month_int,
              month_text: month_text,
              event_id_text: registration_record.event_id.id,
              category_event: registration_record.category_event,
              training_hour: registration_record.training_hour,
              normalized_kpi: normalized_kpi
          })
      });
  });

  if (insert_data.length === 100) {
      _CreateRecords({
          table_group: "data_pool",
          table: "p_employee_kpi_hour"
      }, {
          data: insert_data
      }, {
          asynchronous: true
      })

      insert_data = []
  }
});