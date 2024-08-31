const data = {
    primaria: {
        areas: {
            matematicas: {
                grados: {
                    1: {
                        disciplinas: ["Números y Operaciones", "Geometría", "Medición"],
                        temas: {
                            "números y operaciones": ["Números Naturales hasta 100", "Suma y Resta Básica"],
                            "geometría": ["Formas y Figuras Básicas", "Simetría"],
                            "medición": ["Medición de Longitud y Masa", "Tiempo y Relojes"]
                        }
                    },
                    2: {
                        disciplinas: ["Números y Operaciones", "Álgebra Básica", "Geometría", "Medición"],
                        temas: {
                            "números y operaciones": ["Números Naturales hasta 1000", "Multiplicación y División Básica"],
                            "álgebra básica": ["Patrones y Secuencias", "Introducción a las Ecuaciones"],
                            "geometría": ["Perímetro y Área de Figuras Simples"],
                            "medición": ["Unidades de Longitud", "Uso del Reloj Analógico y Digital"]
                        }
                    },
                    3: {
                        disciplinas: ["Números y Operaciones", "Álgebra Básica", "Geometría", "Medición", "Estadística y Probabilidad"],
                        temas: {
                            "números y operaciones": ["Números Decimales", "Múltiplos y Divisores"],
                            "álgebra básica": ["Ecuaciones Simples", "Propiedades de Operaciones"],
                            "geometría": ["Ángulos y Propiedades de Triángulos"],
                            "medición": ["Medición de Área y Volumen", "Uso de Calendarios"],
                            "estadística y probabilidad": ["Interpretación de Gráficos", "Conceptos Básicos de Probabilidad"]
                        }
                    },
                    4: {
                        disciplinas: ["Números y Operaciones", "Álgebra Básica", "Geometría", "Medición", "Estadística y Probabilidad"],
                        temas: {
                            "números y operaciones": ["Números Racionales", "Operaciones con Fracciones"],
                            "álgebra básica": ["Ecuaciones y Desigualdades", "Factorización"],
                            "geometría": ["Áreas y Volúmenes de Sólidos Geométricos"],
                            "medición": ["Conversión de Unidades", "Uso de Instrumentos de Medición"],
                            "estadística y probabilidad": ["Recolección y Análisis de Datos", "Probabilidad Experimental"]
                        }
                    },
                    5: {
                        disciplinas: ["Números y Operaciones", "Álgebra Básica", "Geometría", "Medición", "Estadística y Probabilidad"],
                        temas: {
                            "números y operaciones": ["Operaciones con Decimales", "Fracciones y Decimales"],
                            "álgebra básica": ["Ecuaciones Lineales", "Gráficas y Tablas"],
                            "geometría": ["Teorema de Pitágoras", "Transformaciones Geométricas"],
                            "medición": ["Medición de Ángulos", "Sistemas de Unidades"],
                            "estadística y probabilidad": ["Medidas de Tendencia Central", "Probabilidad Teórica"]
                        }
                    },
                    6: {
                        disciplinas: ["Números y Operaciones", "Álgebra", "Geometría", "Medición", "Estadística y Probabilidad"],
                        temas: {
                            "números y operaciones": ["Radicales y Potencias", "Proporciones y Porcentajes"],
                            "álgebra": ["Ecuaciones Cuadráticas", "Funciones Lineales"],
                            "geometría": ["Cuerpos Geométricos Complejos", "Simetrías y Rotaciones"],
                            "medición": ["Perímetros y Áreas Complejas", "Medición de Volúmenes"],
                            "estadística y probabilidad": ["Estadística Descriptiva", "Regresión Lineal Básica"]
                        }
                    },
                    7: {
                        disciplinas: ["Números y Operaciones", "Álgebra", "Geometría", "Trigonometría", "Estadística y Probabilidad"],
                        temas: {
                            "números y operaciones": ["Números Reales", "Exponentes y Logaritmos"],
                            "álgebra": ["Polinomios", "Ecuaciones de Segundo Grado"],
                            "geometría": ["Geometría Analítica", "Cálculo de Áreas por Integración"],
                            "trigonometría": ["Introducción a las Razones Trigonométricas", "Aplicaciones de Trigonometría"],
                            "estadística y probabilidad": ["Distribuciones de Frecuencia", "Probabilidad Combinatoria"]
                        }
                    }
                }
            },
            lengua: {
                grados: {
                    1: {
                        disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía"],
                        temas: {
                            "comprensión lectora": ["Cuentos Cortos y Poemas Simples", "Comprensión de Preguntas"],
                            "gramática": ["Oraciones Simples", "Uso de Sustantivos y Verbos"],
                            "ortografía": ["Uso Correcto de Mayúsculas", "Ortografía Básica"]
                        }
                    },
                    2: {
                        disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos"],
                        temas: {
                            "comprensión lectora": ["Fábulas y Cuentos Populares", "Comprensión de Instrucciones Escritas"],
                            "gramática": ["Estructura de Oraciones", "Uso de Pronombres"],
                            "ortografía": ["Reglas Básicas de Acentuación", "Puntuación"],
                            "producción de textos": ["Escritura de Cuentos Cortos", "Descripción de Imágenes"]
                        }
                    },
                    3: {
                        disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos", "Literatura"],
                        temas: {
                            "comprensión lectora": ["Textos Informativos", "Análisis de Personajes"],
                            "gramática": ["Concordancia Verbal", "Uso de Adjetivos"],
                            "ortografía": ["Uso de Comas y Puntos", "Ortografía de Palabras Frecuentes"],
                            "producción de textos": ["Redacción de Cartas", "Escritura Creativa"],
                            "literatura": ["Cuentos Tradicionales Argentinos", "Poesía Infantil"]
                        }
                    },
                    4: {
                        disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos", "Literatura"],
                        temas: {
                            "comprensión lectora": ["Análisis de Textos Literarios", "Interpretación de Textos"],
                            "gramática": ["Oraciones Compuestas", "Uso de Conjunciones"],
                            "ortografía": ["Acentuación de Diptongos y Hiatos", "Ortografía de Palabras Homófonas"],
                            "producción de textos": ["Escritura Narrativa", "Relatos Personales"],
                            "literatura": ["Leyendas y Mitos", "Obras de Teatro Infantil"]
                        }
                    },
                    5: {
                        disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos", "Literatura"],
                        temas: {
                            "comprensión lectora": ["Interpretación de Poemas", "Lectura Crítica"],
                            "gramática": ["Uso de Verbos en Tiempos Compuestos", "Pronombres y Artículos"],
                            "ortografía": ["Uso de Tildes Diacríticas", "Reglas de Ortografía Específicas"],
                            "producción de textos": ["Redacción de Ensayos", "Narrativa Descriptiva"],
                            "literatura": ["Novelas Juveniles", "Teatro Clásico"]
                        }
                    },
                    6: {
                        disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos", "Literatura"],
                        temas: {
                            "comprensión lectora": ["Análisis de Textos Informativos", "Lectura Analítica"],
                            "gramática": ["Sintaxis Compleja", "Subjuntivo y Condicional"],
                            "ortografía": ["Ortografía de Palabras Extranjeras", "Puntuación Compleja"],
                            "producción de textos": ["Escritura Argumentativa", "Crítica Literaria"],
                            "literatura": ["Poesía Moderna", "Teatro Contemporáneo"]
                        }
                    },
                    7: {
                        disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos", "Literatura"],
                        temas: {
                            "comprensión lectora": ["Análisis de Ensayos", "Interpretación de Textos Filosóficos"],
                            "gramática": ["Construcciones Pasivas", "Modismos y Expresiones Idiomáticas"],
                            "ortografía": ["Uso Correcto de Paréntesis y Guiones", "Ortografía de Neologismos"],
                            "producción de textos": ["Redacción de Informes", "Escritura de Artículos"],
                            "literatura": ["Clásicos de la Literatura Argentina", "Poesía de Vanguardia"]
                        }
                    }
                }
            },
            ciencias_sociales: {
                grados: {
                    1: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia Familiar y Comunitaria", "Fechas Patrias"],
                            "geografía": ["La Escuela y el Barrio", "Medios de Transporte"],
                            "formación ética y ciudadana": ["Normas de Convivencia", "Valores y Respeto"]
                        }
                    },
                    2: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia de la Comunidad", "Primeras Ciudades Argentinas"],
                            "geografía": ["Entorno Natural y Urbano", "Puntos Cardinales"],
                            "formación ética y ciudadana": ["Derechos de los Niños", "Responsabilidades"]
                        }
                    },
                    3: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia de la Provincia", "Pueblos Originarios"],
                            "geografía": ["Mapa de Argentina", "Relieves y Ríos"],
                            "formación ética y ciudadana": ["Solidaridad y Cooperación", "Respeto por la Diversidad"]
                        }
                    },
                    4: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Independencia y Primeras Presidencias", "Guerras Civiles Argentinas"],
                            "geografía": ["Regiones de Argentina", "Climas y Zonas Naturales"],
                            "formación ética y ciudadana": ["Cultura y Tradiciones", "Participación en la Comunidad"]
                        }
                    },
                    5: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Conquista del Desierto", "Inmigración en Argentina"],
                            "geografía": ["Recursos Naturales", "Actividades Económicas"],
                            "formación ética y ciudadana": ["Derechos Humanos", "Educación Cívica"]
                        }
                    },
                    6: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Argentina en el Siglo XX", "Golpes de Estado y Democracia"],
                            "geografía": ["Geopolítica Argentina", "Problemas Ambientales"],
                            "formación ética y ciudadana": ["Justicia y Derechos", "Ciudadanía Digital"]
                        }
                    },
                    7: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia Reciente de Argentina", "Movimientos Sociales"],
                            "geografía": ["Globalización y Desarrollo", "Recursos Hídricos"],
                            "formación ética y ciudadana": ["Participación Política", "Desarrollo Sostenible"]
                        }
                    }
                }
            },
            ciencias_naturales: {
                grados: {
                    1: {
                        disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                        temas: {
                            "biología": ["Seres Vivos y su Entorno", "Partes del Cuerpo"],
                            "física": ["Luz y Sombra", "Movimientos Básicos"],
                            "química": ["Materiales Naturales y Artificiales", "Cambio de Estados"],
                            "cuidado del ambiente": ["Cuidado del Agua", "Reciclaje Básico"]
                        }
                    },
                    2: {
                        disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                        temas: {
                            "biología": ["Plantas y Animales", "Ciclo de Vida"],
                            "física": ["Sonido y Vibración", "Fuerzas Simples"],
                            "química": ["Mezclas y Soluciones", "Reacciones Simples"],
                            "cuidado del ambiente": ["Impacto Humano en la Naturaleza", "Conservación de Recursos"]
                        }
                    },
                    3: {
                        disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                        temas: {
                            "biología": ["Funciones Vitales de los Seres Vivos", "Hábitats"],
                            "física": ["Energía y Calor", "Electricidad Básica"],
                            "química": ["Propiedades de la Materia", "Experimentos de Laboratorio"],
                            "cuidado del ambiente": ["Cambio Climático", "Biodiversidad"]
                        }
                    },
                    4: {
                        disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                        temas: {
                            "biología": ["Sistema Digestivo", "Adaptación y Evolución"],
                            "física": ["Magnetismo", "Leyes del Movimiento"],
                            "química": ["Ácidos y Bases", "Tabla Periódica"],
                            "cuidado del ambiente": ["Ecosistemas", "Conservación de la Energía"]
                        }
                    },
                    5: {
                        disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                        temas: {
                            "biología": ["Sistemas del Cuerpo Humano", "Genética Básica"],
                            "física": ["Mecánica y Dinámica", "Principios de Óptica"],
                            "química": ["Reacciones Químicas", "Sustancias y Mezclas"],
                            "cuidado del ambiente": ["Ciclos Biogeoquímicos", "Recursos Naturales y su Gestión"]
                        }
                    },
                    6: {
                        disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                        temas: {
                            "biología": ["Microbiología", "Reproducción Humana"],
                            "física": ["Termodinámica", "Electromagnetismo"],
                            "química": ["Química Orgánica", "Química Nuclear"],
                            "cuidado del ambiente": ["Impacto Ambiental", "Desarrollo Sostenible"]
                        }
                    },
                    7: {
                        disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                        temas: {
                            "biología": ["Biotecnología", "Sistemas Nervioso y Endocrino"],
                            "física": ["Relatividad y Cuántica", "Tecnología Espacial"],
                            "química": ["Nanotecnología", "Química Farmacéutica"],
                            "cuidado del ambiente": ["Cambio Climático Global", "Biodiversidad y Conservación"]
                        }
                    }
                }
            },
            tecnología: {
                grados: {
                    1: {
                        disciplinas: ["Educación Digital", "Robótica Básica", "Herramientas Tecnológicas"],
                        temas: {
                            "educación digital": ["Uso Seguro de Internet", "Herramientas de Búsqueda Básicas"],
                            "robótica básica": ["Construcción de Robots Simples", "Proyectos con Material Reciclado"],
                            "herramientas tecnológicas": ["Uso de Computadoras", "Introducción a Programas de Presentación"]
                        }
                    },
                    2: {
                        disciplinas: ["Educación Digital", "Robótica Básica", "Herramientas Tecnológicas"],
                        temas: {
                            "educación digital": ["Correo Electrónico y Comunicación Segura", "Uso de Software Educativo"],
                            "robótica básica": ["Programación Visual Básica", "Proyectos de Ingeniería Infantil"],
                            "herramientas tecnológicas": ["Procesadores de Texto Básicos", "Hojas de Cálculo Simples"]
                        }
                    },
                    3: {
                        disciplinas: ["Educación Digital", "Robótica Básica", "Herramientas Tecnológicas"],
                        temas: {
                            "educación digital": ["Seguridad Informática Básica", "Uso de Redes Sociales de Forma Responsable"],
                            "robótica básica": ["Proyectos de Robótica Avanzada", "Competencias de Robótica Escolar"],
                            "herramientas tecnológicas": ["Edición de Imágenes y Videos", "Creación de Blogs y Páginas Web"]
                        }
                    },
                    4: {
                        disciplinas: ["Educación Digital", "Robótica Básica", "Herramientas Tecnológicas"],
                        temas: {
                            "educación digital": ["Creación de Contenidos Digitales", "Manejo de Plataformas Virtuales de Aprendizaje"],
                            "robótica básica": ["Programación de Robots con Sensores", "Proyectos de Robótica Aplicada"],
                            "herramientas tecnológicas": ["Uso Avanzado de Hojas de Cálculo", "Diseño Gráfico Básico"]
                        }
                    },
                    5: {
                        disciplinas: ["Educación Digital", "Robótica Básica", "Herramientas Tecnológicas"],
                        temas: {
                            "educación digital": ["Producción de Contenidos Multimedia", "Colaboración en la Nube"],
                            "robótica básica": ["Robótica Educativa y Competitiva", "Programación en Python para Robótica"],
                            "herramientas tecnológicas": ["Diseño de Presentaciones Multimedia", "Uso de Bases de Datos Simples"]
                        }
                    },
                    6: {
                        disciplinas: ["Educación Digital", "Robótica Básica", "Herramientas Tecnológicas"],
                        temas: {
                            "educación digital": ["Edición de Videos Educativos", "Uso de Herramientas de Colaboración Online"],
                            "robótica básica": ["Desarrollo de Proyectos de Robótica Complejos", "Integración de Inteligencia Artificial"],
                            "herramientas tecnológicas": ["Diseño y Gestión de Proyectos Tecnológicos", "Uso de Software de Diseño 3D"]
                        }
                    },
                    7: {
                        disciplinas: ["Educación Digital", "Robótica Avanzada", "Herramientas Tecnológicas"],
                        temas: {
                            "educación digital": ["Seguridad Digital Avanzada", "Producción y Gestión de Contenidos Digitales"],
                            "robótica avanzada": ["Proyectos de Robótica Industrial", "Desarrollo de Robots Autónomos"],
                            "herramientas tecnológicas": ["Desarrollo de Aplicaciones Móviles", "Introducción a la Programación Web"]
                        }
                    }
                }
            },
            educación_artística: {
                grados: {
                    1: {
                        disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                        temas: {
                            "plástica": ["Dibujo y Pintura Básica", "Uso de Colores Primarios"],
                            "música": ["Cantos Infantiles", "Ritmo y Movimiento"],
                            "teatro": ["Juegos Dramáticos", "Creación de Personajes"],
                            "danza": ["Danza Creativa", "Expresión Corporal"]
                        }
                    },
                    2: {
                        disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                        temas: {
                            "plástica": ["Modelado con Arcilla", "Técnicas de Recorte y Pegado"],
                            "música": ["Instrumentos Simples", "Coro y Ensambles"],
                            "teatro": ["Escenas Cortas", "Improvisación"],
                            "danza": ["Danzas Tradicionales", "Coreografías Infantiles"]
                        }
                    },
                    3: {
                        disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                        temas: {
                            "plástica": ["Collage y Técnicas Mixtas", "Escultura Simple"],
                            "música": ["Composición Básica", "Teoría Musical Infantil"],
                            "teatro": ["Creación de Guiones", "Dirección Escénica"],
                            "danza": ["Danza Folclórica Argentina", "Expresión a Través de la Danza"]
                        }
                    },
                    4: {
                        disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                        temas: {
                            "plástica": ["Técnicas de Acuarela", "Muralismo Infantil"],
                            "música": ["Instrumentos de Percusión", "Lectura de Partituras"],
                            "teatro": ["Producción Teatral", "Caracterización de Personajes"],
                            "danza": ["Danza Contemporánea", "Coreografía y Movimiento"]
                        }
                    },
                    5: {
                        disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                        temas: {
                            "plástica": ["Diseño Gráfico Básico", "Técnicas de Grabado"],
                            "música": ["Composición y Arreglo", "Historia de la Música Argentina"],
                            "teatro": ["Técnicas de Actuación", "Teatro de Sombras"],
                            "danza": ["Danza Clásica", "Improvisación en Danza"]
                        }
                    },
                    6: {
                        disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                        temas: {
                            "plástica": ["Escultura en Materiales Diversos", "Instalaciones Artísticas"],
                            "música": ["Armonía y Composición", "Producción Musical"],
                            "teatro": ["Dirección y Producción", "Dramaturgia"],
                            "danza": ["Danza Experimental", "Coreografía Compleja"]
                        }
                    },
                    7: {
                        disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                        temas: {
                            "plástica": ["Arte Contemporáneo", "Proyectos de Arte Colectivo"],
                            "música": ["Producción de Música Electrónica", "Composición Avanzada"],
                            "teatro": ["Producción de Obras Complejas", "Teatro Interactivo"],
                            "danza": ["Danza Contemporánea Avanzada", "Montaje de Espectáculos"]
                        }
                    }
                }
            },
            educación_física: {
                grados: {
                    1: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Introducción al Fútbol", "Juegos Predeportivos"],
                            "juegos recreativos": ["Juegos de Movimiento", "Juegos Cooperativos"],
                            "educación para la salud": ["Higiene Personal", "Rutinas de Ejercicio Básico"]
                        }
                    },
                    2: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Introducción al Voleibol", "Atletismo Básico"],
                            "juegos recreativos": ["Juegos de Relevo", "Juegos de Estrategia"],
                            "educación para la salud": ["Alimentación Saludable", "Postura Corporal"]
                        }
                    },
                    3: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Iniciación en Básquet", "Natación Básica"],
                            "juegos recreativos": ["Juegos de Mesa y Exterior", "Desafíos Motrices"],
                            "educación para la salud": ["Cuidados Posturales", "Importancia de la Hidratación"]
                        }
                    },
                    4: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Introducción al Rugby", "Gimnasia Artística"],
                            "juegos recreativos": ["Juegos de Equipo", "Juegos de Reto"],
                            "educación para la salud": ["Prevención de Lesiones", "Nutrición y Deporte"]
                        }
                    },
                    5: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Vóley Competitivo", "Hockey"],
                            "juegos recreativos": ["Juegos de Rol y Dramatización", "Juegos con Materiales"],
                            "educación para la salud": ["Condición Física y Bienestar", "Manejo del Estrés"]
                        }
                    },
                    6: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Fútbol Avanzado", "Atletismo de Competición"],
                            "juegos recreativos": ["Juegos de Estrategia Compleja", "Actividades en la Naturaleza"],
                            "educación para la salud": ["Primeros Auxilios", "Beneficios del Ejercicio Regular"]
                        }
                    },
                    7: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Deportes de Aventura", "Entrenamiento Funcional"],
                            "juegos recreativos": ["Juegos de Cooperación y Confianza", "Juegos de Rol Activo"],
                            "educación para la salud": ["Planes de Entrenamiento Personalizado", "Impacto del Ejercicio en la Salud Mental"]
                        }
                    }
                }
            }
        }
    },
    secundaria: {
        areas: {
            matematicas: {
                grados: {
                    1: {
                        disciplinas: ["Álgebra", "Geometría", "Estadística"],
                        temas: {
                            "álgebra": ["Ecuaciones Lineales", "Sistemas de Ecuaciones Simples"],
                            "geometría": ["Ángulos y Triángulos", "Área y Perímetro"],
                            "estadística": ["Datos y Gráficos", "Promedio y Mediana"]
                        }
                    },
                    2: {
                        disciplinas: ["Álgebra", "Geometría", "Estadística"],
                        temas: {
                            "álgebra": ["Ecuaciones Cuadráticas", "Factoreo"],
                            "geometría": ["Círculos y Polígonos", "Volumen y Superficie"],
                            "estadística": ["Distribuciones de Frecuencia", "Probabilidad Básica"]
                        }
                    },
                    3: {
                        disciplinas: ["Álgebra", "Geometría", "Trigonometría"],
                        temas: {
                            "álgebra": ["Expresiones Algebraicas", "Inecuaciones"],
                            "geometría": ["Teorema de Pitágoras", "Transformaciones Geométricas"],
                            "trigonometría": ["Razones Trigonométricas", "Aplicaciones en Triángulos Rectángulos"]
                        }
                    },
                    4: {
                        disciplinas: ["Álgebra", "Geometría Analítica", "Estadística y Probabilidad"],
                        temas: {
                            "álgebra": ["Funciones y Gráficas", "Polinomios"],
                            "geometría analítica": ["Recta y Circunferencia", "Geometría del Espacio"],
                            "estadística y probabilidad": ["Regresión y Correlación", "Distribuciones de Probabilidad"]
                        }
                    },
                    5: {
                        disciplinas: ["Álgebra", "Cálculo", "Estadística y Probabilidad"],
                        temas: {
                            "álgebra": ["Matrices y Determinantes", "Vectores"],
                            "cálculo": ["Derivadas e Integrales", "Límites y Continuidad"],
                            "estadística y probabilidad": ["Inferencia Estadística", "Análisis de Varianza"]
                        }
                    },
                    6: {
                        disciplinas: ["Cálculo", "Álgebra Avanzada", "Estadística Aplicada"],
                        temas: {
                            "cálculo": ["Cálculo Diferencial", "Cálculo Integral"],
                            "álgebra avanzada": ["Números Complejos", "Teoría de Grupos"],
                            "estadística aplicada": ["Modelos Estadísticos", "Análisis Multivariante"]
                        }
                    },
                    7: {
                        disciplinas: ["Cálculo Avanzado", "Álgebra Lineal", "Probabilidad Avanzada"],
                        temas: {
                            "cálculo avanzado": ["Series Infinitas", "Ecuaciones Diferenciales"],
                            "álgebra lineal": ["Espacios Vectoriales", "Transformaciones Lineales"],
                            "probabilidad avanzada": ["Cadenas de Markov", "Procesos Estocásticos"]
                        }
                    }
                }
            },
            ciencias_naturales: {
                grados: {
                    1: {
                        disciplinas: ["Biología", "Física", "Química"],
                        temas: {
                            "biología": ["Células y Tejidos", "Sistema Nervioso"],
                            "física": ["Mecánica Básica", "Óptica Básica"],
                            "química": ["Elementos y Compuestos", "Reacciones Químicas Básicas"]
                        }
                    },
                    2: {
                        disciplinas: ["Biología", "Física", "Química"],
                        temas: {
                            "biología": ["Reproducción y Herencia", "Sistema Digestivo"],
                            "física": ["Electricidad y Magnetismo", "Fuerzas y Movimientos"],
                            "química": ["Ácidos y Bases", "Química Orgánica Básica"]
                        }
                    },
                    3: {
                        disciplinas: ["Biología", "Física", "Química"],
                        temas: {
                            "biología": ["Evolución y Diversidad", "Sistema Inmunológico"],
                            "física": ["Ondas y Sonido", "Termodinámica"],
                            "química": ["Química Inorgánica", "Estados de la Materia"]
                        }
                    },
                    4: {
                        disciplinas: ["Biología", "Física", "Química"],
                        temas: {
                            "biología": ["Genética Molecular", "Sistemas del Cuerpo Humano"],
                            "física": ["Mecánica Cuántica", "Relatividad"],
                            "química": ["Reacciones Redox", "Química Nuclear"]
                        }
                    },
                    5: {
                        disciplinas: ["Biología", "Física", "Química"],
                        temas: {
                            "biología": ["Microbiología", "Biotecnología"],
                            "física": ["Física Moderna", "Aplicaciones Tecnológicas"],
                            "química": ["Química de Materiales", "Ingeniería Química"]
                        }
                    },
                    6: {
                        disciplinas: ["Biología", "Física", "Química"],
                        temas: {
                            "biología": ["Ecología Avanzada", "Biología Celular"],
                            "física": ["Física de Partículas", "Astrofísica"],
                            "química": ["Química Ambiental", "Química Industrial"]
                        }
                    },
                    7: {
                        disciplinas: ["Biología", "Física", "Química"],
                        temas: {
                            "biología": ["Neurociencia", "Genética Avanzada"],
                            "física": ["Teoría de Cuerdas", "Cosmología"],
                            "química": ["Química Medicinal", "Química Computacional"]
                        }
                    }
                }
            },
            ciencias_sociales: {
                grados: {
                    1: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia de la Antigüedad", "Civilizaciones Primitivas"],
                            "geografía": ["Mapas y Cartografía", "Recursos Naturales Básicos"],
                            "formación ética y ciudadana": ["Derechos y Deberes", "Organización de la Comunidad"]
                        }
                    },
                    2: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia Medieval", "Edad Media en Europa"],
                            "geografía": ["Geografía Física y Humana", "Regiones Climáticas"],
                            "formación ética y ciudadana": ["Concepto de Justicia", "Democracia y Ciudadanía"]
                        }
                    },
                    3: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia Moderna", "Colonización y Revolución"],
                            "geografía": ["Geografía Económica", "Impacto Ambiental"],
                            "formación ética y ciudadana": ["Derechos Humanos", "Participación Ciudadana"]
                        }
                    },
                    4: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia Contemporánea", "Guerras Mundiales"],
                            "geografía": ["Geografía Política", "Fronteras y Conflictos"],
                            "formación ética y ciudadana": ["Diversidad Cultural", "Derechos de las Minorías"]
                        }
                    },
                    5: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia Argentina Reciente", "Dictadura y Democracia"],
                            "geografía": ["Globalización", "Migraciones y Población"],
                            "formación ética y ciudadana": ["Ética y Moral", "Valores en la Sociedad"]
                        }
                    },
                    6: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia Mundial del Siglo XXI", "Conflictos Actuales"],
                            "geografía": ["Geopolítica", "Economía Internacional"],
                            "formación ética y ciudadana": ["Derechos de los Pueblos Indígenas", "Participación Política"]
                        }
                    },
                    7: {
                        disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                        temas: {
                            "historia": ["Historia de América Latina", "Movimientos Sociales"],
                            "geografía": ["Recursos Energéticos", "Cambio Climático"],
                            "formación ética y ciudadana": ["Justicia Social", "Política y Gobernanza"]
                        }
                    }
                }
            },
            tecnología: {
                grados: {
                    1: {
                        disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                        temas: {
                            "informática": ["Fundamentos de Computación", "Introducción a Programación"],
                            "robótica": ["Conceptos Básicos de Robótica", "Proyectos con LEGO"],
                            "tecnología aplicada": ["Uso de Herramientas Digitales", "Proyectos de Innovación Tecnológica"]
                        }
                    },
                    2: {
                        disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                        temas: {
                            "informática": ["Desarrollo de Software", "Bases de Datos Básicas"],
                            "robótica": ["Construcción de Robots Simples", "Controladores y Sensores"],
                            "tecnología aplicada": ["TICs en la Educación", "Proyectos de Ingeniería"]
                        }
                    },
                    3: {
                        disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                        temas: {
                            "informática": ["Programación Avanzada", "Desarrollo de Aplicaciones"],
                            "robótica": ["Robots Autónomos", "Inteligencia Artificial Básica"],
                            "tecnología aplicada": ["Proyectos Tecnológicos Complejos", "Sistemas Integrados"]
                        }
                    },
                    4: {
                        disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                        temas: {
                            "informática": ["Ciberseguridad", "Gestión de Redes"],
                            "robótica": ["Programación de Robots Avanzados", "Aplicaciones en la Industria"],
                            "tecnología aplicada": ["Desarrollo de Software Empresarial", "Innovación en Tecnología"]
                        }
                    },
                    5: {
                        disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                        temas: {
                            "informática": ["Desarrollo Web y Móvil", "Administración de Bases de Datos"],
                            "robótica": ["Competencias de Robótica", "Proyectos de Robótica Educativa"],
                            "tecnología aplicada": ["Tecnologías Emergentes", "Realidad Virtual y Aumentada"]
                        }
                    },
                    6: {
                        disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                        temas: {
                            "informática": ["Inteligencia Artificial", "Big Data y Análisis"],
                            "robótica": ["Desarrollo de Robots Industriales", "Proyectos de Robótica Autónoma"],
                            "tecnología aplicada": ["Desarrollo de Tecnologías de Innovación", "Emprendimientos Tecnológicos"]
                        }
                    },
                    7: {
                        disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                        temas: {
                            "informática": ["Desarrollo de Inteligencia Artificial", "Computación en la Nube"],
                            "robótica": ["Robótica Avanzada en la Industria", "Proyectos de Robótica de Investigación"],
                            "tecnología aplicada": ["Innovación Tecnológica y Desarrollo", "Proyectos de Tecnología Sustentable"]
                        }
                    }
                }
            },
            educación_artística: {
                grados: {
                    1: {
                        disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                        temas: {
                            "artes visuales": ["Dibujo y Pintura Básica", "Escultura con Materiales Blandos"],
                            "música": ["Ritmo y Movimiento Musical", "Canto Coral Básico"],
                            "teatro": ["Juegos de Expresión Corporal", "Técnicas de Improvisación"],
                            "danza": ["Danza Folclórica Básica", "Expresión Corporal Creativa"]
                        }
                    },
                    2: {
                        disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                        temas: {
                            "artes visuales": ["Collage y Técnicas Mixtas", "Modelado en Arcilla"],
                            "música": ["Instrumentos de Percusión", "Canto en Grupo"],
                            "teatro": ["Montaje de Escenas Simples", "Dramatización de Cuentos"],
                            "danza": ["Danzas Tradicionales Argentinas", "Danza Libre"]
                        }
                    },
                    3: {
                        disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                        temas: {
                            "artes visuales": ["Técnicas de Acuarela", "Diseño Gráfico Básico"],
                            "música": ["Teoría Musical Básica", "Armonía Vocal"],
                            "teatro": ["Creación de Guiones", "Dirección de Escenas"],
                            "danza": ["Coreografía Simple", "Expresión a Través del Movimiento"]
                        }
                    },
                    4: {
                        disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                        temas: {
                            "artes visuales": ["Pintura en Gran Formato", "Escultura en Yeso"],
                            "música": ["Composición Musical", "Interpretación de Canciones"],
                            "teatro": ["Producción Teatral Completa", "Análisis de Textos Teatrales"],
                            "danza": ["Danza Contemporánea", "Improvisación en Danza"]
                        }
                    },
                    5: {
                        disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                        temas: {
                            "artes visuales": ["Instalaciones Artísticas", "Fotografía"],
                            "música": ["Composición Avanzada", "Historia de la Música"],
                            "teatro": ["Dirección Teatral", "Producción de Obras Complejas"],
                            "danza": ["Coreografía Compleja", "Montaje de Espectáculos"]
                        }
                    },
                    6: {
                        disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                        temas: {
                            "artes visuales": ["Arte Contemporáneo", "Proyectos de Arte Urbano"],
                            "música": ["Producción Musical", "Teoría de la Música Avanzada"],
                            "teatro": ["Dramaturgia", "Técnicas de Actuación Avanzadas"],
                            "danza": ["Danza Experimental", "Performance en Danza"]
                        }
                    },
                    7: {
                        disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                        temas: {
                            "artes visuales": ["Proyectos de Arte Interactivo", "Arte Digital"],
                            "música": ["Composición de Bandas Sonoras", "Producción de Música Electrónica"],
                            "teatro": ["Teatro Experimental", "Producción de Performances"],
                            "danza": ["Danza en Contextos Multidisciplinarios", "Danza Teatro"]
                        }
                    }
                }
            },
            educación_física: {
                grados: {
                    1: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Fundamentos de Fútbol", "Iniciación en Atletismo"],
                            "juegos recreativos": ["Juegos Cooperativos", "Juegos de Velocidad"],
                            "educación para la salud": ["Higiene Personal y Salud", "Importancia del Ejercicio"]
                        }
                    },
                    2: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Fundamentos de Básquetbol", "Introducción a la Natación"],
                            "juegos recreativos": ["Juegos de Equipo", "Juegos de Estrategia"],
                            "educación para la salud": ["Nutrición Básica", "Higiene Postural"]
                        }
                    },
                    3: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Voleibol Básico", "Carreras de Resistencia"],
                            "juegos recreativos": ["Juegos de Agilidad", "Juegos Tradicionales"],
                            "educación para la salud": ["Prevención de Lesiones", "Relajación y Estrés"]
                        }
                    },
                    4: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Hockey Básico", "Deportes en Equipo"],
                            "juegos recreativos": ["Juegos de Estrategia Compleja", "Actividades al Aire Libre"],
                            "educación para la salud": ["Ejercicio y Bienestar", "Impacto del Ejercicio en la Salud"]
                        }
                    },
                    5: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Atletismo de Competición", "Natación Avanzada"],
                            "juegos recreativos": ["Juegos de Reto", "Juegos de Coordinación"],
                            "educación para la salud": ["Ejercicio y Nutrición", "Entrenamiento Funcional"]
                        }
                    },
                    6: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Entrenamiento Deportivo", "Deportes de Aventura"],
                            "juegos recreativos": ["Juegos de Resistencia", "Actividades de Supervivencia"],
                            "educación para la salud": ["Planes de Entrenamiento", "Impacto de la Actividad Física en la Salud Mental"]
                        }
                    },
                    7: {
                        disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                        temas: {
                            "deportes": ["Deportes de Alto Rendimiento", "Entrenamiento Intensivo"],
                            "juegos recreativos": ["Actividades de Desafío Físico", "Juegos en la Naturaleza"],
                            "educación para la salud": ["Entrenamiento Personalizado", "Deporte y Calidad de Vida"]
                        }
                    }
                }
            }
        }
    }
};
