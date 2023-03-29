SELECT UCASE('oi, eu sou uma string');
SELECT LCASE('Oi, eu sou uma string');
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

SELECT LEFT('Oi, eu sou uma string', 3);
SELECT RIGHT('Oi, eu sou uma string', 6);
SELECT CHAR_LENGTH('Oi');

SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);

SELECT SUBSTRING('Oi, eu sou uma string', 5);

SELECT UCASE('trybe');	
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo?', 'Google?');
SELECT CHAR_LENGTH('A linguagem JavaScript está entre as mais usadas');
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');



-- Sintaxe:
SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);

SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
FROM pessoas;

SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
FROM estabelecimentos;

-- Exemplo utilizando o banco sakila:
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;

-- Sintaxe:
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;

SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END
FROM sakila.customer
LIMIT 10;

SELECT film_id, title, IF (title = 'ACE GOLDFINGER', 'Já assisti a este filme', 'Não conheço o filme')
AS 'conheço o filme?' FROM sakila.film;

SELECT title, rating, 
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
		WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
		WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
		WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
		ELSE 'Proibido para menores de idade'
	END AS 'público-alvo'
FROM sakila.film;

SELECT IF (14 MOD 2 = 0, 'Par', 'Ímpar');
SELECT 220 DIV 12;
SELECT 220 MOD 12;

SELECT POW(2,2);
SELECT SQRT(4);

SELECT RAND();

SELECT ROUND((RAND()*5) + 15);

SELECT ROUND(15.7515971, 5);

SELECT FLOOR(39.494);

SELECT CEIL(85.234);

SELECT DATEDIFF('2020-01-31', '2020-01-01');

SELECT DATE(NOW());

SELECT DATEDIFF(DATE('2030-01-20'), CURRENT_DATE());

SELECT TIMEDIFF('10:25:45', '11:00:00');

SELECT * FROM sakila.film;
SELECT AVG(length) AS 'Média de Duração', MIN(length) AS 'Duração Mínima',
 MAX(length) AS 'Duração Máxima', SUM(length) AS 'Tempo de Exibição Total',
 COUNT(film_id) AS 'Filmes Registrados' FROM sakila.film;

 
