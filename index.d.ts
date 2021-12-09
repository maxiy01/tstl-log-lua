/**
 * @noResolution
 * */
 declare module "log"
 {
    function trace(this: void, ...args: any[]): void;
    function debug(this: void, ...args: any[]): void;
    function info(this: void, ...args: any[]): void;
    function warn(this: void, ...args: any[]): void;
    function error(this: void, ...args: any[]): void;
    function fatal(this: void, ...args: any[]): void;
     /**
      * Whether colors should be used when outputting to the console, this is true by default.
      * If you're using a console which does not support ANSI color escape codes then this should be disabled.
      */
     let usecolor: boolean;
     /**
      * The name of the file where the log should be written,
      * log files do not contain ANSI colors and always use the full date rather than just the time.
      * By default `log.outfile` is `nil` (no log file is used).
      * If a file which does not exist is set as the `log.outfile`
      * then it is created on the first message logged. If the file already exists it is appended to.
      */
     let outfile: string | undefined;
     /**
      * The minimum level to log, any logging function called with a lower level than the log.level
      * is ignored and no text is outputted or written.
      * By default this value is set to `"trace"`, the lowest log level,
      * such that no log messages are ignored.
      */
     let level: "trace" | "debug" | "info" | "warn" | "error" | "fatal";

 }