SELECT
  "branch_id" AS "branch_id_09fd5b",
  COUNT(1) AS "TOTAL_3af22b",
  COUNT(
    CASE
      WHEN "status_connote" IN (
        'Invoiced, FP Approved',
        'Invoiced, Ready to Deliver',
        'Invoiced, Delivered to Customer'
      ) THEN 1
    END
  ) :: DECIMAL / NULLIF(COUNT(1), 0) AS "BILLED_RATIO_440803",
  COUNT(
    CASE
      WHEN "status_connote" NOT IN (
        'Invoiced, FP Approved',
        'Invoiced, Ready to Deliver',
        'Invoiced, Delivered to Customer'
      ) THEN 1
    END
  ) :: DECIMAL / NULLIF(COUNT(1), 0) AS "UNBILLED_RATIO_30a9c2"
FROM
  "bms"."t_connote_data_cmt"
WHERE
  "p_date" >= TO_DATE('2023-01-01', 'YYYY-MM-DD')
  AND "p_date" < TO_DATE('2024-01-01', 'YYYY-MM-DD')
  AND "awb_date_format" >= TO_TIMESTAMP('2023-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS')
  AND "awb_date_format" < TO_TIMESTAMP('2024-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS')
GROUP BY
  "branch_id"
ORDER BY
  "TOTAL_3af22b" DESC