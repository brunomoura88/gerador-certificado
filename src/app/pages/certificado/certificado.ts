import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Certificado } from '../../interfaces/certificado';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class CertificadoComponent implements OnInit {
  id: string | null = null;
  certificado: Certificado | undefined;

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.certificado = this.certificadoService.certificados.find(item => item.id == this.id);
    })

  }

  downloadCertificado(){
    html2canvas(this.certificadoElement.nativeElement).then(
      canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificado.png';
        link.click();
      }
    )
  }

}
