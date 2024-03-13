export function validate(value: string | number, schemes: Array<string>): {
  valid: boolean,
  errorText: string,
} {
  let error = 0
  let errorText = ''

  schemes.forEach((scheme) => {
    if (scheme === 'empty') {

    }
    if (scheme === '') {

    }
  })

  return { valid: error === 0, errorText, }
}