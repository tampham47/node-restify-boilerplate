/**
 *
 */

'use strict';
var routes = [];
var rethink = require('rethinkdb');

/**
 * GET /secret/:id
 * Version: 1.0.0
 */
routes.push({
  meta: {
    name: 'rethink',
    method: 'GET',
    paths: [
      '/rethink',
    ],
    version: '1.0.0',
  },
  middleware: function(req, res, next) {
    rethink.table('authors').run(global.connection, function(err, cursor) {
      if (err) {
        return next(err);
      }

      cursor.toArray(function(err, result) {
        if (err) {
          return next(err);
        }

        res.send(result);
        return next();
      });
    });
  },
});

module.exports = routes;
