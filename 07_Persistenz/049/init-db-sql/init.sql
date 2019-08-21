BEGIN;

CREATE TABLE users (
    id bigserial primary key,
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    age integer NOT NULL
);

COPY users (id, first_name, last_name, age) FROM stdin;
1	Max	Mustermann	45
2	Moritz	Mustermann	45
3	Petra	Mustermann	46
4	Peter	Mustermann	47

COMMIT;


