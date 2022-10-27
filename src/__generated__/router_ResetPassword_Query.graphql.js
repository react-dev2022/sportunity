/**
 * @flow
 * @relayHash 0b88cb5fab1009dd983458b7e51c0dfe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ResetPassword_viewer$ref = any;
export type router_ResetPassword_QueryVariables = {||};
export type router_ResetPassword_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ResetPassword_viewer$ref
  |}
|};
export type router_ResetPassword_Query = {|
  variables: router_ResetPassword_QueryVariables,
  response: router_ResetPassword_QueryResponse,
|};
*/


/*
query router_ResetPassword_Query {
  viewer {
    ...ResetPassword_viewer
    id
  }
}

fragment ResetPassword_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_ResetPassword_Query",
  "id": null,
  "text": "query router_ResetPassword_Query {\n  viewer {\n    ...ResetPassword_viewer\n    id\n  }\n}\n\nfragment ResetPassword_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ResetPassword_Query",
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
            "name": "ResetPassword_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_ResetPassword_Query",
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
(node/*: any*/).hash = '48658401e67e846661081ff7ec28f32e';
module.exports = node;
