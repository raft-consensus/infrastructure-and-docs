# Raft DB Documentation

Sitio de documentación de **Raft DB**, una plataforma de hosting de bases de datos y servicios para desarrolladores basada en una arquitectura **Database-Centric** (toda la lógica de negocio vive en SQL Server; el backend es solo un mediador).

Construido con [Docusaurus](https://docusaurus.io/).

## Contenido

- `docs/intro.mdx` — presentación del proyecto, filosofía y políticas de seguridad.
- `docs/architecture.mdx` — arquitectura del sistema y patrón Repositorio + DIP.
- `docs/server-and-ports.mdx` — servicios expuestos, puertos y por qué.
- `docs/local-installation.mdx` — guía de instalación local para nuevos desarrolladores.
- `docs/stored-procedures.mdx` — convenciones y catálogo de Stored Procedures, Views y Functions.

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run start
```

Levanta un servidor local en `http://localhost:3000` con recarga automática.

## Build

```bash
npm run build
```

Genera el sitio estático en el directorio `build`, listo para desplegarse en cualquier hosting estático.
