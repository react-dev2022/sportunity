/**
 * @flow
 * @relayHash 2a7a4b366a54a8e3193a3b6cd5251efd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Login_viewer$ref = any;
export type router_Login_QueryVariables = {||};
export type router_Login_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Login_viewer$ref
  |}
|};
export type router_Login_Query = {|
  variables: router_Login_QueryVariables,
  response: router_Login_QueryResponse,
|};
*/


/*
query router_Login_Query {
  viewer {
    ...Login_viewer
    id
  }
}

fragment Login_viewer on Viewer {
  id
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
  "name": "router_Login_Query",
  "id": null,
  "text": "query router_Login_Query {\n  viewer {\n    ...Login_viewer\n    id\n  }\n}\n\nfragment Login_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_Login_Query",
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
            "name": "Login_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_Login_Query",
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
              v0
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1b51308f53bb23e999aa4abda8beaa4a';
module.exports = node;
