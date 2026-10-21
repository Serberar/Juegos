# Juegos y conversor de divisas (Angular)

Aplicación en Angular con un **conversor de divisas** en tiempo real y **tres minijuegos**.

## Secciones

| Sección | Qué hace |
|---|---|
| **Inicio** | Conversor de divisas: eliges cantidad y moneda y ves el cambio a las demás, con su bandera. Los tipos de cambio salen de la API pública [VATcomply](https://www.vatcomply.com/). |
| **Encuentra las parejas** | Juego de memoria con cartas de planetas. |
| **Dale a Diglett** | Juego tipo *whack-a-mole* con tiempo límite y puntuación. |
| **Encuentra el tesoro** | Busca el tesoro escondido en el tablero; cuenta los intentos. |

## Tecnologías

Angular 15, TypeScript, `HttpClient` y `ngModel` (FormsModule).

## Cómo arrancarlo

```bash
npm install
npx ng serve      # http://localhost:4200
```

## Repos relacionados

[conversor](https://github.com/Serberar/conversor) es una versión anterior de este proyecto, con el conversor terminado y los juegos sin hacer.

## Autor

Sergio Bernabé
