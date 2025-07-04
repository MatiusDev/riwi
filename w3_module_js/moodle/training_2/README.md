# Gestión de Datos - Componentes PC

## Descripción General

Este proyecto demuestra el uso de diferentes estructuras de datos en JavaScript para gestionar información de componentes de computadora. Se implementan Objetos, Map y Set para mostrar las diferentes formas de almacenar y manipular datos.

## Estructura del Proyecto

| Archivo | Descripción |
|---------|-------------|
| `gestion_datos.js` | Archivo principal con toda la lógica de gestión de datos |

## Estructuras de Datos Utilizadas

### 1. Objeto de Productos

El objeto `products` almacena información de componentes de PC con la siguiente estructura:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `id` | String | Identificador único del producto |
| `name` | String | Nombre descriptivo del componente |
| `price` | Number | Precio en euros del producto |

**Ejemplo de estructura:**
```javascript
const products = {
    "PC001": {
        id: "PC001",
        name: "Procesador Intel Core i7-12700K",
        price: 399.99
    },
    "PC002": {
        id: "PC002",
        name: "Tarjeta Gráfica RTX 4070 Ti",
        price: 799.99
    }
    // ... más productos
};
```

### 2. Set de Productos Únicos

El `productSet` garantiza que no haya productos duplicados:

| Método | Descripción |
|--------|-------------|
| `add()` | Agrega un producto al Set |
| `size` | Obtiene el número de elementos únicos |
| `forEach()` | Itera sobre todos los elementos |

### 3. Map de Categorías

El `categoryMap` relaciona categorías con productos específicos:

| Clave | Valor |
|-------|-------|
| "Procesadores" | "Intel Core i7-12700K" |
| "Tarjetas Gráficas" | "RTX 4070 Ti" |
| "Memoria RAM" | "DDR4 32GB" |

## Funciones Principales

### Funciones de Validación

| Función | Parámetros | Retorno | Descripción |
|---------|------------|---------|-------------|
| `validateProduct(product)` | Objeto producto | Boolean | Valida que el producto tenga todas las propiedades requeridas |

**Criterios de validación:**
- Debe tener un `id` no vacío
- Debe tener un `name` no vacío
- El `price` debe ser un número mayor que 0

### Funciones de Visualización

| Función | Descripción |
|---------|-------------|
| `showProducts()` | Renderiza todos los productos en la interfaz web |
| `showInConsole()` | Muestra información detallada en la consola del navegador |

### Funciones de Demostración

| Función | Descripción |
|---------|-------------|
| `addDuplicatedProduct()` | Demuestra cómo el Set maneja productos duplicados |

## Métodos de Iteración Implementados

### Iteración con for...in (Objeto)

```javascript
for (let key in products) {
    const product = products[key];
    // Procesar cada producto
}
```

**Características:**
- Itera sobre las propiedades enumerables del objeto
- Accede tanto a la clave (ID) como al valor (producto)
- Ideal para objetos con propiedades dinámicas

### Iteración con for...of (Set)

```javascript
for (let product of productSet) {
    // Procesar cada producto único
}
```

**Características:**
- Itera directamente sobre los valores
- Garantiza acceso a elementos únicos
- Sintaxis más limpia para colecciones

### Iteración con forEach (Map)

```javascript
categoryMap.forEach((product, category) => {
    // Procesar cada par clave-valor
});
```

**Características:**
- Proporciona acceso a clave y valor
- Método funcional de programación
- Callback con parámetros específicos

### Métodos de Objeto para Iteración

#### Object.keys()

```javascript
Object.keys(products).forEach(key => {
    const product = products[key];
    // Procesar cada producto usando la clave
});
```

**Características:**
- Retorna un array con todas las claves del objeto
- Permite usar métodos de array como `forEach`, `map`, `filter`
- Útil cuando solo necesitas las claves del objeto

#### Object.values()

```javascript
Object.values(products).forEach(product => {
    // Procesar directamente cada producto
});
```

**Características:**
- Retorna un array con todos los valores del objeto
- Acceso directo a los productos sin necesidad de la clave
- Ideal para operaciones que solo requieren los valores

#### Object.entries()

```javascript
Object.entries(products).forEach(([key, product]) => {
    // Procesar clave y valor simultáneamente
});
```

**Características:**
- Retorna un array de pares [clave, valor]
- Permite acceder a clave y valor en una sola iteración
- Sintaxis moderna con destructuring

## Características del Código

### Ventajas de cada Estructura

| Estructura | Ventajas | Casos de Uso |
|------------|----------|--------------|
| **Objeto** | Acceso directo por clave, estructura clara | Datos relacionados, configuración |
| **Set** | Elementos únicos, métodos de conjunto | Eliminar duplicados, verificar existencia |
| **Map** | Claves de cualquier tipo, orden de inserción | Mapeo clave-valor, diccionarios |

## Uso del Código

### Inicialización

El código se inicializa automáticamente cuando se carga el DOM:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    showProducts();
    // Configuración inicial
});
```

### Funciones Disponibles Globalmente

| Función | Uso en Consola |
|---------|----------------|
| `showInConsole()` | Muestra información detallada |
| `addDuplicatedProduct()` | Demuestra unicidad del Set |

### Salida en Consola

La función `showInConsole()` genera la siguiente información:

1. **Productos del Objeto**: Lista todos los productos con validación
2. **Productos Únicos del Set**: Muestra elementos sin duplicados
3. **Categorías del Map**: Presenta la relación categoría-producto
4. **Estadísticas**: Totales de cada estructura de datos