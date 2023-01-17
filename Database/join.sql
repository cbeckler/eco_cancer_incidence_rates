SELECT * FROM null_model_dataset;

SELECT * FROM model_dataset;

SELECT recent_trend FROM model_dataset;

SELECT * FROM model_dataset
UNION 
SELECT * FROM null_model_dataset;

SELECT * FROM model_dataset
WHERE recent_trend='stable';

-- right join
SELECT *
FROM model_dataset
JOIN null_model_dataset
  ON model_dataset.index=null_model_dataset.index;

SELECT COUNT(index)
FROM model_dataset
WHERE recent_trend='falling'
GROUP BY recent_trend
ORDER BY COUNT(index) DESC;


  
  
  
  
  
  

