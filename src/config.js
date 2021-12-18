// config.js
module.exports = {
    github: {
        username: 'tanseigi', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: ['laravel-ecommerce'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'mightbebot',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://tanseigi.github.io',
        phone: '',
        email: 'tanmaySinNegi@gmail.com'
    },
    skills: [
        'PHP',
        'Laravel',
        'JavaScript',
        'React.js',
        'Node.js',
        'MySQL',
        'Git',
        'Docker',
        'CSS',
        'Antd',
        'Tailwind',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'Nella Operations',
            position: 'Jr. System Administrator',
            from: 'September 2021',
            to: 'Present'
        },
        { 
            company: 'CSIRO (AU)',
            position: 'ML Research Assistant',
            from: 'August 2020',
            to: 'August 2021'
        },
        { 
            company: 'RoboGals [ANU]',
            position: 'Team Coordinator',
            from: 'July 2019',
            to: ' December 2020'
        }
    ],
    education: [
        { 
            institution: 'Australian National University',
            degree: 'Bachelor of Adv. Computing (Hon)',
            from: '2018',
            to: '2021'
        },
        { 
            institution: 'Manipal Institute of Higher Education',
            degree: 'Tertiary Education in Applied Physics; Bach. of Science',
            from: '2016',
            to: '2018',
        },
        { 
            institution: 'Doon International School',
            degree: 'Secondary School Certificate (SSC)',
            from: '2015',
            to: '2017'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: '', // medium | dev.to
        username: '',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '', //  Please remove this and use your own id or keep it empty
        snippetVersion : 6
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
