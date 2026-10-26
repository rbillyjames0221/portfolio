---
title: "Schema Atlas: Building a Local-First Database Architecture Studio"
date: "2026-10-22"
description: "Deep dive into designing an interactive ERD canvas with Dagre auto-layout, bi-directional Prisma schema parsing, and SQL DDL synchronization."
tags: ["Database", "Prisma", "PostgreSQL", "Next.js", "Architecture"]
coverImage: "/favicon.ico"
featured: true
---

Relational database schemas are the bedrock of reliable software architecture. While writing Prisma schemas or raw PostgreSQL DDL is straightforward for small systems, communicating complex entity-relationship graphs across engineering teams requires visual clarity.

Most existing ERD tools suffer from two major problems:
1. **Cloud dependency / Latency**: Schemas contain sensitive architecture blueprints that teams may not want uploaded to third-party proprietary clouds.
2. **One-way export**: Most tools export images or diagrams, but cannot import existing Prisma schemas or generate production-ready DDL bidirectionally.

This motivated me to develop **[Schema Atlas](https://schemaatlas.billyjamesramos.com)**, a responsive, local-first Next.js App Router database studio.

---

## Core Capabilities

- **Interactive Canvas**: Pan, zoom, minimap, grid snap, and fit-to-screen controls.
- **Bi-directional Synchronization**:
  - Direct import and export of Prisma `.prisma` schemas.
  - Parsing and export of PostgreSQL `CREATE TABLE` SQL statements.
  - Zero-dependency workspace JSON export/import.
- **Dagre Automated Graph Layout**: Automatic hierarchical arrangement of complex schemas with horizontal and vertical layout orientations.
- **Visual Relation Builder**: Drag-and-drop handles for connecting foreign keys with referential actions (`ON DELETE`, `ON UPDATE`).

## Keeping it Local-First

By keeping the entire schema editor and parser in client-side state:
- **Zero latency**: Graph manipulations, node additions, and field modifications run at 60 FPS without server roundtrips.
- **Total privacy**: Database schemas never leave your browser unless you choose to export them.

Try Schema Atlas at [schemaatlas.billyjamesramos.com](https://schemaatlas.billyjamesramos.com) and inspect the code on [GitHub](https://github.com/rbillyjames0221/schema-atlas).
