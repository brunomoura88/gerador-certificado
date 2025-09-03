import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button.component";
import { FormsModule } from '@angular/forms';
import { Certificado } from '../../interfaces/certificado';
import { v4 as uuidv4 } from 'uuid';
import { CertificadoService } from '../../_services/certificado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

  constructor(private certificadoService: CertificadoService, private route: Router) {}

  nome: string = '';
  atividade: string = '';
  atividades: string[] = [];

  certificado: Certificado | undefined;



  adicionarAtividade() {
    this.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.atividades.splice(index, 1);
  }

  submit() {
    this.certificado = {
      id: uuidv4(),
      nome: this.nome,
      atividades: this.atividades,
      dataEmissao: this.dataAtual()
    };
    this.certificadoService.adicionarCertificado(this.certificado);

    this.route.navigate(['certificados', this.certificado.id]);

    // // Limpa os campos do formulário
    // this.nome = '';
    // this.atividade = '';
    // this.atividades = [];

  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }

  estadoInicialCertificado(){
    return{
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: ''
    }
  }
}


