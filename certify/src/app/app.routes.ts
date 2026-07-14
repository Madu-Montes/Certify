import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { UploadCard } from './components/upload-card/upload-card';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'upload',
    component: UploadCard
  }
];
