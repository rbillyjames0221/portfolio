import React from "react";
import { GraduationCap, Award, Trophy, Medal } from "lucide-react";
import { AnimatedSection } from "@/components/common/animated-section";

export default function EducationCard() {
  return (
    <AnimatedSection direction="up" delay={0.2} className="mt-12 space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold font-heading">Educational History</h2>
          <p className="text-sm text-muted-foreground">
            Academic background, degrees, and institutional honors
          </p>
        </div>
      </div>

      <div className="w-full p-6 bg-background border border-border rounded-xl shadow-sm transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <h3 className="text-xl font-bold text-foreground">
                BS in Computer Science
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 w-fit">
                2020 - 2024
              </span>
            </div>
            <p className="text-base font-medium text-foreground/80 mt-1">
              Centro Escolar University Makati
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Makati City, Metro Manila, Philippines
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/60 border border-border/60">
                <Award className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Magna Cum Laude
                  </div>
                  <div className="text-xs text-muted-foreground">Academic Distinction</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/60 border border-border/60">
                <Trophy className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Outstanding Student
                  </div>
                  <div className="text-xs text-muted-foreground">A.Y. 2023 - 2024</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/60 border border-border/60">
                <Medal className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Gold Medalist
                  </div>
                  <div className="text-xs text-muted-foreground">Co- & Extracurricular Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
