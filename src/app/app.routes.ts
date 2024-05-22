import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';

export const routes: Routes = [
    { path: 'formulario', component: FormularioComponent },
    { path: 'tabla', component: TablaComponent },
    { path: '', redirectTo: '/formulario', pathMatch: 'full'}
];