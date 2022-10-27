/**
 * @flow
 * @relayHash 841c427a8f78f0c65ee447decbdc8206
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Login_viewer$ref = any;
export type router_LoginSuperUser_QueryVariables = {||};
export type router_LoginSuperUser_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Login_viewer$ref
  |}
|};
export type router_LoginSuperUser_Query = {|
  variables: router_LoginSuperUser_QueryVariables,
  response: router_LoginSuperUser_QueryResponse,
|};
*/


/*
query router_LoginSuperUser_Query {
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
  "name": "router_LoginSuperUser_Query",
  "id": null,
  "text": "query router_LoginSuperUser_Query {\n  viewer {\n    ...Login_viewer\n    id\n  }\n}\n\nfragment Login_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_LoginSuperUser_Query",
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
    "name": "router_LoginSuperUser_Query",
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
(node/*: any*/).hash = 'f7b053f3fd7175702f3ae082db2c79df';
module.exports = node;
