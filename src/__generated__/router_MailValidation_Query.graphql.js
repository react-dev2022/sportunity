/**
 * @flow
 * @relayHash 0d633964b29d47ca2befcc7e025aed96
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Login_viewer$ref = any;
export type router_MailValidation_QueryVariables = {||};
export type router_MailValidation_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Login_viewer$ref
  |}
|};
export type router_MailValidation_Query = {|
  variables: router_MailValidation_QueryVariables,
  response: router_MailValidation_QueryResponse,
|};
*/


/*
query router_MailValidation_Query {
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
  "name": "router_MailValidation_Query",
  "id": null,
  "text": "query router_MailValidation_Query {\n  viewer {\n    ...Login_viewer\n    id\n  }\n}\n\nfragment Login_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_MailValidation_Query",
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
    "name": "router_MailValidation_Query",
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
(node/*: any*/).hash = '84fc7dd1cbf845fc12a25f72fd5faa83';
module.exports = node;
