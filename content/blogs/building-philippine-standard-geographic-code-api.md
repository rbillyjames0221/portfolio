---
title: "Architecting a High-Performance PSGC REST API & Next.js Explorer for 42,000+ Barangays"
date: "2026-10-24"
description: "How I designed a verified, staged quarterly data pipeline and interactive explorer for the Philippine Standard Geographic Code (PSA PSGC)."
tags: ["Next.js", "TypeScript", "REST API", "Open Source", "Philippines"]
coverImage: "/favicon.ico"
featured: true
---

The **Philippine Standard Geographic Code (PSGC)**, maintained by the Philippine Statistics Authority (PSA), is the authoritative classification system used across government agencies, logistics networks, financial institutions, and software systems throughout the Philippines.

Yet, building applications requiring official geographic data often means dealing with complex multi-sheet Excel files published quarterly, inconsistent naming conventions, and lack of verified REST APIs.

To solve this, I designed and built **[PSGC API](https://psgc.billyjamesramos.com/)**, an open-source Next.js dashboard and public REST API providing structured, validated access to every administrative tier in the country.

---

## The Scale of the Data

Every Philippine administrative division follows a strict 10-digit PSGC code hierarchy:
- **18 Regions**
- **82 Provinces**
- **149 Cities** (33 Highly Urbanized, 5 Independent Component, 111 Component Cities)
- **1,493 Municipalities**
- **14 Sub-municipalities** (District subdivisions of Manila)
- **42,010 Barangays**

```
Region (2 digits) -> Province (3 digits) -> City/Municipality (2 digits) -> Barangay (3 digits)
```

## Designing the Quarterly Staging Pipeline

A core challenge with official government data is handling quarterly updates. The PSA periodically reclassifies barangays, updates municipalities, and corrects spelling (such as PSA reference 2026-331 released in Q3 2026).

To prevent stale or corrupted data, I built a staged ingestion pipeline:
1. **Workbook Parser**: Reads raw PSA `.xlsx` workbooks and extracts entities with geographic level tags.
2. **National Summary Cross-Validation**: On every import, the parser verifies per-region counts against the PSA National Summary sheet.
3. **Staged Approval**: Any code change or barangay rename is staged for human review before updating production database indexes.

## Interactive Explorer & Public REST Endpoints

The frontend provides an instantaneous search experience with drill-down navigation:
- Filter by region -> province -> city/municipality -> barangay.
- Instant search by 10-digit code or geographic name.
- Direct REST API (`/api/regions`, `/api/provinces`, `/api/cities`, `/api/barangays`) with filter parameters and query caching.

Explore the live app at [psgc.billyjamesramos.com](https://psgc.billyjamesramos.com/) and review the source code on [GitHub](https://github.com/rbillyjames0221/psgc-api).
