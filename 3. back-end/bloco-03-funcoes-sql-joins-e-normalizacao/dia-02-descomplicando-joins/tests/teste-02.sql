SELECT * FROM sakila.customer;
SELECT * FROM sakila.actor;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

USE hr;

SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.manager_id = Manager.employee_id;
    
-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
 SELECT * FROM employees;
SELECT
    CONCAT(employee.first_name, " ", employee.last_name) AS "Nome Pessoa Colaboradora",
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente"
FROM
    hr.employees AS employee
INNER JOIN
    hr.employees AS manager ON employee.manager_id = manager.employee_id
WHERE
    employee.department_id <> manager.department_id;
