import { Routes } from '@angular/router';
import { CertificadoComponent } from './pages/certificados/certificados';
import { CertificadoForm } from './pages/certificado-form/certificado-form';
import { CertificadoComponent as CertificadoPageComponent } from './pages/certificado/certificado';

export const routes: Routes = [
  {
    path: "",
  component: CertificadoComponent
  },

   {
    path: "certificados/novo",
    component: CertificadoForm
  },

   {
    path: "certificados/:id",
  component: CertificadoPageComponent
  },


];
