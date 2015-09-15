'use strict';

function WebapiError(message, statusCode, headers) {
  this.name = 'WebapiError';
  this.message = (message || '');
  this.statusCode = statusCode;
  this.headers = headers;
}

WebapiError.prototype = Error.prototype;

WebapiError.prototype.getRetryAfter = function() {
  if (this.headers) {
    if (typeof this.headers['retry-after'] === 'string') {
      return Number(this.headers['retry-after']);
    }
  }
  return undefined;
};

module.exports = WebapiError;
