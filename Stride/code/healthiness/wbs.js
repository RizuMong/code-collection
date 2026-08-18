var wbs_lists = [
    {
        "actual_end_date": 1782432000,
        "actual_start_date": 1780272000,
        "company_id": 28208,
        "created_at": 1779424466340,
        "created_by": 0,
        "id": "JrvpkhTajELW",
        "ids": "JrvpkhTajELW",
        "master_milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "notes": "Development",
        "planned_end_date": 1762432000,
        "planned_start_date": 1780272000,
        "project_id": {
            "id": "wGk8HrafpvJPd",
            "name": "Injourney Aviasi Pariwisata Indonesia"
        },
        "status_id": {
            "id": "123",
            "name": "Delayed"
        },
        "updated_at": 1779424466340,
        "updated_by": 0
    }
];


var now = Math.floor(new Date().getTime() / 1000);
var work_items = [];
var i = 0;
var item;
var endDate;
var delay;
var statusName;

for (i = 0; i < wbs_lists.length; i++) {
    item = wbs_lists[i];

    endDate = Number(item.planned_end_date);

    if (!endDate || endDate < 0) {
        endDate = 0;
    }

    statusName = item.status_id &&
        item.status_id.name
        ? item.status_id.name
        : "";

    delay = 0;

    // hitung delay hanya jika status bukan Delayed
    if (
        statusName !== "Delayed" &&
        endDate > 0 &&
        endDate < now
    ) {
        delay = Math.floor((now - endDate) / 86400);
    }

    work_items.push({
        "id": item.ids || "",
        "name": item.master_milestone_id &&
            item.master_milestone_id.name
            ? item.master_milestone_id.name
            : "",
        "project": item.project_id &&
            item.project_id.name
            ? item.project_id.name
            : "",
        "status": statusName,
        "end_date": endDate,
        "delay": delay
    });
}

console.log(work_items);