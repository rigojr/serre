/**
 * Card widget public properties definition.
 */

import { ExtractPropTypes } from 'vue';

/**
 * public properties.
 */
export const cardWidgetProperties = {
  'image': {
    'type': String,
    'required': true
  },
  'title': {
    'type': String,
    'required': true
  },
  'content': {
    'type': String,
    'required': true
  },
  'actionLabel': {
    'type': String,
    'default': 'Read More'
  },
  'badges': {
    'type': Array<String>,
    'default': () => []
  }
};

/**
 * type public properties.
 */
export type CardWidgetProperties = ExtractPropTypes<typeof cardWidgetProperties>;
