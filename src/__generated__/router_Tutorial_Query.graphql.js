/**
 * @flow
 * @relayHash a801c824af1d9a13def0102acff87919
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Tutorial_viewer$ref = any;
export type router_Tutorial_QueryVariables = {||};
export type router_Tutorial_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Tutorial_viewer$ref
  |}
|};
export type router_Tutorial_Query = {|
  variables: router_Tutorial_QueryVariables,
  response: router_Tutorial_QueryResponse,
|};
*/


/*
query router_Tutorial_Query {
  viewer {
    ...Tutorial_viewer
    id
  }
}

fragment Tutorial_viewer on Viewer {
  id
  me {
    id
    pseudo
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
  "name": "router_Tutorial_Query",
  "id": null,
  "text": "query router_Tutorial_Query {\n  viewer {\n    ...Tutorial_viewer\n    id\n  }\n}\n\nfragment Tutorial_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_Tutorial_Query",
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
            "name": "Tutorial_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_Tutorial_Query",
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
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "pseudo",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '274beb558270b5e745e785724823fced';
module.exports = node;
