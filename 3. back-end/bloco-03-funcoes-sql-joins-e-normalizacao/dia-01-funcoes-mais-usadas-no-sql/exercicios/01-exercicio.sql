USE hr;

SELECT * FROM employees;

SELECT MAX(salary) FROM employees;

SELECT MAX(salary) - MIN(salary) AS Diferença FROM employees;

SELECT job_id, ROUND(AVG(salary), 2) AS 'Média salarial' 
FROM employees GROUP BY job_id, salary ORDER BY `Média salarial` DESC; 

SELECT SUM(salary) AS 'Salário total' FROM employees;

SELECT ROUND(MAX(salary), 2) AS Máxima, ROUND(MIN(salary), 2) AS Mínima, ROUND(SUM(salary), 2) AS Soma, 
ROUND(AVG(salary), 2) AS Média FROM employees; 	

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).

SELECT COUNT(job_id) FROM employees WHERE job_id = 'IT_PROG'; 

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).

SELECT job_id, MAX(salary) FROM employees GROUP BY job_id;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).

SELECT job_id, MAX(salary) FROM employees GROUP BY job_id HAVING job_id = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).

SELECT job_id, ROUND(AVG(salary)) FROM employees GROUP BY job_id HAVING job_id <> 'IT_PROG';

-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.

SELECT department_id, ROUND(AVG(salary), 2) 'Média salarial', COUNT(*) AS 'Numero de funcionarios'
FROM employees GROUP BY department_id HAVING `Numero de funcionarios` > 10;

-- 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

SELECT * FROM employees;
SET SQL_SAFE_UPDATES = 0;
UPDATE employees SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '%515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

SELECT * FROM employees WHERE CHAR_LENGTH(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).

SELECT employee_id, first_name, YEAR(hire_date) FROM employees;

-- 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

SELECT employee_id, first_name, DAY(hire_date) FROM employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).

SELECT employee_id, first_name, MONTH(hire_date) FROM employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

SELECT CONCAT(UCASE(first_name), ' ', UCASE(last_name)) AS Nome FROM employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

SELECT last_name, hire_date FROM employees WHERE YEAR(hire_date) = 1987 AND MONTH(hire_date) = 7; 
SELECT last_name, hire_date FROM employees WHERE hire_date LIKE '1987-07%';

-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS 'Dias trabalhando na empresa'
FROM employees;


