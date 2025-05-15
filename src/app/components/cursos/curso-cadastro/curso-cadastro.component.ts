import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CursoCadastro } from '../../../models/curso-cadastro';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMask } from 'primeng/inputmask';

@Component({
  selector: 'app-curso-cadastro',
  imports: [FormsModule, InputTextModule, ButtonModule, FloatLabelModule, InputMask],
  templateUrl: './curso-cadastro.component.html',
  styleUrl: './curso-cadastro.component.css'
})
export class CursoCadastroComponent {
  curso: CursoCadastro;
  constructor(){
    this.curso = new CursoCadastro();
  }

}
