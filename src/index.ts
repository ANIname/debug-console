import runInteractiveLog from './interactive-log'

interface ConsoleDebug extends Omit<Console, 'Console' | 'dir' | 'dirxml' | 'timeStamp' | 'profile' | 'profileEnd'> {
  interactiveLog: (message: string, delayMin?: number, delayMax?: number) => void
}

const isDebugDisabled = (): boolean => typeof process.env.CONSOLE_DEBUG === 'undefined'

const consoleDebugMethods: ConsoleDebug = {
  interactiveLog: (...args) => isDebugDisabled() ? undefined : runInteractiveLog(...args),
  assert:         (...args) => isDebugDisabled() ? undefined : console.assert(...args),
  log:            (...args) => isDebugDisabled() ? undefined : console.log(...args),
  info:           (...args) => isDebugDisabled() ? undefined : console.info(...args),
  debug:          (...args) => isDebugDisabled() ? undefined : console.debug(...args),
  warn:           (...args) => isDebugDisabled() ? undefined : console.warn(...args),
  error:          (...args) => isDebugDisabled() ? undefined : console.error(...args),
  trace:          (...args) => isDebugDisabled() ? undefined : console.trace(...args),
  table:          (...args) => isDebugDisabled() ? undefined : console.table(...args),
  count:          (...args) => isDebugDisabled() ? undefined : console.count(...args),
  countReset:     (...args) => isDebugDisabled() ? undefined : console.countReset(...args),
  time:           (...args) => isDebugDisabled() ? undefined : console.time(...args),
  timeEnd:        (...args) => isDebugDisabled() ? undefined : console.timeEnd(...args),
  timeLog:        (...args) => isDebugDisabled() ? undefined : console.timeLog(...args),
  group:          (...args) => isDebugDisabled() ? undefined : console.group(...args),
  groupCollapsed: (...args) => isDebugDisabled() ? undefined : console.groupCollapsed(...args),
  groupEnd:       ()        => isDebugDisabled() ? undefined : console.groupEnd(),
  clear:          ()        => isDebugDisabled() ? undefined : console.clear(),
}

export default consoleDebugMethods

// For CommonJS default export support
export const interactiveLog = consoleDebugMethods.interactiveLog
export const assert         = consoleDebugMethods.assert
export const log            = consoleDebugMethods.log
export const info           = consoleDebugMethods.info
export const debug          = consoleDebugMethods.debug
export const warn           = consoleDebugMethods.warn
export const error          = consoleDebugMethods.error
export const trace          = consoleDebugMethods.trace
export const table          = consoleDebugMethods.table
export const count          = consoleDebugMethods.count
export const countReset     = consoleDebugMethods.countReset
export const time           = consoleDebugMethods.time
export const timeEnd        = consoleDebugMethods.timeEnd
export const timeLog        = consoleDebugMethods.timeLog
export const group          = consoleDebugMethods.group
export const groupCollapsed = consoleDebugMethods.groupCollapsed
export const groupEnd       = consoleDebugMethods.groupEnd
export const clear          = consoleDebugMethods.clear
