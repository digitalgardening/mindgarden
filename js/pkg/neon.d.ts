/* tslint:disable */
/* eslint-disable */
/**
 */
export function renderTitle(): void;
/**
 * @param {string} x
 */
export function switch_mousedown(x: string): void;
/**
 * @param {string} x
 */
export function switch_mouseover(x: string): void;
/**
 * @param {string} x
 */
export function switch_input(x: string): void;
/**
 */
export function showMenu(): void;

export type InitInput =
  | RequestInfo
  | URL
  | Response
  | BufferSource
  | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly renderTitle: () => void;
  readonly switch_mousedown: (a: number, b: number) => void;
  readonly switch_mouseover: (a: number, b: number) => void;
  readonly switch_input: (a: number, b: number) => void;
  readonly showMenu: () => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {InitInput | Promise<InitInput>} module_or_path
 *
 * @returns {Promise<InitOutput>}
 */
export default function init(
  module_or_path?: InitInput | Promise<InitInput>
): Promise<InitOutput>;
