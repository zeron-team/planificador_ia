from flask import Blueprint, render_template, request, jsonify
import openai
from flask import current_app as app
import re

bp = Blueprint('main', __name__)

@bp.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@bp.route('/generate', methods=['POST'])
def generate():
    data = request.json
    openai.api_key = app.config['OPENAI_API_KEY']

    # Mapeo de los valores del frontend a una representación más clara
    level_map = {
        "primaria": "Primaria",
        "secundaria": "Secundaria"
    }
    type_map = {
        "act": "Actividades",
        "plan": "Planificación",
        "actos": "Actos Escolares",
    }

    # Obtener los valores de área, disciplina, tema, descripción y si incluir ejemplos
    area = data.get('area', 'área desconocida')
    disciplina = data.get('disciplina', 'disciplina desconocida')
    tema = data.get('tema', 'tema desconocido')
    descripcion = data.get('descripcion', '')
    incluir_ejemplos = data.get('includeExamples', False)

    # Construcción del prompt en español
    prompt = (
        f"Genera una {type_map[data['type']]} para estudiantes de {level_map[data['level']]} "
        f"en el grado {data['grade']} en el área de {area}, disciplina {disciplina}, con el tema {tema}. "
        f"La actividad debe incluir un objetivo general, objetivos específicos para cada módulo, actividades detalladas para "
        f"cada módulo, y materiales necesarios. La duración total del evento es de {data['duration']} minutos."
    )

    if descripcion:
        prompt += f" Descripción adicional proporcionada: {descripcion}."

    # Agregar instrucción para incluir ejemplos si se selecciona la opción
    if incluir_ejemplos:
        prompt += " Por favor, incluye ejemplos específicos en cada módulo."

    # Llamada a la API de OpenAI
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # O usa "gpt-4" si tienes acceso a él
        messages=[
            {"role": "system", "content": "Eres un asistente educativo para acompañar a los docentes en sus actividades en el aula, clase, escuela."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=1500  # Ajusta según la extensión del contenido que esperas
    )

    # Procesar la respuesta para convertir **text** en <strong>text</strong> y organizar en párrafos y listas
    result = response['choices'][0]['message']['content']

    # Formato HTML mejorado para módulos y actividades
    result = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', result)  # Negrita
    result = re.sub(r'\b(Módulo \d+:.*?)\b', r'<h3>\1</h3>', result)  # Módulo como subtítulos
    result = re.sub(r'(Objetivo General:|Objetivos Específicos:|Descripción:|Duración Total:)', r'<strong>\1</strong>', result)  # Encabezados en negrita
    result = re.sub(r'\n-', r'<ul><li>', result).replace('\n', '</li></ul><p>')  # Convertir listas
    result = re.sub(r'(\d+\.\s)', r'<br><span class="activity-number">\1</span>', result)  # Numeración de actividades
    result = re.sub(r'\n', r'</p><p>', result)  # Convertir nuevas líneas en párrafos

    # Asegurar que los números de actividad estén en la misma línea con su contenido
    result = re.sub(r'(\d+\.)(\s+)([^\n]+)', r'<span class="activity-number">\1</span> \3', result)

    # Convertir nuevas líneas en párrafos
    result = re.sub(r'\n', r'</p><p>', result)

    # Envolver en un contenedor HTML adecuado
    result = f"""
    <div>
        <p>Estimado/a Docente,</p>
        <p>{result}</p>
    </div>
    """

    return jsonify({'plan': result})
