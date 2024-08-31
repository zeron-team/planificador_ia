// Escuchar el evento de submit del formulario
document.getElementById('planForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    document.getElementById('result').innerHTML = result.plan; // Mostrar la respuesta en el contenedor result
});

// Functions to update dropdowns based on selected options
function updateAreaOptions() {
    const level = document.getElementById('level').value;
    const grade = document.getElementById('grade').value;
    const areaSelect = document.getElementById('area');
    areaSelect.innerHTML = ''; // Limpiar las opciones

    if (level && grade) {
        const areas = data[level].areas;
        for (const area in areas) {
            const option = document.createElement('option');
            option.value = area;
            option.textContent = capitalize(area);
            areaSelect.appendChild(option);
        }
        updateDisciplineOptions(); // Actualizar disciplinas después de cargar áreas
    }
}

function updateDisciplineOptions() {
    const level = document.getElementById('level').value;
    const grade = document.getElementById('grade').value;
    const areaSelect = document.getElementById('area');
    const disciplineSelect = document.getElementById('disciplina');
    disciplineSelect.innerHTML = ''; // Limpiar las opciones

    const selectedArea = areaSelect.value;
    if (level && grade && selectedArea) {
        const disciplines = data[level].areas[selectedArea].grados[grade].disciplinas;

        disciplines.forEach(discipline => {
            const option = document.createElement('option');
            option.value = discipline.toLowerCase();
            option.textContent = discipline;
            disciplineSelect.appendChild(option);
        });
        updateTopicOptions(); // Actualizar temas después de cargar disciplinas
    }
}

function updateTopicOptions() {
    const level = document.getElementById('level').value;
    const grade = document.getElementById('grade').value;
    const areaSelect = document.getElementById('area');
    const disciplineSelect = document.getElementById('disciplina');
    const topicSelect = document.getElementById('tema');
    topicSelect.innerHTML = ''; // Limpiar las opciones

    const selectedArea = areaSelect.value;
    const selectedDiscipline = disciplineSelect.value;
    if (level && grade && selectedArea && selectedDiscipline) {
        const topics = data[level].areas[selectedArea].grados[grade].temas[selectedDiscipline.toLowerCase()];

        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic.toLowerCase();
            option.textContent = topic;
            topicSelect.appendChild(option);
        });
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Manejar la selección de nivel
document.querySelectorAll('.level-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('level').value = this.getAttribute('data-level');
        document.querySelectorAll('.level-button').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        updateAreaOptions(); // Actualizar las áreas y disciplinas según el nivel
    });
});

// Manejar la selección de grado/año
document.querySelectorAll('.grade-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('grade').value = this.getAttribute('data-grade');
        document.querySelectorAll('.grade-button').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        updateAreaOptions(); // Actualizar las áreas y disciplinas según el grado/año
    });
});

// Manejar la selección de tipo de actividad
document.querySelectorAll('.type-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('type').value = this.getAttribute('data-type');
        document.querySelectorAll('.type-button').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});
