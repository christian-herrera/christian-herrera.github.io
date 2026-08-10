# Proyectos

Los proyectos se listan en el archivo `proyectos.json` y allí, deberan tener la estructura:

```json
{
    "fecha": "MM/AAAA",
    "titulo": "TITULO",
    "descripcion": "BREVE DESCRIPCION",
    "categoria": ["html", "css", "javascript"],
    "botones": [
        {
            "label": "TITULO DEL BOTON",
            "url": "URL CON HTTPS"
        }
    ]
}
```

Donde las categorias disponibles (ubicadas en `src/styles/Timeline.css`) son:

- unlp
- stm32
- atmel
- matlab
- html
- css
- javascript
- nodejs
- react
- default

<br><br>

# Certificaciones

Estos se encuentran en el archivo `certificaciones.json` y allí, deberan tener la estructura:

```json
{
    "fecha": "MM/AAAA",
    "titulo": "TITULO",
    "descripcion": "BREVE DESCRIPCION",
    "categoria": [
        "académico"
    ],
    "botones": [
        {
            "label": "TITULO DEL BOTON",
            "url": "URL CON HTTPS"
        }
    ],
    "titulos": true
},
```

Donde las categorias disponibles (ubicadas en `src/styles/CertificationsCards.css`) son:

- académico
- instituto
- unlp
- oaa
- curso
- talento-tech
- default
