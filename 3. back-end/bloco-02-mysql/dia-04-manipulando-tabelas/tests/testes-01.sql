USE sakila;

SELECT * FROM sakila.actor;

SELECT first_name, last_name FROM sakila.customer LIMIT 5;

SELECT * FROM category;

INSERT INTO category (name) 
VALUES ('Teste1'), ('TESTE2'), ('teste3');

SELECT * FROM store;
INSERT INTO store (manager_staff_id, address_id)
VALUES (3, 3);

SELECT * FROM staff;

SET SQL_SAFE_UPDATES = 0;



UPDATE staff 
SET first_name = 'AAA'
WHERE first_name = 'Vinicius';

UPDATE staff
SET first_name = (
CASE staff_id WHEN 3 THEN 'BBB' WHEN 4 THEN 'AAA' ELSE first_name
END 
);

SELECT * FROM sakila.actor;
UPDATE sakila.actor SET first_name = 'JULES' WHERE first_name = 'JULIA';

SELECT * FROM sakila.category;

SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM sakila.category WHERE category_id = 1;

SELECT * FROM sakila.actor; 

DELETE FROM sakila.actor WHERE first_name = 'KARL';
DELETE FROM sakila.actor WHERE first_name = 'MATTHEW';

SELECT * FROM sakila.film_text;
DELETE FROM sakila.film_text WHERE description LIKE '%saga%';

SELECT * FROM sakila.actor;

TRUNCATE sakila.actor; 
TRUNCATE sakila.film_category;

TRUNCATE sakila;

DROP DATABASE IF EXISTS sakila;



