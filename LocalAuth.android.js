/**
 * Mostly a copy of https://github.com/naoufal/react-native-touch-id
 * @providesModule LocalAuth
 * @flow
 */
'use strict'

import { createError } from './error'
import Errors from './data/errors'
import { NativeModules } from 'react-native'

const { RNLocalAuth } = NativeModules
const noTouchID = Promise.reject(createError('RCTTouchIDNotSupported'))

module.exports = {
  hasTouchID() {
    return noTouchID
  },

  authenticate(opts) {
    return RNLocalAuth.authenticate(opts)
      .catch(err => {
        err.name = err.code
        throw err
      })
  }
}
