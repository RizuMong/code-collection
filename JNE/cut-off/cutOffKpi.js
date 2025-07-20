function isUnbilled(each_connote) {
  if (
    each_connote.status_connote === "Open" ||
    each_connote.status_connote === "Ready to be Invoiced" ||
    each_connote.status_connote === "Invoiced, FP not Generated" ||
    each_connote.status_connote === "Invoiced, FP Generated" ||
    each_connote.status_connote === "Received & Sorted"
  ) {
    return true;
  } else if (each_connote.invoice_date >= cutOff) {
    return true;
  } else {
    return false;
  }
}

connotes.forEach(function (item) {
  if (!item.invoice_date) {
    dataConnote.push(item);
  } else if (item.invoice_date > cutOff) {
    dataConnote.push(item);
  } else if (item.invoice_date <= cutOff) {
    if (
      item.status_connote == "Open" ||
      item.status_connote == "Ready to be Invoiced" ||
      item.status_connote == "Received & Sorted" ||
      item.status_connote == "Invoiced, FP not Generated" ||
      item.status_connote == "Invoiced, FP Generated"
    ) {
      dataConnote.push(item);
    }
  }
});

function isUnbilled(connote) {
  if (!connote.invoice_date) {
    return true;
  } else if (connote.invoice_date > cutOff) {
    return true;
  } else if (connote.invoice_date <= cutOff) {
    if (
      connote.status_connote == "Open" ||
      connote.status_connote == "Ready to be Invoiced" ||
      connote.status_connote == "Received & Sorted" ||
      connote.status_connote == "Invoiced, FP not Generated" ||
      connote.status_connote == "Invoiced, FP Generated"
    ) {
      return true;
    }
  } else {
    return false;
  }
}
