/**
 * @flow
 * @relayHash b3a5471ceed53de9f34bd1154880da1d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Privacy_viewer$ref = any;
export type router_Privacy_QueryVariables = {||};
export type router_Privacy_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Privacy_viewer$ref
  |}
|};
export type router_Privacy_Query = {|
  variables: router_Privacy_QueryVariables,
  response: router_Privacy_QueryResponse,
|};
*/


/*
query router_Privacy_Query {
  viewer {
    ...Privacy_viewer
    id
  }
}

fragment Privacy_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_Privacy_Query",
  "id": null,
  "text": "query router_Privacy_Query {\n  viewer {\n    ...Privacy_viewer\n    id\n  }\n}\n\nfragment Privacy_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_Privacy_Query",
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
            "name": "Privacy_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_Privacy_Query",
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
(node/*: any*/).hash = 'c9a14ffbcd08e2e949be07839467fc2f';
module.exports = node;
