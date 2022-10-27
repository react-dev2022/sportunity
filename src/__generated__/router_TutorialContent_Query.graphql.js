/**
 * @flow
 * @relayHash 31e723fcd0d6d4adca5dbb8140ea2921
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TutorialContent_viewer$ref = any;
export type router_TutorialContent_QueryVariables = {||};
export type router_TutorialContent_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: TutorialContent_viewer$ref
  |}
|};
export type router_TutorialContent_Query = {|
  variables: router_TutorialContent_QueryVariables,
  response: router_TutorialContent_QueryResponse,
|};
*/


/*
query router_TutorialContent_Query {
  viewer {
    ...TutorialContent_viewer
    id
  }
}

fragment TutorialContent_viewer on Viewer {
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
  "name": "router_TutorialContent_Query",
  "id": null,
  "text": "query router_TutorialContent_Query {\n  viewer {\n    ...TutorialContent_viewer\n    id\n  }\n}\n\nfragment TutorialContent_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_TutorialContent_Query",
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
            "name": "TutorialContent_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_TutorialContent_Query",
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
(node/*: any*/).hash = '7d62df3ecb683ea64230ed5a63c49873';
module.exports = node;
