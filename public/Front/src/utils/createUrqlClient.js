"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var urql_1 = require("urql");
var exchange_graphcache_1 = require("@urql/exchange-graphcache");
var graphql_1 = require("../generated/graphql");
function betterUpdateQuery(cache, qi, result, fn) {
    return cache.updateQuery(qi, function (data) { return fn(result, data); });
}
exports.client = urql_1.createClient({
    url: 'http://localhost:4000/graphql',
    fetchOptions: {
        credentials: "include",
    },
    exchanges: // update cache query after mutation
    [urql_1.dedupExchange, exchange_graphcache_1.cacheExchange({
            updates: {
                Mutation: {
                    logout: function (_result, args, cache, info) {
                        betterUpdateQuery(cache, { query: graphql_1.MeDocument }, _result, function () { return ({ me: null }); });
                    },
                    login: function (_result, args, cache, info) {
                        betterUpdateQuery(cache, { query: graphql_1.MeDocument }, _result, function (result, query) {
                            if (result.login.errors) {
                                return query;
                            }
                            else {
                                return {
                                    me: result.login.user,
                                };
                            }
                        });
                    },
                    register: function (_result, args, cache, info) {
                        betterUpdateQuery(cache, { query: graphql_1.MeDocument }, _result, function (result, query) {
                            if (result.register.errors) {
                                return query;
                            }
                            else {
                                return {
                                    me: result.register.user,
                                };
                            }
                        });
                    },
                }
            }
        }), urql_1.fetchExchange],
});
//# sourceMappingURL=createUrqlClient.js.map