// Example data root cause category
var get_master_root_cause_categories = [
    {
        "id": "1OrdTaR7qLUa",
        "label": "Infra Issue",
        "value": "INFRA_ISSUE"
    },
    {
        "id": "W7aT34B0jr3N",
        "label": "External Integration",
        "value": "EXTERNAL_INTEGRATION"
    },
    {
        "id": "izEPluhDjfUG",
        "label": "Product Constraint",
        "value": "PRODUCT_CONSTRAINT"
    },
    {
        "id": "IoNmSlavcBtf",
        "label": "Missed Planned",
        "value": "MISSED_PLANNED"
    },
    {
        "id": "9LQGfpSFRq1Z",
        "label": "Missing Requirement",
        "value": "MISSING_REQUIREMENT"
    },
    {
        "id": "n043M09qafuZ",
        "label": "Logic / Function Issue",
        "value": "LOGIC_FUNCTION_ISSUE"
    }
];

// Example data wbs 
var get_wbs_bug_ratio = [
    {
        "company_id": 28208,
        "created_at": 1786004110546,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "s6XsxPk8G9joo",
        "ids": "s6XsxPk8G9joo",
        "milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "name": "Solution Testing",
        "order_number": 6,
        "updated_at": 1787732157365,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970420818,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "EwGZU49h9exkU",
        "ids": "EwGZU49h9exkU",
        "milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "name": "User Acceptance Test (UAT)",
        "order_number": 8,
        "updated_at": 1787732177240,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1786421862278,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "zYw28xQc3wP7",
        "ids": "zYw28xQc3wP7",
        "milestone_id": {
            "id": "vlNEP9LmFzKR",
            "name": "Implementation"
        },
        "name": "Hypercare",
        "order_number": 17,
        "updated_at": 1787732408481,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1786005388660,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "RHZRlAperNMB",
        "ids": "RHZRlAperNMB",
        "milestone_id": {
            "id": "zYjzMiIc3wR",
            "name": "Maintenance"
        },
        "name": "Maintenance Support",
        "order_number": 18,
        "updated_at": 1787732413689,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    }
];

// Example data task
var task = [

     {
      "actual_end_date": 1785249311741,
      "actual_man_hour": 4,
      "actual_start_date": 1785243004281,
      "ai_tooling_usage": "OTHER_AI_TOOLS",
      "application_id": {},
      "assignee_id": {
        "id": "zYBMTtVcywZF",
        "name": "Pristiwan Akbar Subery"
      },
      "assignment_logs": [
        {
          "assigned_at": 1783683789765,
          "assigned_by": {
            "id": "aCvk8b9tuNRP",
            "name": "Michelle Amara Soekamto"
          },
          "from_assignment": {},
          "to_assignment": {
            "id": "hfGTJvgBCv0g",
            "name": "Rizki Haddi Prayoga"
          }
        },
        {
          "assigned_at": 1784861869590,
          "assigned_by": {
            "id": "aCvk8b9tuNRP",
            "name": "Michelle Amara Soekamto"
          },
          "from_assignment": {
            "id": "hfGTJvgBCv0g",
            "name": "Rizki Haddi Prayoga"
          },
          "to_assignment": {
            "id": "zYBMTtVcywZF",
            "name": "Pristiwan Akbar Subery"
          }
        }
      ],
      "blocked_by_task_ids": [],
      "code": "GROU-057",
      "company_id": 28208,
      "created_at": 1783683789826,
      "created_by": 0,
      "description": "https://docs.google.com/document/d/1lJsCyMh9y0Hkc_0jzMsaSff4M9KrCO_xWPSbWu-VAi8/edit?usp=sharing",
      "estimate_end_date": 0,
      "estimate_man_hour": 4,
      "estimate_start_date": 0,
      "feature_id": {},
      "id": "8gbG46LR10VG",
      "ids": "8gbG46LR10VG",
      "is_project": "YES",
      "milestone_name": "Development",
      "module_id": {},
      "movement_logs": [
        {
          "from_status": null,
          "moved_at": 1783683789765,
          "moved_by_user": {
            "id": "aCvk8b9tuNRP",
            "name": "Michelle Amara Soekamto"
          },
          "to_status": {
            "id": "tSxNmKcyFJcX",
            "name": "Backlog"
          }
        },
        {
          "from_status": {
            "id": "tSxNmKcyFJcX",
            "name": "Backlog"
          },
          "moved_at": 1785149157478,
          "moved_by_user": {
            "id": "zYBMTtVcywZF",
            "name": "Pristiwan Akbar Subery"
          },
          "to_status": {
            "id": "wGk8pJAfVJb1",
            "name": "In Progress"
          }
        },
        {
          "from_status": {
            "id": "wGk8pJAfVJb1",
            "name": "In Progress"
          },
          "moved_at": 1785157272558,
          "moved_by_user": {
            "id": "zYBMTtVcywZF",
            "name": "Pristiwan Akbar Subery"
          },
          "to_status": {
            "id": "uhf8e7I26Y5l",
            "name": "Hold"
          }
        },
        {
          "from_status": {
            "id": "uhf8e7I26Y5l",
            "name": "Hold"
          },
          "moved_at": 1785243004281,
          "moved_by_user": {
            "id": "zYBMTtVcywZF",
            "name": "Pristiwan Akbar Subery"
          },
          "to_status": {
            "id": "wGk8pJAfVJb1",
            "name": "In Progress"
          }
        },
        {
          "from_status": {
            "id": "wGk8pJAfVJb1",
            "name": "In Progress"
          },
          "moved_at": 1785249070000,
          "moved_by_user": {
            "id": "zYBMTtVcywZF",
            "name": "Pristiwan Akbar Subery"
          },
          "to_status": {
            "id": "uhf8e7I26Y5l",
            "name": "Hold"
          }
        },
        {
          "from_status": {
            "id": "uhf8e7I26Y5l",
            "name": "Hold"
          },
          "moved_at": 1785249311741,
          "moved_by_user": {
            "id": "zYBMTtVcywZF",
            "name": "Pristiwan Akbar Subery"
          },
          "to_status": {
            "id": "bqTJ0EmZYnm1",
            "name": "Done"
          }
        }
      ],
      "name": "Performance Tracking - GRI - Qualitative Submission Tracker",
      "project_id": {
        "id": "EwG5RJJhGxKB",
        "name": "Sintesa Group - Sustainability Report"
      },
      "project_id_text": "EwG5RJJhGxKB",
      "properties": {},
      "sequence": 57,
      "sprint_number": 15,
      "sprint_year": 2026,
      "status": "Done",
      "status_id": {
        "id": "bqTJ0EmZYnm1",
        "name": "Done"
      },
      "task_billable_type": "BILLABLE",
      "task_category": "NO_CODE",
      "task_proof_attachments": [],
      "task_proof_recording_urls": [],
      "task_type": "BUG",
      "updated_at": 1785249312267,
      "updated_by": 0,
      "work_item_id": {
        "id": "bqTuuInZjn8v",
        "name": "Solution Development" 
// Solution Development, Solution Testing, Hypercare, Maintenance Support
      },
      "work_item_id_text": "bqTuuInZjn8v"
    }
]