import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';
import { Homepage } from './pages/homepage/homepage';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Contacts } from './pages/contacts/contacts';
import { Skills } from './pages/skills/skills';
import { Experience } from './pages/experience/experience';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Homepage
            },
            {
                path: 'homepage',
                component: Homepage
            },
            {
                path: 'contacts',
                component: Contacts
            },
            {
                path: 'skills',
                component: Skills
            },
            {
                path: 'experience',
                component: Experience

            }
        ]
    },
    {
        path: '**',
        component: NotFound
    }
];
