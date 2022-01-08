CREATE DATABASE quicknew;

CREATE TABLE savednews(
  id SERIAL PRIMARY KEY,
  abstract VARCHAR(250),
  byline VARCHAR(250),
  title VARCHAR(250),
  multimediaurl VARCHAR(250),
  multimediacaption VARCHAR(250),
  urlink VARCHAR(250),
  section VARCHAR(250)
);