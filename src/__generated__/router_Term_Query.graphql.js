/**
 * @flow
 * @relayHash e82362f904f052e8f4361238082d2c4c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Term_viewer$ref = any;
export type router_Term_QueryVariables = {||};
export type router_Term_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Term_viewer$ref
  |}
|};
export type router_Term_Query = {|
  variables: router_Term_QueryVariables,
  response: router_Term_QueryResponse,
|};
*/


/*
query router_Term_Query {
  viewer {
    ...Term_viewer
    id
  }
}

fragment Term_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_Term_Query",
  "id": null,
  "text": "query router_Term_Query {\n  viewer {\n    ...Term_viewer\n    id\n  }\n}\n\nfragment Term_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_Term_Query",
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
            "name": "Term_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_Term_Query",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '74757580a42097323cd0e1d1485b87d6';
module.exports = node;
