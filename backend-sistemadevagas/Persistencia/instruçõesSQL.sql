DROP TABLE Candidato_Vaga;
DROP TABLE Candidato;
DROP TABLE Vaga;
COMMIT;

-- CRIAÇÃO DAS TABELAS DO BANCO DE DADOS
CREATE TABLE Candidato(
	cand_cpf NUMERIC(11) NOT NULL,
	cand_nome VARCHAR(60) NOT NULL,
	cand_endereco VARCHAR(80) NOT NULL,
	cand_telefone VARCHAR(15) NOT NULL,
    CONSTRAINT cand_cpf PRIMARY KEY(cand_cpf)
);

CREATE TABLE Vaga(
    vaga_codigo INT NOT NULL AUTO_INCREMENT,
    vaga_cargo VARCHAR(60) NOT NULL,
    vaga_salario DECIMAL(10,2) NOT NULL,
    vaga_cidade VARCHAR(40) NOT NULL,
    vaga_qtd INT NOT NULL,
    CONSTRAINT vaga_codigo PRIMARY KEY(vaga_codigo)
);

CREATE TABLE Candidato_Vaga (
    data_inscricao DATE NOT NULL,
    horario_inscricao TIME NOT NULL,
    cand_cpf NUMERIC(11) NOT NULL,
    vaga_codigo INT NOT NULL,
    FOREIGN KEY (cand_cpf) REFERENCES Candidato(cand_cpf),
    FOREIGN KEY (vaga_codigo) REFERENCES Vaga(vaga_codigo)
);

-- INSERÇÃO DE DADOS NAS TABELAS DO BANCO DE DADOS
INSERT INTO Candidato(cand_cpf, cand_nome, cand_endereco, cand_telefone)
VALUES(12345678901, 'Benedito Gomide', 'Rua do Lambari nº 123', '(18) 1234-5678');
INSERT INTO Candidato(cand_cpf, cand_nome, cand_endereco, cand_telefone)
VALUES (11122233344, 'Fátima de Paula', 'Av. dos Tucanos nº 456', '(21) 2345-6789');
INSERT INTO Candidato(cand_cpf, cand_nome, cand_endereco, cand_telefone)
VALUES (99988877766, 'Tenório Barbosa', 'Travessa dos Jurupês, 554', '(11) 2222-3333');

INSERT INTO Vaga(vaga_cargo, vaga_salario, vaga_cidade, vaga_qtd)
VALUES ('Desenvolvedor Java', 4500.00, 'São Paulo', 5);
INSERT INTO Vaga(vaga_cargo, vaga_salario, vaga_cidade, vaga_qtd)
VALUES ('Product Owner', 5000.00, 'Bastos', 8);
INSERT INTO Vaga(vaga_cargo, vaga_salario, vaga_cidade, vaga_qtd)
VALUES ('Scrum Master', 6200.00, 'Apiaí', 3);
INSERT INTO Vaga(vaga_cargo, vaga_salario, vaga_cidade, vaga_qtd)
VALUES ('Recepcionista', 3100.00, 'Palmas', 2);
INSERT INTO Vaga(vaga_cargo, vaga_salario, vaga_cidade, vaga_qtd)
VALUES ('Motorista de caminhão', 2500.00, 'Niterói', 4);
INSERT INTO Vaga(vaga_cargo, vaga_salario, vaga_cidade, vaga_qtd)
VALUES ('Gari', 1800.00, 'Cuiabá', 12);
INSERT INTO Vaga(vaga_cargo, vaga_salario, vaga_cidade, vaga_qtd)
VALUES ('Eletricista', 4300.00, 'Manaus', 6);

INSERT INTO Candidato_Vaga(data_inscricao, horario_inscricao, cand_cpf, vaga_codigo)
VALUES ('2023-06-01', '10:00:00', 12345678901, 1);
INSERT INTO Candidato_Vaga(data_inscricao, horario_inscricao, cand_cpf, vaga_codigo)
VALUES ('2023-06-01', '11:00:00', 12345678901, 5);
INSERT INTO Candidato_Vaga(data_inscricao, horario_inscricao, cand_cpf, vaga_codigo)
VALUES ('2023-07-02', '14:30:00', 11122233344, 1);
INSERT INTO Candidato_Vaga(data_inscricao, horario_inscricao, cand_cpf, vaga_codigo)
VALUES ('2023-08-03', '09:00:00', 11122233344, 2);