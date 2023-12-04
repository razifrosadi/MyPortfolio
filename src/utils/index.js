const designData = [
    {
      title: 'Full Stack Web Development',
      icon: 'fa-code',
      description: 'Codeigniter 3, Bootstrap 5, SQL Database.',
    },
    {
      title: 'Frontend Web Development',
      icon: 'fa-code',
      description: 'HTML, CSS, Javascript, and React',
    },
    {
      title: 'Graphic Design',
      icon: 'fa-paint-brush',
      description: 'Adobe Photoshop, Affinity Designer, Canva, and Figma.',
    },
  ];

  const introductionTexts = [
    {
      title: "Hello! I'm Razif Ilham Rosadi",
      subtitle: 'Designing the entire website',
      content:
        "I have skills in designing websites using the Codeigniter 3 framework, where I implement the MVC (Model-View-Controller) concept to facilitate code maintenance. Additionally, I comprehend routing concepts to manage URLs more efficiently. For the framework, I am accustomed to using Bootstrap to design responsive and aesthetic interfaces. Regarding database usage, I frequently employ SQL Database. I have experience using SQL language for data manipulation, such as SELECT, INSERT, UPDATE, and DELETE, along with other functionalities for relational database management.",
    },
    {
      title: "Hello! I'm Razif Ilham Rosadi",
      subtitle: "Designing dynamic and responsive website interfaces",
      content:
        'I possess proficiency in crafting visually appealing and responsive websites as a front-end web developer. My expertise lies in utilizing HTML, CSS, and JavaScript to create dynamic and engaging user interfaces. Additionally, I am experienced in implementing React, a JavaScript library, to build interactive and efficient single-page applications. My commitment to clean and maintainable code ensures seamless navigation and an aesthetically pleasing user experience.',
    },
    {
      title: "Hello! I'm Razif Ilham Rosadi",
      subtitle: 'Designing animations using vectors',
      content:
        'As a graphic designer, I excel in creating visually compelling designs, proficiently operating tools within Adobe Photoshop and Affinity Designer. My expertise extends to utilizing these platforms for image manipulation, graphic creation, and layout design. I am skilled in leveraging the diverse range of tools each software offers, ensuring precision and creativity in my design work.',
    },
  ];

  const project = [
    {
      id: "1",
      title: "Website Ekstrakurikuler",
      techStack1: "Codeigniter 3",
      techStack2: "Bootstrap 5",
      images: "./images/webekskul.jpg",
      icon: "bx bxl-github",
      deploy: "https://github.com/razifrosadi/website-ekskul",
    },
    {
      id: "2",
      title: "'YoungMinds' Website Konsultasi Remaja",
      techStack1: "HTML CSS",
      techStack2: "JAVASCRIPT",
      images: "./images/webkonsul.jpg",
      icon: "bx bxl-netlify",
      deploy: "https://youngmind.netlify.app/",
    },
    {
      id: "3",
      title: "Movie Catalogue Apps",
      techStack1: "HTML CSS",
      techStack2: "JAVASCRIPT (PWA)",
      images: "./images/movie.jpg",
      icon: "bx bxl-github",
      deploy: "https://github.com/razifrosadi/Movie-Catalogue-Apps",
    },
    {
      id: "4",
      title: "Rosadi Restaurant",
      techStack1: "HTML CSS",
      techStack2: "JAVASCRIPT",
      images: "./images/rosadiresto.jpg",
      icon: "bx bxl-github",
      deploy: "https://github.com/razifrosadi/rosadi-restaurant-app",
    },
    {
      id: "5",
      title: "Book Shelf",
      techStack1: "HTML CSS",
      techStack2: "JAVASCRIPT",
      images: "./images/bookshelf.jpg",
      icon: "bx bxl-github",
      deploy: "https://github.com/razifrosadi/Bookshelf-Apps",
    },
    {
      id: "6",
      title: "Personal Notes",
      techStack1: "REACT",
      techStack2: "VITE",
      images: "./images/personalnotes.jpg",
      icon: "bx bxl-github",
      deploy: "https://github.com/razifrosadi/Personal-Notes-App",
    },
  ];

  const certificated = [
    {
      id: "1",
      title: "Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software",
      images: "./images/FE-DASARPEMROGRAMANUNTUKMENJADIPENGEMBANG.PNG",
      link: "https://www.dicoding.com/certificates/ERZR0D44NXYV",
    },
    {
      id: "2",
      title: "Pengenalan ke Logika Pemrograman",
      images: "./images/FE-LOGIKAPEMROGRAMAN.PNG",
      link: "https://www.dicoding.com/certificates/MEPJKWV44X3V",
    },
    {
      id: "3",
      title: "Belajar Dasar Git dengan Github",
      images: "./images/FE-GITDENGANGITHUB.PNG",
      link: "https://www.dicoding.com/certificates/6RPN6J3K5P2M",
    },
    {
      id: "4",
      title: "Belajar Dasar Pemrograman JavaScript",
      images: "./images/FE-JAVASCRIPT.PNG",
      link: "https://www.dicoding.com/certificates/0LZ0GL0G3X65",
    },
    {
      id: "5",
      title: "Belajar Dasar Pemrograman Pemrograman Web",
      images: "./images/FE-DASARPEMROGRAMANWEB.PNG",
      link: "https://www.dicoding.com/certificates/ERZR08VOOXYV",
    },
    {
      id: "6",
      title: "Belajar Membuat Front-End Web Untuk Pemula",
      images: "./images/FE-FRONTENDWEBPEMULA.PNG",
      link: "https://www.dicoding.com/certificates/81P28E298POY",
    },
    {
      id: "7",
      title: "Belajar Fundamental Front-End Web Development",
      images: "./images/FE-FUNDAMENTALFE.PNG",
      link: "https://www.dicoding.com/certificates/JMZV9ME9JPN9",
    },
    {
      id: "8",
      title: "Belajar Membuat Aplikasi Back-End Untuk Pemula",
      images: "./images/FE-BACKENDPEMULA.PNG",
      link: "https://www.dicoding.com/certificates/JLX1D9YVJZ72",
    },
    {
      id: "9",
      title: "Menjadi Front-End Web Developer Expert",
      images: "./images/FE-EXPERT.PNG",
      link: "https://www.dicoding.com/certificates/07Z6V3NWJXQR"
    },
    {
      id: "10",
      title: "Meniti Karier Sebagai Software Developer",
      images: "./images/FE-MENITIKARIER.PNG",
      link: "https://www.dicoding.com/certificates/1OP80JND2XQK",
    },
    {
      id: "11",
      title: "SIB X Dicoding Cycle 4",
      images: "./images/FE-SIB.PNG",
      link: "",
    },
    {
      id: "12",
      title: "Belajar Membuat Aplikasi Web dengan React",
      images: "./images/FE-BelajarMembuatAplikasiReact.PNG",
      link: "https://www.dicoding.com/certificates/0LZ0QK8OKZ65",
    },
  ];

  export { designData, introductionTexts, project, certificated };