CREATE TABLE rum (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  origin VARCHAR(100) NOT NULL
);

CREATE TABLE ingredient (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  unit VARCHAR(50) NOT NULL
);

CREATE TABLE arranged_rum (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  illustration VARCHAR(255),
  rum_id int unsigned not null,
  foreign key(rum_id) references rum(id)
);

CREATE TABLE ingredient_arranged_rum (
  id int unsigned primary key auto_increment not null,
  quantity INT NOT NULL,
  arranged_rum_id int unsigned not null,
  foreign key(arranged_rum_id) references arranged_rum(id),
  ingredient_id int unsigned not null,
  foreign key(ingredient_id) references ingredient(id)
);
