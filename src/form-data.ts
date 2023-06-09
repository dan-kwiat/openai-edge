// This is a simplified implementation of the `form-data` module:
// https://github.com/form-data/form-data
// It has a `getHeaders` method (with no argument)

function generateBoundary() {
  // This generates a 50 character boundary similar to those used by Firefox.
  // They are optimized for boyer-moore parsing.
  var boundary = "--------------------------"
  for (var i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 10).toString(16)
  }

  return boundary
}

export class CustomFormData extends FormData {
  private _boundary: string

  constructor(...args: any) {
    super(...args)
    this._boundary = generateBoundary()
  }

  getHeaders() {
    var formHeaders = {
      "content-type": "multipart/form-data; boundary=" + this._boundary,
    }

    return formHeaders
  }
}
