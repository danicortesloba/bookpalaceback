import client from "../db/db";

client.query("CREATE TABLE IF NOT EXISTS books(
  id SERIAL PRIMARY KEY,
  title VARCHAR(300) NOT NULL,
  author_id Number,
  genre_id Number,
  PRIMARY KEY(id),
  CONSTRAINT fk_author
      FOREIGN KEY(author_id) 
      REFERENCES authors(author_id),
  CONSTRAINT fk_genre
      FOREIGN KEY(genre_id) 
	  REFERENCES genres(genre_id)
)")