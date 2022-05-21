import library from'../assets/png/LibraryDB.png'
import portofolio from '../assets/png/portofolio.png'

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
        projectName: 'Portofolio website',
        projectDesc: 'Deze hoogsteigen portofolio website is door mezelf gemaakt.' +
            ' Hier heb ik met het React Javascript Framework gewerkt.' +
            ' Ik heb hier gewerkt met componenten, die de data dynamisch toepast,' +
            ' deze componenten worden vervolgens samen opgehaald, zodat er geen overbodige code komt' +
            ' te staan in de index',
        tags: ['HTML', 'CSS','Javascript','Typescrit', 'React'],
        code: '',
        demo: 'https://github.com/RobinCeustermans/portofolio',
        image: portofolio
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
