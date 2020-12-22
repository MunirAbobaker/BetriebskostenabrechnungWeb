import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { cacheExchange, Cache, QueryInput, query } from '@urql/exchange-graphcache';

import { CreateBewohnerBetriebskostenMutation, GetGesamteAbrechnungQuery, LoginMutation, MeDocument, MeQuery, RegisterMutation } from "../generated/graphql";

function betterUpdateQuery<Result, Query>(
    cache: Cache,
    qi: QueryInput,
    result: any,
    fn: (r: Result, q: Query) => Query
){
   return cache.updateQuery(qi, (data) => fn(result, data as any) as any)
}

export const client = createClient({
    url: 'http://localhost:4000/graphql',
    fetchOptions: {
        credentials: "include",
    }, 
    exchanges:  // update cache query after mutation
    [dedupExchange,
         cacheExchange({
             updates: {
                Mutation: {
                    logout: (_result, args, cache, info) => { // return null for meQeury
                          betterUpdateQuery<LoginMutation, MeQuery>(
                            cache, 
                           {query: MeDocument},
                           _result,
                           () => ({ me: null })
                        )
                    },
                    
                    login: (_result, args, cache, info) => {
                           betterUpdateQuery<LoginMutation, MeQuery>(
                           cache, 
                           {query: MeDocument},
                           _result,
                           (result, query) => {
                               if(result.login.errors) {
                                   return query
                               } else {
                                   return {
                                    me: result.login.user,
                                   }  
                               }
                           }

                        )
                    },
                     
                    register: (_result, args, cache, info) => {
                           betterUpdateQuery<RegisterMutation, MeQuery>(
                            cache, 
                            {query: MeDocument},
                            _result,
                            (result, query) => {
                                if(result.register.errors) {
                                    return query
                                } else {
                                    return {
                                     me: result.register.user,
                                    }  
                                }
                            }

                         )
                     },

                 /*     createBewohnerBetriebskosten: (_result, args, cache, info) => {
                        betterUpdateQuery<CreateBewohnerBetriebskostenMutation, GetGesamteAbrechnungQuery>(
                         cache, 
                         {query: MeDocument},
                         _result,
                         (result, query) => {
                             if(result.createBewohnerBetriebskosten.errors) {
                                 return query
                             } else {
                                 return {
                                    BewohnerBetribskostendata: result.GetGesamteAbrechnungQuery.BewohnerBetribskostendata,
                                    getAllegemeinebrechnung: result.
                                 }  
                             }
                         }

                      )
                  }, */
                  }
             }
         }),
          fetchExchange],
}); 