CREATE TABLE wish (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genere genere_list NOT NULL
);