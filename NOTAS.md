# Flujos de Trabajo

## Actualización de la Infraestrucura PKI

### Para las actualizaciones de los CRL:

- Colocar los archivos `.crl` en el path `/public/`.
- Colocar la fecha actual de la actualización en el campo ***lastUpdate*** del archivo [/src/assets/pki.json](src/assets/pki.json).
- Ejecutar en `npm run build` y finalmente el `push`.

### Renovación de las CA y subCAs

- Colocar los archivos `.crt` en el path `/public/`.
- Configurar las fechas de los campos ***expiryDate*** en el archivo [/src/assets/pki.json](src/assets/pki.json).
- Colocar la fecha actual de la actualización en el campo ***lastUpdate*** del archivo [/src/assets/pki.json](src/assets/pki.json).
- Hacer el `npm run build` y subir con `push`.

<br><br>

## Nueva Certificación

- Colocar (si existe) el archivo asociado en el path `/public/certificaciones/`.
- Colocar una nueva entrada en el archivo json [/src/assets/certificaciones.json](/src/assets/certificaciones.json) usando la siguiente estructura:
  
    ```json
    {
        "fecha": "MM/AAAA",
        "titulo": "TITULO",
        "descripcion": "BREVE DESCRIPCION",
        "categoria": [
            "académico|instituto|unlp|oaa|curso|talento-tech|default"  // <- Separados con `,` si se usan mas de uno
        ],
        "botones": [
            {
                "label": "GitHub",
                "url": "https://xxxxxxxxxxxxxxxx"
            },
            {
                "label": "Demo",
                "url": "./certificaciones/xxxxxxxxxxxxxxxx"
            }
        ],
        "titulos": true   // <- `true` coloca un recuadro naranja llamativo
    },
    ```
- Hacer el `npm run build` y subir con `push`.


<br><br>

## Nuevo Proyecto

- Colocar una nueva entrada en el archivo json [/src/assets/proyectos.json](/src/assets/proyectos.json) usando la siguiente estructura:
  
    ```json
    {
        "fecha": "MM/AAAA",
        "titulo": "TITULO",
        "descripcion": "BREVE DESCRIPCION",
        "categoria": ["unlp|stm32|atmel|matlab|html|css|javascript|nodejs|react|default"],    // <- Separados con `,` si se usan mas de uno
        "botones": [
            {
                "label": "TITULO DEL BOTON",
                "url": "URL CON HTTPS"
            }
        ]
    }
    ```
- Hacer el `npm run build` y subir con `push`.