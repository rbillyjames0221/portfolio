---
title: "CourtScribe AI: Engineering Resilient Live Transcription for Court Hearings"
date: "2026-10-20"
description: "Developing a crash-resilient audio ingestion pipeline with 5-second IndexedDB checkpoints, bilingual recognition, and judicial role tagging."
tags: ["Applied AI", "PWA", "Web Speech API", "TypeScript", "Legal Tech"]
coverImage: "/favicon.ico"
featured: true
---

Courtroom proceedings and legal depositions have zero tolerance for lost testimony. In the Philippines, court stenographers and legal secretaries navigate intense proceedings where speakers switch fluidly between English, Filipino, and legal Latin phrases.

I built **[CourtScribe AI](https://github.com/rbillyjames0221/courtscribe-ai)** as a mobile-first Progressive Web Application (PWA) tailored specifically for Philippine courtroom and legal hearing dynamics.

---

## The Engineering Challenge: Crash Resiliency

Browser-based audio transcription faces serious edge cases: accidental tab closures, OS memory management reclaiming background tabs, or connectivity drops. Losing even 30 seconds of cross-examination testimony is unacceptable.

To guarantee fault tolerance:
1. **Decoupled Audio Pipeline**: The audio recording engine lives outside React's lifecycle.
2. **5-Second Checkpointing**: Using `MediaRecorder`, audio is sliced into 5-second sequence-numbered chunks and immediately persisted to browser `IndexedDB`.
3. **Session Recovery Banner**: If a browser crashes or reloads, the app detects unclosed sessions and offers instant 1-click timeline resumption without audio data loss.

## Philippine Legal Workflow Features

- **Judicial Role Assignment**: Real-time participant tagging for Judge, Court Stenographer, Prosecutor, Defense Counsel, Witness, Interpreter, and Clerk.
- **Bilingual Recognition**: Supports `en-PH` and `fil-PH` dialects, with seamless language switching mid-session without stopping audio capture.
- **Review Workspace**: Integrated digital stenography workspace featuring interactive waveforms, passage playback, and inline revision tracking.
- **RA 10173 Compliance**: Built-in authorization verification confirming consent and compliance with the Philippine Data Privacy Act.

Explore the repository on [GitHub](https://github.com/rbillyjames0221/courtscribe-ai).
