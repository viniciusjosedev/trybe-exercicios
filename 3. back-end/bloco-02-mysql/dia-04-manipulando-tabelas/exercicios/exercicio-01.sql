USE pixar;

SELECT * FROM movies;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO movies (title, director, `year`, length_minutes) 
VALUES ('Monsters SA', 'Pete Docter', '2001', 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

SELECT * FROM box_office;

INSERT INTO box_office (movie_id, rating, domestic_sales, international_sales)
SELECT id, 6.8, 450000000, 370000000 FROM movies WHERE title LIKE ('%nemo%');

INSERT INTO box_office (movie_id, rating, domestic_sales, international_sales)
SELECT id, 8.5, 300000000, 250000000 FROM movies WHERE title LIKE ('%Monsters SA%');

INSERT INTO box_office (movie_id, rating, domestic_sales, international_sales)
SELECT id, 7.4, 460000000, 510000000 FROM movies WHERE title LIKE ('%Os Incríveis%');

INSERT INTO box_office (movie_id, rating, domestic_sales, international_sales)
SELECT id, 9.9, 290000000, 280000000 FROM movies WHERE title LIKE ('%WALL-E%');

SELECT * FROM movies;
SELECT * FROM box_office;
DELETE FROM box_office WHERE movie_id = 1;
DELETE FROM movies WHERE title LIKE '%WALL-E%';
DELETE FROM movies WHERE director LIKE '%Andrew Stanton%';

