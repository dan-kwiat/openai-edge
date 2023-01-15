export interface ConfigurationParameters {
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>)
  organization?: string
  username?: string
  password?: string
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>)
  basePath?: string
  baseOptions?: any
  formDataCtor?: new () => any
}
