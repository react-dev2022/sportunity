/**
 * @flow
 * @relayHash 875e027ace318c238a55bc6dc59fc8a3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ModifyProfile_viewer$ref = any;
export type router_FaqHowtoModifyProfile_QueryVariables = {||};
export type router_FaqHowtoModifyProfile_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ModifyProfile_viewer$ref
  |}
|};
export type router_FaqHowtoModifyProfile_Query = {|
  variables: router_FaqHowtoModifyProfile_QueryVariables,
  response: router_FaqHowtoModifyProfile_QueryResponse,
|};
*/


/*
query router_FaqHowtoModifyProfile_Query {
  viewer {
    ...ModifyProfile_viewer
    id
  }
}

fragment ModifyProfile_viewer on Viewer {
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
  "name": "router_FaqHowtoModifyProfile_Query",
  "id": null,
  "text": "query router_FaqHowtoModifyProfile_Query {\n  viewer {\n    ...ModifyProfile_viewer\n    id\n  }\n}\n\nfragment ModifyProfile_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_FaqHowtoModifyProfile_Query",
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
            "name": "ModifyProfile_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_FaqHowtoModifyProfile_Query",
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
(node/*: any*/).hash = 'f922ed3d491cc70c3afd33231c2058df';
module.exports = node;
