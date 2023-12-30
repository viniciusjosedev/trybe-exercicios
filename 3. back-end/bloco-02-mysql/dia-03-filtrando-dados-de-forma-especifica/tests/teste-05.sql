SELECT * FROM sakila.language
WHERE name BETWEEN 'Brazil' AND 'Italian'
ORDER BY name;

SELECT * FROM sakila.language;

SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-05-28 00:00:31';

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

SELECT * FROM sakila.payment;

SELECT * FROM sakila.payment WHERE DATE(payment_date) LIKE '2005-05-25%';

SELECT MONTH(payment_date) FROM sakila.payment;

SELECT * FROM sakila.payment WHERE DATE(payment_date) IN ('2005-05-25%');







