/**
 * @flow
 * @relayHash 281f35d38303d81616909d8700d77f3f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ClubsHome_viewer$ref = any;
export type router_ClubsFRHome_QueryVariables = {||};
export type router_ClubsFRHome_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ClubsHome_viewer$ref
  |}
|};
export type router_ClubsFRHome_Query = {|
  variables: router_ClubsFRHome_QueryVariables,
  response: router_ClubsFRHome_QueryResponse,
|};
*/


/*
query router_ClubsFRHome_Query {
  viewer {
    ...ClubsHome_viewer
    id
  }
}

fragment ClubsHome_viewer on Viewer {
  me {
    id
  }
  ...HeaderImage_viewer
}

fragment HeaderImage_viewer on Viewer {
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_ClubsFRHome_Query",
  "id": null,
  "text": "query router_ClubsFRHome_Query {\n  viewer {\n    ...ClubsHome_viewer\n    id\n  }\n}\n\nfragment ClubsHome_viewer on Viewer {\n  me {\n    id\n  }\n  ...HeaderImage_viewer\n}\n\nfragment HeaderImage_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ClubsFRHome_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ClubsHome_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_ClubsFRHome_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v0
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f61f4d90e49c5cd0ba652470cbb9f500';
module.exports = node;
