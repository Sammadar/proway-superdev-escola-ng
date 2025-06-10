import { Aluno } from "./aluno";

export class Matricula {
    constructor(private aluno: Aluno, public dataMatricula: Date, public id: number) {}
}

export class MatriculaCadastrar{
    constructor(public aluno_id: number = 0, public curso_id: number = 0) {}
}
