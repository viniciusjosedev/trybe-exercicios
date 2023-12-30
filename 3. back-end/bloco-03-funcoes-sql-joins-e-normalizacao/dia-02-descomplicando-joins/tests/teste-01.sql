-- Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas nas tabelas customer e rental.
USE sakila;
SELECT * FROM customer;
SELECT * FROM rental;

SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS 'Quantidade de filmes alugados'
FROM customer AS c
INNER JOIN rental AS r
ON c.customer_id = r.customer_id
WHERE c.active IS NOT FALSE
GROUP BY c.first_name, c.last_name
ORDER BY c.first_name DESC, c.last_name DESC;

-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM payment;
SELECT * FROM staff;

SELECT s.first_name, s.last_name, AVG(p.amount)
FROM staff s INNER JOIN payment p
ON s.staff_id = p.staff_id
GROUP BY s.first_name, s.last_name; 

-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;

SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM actor a INNER JOIN film_actor fa INNER JOIN film f
ON a.actor_id = fa.actor_id AND fa.film_id = f.film_id;



