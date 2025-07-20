var resData = [];

function mdsQuery(flow_status, status_event, realizationApproved) {
    var query = "SELECT COUNT(id_mds) as total" +
        " FROM t_monthly_development_schedule" +
        " WHERE flow_status = '" + flow_status + "'" +
        " AND status_event = '" + status_event + "'" +
        " AND realizationapproved = '" + realizationApproved + "'" +
        " AND" + filters;

    var result = _queryRecord("transaction_data", query);
    return result.length > 0 && result[0].total !== undefined ? result[0].total : 0;
};

var statusTypes = [
    { flow: 'event_pending', event: 'UPCOMING', approved: 'NO', name: 'PENDING' },
    { flow: 'event_canceled', event: 'UPCOMING', approved: 'NO', name: 'CANCELED' },
    { flow: 'approved', event: 'UPCOMING', approved: 'NO', name: 'UPCOMING' },
    { flow: 'approved', event: 'ONGOING', approved: 'NO', name: 'ON GOING' },
    { flow: 'approved', event: 'COMPLETED', approved: 'NO', name: 'COMPLETED' },
    { flow: 'closed', event: 'COMPLETED', approved: 'NO', name: 'CLOSED' },
    { flow: 'closed', event: 'COMPLETED', approved: 'YES', name: 'REALIZATION APPROVED' }
];

resData = statusTypes.map(function (statusType) {
    return {
        name: statusType.name,
        uv: mdsQuery(statusType.flow, statusType.event, statusType.approved)
    };
});