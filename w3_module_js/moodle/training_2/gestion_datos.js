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
    },
    "PC003": {
        id: "PC003",
        name: "Memoria RAM DDR4 32GB",
        price: 129.99
    }
};

const productSet = new Set();
Object.values(products).forEach(product => productSet.add(product));

const categoryMap = new Map();
categoryMap.set("Procesadores", "Intel Core i7-12700K");
categoryMap.set("Tarjetas Gráficas", "RTX 4070 Ti");
categoryMap.set("Memoria RAM", "DDR4 32GB");

function validateProduct(product) {
    if (!product.id || !product.name || typeof product.price !== 'number' || product.price <= 0) {
        return false;
    }
    return true;
}

function showProducts() {
    const objectElement = document.getElementById('products-object');
    objectElement.innerHTML = '';

    const setElement = document.getElementById('products-set');
    setElement.innerHTML = '';

    const mapElement = document.getElementById('products-map');
    mapElement.innerHTML = '';
    
    const productsMapped = Object.values(products).map(product => {
        return `<div class="product-item">
            <div class="name-product">${product.name}</div>
            <div class="price">€${product.price.toFixed(2)}</div>
            <span class="id-badge">ID: ${product.id}</span>
        </div>`;
    });
    objectElement.innerHTML = productsMapped.join('');
    
    productSet.forEach(product => {
        if (validateProduct(product)) {
            const div = document.createElement('div');
            div.className = 'product-item set-item';
            div.innerHTML = `
                <div class="name-product">${product.name}</div>
                <div class="price">€${product.price.toFixed(2)}</div>
                <span class="id-badge">ID: ${product.id}</span>
            `;
            setElement.appendChild(div);
        }
    });

    categoryMap.forEach((product, category) => {
        const div = document.createElement('div');
        div.className = 'product-item map-item';
        div.innerHTML = `
            <span class="category-badge">${category}</span>
            <div class="name-product">${product}</div>
        `;
        mapElement.appendChild(div);
    });
}

// Función para mostrar resultados en consola
function showInConsole() {
    console.log("=== GESTIÓN DE DATOS - COMPONENTES PC ===");
    console.log("");
    
    // Recorrer el objeto product con for...in
    console.log("📋 Productos (Objeto) - for...in:");
    console.log("--------------------------------");
    for (let key in products) {
        const product = products[key];
        console.log(`Clave: ${key}`);
        console.log(`  ID: ${product.id}`);
        console.log(`  Nombre: ${product.name}`);
        console.log(`  Precio: €${product.price.toFixed(2)}`);
        console.log(`  Válido: ${validateProduct(product) ? '✅' : '❌'}`);
        console.log("");
    }

    // Recorrer el objeto usando Object.keys
    console.log("🔒 Productos (Objeto) - Object.keys:");
    console.log("--------------------------------");
    Object.keys(products).forEach(key => {
        const product = products[key];
        console.log(`Clave: ${key}`);
        console.log(`  ID: ${product.id}`);
        console.log(`  Nombre: ${product.name}`);
        console.log(`  Precio: €${product.price.toFixed(2)}`);
        console.log(`  Válido: ${validateProduct(product) ? '✅' : '❌'}`);
        console.log("");
    });

    // Recorrer el objeto usando Object.entries
    console.log("🔒 Productos (Objeto) - Object.entries:");
    console.log("--------------------------------");
    Object.entries(products).forEach(([key, product]) => {
        console.log(`Clave: ${key}`);
        console.log(`  ID: ${product.id}`);
        console.log(`  Nombre: ${product.name}`);
        console.log(`  Precio: €${product.price.toFixed(2)}`);
        console.log(`  Válido: ${validateProduct(product) ? '✅' : '❌'}`);
        console.log("");
    });

    // Recorrer el Set con for...of
    console.log("🔒 Productos ÚNICOS (Set) - for...of:");
    console.log("------------------------------------");
    for (let product of productSet) {
        console.log(`ID: ${product.id}`);
        console.log(`Nombre: ${product.name}`);
        console.log(`Precio: €${product.price.toFixed(2)}`);
        console.log(`Válido: ${validateProduct(product) ? '✅' : '❌'}`);
        console.log("");
    }

    // Recorrer el Map con forEach
    console.log("🏷️ CATEGORÍAS Y Productos (Map) - forEach:");
    console.log("----------------------------------------");
    categoryMap.forEach((product, category) => {
        console.log(`Categoría: ${category}`);
        console.log(`Producto: ${product}`);
        console.log("");
    });

    // Validación y pruebas
    console.log("🧪 VALIDACIÓN Y PRUEBAS:");
    console.log("------------------------");
    console.log(`Total product en objeto: ${Object.keys(products).length}`);
    console.log(`Total product únicos en Set: ${productSet.size}`);
    console.log(`Total categorías en Map: ${categoryMap.size}`);
    console.log("");
    
    console.log("=== FIN DE LA DEMOSTRACIÓN ===");
}

// Función para agregar un producto duplicado y demostrar Set
function addDuplicatedProduct() {
    const duplicatedProduct = {
        id: "PC001",
        name: "Procesador Intel Core i7-12700K",
        price: 399.99
    };
    
    productSet.add(duplicatedProduct);
    console.log("🔄 Producto duplicado agregado al Set");
    console.log(`Tamaño del Set después de agregar duplicado: ${productSet.size}`);
    console.log("El Set mantiene solo product únicos por referencia de objeto");
}

document.addEventListener('DOMContentLoaded', () => {
    showProducts();
    console.log("🚀 Aplicación iniciada. Abre la consola para ver los resultados.");
    console.log("💡 Usa la función showEnConsola() para ver todos los datos.");
    console.log("💡 Usa la función addDuplicatedProduct() para demostrar la unicidad del Set.");
});

// Hacer funciones disponibles globalmente
window.showInConsole = showInConsole;
window.addDuplicatedProduct = addDuplicatedProduct; 