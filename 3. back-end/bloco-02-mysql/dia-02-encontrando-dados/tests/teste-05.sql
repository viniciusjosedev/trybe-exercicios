SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;

-- Eu quero somente os nomes dos livros cadastrados na biblioteca;
SELECT nome FROM faculdade.biblioteca;	
-- Eu quero saber quantos livros temos cadastrados em nossa biblioteca;
SELECT COUNT(nome) FROM faculdade.biblioteca;
-- Eu quero uma lista com 2 livros e suas informações, mas eu não quero o livro ‘Um livro do Ano’ e ‘Novas conquistas novas responsabilidades’;
SELECT * FROM faculdade.biblioteca LIMIT 10 OFFSET 2;
-- Quero os livros mais recentes primeiro, e também em ordem alfabética;
SELECT * FROM faculdade.biblioteca ORDER BY ano_lancamento DESC, nome ASC;
-- Eu quero todas as informações do livro com maior estoque na biblioteca. Somente o com o maior estoque;
SELECT * FROM faculdade.biblioteca ORDER BY quantidade DESC LIMIT 1;
-- Eu quero criar uma lista com os 4 livros mais vendidos. Como poderia encontrar isso?
SELECT * FROM faculdade.biblioteca ORDER BY vendas DESC LIMIT 4;


