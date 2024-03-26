export type values = {
  validations: boolean | number | string | object | null
  msgError: string
}

export function validationLogicalsIfs(values: Array<values>) {
  for (const value of values) {
    if (!value.validations) {
      throw new Error(value.msgError)
    }
  }
}
