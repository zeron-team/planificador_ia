from flask import Blueprint, render_template, request, jsonify
import openai
from flask import current_app as app

bp = Blueprint('main', __name__)


@bp.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@bp.route('/generate', methods=['POST'])
def generate():
    data = request.json
    openai.api_key = app.config['OPENAI_API_KEY']

    # Mapeo de los valores del frontend a una representación más clara
    type_map = {
        "sequence": "Secuencia Didáctica",
        "plan": "Planificación"
    }
    subject_map = {
        "mathematics": "Matemáticas",
        "language": "Lengua"
        # Puedes agregar más materias aquí
    }
    grade_map = {
        "1": "1° de Primaria",
        "2": "2° de Primaria"
        # Puedes agregar más grados aquí
    }

    # Construcción del prompt en español
    prompt = (
        f"Genera una {type_map[data['type']]} para estudiantes de {grade_map[data['grade']]} "
        f"en la asignatura de {subject_map[data['subject']]}. La secuencia debe incluir un "
        f"objetivo general, objetivos específicos para cada sesión, actividades detalladas para "
        f"cada sesión, y materiales necesarios. La duración total del evento es de {data['duration']}."
    )

    # Llamada a la API de OpenAI
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # O usa "gpt-4" si tienes acceso a él
        messages=[
            {"role": "system", "content": "Eres un asistente educativo útil."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=1500  # Ajusta según la extensión del contenido que esperas
    )

    return jsonify({'plan': response['choices'][0]['message']['content']})
