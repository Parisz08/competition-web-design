const menuButton = document.querySelector(".menu");
const burgerContainer = document.querySelector(".burgers");
const burgers = document.getElementsByClassName("burger");
const content = document.querySelector(".menu-content");

menuButton.addEventListener("click", () =>{
    burgerContainer.classList.toggle("p-2");XPathExpression
    burgers[0] .classList.toggle("rotate-1");
    burgers[1] .classList.toggle("hide");
    burgers[2] .classList.toggle("rotate-2");
    content.classList.toggle("show");
});

const scrollElements = document.querySelectorAll('.scroll-element');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Get elements by ID
const doctorName = document.getElementById('doctorName');
const hospital = document.getElementById('hospital');
const specialty = document.getElementById('specialty');
const preferredDate = document.getElementById('preferredDate');
const findDoctorBtn = document.getElementById('findDoctorBtn');

// Function to validate form inputs
function validateForm() {
    let isValid = true;
    if (doctorName.value === "" && specialty.value === "" && hospital.value === "" && preferredDate.value === "") {
        alert("Please fill at least one filter to search for a doctor.");
        isValid = false;
    }
    return isValid;
}

// Event listener for the button
findDoctorBtn.addEventListener('click', function() {
    // Check if form is valid
    if (validateForm()) {
        // Collect data from inputs
        const searchQuery = {
            doctor: doctorName.value,
            hospital: hospital.value,
            specialty: specialty.value,
            date: preferredDate.value
        };
        
        // Simulate search action (In real case, send the data to the server for filtering doctors)
        console.log("Searching doctor with filters:", searchQuery);

        // Example: Show search results
        alert(`Searching for doctors...\n
               Doctor: ${searchQuery.doctor || 'All Doctors'}\n
               Hospital: ${searchQuery.hospital || 'Any Hospital'}\n
               Specialty: ${searchQuery.specialty || 'Any Specialty'}\n
               Preferred Date: ${searchQuery.date || 'Any Date'}`);
    }
});

// Optional: If specialty depends on hospital selection, dynamically update the options
hospital.addEventListener('change', function() {
    const selectedHospital = hospital.value;
    // Clear existing options
    specialty.value = "";

    // Add relevant specialties based on hospital selection (Just for example, in a real app this could come from a database)
    if (selectedHospital === "hospital1") {
        specialty.placeholder = "Cardiology, Pediatrics, Dermatology";
    } else if (selectedHospital === "hospital2") {
        specialty.placeholder = "Neurology, Orthopedics, Oncology";
    } else {
        specialty.placeholder = "Choose Specialty";
    }
});

// Ambil semua elemen dengan kelas 'accordion-item'
const accordionItems = document.querySelectorAll('.accordion-item');

// Loop melalui setiap elemen accordion
accordionItems.forEach(item => {
  // Setiap kali item di-klik, toggle class 'active' untuk menunjukkan expand/collapse
  item.addEventListener('click', function() {
    // Toggle class 'active' untuk menambahkan atau menghapus class
    this.classList.toggle('active');

    // Ambil konten berikutnya (bagian yang akan diperluas)
    const content = this.nextElementSibling;

    // Jika kontennya sedang diperluas (display block), maka sembunyikan (display none)
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      // Jika konten tersembunyi, perlihatkan (expand) kontennya
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
