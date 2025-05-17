import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Aluno } from '../../../models/aluno';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DataHoraCustomizadaPipe } from '../../../pipes/data-hora-customizada.pipe';
import { DatePipe } from '@angular/common';
import { FormatarCpfPipe } from '../../../pipes/formatar-cpf.pipe';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlunoCadastro } from '../../../models/aluno-cadastro';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';


@Component({
  selector: 'app-alunos-lista',
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    TableModule,
    DataHoraCustomizadaPipe,
    FormatarCpfPipe,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    DatePicker,
    InputMaskModule,
  ],
  templateUrl: './alunos-lista.component.html',
  styleUrl: './alunos-lista.component.css',
  providers: [
    DataHoraCustomizadaPipe,
    DatePipe,
    FormatarCpfPipe,
    ConfirmationService,
    MessageService]
})
export class AlunosListaComponent {
  alunos: Aluno[];
  alunoCadastro: AlunoCadastro; // objeto que será utilizado na dialog(modal) para cadastrar

  visible: boolean = false;
  dataMinima: Date;
  dataMaxima: Date;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.alunos = [
      new Aluno("Matheus", "da Silva", new Date(2000, 4, 5), 1, "123.456.789-10"),
      new Aluno("Maria", "da Silva", new Date(2000, 4, 5), 2, "34523675081")
    ]

    this.alunoCadastro = new AlunoCadastro();

    let dataHoraAgora = new Date(Date.now());

    this.dataMinima = new Date(1900, 0, 1);
    this.dataMaxima = new Date(dataHoraAgora.getFullYear(), dataHoraAgora.getMonth(), dataHoraAgora.getDate())
  }

  abrirModalCadastrar() {
    this.visible = true;
  }
  confirm1(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Deseja realmente apagar?',
      header: 'CUIDADO',
      closable: true,
      closeOnEscape: true,
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Não',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Sim',
      },
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Apagado', detail: 'Aluno apagado' });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Cancelado',
          detail: 'Aluno intacto',
          life: 3000,
        });
      },
    });
  }
}
