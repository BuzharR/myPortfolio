/**
 * Shared, app-wide TypeScript types live here.
 * Feature-specific types should live next to that feature instead.
 */

import type { LucideIcon } from "lucide-react";

/** A generic feature/card used across demo pages. */
export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** Helper for components that accept and merge a className. */
export type WithClassName<T = unknown> = T & {
  className?: string;
};
