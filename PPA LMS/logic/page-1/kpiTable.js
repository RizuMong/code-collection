const dataManager = [
    "p_employee_kpi_hour"
]


const resData = [
    // gak kena filter year
    // kayak logic development hours tanpa month
  {
      "kpi_name": "Development Hours + 10%", // logic development hours vs actual page 1 ditambah 10%
      "ytd_plan": "", // tambah 10%
      "ytd_actual": "", 
      "ytd_achievement": "", // (ytd_actual / (ytd_plan + 10%) * 100)
      "mtd_plan": "", // tambah 10%
      "mtd_actual": "",
      "mtd_achievement": "" // int // (mtd_actual / (mtd_plan + 10%) * 100)
  },
  {
      "kpi_name": "Development Hours", // mirip atas tanpa 10%
      "ytd_plan": "",
      "ytd_actual": "",
      "ytd_achievement": "",
      "mtd_plan": "",
      "mtd_actual": "",
      "mtd_achievement": ""
  },
  {
      "kpi_name": "Development Coverage", // get all emp check emp count yang belum ikut training
    //  cari di t_training_participant is is_completed = 'NO' || not found
    // foreach employee, FIND in t_training_participant WHERE year = this.year AND is_completed = TRUE
      "ytd_plan": "", // jumlah emp yang statusnya "active" TBD 
      "ytd_actual": "", //  plan - jumlah emp yang masuk coverage
      "ytd_achievement": "",
      "mtd_plan": 0,
      "mtd_actual": 0,
      "mtd_achievement": 0
  },
  {
      "kpi_name": "Development Count", // pake logic page 1 eventDevelopmentPlanVSActual (gak pake looping month)
      "ytd_plan": "",
      "ytd_actual": "",
      "ytd_achievement": "",
      "mtd_plan": "",
      "mtd_actual": "",
      "mtd_achievement": ""
  },
  {
    "kpi_name": "Participant Count", // pake logic page 1 eventParticipantPlanVSActual (gak pake looping month)
    "ytd_plan": "",
    "ytd_actual": "",
    "ytd_achievement": "",
    "mtd_plan": "",
    "mtd_actual": "",
    "mtd_achievement": ""
    },
]