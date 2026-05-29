CREATE DATABASE EscolaIdiomas;
USE EscolaIdiomas;

CREATE TABLE Aluno (
    id_aluno INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20)
);

CREATE TABLE Professor (
    id_professor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    especialidade VARCHAR(50)
);

CREATE TABLE Curso (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    nivel VARCHAR(50)
);

CREATE TABLE Turma (
    id_turma INT AUTO_INCREMENT PRIMARY KEY,
    id_curso INT,
    id_professor INT,
    horario VARCHAR(50),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso),
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor)
);

CREATE TABLE Matricula (
    id_matricula INT AUTO_INCREMENT PRIMARY KEY,
    id_aluno INT,
    id_turma INT,
    data_matricula DATE,
    FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
    FOREIGN KEY (id_turma) REFERENCES Turma(id_turma)
);

CREATE TABLE Pagamento (
    id_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    id_matricula INT,
    valor DECIMAL(10,2),
    data_pagamento DATE,
    FOREIGN KEY (id_matricula) REFERENCES Matricula(id_matricula)
);

