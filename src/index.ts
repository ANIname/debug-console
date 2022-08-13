interface ConsoleDebug extends Omit<Console, 'Console' | 'dir' | 'dirxml' | 'timeStamp' | 'profile' | 'profileEnd'> {}

const isDebugEnabled = (): Boolean => typeof process.env.CONSOLE_DEBUG === 'undefined'

const consoleDebugMethods: ConsoleDebug = {
  assert:         (...args) => isDebugEnabled() ? undefined : console.assert(...args),
  log:            (...args) => isDebugEnabled() ? undefined : console.log(...args),
  info:           (...args) => isDebugEnabled() ? undefined : console.info(...args),
  debug:          (...args) => isDebugEnabled() ? undefined : console.debug(...args),
  warn:           (...args) => isDebugEnabled() ? undefined : console.warn(...args),
  error:          (...args) => isDebugEnabled() ? undefined : console.error(...args),
  trace:          (...args) => isDebugEnabled() ? undefined : console.trace(...args),
  table:          (...args) => isDebugEnabled() ? undefined : console.table(...args),
  count:          (...args) => isDebugEnabled() ? undefined : console.count(...args),
  countReset:     (...args) => isDebugEnabled() ? undefined : console.countReset(...args),
  time:           (...args) => isDebugEnabled() ? undefined : console.time(...args),
  timeEnd:        (...args) => isDebugEnabled() ? undefined : console.timeEnd(...args),
  timeLog:        (...args) => isDebugEnabled() ? undefined : console.timeLog(...args),
  group:          (...args) => isDebugEnabled() ? undefined : console.group(...args),
  groupCollapsed: (...args) => isDebugEnabled() ? undefined : console.groupCollapsed(...args),
  groupEnd:       ()        => isDebugEnabled() ? undefined : console.groupEnd(),
  clear:          ()        => isDebugEnabled() ? undefined : console.clear(),

}

export default consoleDebugMethods

// For CommonJS default export support
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
