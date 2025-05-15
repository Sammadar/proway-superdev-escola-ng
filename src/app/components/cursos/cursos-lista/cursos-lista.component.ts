import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Component } from '@angular/core';
import { Curso } from '../../../models/curso';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cursos-lista',
  imports: [ButtonModule, TableModule, CommonModule, ToastModule, ConfirmDialogModule],
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.css',
  providers: [MessageService, ConfirmationService]
})
export class CursosListaComponent {
  cursos: Array<Curso>;

  constructor(private router: Router,private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.cursos = [
      new Curso(1, "Angular", "ANG"),
      new Curso(1, "CSS 3", "CSS"),
      new Curso(1, "Banco de Dados MYSQL", "MSQ"),
    ]
  }

  RedirecionarPaginaCadastro() {
    this.router.navigate(["/cursos/cadastro"])
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
              this.messageService.add({ severity: 'info', summary: 'Apagado', detail: 'Curso apagado' });
          },
          reject: () => {
              this.messageService.add({
                  severity: 'error',
                  summary: 'Cancelado',
                  detail: 'Curso intacto',
                  life: 3000,
              });
          },
      });
  }
}


