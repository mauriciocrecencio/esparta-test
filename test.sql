--Buscar os nomes de todos os alunos que frequentam alguma turma do professor 'JOAO PEDRO'.
select id from PROFESSOR
where nome = "JOAO PEDRO"

select id from TURMA
where PROFESSOR_id = --ID do joao pedro que peguei no passo anterior

FOR 
select aluno_id from ALUNO_TURMA
where turma_id = --ID da turma que peguei no passo anterior
--armanezar esses turma_id em algum lugar e terminar 
--quando atingir aluno_id.length

FOR
select Nome from  ALUNO
where id = -- aluno_id que peguei no passo anterior
--Terminar loop quando passar por todos os alunos

--#######################################################

-- Buscar os dias da semana que tenham aulas da disciplina 'MATEMATICA'.
select id from DISCIPLINA
where nome = "MATEMATICA"

FOR
select dia_da_semana from TURMA
where DISCIPLINA_id = --id da disciplina que peguei no passo anterior
--Terminar FOR quando percorrer todos os dia_da_semana

--#######################################################

-- Buscar todos os alunos que frequentem aulas de 'MATEMATICA' e também 'FISICA'.
FOR
select id from DISCIPLINA
where nome in ("MATEMATICA", "FISICA")
--Terminar loop quando passar por todas as DISCIPLINAS

FOR
select ALUNO_id from TURMA
--Pega os alunos que frequentam MATEMATICA e FISICA
where DISCIPLINA_id = "id1" and "id2" -- ids do passo acima
--Terminar LOOP quando passar por todas as TURMAS

FOR
select Nome from ALUNO
where id = --ALUNO_id que peguei no passo anterior
--Terminar LOOP quando passar por todos os alunos
