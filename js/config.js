/**
 * Site-wide configuration — update links and content here.
 */
const SITE_CONFIG = {
  name: 'Bilal Ahmed',
  brand: 'bilal.dev',
  role: 'AI Engineer',
  location: 'Islamabad, Pakistan',
  graduationYear: "'28",
  copyrightYear: 2026,

  links: {
    github: 'https://github.com/Bilal-Ahmed4',
    linkedin: 'https://www.linkedin.com/in/bilal-ahmed-43047a372/',
    email: 'bilalahmedaka1@gmail.com',
    cv: 'assets/bilal-ahmed-cv.pdf',
  },

  stats: [
    { value: '3', label: 'projects shipped' },
    { value: '3.06', label: 'CGPA at NUST' },
    { value: '20+', label: 'technologies' },
    { value: "'28", label: 'graduation year' },
  ],

  projects: [
    {
      label: 'featured project',
      tag: 'AI Engineering',
      title: 'FinMate AI',
      description:
        'Full-stack AI banking assistant for Pakistan using FastAPI and React. RAG pipeline powered by LangChain and ChromaDB retrieves grounded answers from banking documents with source citations. Switchable Groq (LLaMA3) and OpenAI providers, document upload, conversation history, and banking calculator tools.',
      stack: ['Python', 'FastAPI', 'React', 'LangChain', 'ChromaDB', 'Groq', 'OpenAI'],
      liveUrl: null,
      githubUrl: 'https://github.com/Bilal-Ahmed4/finmate-ai',
    },
    {
      label: 'project',
      tag: 'Full-Stack',
      title: 'Nova AI Chatbot',
      description:
        'Full-stack AI chatbot using Google Gemini 2.5 Flash with a React + Vite frontend, real-time streaming responses, Markdown rendering, image attachments, and conversation persistence via Node.js and Express backend.',
      stack: ['React', 'Vite', 'Node.js', 'Express', 'Gemini API', 'LangChain'],
      liveUrl: 'https://nova-ai-chat-ten.vercel.app',
      githubUrl: 'https://github.com/Bilal-Ahmed4/nova-ai-chat',
    },
    {
      label: 'project',
      tag: 'Algorithms',
      title: 'Turing Machine Calculator',
      description:
        'Interactive Turing Machine simulator that performs arithmetic using unary tally representation on an infinite tape. Step-through visualization of addition, subtraction, multiplication, and division built with vanilla JavaScript.',
      stack: ['JavaScript', 'HTML5', 'CSS3', 'Algorithms'],
      liveUrl: null,
      githubUrl: 'https://github.com/Bilal-Ahmed4/Turing-Machine-Calculator',
    },

  ],

  skillCategories: [
    {
      label: 'Languages',
      items: ['Python', 'JavaScript', 'C++', 'Java', 'HTML5', 'CSS3'],
    },
    {
      label: 'AI / ML & Data',
      items: [
        'LangChain',
        'HuggingFace',
        'ChromaDB',
        'RAG Pipelines',
        'Prompt Engineering',
        'LLM Evaluation',
        'Pandas',
        'NumPy',
      ],
    },
    {
      label: 'Backend',
      items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
    },
    {
      label: 'Frontend',
      items: ['React', 'Vite', 'Tailwind CSS'],
    },
    {
      label: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'ChromaDB'],
    },
    {
      label: 'Tools & Infrastructure',
      items: ['Docker', 'Git', 'GitHub', 'Linux', 'Vercel'],
    },
  ],

  tools: [
    'react',
    'javascript',
    'python',
    'github',
    'fastapi',
    'langchain',
    'docker',
    'tailwind',
    'nodejs',
    'mongodb',
  ],

  education: {
    period: '2024 — present',
    degree: 'BS Computer Science',
    institution: 'NUST — National University of Sciences & Technology, Islamabad',
    coursework: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'Database Systems',
      'Computer Networks',
      'AI',
      'Web Engineering',
    ],
  },
};
