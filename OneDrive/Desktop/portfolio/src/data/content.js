// All portfolio content — edit this file to customize your portfolio
export const content = {
    name: 'Spandan Behera',
    title: 'B.Tech CSE · AI/ML · Data Science · Deep Learning',
    tagline: 'I love turning messy data into AI systems that actually work.',

    about: {
        intro: `Hey, I'm Spandan. I'm currently studying Computer Science at ITER, SOA University. I spend most of my time building machine learning models that actually do something useful, whether that's figuring out how bad the air quality is going to be or catching fraudulent transactions before they happen.`,
        details: [
            '🎓 Studying B.Tech CSE at ITER, SOA (Class of 2026)',
            '📊 Keeping up a 6.92 CGPA while coding on the side',
            '🤖 Mostly training models, cleaning data, and building AI tools',
            '🛠️ My daily drivers right now: Python, PyTorch, Scikit-learn, and Streamlit',
            '🏆 Survived 3 days of coding and grabbed 1st Place at a GenAI Hackathon!',
            '🌍 Writing code from Sambalpur, Odisha, India',
        ],
        funFact: 'I actually built an AI that recommends career paths for fun, and it told me I should be an AI engineer. Guess it worked! 🤖',
    },

    projects: [
        {
            id: 5,
            title: 'Satellite AI Dump Detection',
            description: 'I built this computer vision tool to spot illegal garbage dumps straight from space! I trained a ResNet model using PyTorch on aerial images, and wrapped it in a Streamlit app so anyone can just upload a picture and see the results instantly.',
            tags: ['Python', 'PyTorch', 'ResNet', 'Streamlit', 'Computer Vision'],
            color: '#ff9f1c',
            link: 'https://github.com/SpandanBehera',
            date: 'Feb 2026',
        },
        {
            id: 1,
            title: 'Air Quality Index Predictor',
            description: 'I was curious if I could predict the air quality based on NO₂ and PM2.5 levels, so I grabbed some real environmental data and put a few models to the test to see which one nailed it best.',
            tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
            color: '#06d6a0',
            link: 'https://github.com/SpandanBehera',
            date: 'May 2025',
        },
        {
            id: 2,
            title: 'AI Career Path Recommender',
            description: 'This is a fun little web app I threw together. You just type in your skills and interests, and a Random Forest model figures out what career you should pursue. It even creates a personalized learning roadmap for you!',
            tags: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
            color: '#00fff5',
            link: 'https://github.com/SpandanBehera',
            date: 'July 2025',
        },
        {
            id: 3,
            title: 'Fraud Detection using Neural Nets',
            description: 'I wrote a deep learning model in Keras to catch credit card fraudsters. Working with highly imbalanced datasets was tricky, so I spent a bunch of time tweaking optimizers like Adam to get it to actually work well.',
            tags: ['Python', 'Keras', 'TensorFlow', 'NumPy', 'Pandas'],
            color: '#9d4edd',
            link: 'https://github.com/SpandanBehera',
            date: 'July 2025',
        },
        {
            id: 4,
            title: 'Siksha Sathi (Multilingual AI Tutor)',
            description: 'This one won me a hackathon! It’s an AI education assistant that can speak multiple languages. You can ask it questions or have it generate study guides, and it uses LLMs to help you prep for exams.',
            tags: ['Python', 'Streamlit', 'Generative AI', 'LLMs', 'Edu Chain'],
            color: '#f72585',
            link: 'https://github.com/SpandanBehera',
            date: 'Jul 2025',
        },
    ],

    skills: {
        'Languages': ['Python', 'Java', 'C'],
        'AI / ML': ['Scikit-learn', 'Keras', 'TensorFlow', 'Pandas', 'NumPy'],
        'Visualization': ['Matplotlib', 'Seaborn'],
        'Web & Tools': ['Streamlit', 'Generative AI / LLMs', 'Postman'],
        'Dev Tools': ['Git', 'GitHub', 'MySQL', 'VS Code', 'IntelliJ', 'Eclipse'],
    },

    hackathons: [
        {
            title: '🥇 1st Place - GenAI Hackathon',
            org: 'KIIT University × IIT Bhubaneswar',
            date: 'Jul 2025',
            description: 'Me and my team actually took home first place here! We spent 3 straight days building Siksha Sathi from scratch.',
        },
        {
            title: 'Siksha Sathi (The Project)',
            org: 'Odia Generative AI Hackathon',
            date: 'Jul 2025',
            description: 'We hacked together a multilingual AI tutor that creates custom study roadmaps and helps students prep for exams using generative AI.',
        },
    ],

    contact: {
        email: 'spandanbehera003@gmail.com',
        github: 'https://github.com/SpandanBehera',
        linkedin: 'https://www.linkedin.com/in/spandan-behera',
        phone: '+91 7377325259',
    },

    resume: {
        link: '#', // Add your resume Google Drive / PDF link here
        lastUpdated: 'Feb 2026',
    },
}
