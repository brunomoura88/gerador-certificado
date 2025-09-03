import { Component, input, Input } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';
  @Input() id: String = '';


  constructor(private router: Router){}

  redirecionaCertificado(){
    this.router.navigate(['/certificados', this.id]);
  }
}
