import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { LANGUAGES } from "../data/languages";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function LanguagesSection() {
  return (
    <Panel id="languages">
      <PanelHeader>
        <PanelTitle>Languages</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {LANGUAGES.map((lang) => (
            <li key={lang.key} className="flex">
              <SimpleTooltip content={lang.title}>
                <a
                  href={lang.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={lang.title}
                >
                  <Image
                    src={`/lang/${lang.key}.svg`}
                    alt={`${lang.title} icon`}
                    width={42}
                    height={42}
                    unoptimized
                  />

                  <span className="sr-only">{lang.title}</span>
                </a>
              </SimpleTooltip>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
