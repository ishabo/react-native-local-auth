/**
 * Mostly a copy of https://github.com/naoufal/react-native-touch-id
 * @providesModule LocalAuth
 * @flow
 */
'use strict'

import { createError } from './error'
import { NativeModules } from 'react-native'

const { RNLocalAuth } = NativeModules

module.exports = {
  authenticate(opts) {
    return RNLocalAuth.authenticate(opts)
      .catch(err => {
        err.name = err.code
        throw err
      })
  }
}