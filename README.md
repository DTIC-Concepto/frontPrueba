# Gestión de RAAs - Frontend

Esta aplicación de Next.js permite gestionar RAAs (Resultados de Aprendizaje de la Asignatura) conectándose a un backend para realizar operaciones CRUD.

## Características Implementadas

### 📋 Listado de RAAs (GET)
- Visualización de todos los RAAs en una tabla
- Muestra: Código, Nombre, Descripción, Tipo, PEA
- Estados de carga y error
- Actualización automática al enfocar la ventana

### ➕ Crear RAA (POST)
- Formulario interactivo para crear nuevos RAAs
- Campos:
  - **Código** (opcional): Se autogenera si se deja vacío
  - **Nombre** (obligatorio)
  - **Descripción** (obligatorio)
  - **Tipo** (obligatorio): Conceptual, Procedimental, Actitudinal
  - **PEA** (obligatorio): Lista de PEAs disponibles
- Validación de campos
- Redirección automática al listado después de crear

## Configuración

### Prerequisites
- Node.js 20+
- Backend corriendo en `http://localhost:3000`

### Instalación

1) Abrir el proyecto en Visual Studio Code
2) En la terminal, ejecutar `npm install`
3) Ejecutar `npm run dev` para ver el proyecto en el navegador

La aplicación estará disponible en: `http://localhost:3001`

## API Endpoints Utilizados

### GET /raa
Obtiene la lista de todos los RAAs

### POST /raa
Crea un nuevo RAA

**Body enviado:**
```json
{
  "codigo": "RAA-001",
  "nombre": "Aplicación de principios de programación",
  "descripcion": "El estudiante será capaz de aplicar principios fundamentales de programación orientada a objetos para resolver problemas computacionales de mediana complejidad.",
  "asignaturaId": 1,
  "tipoRaaId": 1,
  "nivel": "INTERMEDIO",
  "estadoActivo": true,
  "generarCodigoAutomatico": false,
  "prefijoPersonalizado": "RAA"
}
```

## Tecnologías Utilizadas

- **Next.js 15** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos (manteniendo el diseño original de Figma)
- **React Hooks** para manejo de estado

## Notas Importantes

1. **Puertos**: El frontend corre en el puerto 3001, el backend debe correr en el puerto 3000
2. **Datos hardcodeados**: Algunos valores como `asignaturaId` y `tipoRaaId` están hardcodeados con valores por defecto
3. **Backend requerido**: Asegúrate de que el backend esté corriendo en `http://localhost:3000` con los endpoints `/raa` disponibles

## Funcionalidades Implementadas

- ✅ Listar RAAs (GET)
- ✅ Crear RAA (POST)
- ✅ Formulario interactivo con validación
- ✅ Estados de carga y error
- ✅ Navegación entre páginas
- ✅ Diseño manteniendo el estilo de Figma
