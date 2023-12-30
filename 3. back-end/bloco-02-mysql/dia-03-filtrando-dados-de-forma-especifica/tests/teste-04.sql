SELECT * FROM sakila.film
WHERE title LIKE '%don';

SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

SELECT * FROM sakila.film
WHERE title LIKE '_C%';

SELECT * FROM sakila.film
WHERE title LIKE '________';

SELECT * FROM sakila.film
WHERE title LIKE 'E%';

SELECT * FROM sakila.film WHERE title LIKE '%ace%';
SELECT * FROM sakila.film WHERE description LIKE '%china%';
SELECT * FROM sakila.film WHERE title LIKE '%lord' AND description LIKE '%girl%';

SELECT * FROM sakila.film WHERE title LIKE '___gon%';
SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
SELECT * FROM sakila.film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';




