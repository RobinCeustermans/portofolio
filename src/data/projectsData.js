import library from'../assets/png/LibraryDB.png';
import daems from '../assets/png/giovanni-daems.png';

export const projectsData = [
    {
        id: 1,
        projectName: 'Library Database',
        projectDesc: 'Voor de vakken Agile & Testen en Gevorderde Programmeertechnieken heb ik met mijn groepsleden ' +
            'Maarten Hens, Wouter Mertens en Cédric Smets een bibbliotheekapplicatie gemaakt.' +
            ' We dienden met C# te werken en alle geleerde technieken toepassen voor dit project zoals ' +
            'Code-first, het MVVM-principe en Entity Framework. ' +
            'De UI is gemaakt via WPF, we hebben gewerkt met User Controls om zo te vermijden' +
            ' dat we veel aparte Windows moesten gebruiken.' +
            'We hebben volledig Agile gewerkt, meerspecifiek Scrum, waarbij we zaken zoals sprint' +
                ' reviews dienden uit te voeren.',
        tags: ['C#', 'WPF' ,'Entity Framework', 'MSSQL'],
        code: '',
        demo: 'https://github.com/RobinCeustermans/library',
        image: library
    },
    {
        id: 2,
        projectName: 'Giovanni Daems',
        projectDesc: 'Tijdens mijn stage bij Krachtig Online heb ik voor de klant Giovanni Daems meerdere dingen' +
            ' aangepast aan hun website. Zo diende ik via Elementor visuele aanpassingen door te voeren ' +
            'zoals enkele visuele bugs en de responsieve weergave. Een bijkomnde opdracht was het verbeteren van ' +
            'de webshop. Ik diende ervoor te zorgen dat de labour costs visueel automatisch werden aangepast ' +
            'als er een bepaal aantal van een product wordt geselecteerd. Dit heb ik kunnn doen door JavaScript toe ' +
            'te voegen in de Wordpress back-end.',
        tags: ['Wordpress', 'Elementor', 'CSS','Javascript'],
        code: '',
        demo: 'https://daems-giovanni.com/',
        image: daems
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/*
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
},
*/
