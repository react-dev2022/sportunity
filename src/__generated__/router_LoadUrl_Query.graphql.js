/**
 * @flow
 * @relayHash b9e60ce3cdd527b9f78309d8ee9421c6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LoadUrl_viewer$ref = any;
export type router_LoadUrl_QueryVariables = {||};
export type router_LoadUrl_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: LoadUrl_viewer$ref
  |}
|};
export type router_LoadUrl_Query = {|
  variables: router_LoadUrl_QueryVariables,
  response: router_LoadUrl_QueryResponse,
|};
*/


/*
query router_LoadUrl_Query {
  viewer {
    ...LoadUrl_viewer
    id
  }
}

fragment LoadUrl_viewer on Viewer {
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
  "name": "router_LoadUrl_Query",
  "id": null,
  "text": "query router_LoadUrl_Query {\n  viewer {\n    ...LoadUrl_viewer\n    id\n  }\n}\n\nfragment LoadUrl_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_LoadUrl_Query",
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
            "name": "LoadUrl_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_LoadUrl_Query",
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
(node/*: any*/).hash = '7d356e27790ee46890eb65f794961ec0';
module.exports = node;
