import { Component } from '@angular/core';
import { ProjectCard, TechIcon } from '../../components/project-card/project-card';
import { ProjectDialog, ProjectDialogData } from '../../components/project-dialog/project-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FishBackground } from '../../components/fish-background/fish-background';

type ProjectCardVM = ProjectDialogData & {
  techIcons: TechIcon[];
};

@Component({
  selector: 'app-home',
  imports: [
    ProjectCard,
    MatTooltipModule,
    FishBackground
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private dialog: MatDialog) { }

  public projects: ProjectCardVM[] = [
    {
      title: 'PDF Generation Module for Enterprise Reporting',
      imageSrc: './assets/images/gotenberg1.jpeg',
      imageAlt: 'PDF Generation Module',
      techIcons: [
        { src: './assets/icons/angular.svg', alt: 'Angular' },
        { src: './assets/icons/dotnet.svg', alt: '.NET' },
        { src: './assets/icons/postgres.png', alt: 'PostgreSQL' },
        { src: './assets/icons/git.png', alt: 'Git' },
        { src: './assets/icons/gotenberg.png', alt: 'Gotenberg' },
      ],
      context:
        'An enterprise invoice trading platform required a reporting module capable of generating PDF documents containing settlement summaries, purchase details, and purchase certificates. The solution needed to be scalable and reusable for future reporting processes.',
      role: 'Full-Stack Software Developer',
      stackText: 'Angular, .NET, PostgreSQL, Git, Gotenberg',
      whatIDid: [
        'Designed a reusable and extensible PDF generation flow to avoid duplicated logic and support future reporting requirements.',
        'Implemented the complete end-to-end flow, from an Angular dialog component (UI, TypeScript logic, and services) to backend endpoints responsible for PDF generation.',
        'Developed backend APIs in .NET to generate PDFs dynamically based on input parameters and integrated Gotenberg as the rendering engine.',
        'Created PostgreSQL functions to process parameters received from the frontend and return structured data required for PDF rendering.',
        'Built the base HTML template for the PDF documents, aligned with the provided design guidelines.',
      ],
      notes: 'Screenshots and code are limited due to confidentiality.',
      screenshots: [
        './assets/images/gotenberg1.jpeg',
        './assets/images/gotenberg2.jpeg'
      ],
    },
    {
      title: 'ETL Pipeline for Historical Data Migration',
      imageSrc: './assets/images/n8n1.jpeg',
      imageAlt: 'ETL Pipeline',
      techIcons: [
        { src: './assets/icons/n8n.png', alt: 'n8n' },
        { src: './assets/icons/postgres.png', alt: 'PostgreSQL' },
      ],
      context:
        'Over several years, the client had stored financial movements and endorsements in Excel files. These historical records needed to be migrated into the new enterprise application in a structured and reliable way.',
      role: 'Back-End Software Developer',
      stackText: 'n8n, PostgreSQL',
      whatIDid: [
        'Designed and implemented an ETL pipeline using n8n to process Excel files containing historical data.',
        'Loaded raw data into staging tables to ensure traceability and data validation.',
        'Developed PostgreSQL functions to transform and normalize staged data into prepared tables following business rules.',
        'Executed the final data load from prepared tables into production tables used by the application.',
        'Ensured data consistency and repeatability of the migration process.',
      ],
      notes: 'Screenshots and code are limited due to confidentiality.',
      screenshots: [
        './assets/images/n8n1.jpeg'
      ],
    },
    {
      title: 'Custom Extension of Odoo hr.timesheet Module',
      imageSrc: './assets/images/odoo1.jpeg',
      imageAlt: 'Odoo Timesheet Extension',
      techIcons: [
        { src: './assets/icons/odoo.png', alt: 'Odoo' },
        { src: './assets/icons/python.png', alt: 'Python' },
        { src: './assets/icons/postgres.png', alt: 'PostgreSQL' },
      ],
      context:
        'The company previously relied on paper-based processes and an outdated time-tracking system. To modernize operations, Odoo was adopted, and its timesheet module needed to be extended to replicate and improve existing workflows, including enhanced reporting capabilities.',
      role: 'Full-Stack Software Developer',
      stackText: 'Odoo, Python, PostgreSQL',
      whatIDid: [
        'Extended the Odoo hr.timesheet module to align its behavior with the legacy time-tracking system.',
        'Implemented custom business logic to support existing operational workflows while improving usability.',
        'Developed a new dialog-based feature that generates Excel reports based on configurable parameters.',
        'Integrated the reporting functionality with Odoo’s data models to produce accurate employee time reports.'
      ],
      notes: 'Screenshots and code are limited due to confidentiality.',
      screenshots: [
        './assets/images/odoo1.jpeg',
        './assets/images/odoo2.jpeg',
        './assets/images/odoo3.jpeg',
        './assets/images/odoo4.jpeg',
        './assets/images/odoo5.jpeg',
        './assets/images/odoo6.jpeg'
      ],
    },
    {
      title: 'E-commerce Website for Academic Capstone Project',
      imageSrc: './assets/images/stayfitbatidos1.png',
      imageAlt: 'E-commerce Website',
      techIcons: [
        { src: './assets/icons/wordpress.png', alt: 'WordPress' },
        { src: './assets/icons/figma.png', alt: 'Figma' },
        { src: './assets/icons/canva.svg', alt: 'Canva' },
        { src: './assets/icons/adobe-illustrator.png', alt: 'Adobe Illustrator' },
      ],
      context:
        'As a final academic project, a client-based scenario was defined to simulate a real business case. A fictional smoothie company was created, requiring a website where customers could place orders online.',
      role: 'Front-End Software Developer',
      stackText: 'Wordpress, Figma, Canva, Adobe Illustrator',
      whatIDid: [
        'Designed the brand identity and visual style of the project.',
        'Created high-fidelity UI mockups in Figma, focusing on usability and visual consistency.',
        'Implemented the complete WordPress website based on the approved designs.',
        'Developed a fully functional online store, enabling users to browse products and place orders.'
      ],
      notes: 'Screenshots and code are limited due to confidentiality.',
      screenshots: [
        './assets/images/stayfitbatidos1.png',
        './assets/images/stayfitbatidos2.png',
        './assets/images/stayfitbatidos3.png',
        './assets/images/stayfitbatidos4.png',
        './assets/images/stayfitbatidos5.png',
        './assets/images/stayfitbatidos6.png',
      ],
    },
  ];

  public openProject(p: ProjectCardVM): void {
    this.dialog.open(ProjectDialog, {
      data: p,
      maxWidth: '900px',
      width: '95vw',
      panelClass: 'project-dialog-panel',
    });
  }
}
