CREATE TABLE IF NOT EXISTS moves (
  id SERIAL PRIMARY KEY,
  char_id INT REFERENCES characters(id),
  name VARCHAR(100),
  start_up INT
);