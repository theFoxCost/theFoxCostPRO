import { SimpleTooltip } from "@/components/ui/tooltip";
import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

// dass is gut
export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by tailwindcss.com & ui.shadcn.com
        </p>
        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href="https://www.instagram.com/thefoxcost/"
            target="_blank"
            rel="noopener"
          >
            theFoxCost
          </a>
          . The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>
        <div
          className={cn(
            "screen-line-before screen-line-after flex w-full before:z-1 after:z-1",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            <a
              className="flex font-mono text-xs font-medium text-muted-foreground"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener noreferrer"
            >
              llms.txt
            </a>
            <Separator />
            <SimpleTooltip content="Free Palestine">
              <a
                className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
                href="https://en.wikipedia.org/wiki/Free_Palestine_Movement"
                target="_blank"
                rel="noopener noreferrer"
                title="Free Palestine"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 6 3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="#009639" width="6" height="3" />
                  <rect fill="#FFF" width="6" height="2" />
                  <rect fill="#000" width="6" height="1" />
                  <path fill="#ED2E38" d="M0,0l2,1.5L0,3Z" />
                </svg>
                <span className="sr-only">Palestine Flag</span>
              </a>
            </SimpleTooltip>
            <Separator />
            <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://www.dmca.com/ProtectionPro.aspx"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.dmca className="h-5 w-auto" />
              <span className="sr-only">DMCA.com Protection Status</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
