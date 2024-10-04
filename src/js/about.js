const tech = [
  {
    id: 1,
    name: "HTML",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    status: "Advanced",
  },
  {
    id: 2,
    name: "CSS",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    status: "Advanced",
  },
  {
    id: 3,
    name: "PHP",
    imageUrl:
      "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
    status: "Advanced",
  },
  {
    id: 4,
    name: "Javascript",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
    status: "intermediate",
  },
  {
    id: 5,
    name: "Dart",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    status: "intermediate",
  },
  {
    id: 6,
    name: "Kotlin",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
    status: "intermediate",
  },
  {
    id: 7,
    name: "Laravel",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    status: "intermediate",
  },
  {
    id: 8,
    name: "Flutter",
    imageUrl:
      "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png",
    status: "intermediate",
  },
  {
    id: 9,
    name: "Codeigniter",
    imageUrl:
      "https://cdn.iconscout.com/icon/free/png-256/free-codeigniter-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-language-pack-logos-icons-1175201.png?f=webp&w=256",
    status: "Intermediate",
  },
  {
    id: 10,
    name: "Tailwind",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    status: "Advanced",
  },
  {
    id: 11,
    name: "Bootstrap",
    imageUrl:
      "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
    status: "advanced",
  },
];

const tools = [
  {
    id: 1,
    name: "Git",
    imageUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    status: "Version Control",
  },
  {
    id: 2,
    name: "GitHub",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    status: "Git Hosting",
  },
  {
    id: 3,
    name: "NPM",
    imageUrl:
      "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
    status: "Package Manager",
  },
  {
    id: 4,
    name: "MySQL",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
    status: "Database",
  },
];

const techTab = document.getElementById("tech-tab");
const toolsTab = document.getElementById("tools-tab");
const techContent = document.getElementById("tech-content");
const toolsContent = document.getElementById("tools-content");

function createTechItems(items, container) {
  container.innerHTML = "";
  items.forEach((item) => {
    const techItem = `
                    <div class="item-tech flex cursor-pointer items-center gap-2 rounded border border-[#90E0EF] px-2 py-2 hover:bg-[#90E0EF] hover:bg-opacity-10 md:gap-3 lg:px-3">
                        <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                            <img class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]" src="${item.imageUrl}" alt="${item.name}">
                        </div>
                        <div class="flex items-center text-sm md:text-base lg:text-lg">
                            <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0">${item.name}</div>
                            <div class="status-tech opacity-0 absolute mt-5 text-[10px] text-[#90E0EF] transition-all duration-300 md:text-xs lg:text-sm">${item.status}</div>
                        </div>
                    </div>`;
    container.innerHTML += techItem;
  });
}

// Fungsi untuk menghapus dan menambahkan kelas 'active-tab'
function switchActiveTab(activeButton, inactiveButton) {
  activeButton.classList.add("active-tab");
  inactiveButton.classList.remove("active-tab");
}

// Event Listener untuk Tech Stack
techTab.addEventListener("click", function () {
  techContent.classList.remove("hidden");
  toolsContent.classList.add("hidden");
  createTechItems(tech, techContent);

  // Set background aktif untuk tab Tech Stack
  switchActiveTab(techTab, toolsTab);
});

// Event Listener untuk Tools
toolsTab.addEventListener("click", function () {
  techContent.classList.add("hidden");
  toolsContent.classList.remove("hidden");
  createTechItems(tools, toolsContent);

  // Set background aktif untuk tab Tools
  switchActiveTab(toolsTab, techTab);
});

// Load the default tab (Tech Stack as default)
createTechItems(tech, techContent);
techTab.classList.add("active-tab");
