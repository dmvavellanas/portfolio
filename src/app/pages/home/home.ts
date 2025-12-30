  import { Component } from '@angular/core';
  import { ProjectCard, TechIcon } from '../../components/project-card/project-card';

  type ProjectCardVM = {
    title: string;
    imageSrc: string;
    imageAlt: string;
    techIcons: TechIcon[];
  };

  @Component({
    selector: 'app-home',
    imports: [
      ProjectCard
    ],
    templateUrl: './home.html',
    styleUrl: './home.scss',
  })
  export class Home {
    public projects: ProjectCardVM[] = [
      {
        title: 'PDF Generation Module for Enterprise Reporting',
        imageSrc: '/assets/images/gotenberg1.jpeg',
        imageAlt: 'PDF Generation Module',
        techIcons: [
          { src: '/assets/icons/angular.svg', alt: 'Angular' },
          { src: '/assets/icons/dotnet.svg', alt: '.NET' },
          { src: '/assets/icons/postgres.png', alt: 'PostgreSQL' },
          { src: '/assets/icons/git.png', alt: 'Git' },
          { src: '/assets/icons/gotenberg.png', alt: 'Gotenberg' },
        ],
      },
      {
        title: 'ETL Pipeline for Historical Data Migration',
        imageSrc: '/assets/images/n8n1.jpeg',
        imageAlt: 'ETL Pipeline',
        techIcons: [
          { src: '/assets/icons/n8n.png', alt: 'n8n' },
          { src: '/assets/icons/postgres.png', alt: 'PostgreSQL' },
        ],
      },
      {
        title: 'Custom Extension of Odoo hr.timesheet Module',
        imageSrc: '/assets/images/odoo1.jpeg',
        imageAlt: 'Odoo Timesheet Extension',
        techIcons: [
          { src: '/assets/icons/odoo.png', alt: 'Odoo' },
          { src: '/assets/icons/python.png', alt: 'Python' },
          { src: '/assets/icons/postgres.png', alt: 'PostgreSQL' },
        ],
      },
      {
        title: 'E-commerce Website for Academic Capstone Project',
        imageSrc: '/assets/images/stayfitbatidos1.png',
        imageAlt: 'E-commerce Website',
        techIcons: [
          { src: '/assets/icons/wordpress.png', alt: 'WordPress' },
          { src: '/assets/icons/figma.png', alt: 'Figma' },
          { src: '/assets/icons/canva.svg', alt: 'Canva' },
        ],
      },
    ];
  }
