import { lib } from '../lib.js';
import debug from 'debug';

const log = debug('cornerstoneTools')
  .extend('thirdParty')
  .extend('registerType');

/**
 * Register an item to cornerstoneTools.
 * @export
 * @private
 * @method
 * @name registerItem
 *
 * @param {string} type The type of the item.
 * @param {string} name The name of the item.
 * @param {Object|function} item The item itself.
 * @param {boolean} [overwrite=false] Whether an item should be overwritten,
 *                                    should it have the same name.
 * @returns {void}
 */
export default function(type, name, item, overwrite = false) {
  const itemKey = `${type}/${name}`;
  const alreadyRegistered = isItemNameRegistered(itemKey);

  if (alreadyRegistered && !overwrite) {
    log('%s is already registered', itemKey);

    return;
  }

  if (alreadyRegistered) {
    log('Overwriting %s', itemKey);
  }

  lib[itemKey] = item;
}

function isItemNameRegistered(itemKey) {
  return lib[itemKey] !== undefined;
}
