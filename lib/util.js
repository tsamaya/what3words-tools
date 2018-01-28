/**
 * returns true is `val` is a number
 * @param  {Object}  val input parameter
 * @return {Boolean}     [description]
 */
const isNumber = val => typeof val === 'number' && !Number.isNaN(val);

/**
 * returns true is `val` is an array
 * @param  {Object}  val input parameter
 * @return {Boolean}     returns true if array
 */
const isArray = val => !!val && Array.isArray(val);

/**
 * returns true is `param` is not defined or empty
 * @param  {String}  param object property as a string
 * @return {Boolean}       returns value
 */
const isUndefinedOrEmpty = param =>
  typeof param === 'undefined' || param === '';

module.exports = {
  isNumber,
  isArray,
  isUndefinedOrEmpty,
};
