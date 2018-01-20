const geocode = require('../lib/geocode');
const ERRORS = require('../lib/errors');

describe('Geocode library', () => {
  test('library exists', () => {
    expect(geocode).toBeTruthy();
  });
  describe('Input parameters', () => {
    test('undefined input parameter', () => {
      expect.assertions(1);
      return geocode().catch((err) => {
        expect(err).toEqual(ERRORS.UNDEFINED_PARAMETERS);
      });
    });
    test('no input parameter', () => {
      expect.assertions(1);
      return geocode({}).catch((err) => {
        expect(err).toEqual(ERRORS.INVALID_PARAMETERS);
      });
    });
    test('invalid input parameter', () => {
      expect.assertions(1);
      return geocode({ coorinates: { lat: 0, lng: 0 } }).catch((err) => {
        expect(err).toEqual(ERRORS.INVALID_PARAMETERS);
      });
    });
  });
});
