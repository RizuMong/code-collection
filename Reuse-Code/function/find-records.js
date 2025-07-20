/*
  Contoh Filter Advance Filter:
  {
    _filter_version: 2,
    "where_in_and": {
        "nama": ["buku A", "buku B", "buku C"],
        "type": ["horror", "comedy"]
    },
    "where_in_or": {
        "nama": ["buku A", "buku B", "buku C"],
        "type": ["horror", "comedy"]
    },
    "where_like_and": {
        "nama": "buku A",
        "type": "horror"
    },
    "where_like_or": {
        "nama": "buku A",
        "type": "horror"
    },
    "where_is_and": {
        "nama": "buku A",
        "type": "horror"
    },
    "where_is_or": {
        "nama": "buku A",
        "type": "horror"
    },
    "where_between_or": {
        "tanggal_pinjam": [1640970000000, 1651338000000],
        "harga": [2000, 50000]
    },
    "where_between_and": {
        "tanggal_pinjam": [1640970000000, 1651338000000],
        "harga": [20000, 50000]
    },
    "where_gt_or": {
        "tanggal_pinjam": 1640970000000,
        "harga": 20000
    },
    "where_gt_and": {
        "tanggal_pinjam": 1640970000000,
        "harga": 20000
    },
    "where_lt_or": {
        "tanggal_pinjam": 1651338000000,
        "harga": 50000
    },
    "where_lt_and": {
        "tanggal_pinjam": 1651338000000,
        "harga": 50000
    },
    "where_lte_and": {
        "tanggal_pinjam": 1651338000000,
        "harga": 50000
    }
}
*/

var filter = {
  _filter_version: 2,
  //   where_is_and: {
  //     name: payload.data.company_code,
  //   },
};

var sort = { created_at: -1 };
var getData = _findRecords("id_data_manager", 1, 1000, sort, filter, "and") || [];