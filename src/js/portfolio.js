document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      id: 1,
      name: "FreshCheck App",
      imageUrl: "freshcheck-app",
      status:
        "Cegah pembelian buah dan sayuran yang tidak segar! FreshCheck App memanfaatkan kecerdasan buatan untuk menilai kesegaran bahan makanan Anda dalam sekejap.",
      tech: "Kotlin, XML",
      github: null,
      demo: null,
    },
    {
      id: 2,
      name: "DexShop App",
      imageUrl: "dexshop-app",
      status:
        "DexShop App memudahkan pengelolaan inventaris toko pakaian Anda. Aplikasi ini mengoptimalkan stok, memberikan pengingat untuk pesanan, dan meningkatkan penjualan dengan solusi inovatif.",
      tech: "Kotlin, XML",
      github: null,
      demo: null,
    },
    {
      id: 3,
      name: "Presensi Seven Inc",
      imageUrl: "presensi-seven-inc",
      status:
        "Website ini dirancang untuk mengelola karyawan di Seven Inc. Dengan fitur presensi, penggajian, dan manajemen karyawan, proses pengelolaan menjadi lebih efisien.",
      tech: "Laravel, Bootstrap",
      github: null,
      demo: null,
    },
    {
      id: 4,
      name: "Trebez App",
      imageUrl: "trebez-app",
      status:
        "Trebez App adalah aplikasi edukasi keselamatan berkendara yang membantu Anda menjadi pengemudi yang lebih bertanggung jawab dan terampil.",
      tech: "Kotlin, XML",
      github: null,
      demo: null,
    },
    {
      id: 5,
      name: "Sistem Inklusi Aisyiyah",
      imageUrl: "inklusi-aisyiyah",
      status:
        "Sistem Inklusi Aisyiyah adalah situs web untuk melaporkan data inklusi di Aisyiyah di seluruh Indonesia.",
      tech: "Codeigniter 3, Bootstrap",
      github: null,
      demo: null,
    },
    {
      id: 6,
      name: "Helpdesk BSI",
      imageUrl: "helpdesk-bsi",
      status:
        "Helpdesk BSI adalah situs web untuk mencatat keluhan dan permintaan bantuan dari mahasiswa secara efisien.",
      tech: "Codeigniter 3, Bootstrap",
      github: null,
      demo: null,
    },
    {
      id: 7,
      name: "Sistem Karyawan",
      imageUrl: "sistem-karyawan",
      status:
        "Sistem Karyawan adalah situs web yang mempermudah pengelolaan data karyawan, mulai dari absensi hingga penggajian.",
      tech: "Laravel, Bootstrap",
      github: "https://github.com/amaralfatah/sistem-karyawan",
      demo: null,
    },
    {
      id: 8,
      name: "Posyandu Melati",
      imageUrl: "posyandu-melati",
      status:
        "Posyandu Melati adalah situs web yang memindahkan proses pelaporan posyandu ke platform daring, melakukan analisis data, dan menghasilkan Kartu Menuju Sehat sebagai output.",
      tech: "Laravel, Bootstrap",
      github: null,
      demo: null,
    },
    {
      id: 9,
      name: "CryptoMind App",
      imageUrl: "cryptomind",
      status:
        "CryptoMind adalah aplikasi pembelajaran yang memperkenalkan algoritma kriptografi modern, yaitu Cipher Feedback (CFB). Aplikasi ini berisi materi, visualisasi algoritma, dan latihan soal.",
      tech: "Kotlin, XML",
      github: "https://github.com/amaralfatah/CryptoMind",
      demo: null,
    },
  ];

  const projectList = document.getElementById("project-list");

  // Function to get image path
  const getImagePath = (imageUrl) => `../src/img/portfolio-${imageUrl}.png`;

  // Create document fragment to avoid multiple reflows
  const fragment = document.createDocumentFragment();

  // Function to generate project card HTML
  const generateProjectCard = (project) => {
    const githubLink = project.github
      ? `<a href="${project.github}" target="_blank" rel="noreferrer" title="View github repository" class="transition-all hover:text-accent">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>`
      : "";

    const demoLink = project.demo
      ? `<a href="${project.demo}" target="_blank" rel="noreferrer" title="View finished project" class="transition-all hover:text-accent">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>`
      : "";

    return `
          <div class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-white md:gap-3 px-5 py-5 lg:px-5 fade-zoom-in">
            <div class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
              <img alt="Gambar ${
                project.name
              }" loading="lazy" decoding="async" class="drop-shadow-xl rounded rounded-xl" src="${getImagePath(
      project.imageUrl
    )}">
            </div>
            <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
              <div class="title-text font-medium text-secondary">${
                project.name
              }</div>
              <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                ${project.status}
              </div>
              <div class="w-full mt-4 text-normal text-sm text-left text-[#90E0EF]">
                ${project.tech}
              </div>
              <div class="w-full flex justify-end">
                <div class="flex cursor-pointer items-end gap-2 text-primary">
                  ${githubLink}
                  ${demoLink}
                </div>
              </div>
            </div>
          </div>
        `;
  };

  // Render project cards into document fragment
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.innerHTML = generateProjectCard(project);
    fragment.appendChild(projectCard);
  });

  // Append the document fragment to project list
  projectList.appendChild(fragment);
});
