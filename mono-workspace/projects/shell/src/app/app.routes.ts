import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'todo', loadComponent: () => loadRemoteModule('todo', './Component').then((m) => m.App)}
];
