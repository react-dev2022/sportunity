/**
 * @flow
 * @relayHash 268409f9915d5813001cb91af827547e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChangePassword_viewer$ref = any;
export type router_ChangePassword_QueryVariables = {||};
export type router_ChangePassword_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ChangePassword_viewer$ref
  |}
|};
export type router_ChangePassword_Query = {|
  variables: router_ChangePassword_QueryVariables,
  response: router_ChangePassword_QueryResponse,
|};
*/


/*
query router_ChangePassword_Query {
  viewer {
    ...ChangePassword_viewer
    id
  }
}

fragment ChangePassword_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_ChangePassword_Query",
  "id": null,
  "text": "query router_ChangePassword_Query {\n  viewer {\n    ...ChangePassword_viewer\n    id\n  }\n}\n\nfragment ChangePassword_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ChangePassword_Query",
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
            "name": "ChangePassword_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_ChangePassword_Query",
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
(node/*: any*/).hash = 'e0c01bacd0d85096b13474c6e0c41969';
module.exports = node;
