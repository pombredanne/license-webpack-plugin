interface FileSystem {
  pathSeparator: string;
  pathExists(filename: string): boolean;
  isFileInDirectory(filename: string, directory: string): boolean;
  readFileAsUtf8(filename: string): string;
  join(...paths: string[]): string;
}

export { FileSystem };