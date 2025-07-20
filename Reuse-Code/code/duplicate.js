var datas = getDuplicates || [];

var duplicateData = datas.filter(function (item) {
    return (
        item.id_period !== req.body.id_period
    );
});
