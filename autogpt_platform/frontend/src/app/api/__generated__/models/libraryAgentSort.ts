/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * AutoGPT Agent Server
 * This server is used to execute agents that are created by the AutoGPT system.
 * OpenAPI spec version: 0.1
 */

/**
 * Possible sort options for sorting library agents.
 */
export type LibraryAgentSort =
  (typeof LibraryAgentSort)[keyof typeof LibraryAgentSort];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LibraryAgentSort = {
  createdAt: "createdAt",
  updatedAt: "updatedAt",
} as const;
