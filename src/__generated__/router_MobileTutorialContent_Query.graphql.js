/**
 * @flow
 * @relayHash 30772548d8ddf5c645778b674f1ea638
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TutorialContent_viewer$ref = any;
export type router_MobileTutorialContent_QueryVariables = {||};
export type router_MobileTutorialContent_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: TutorialContent_viewer$ref
  |}
|};
export type router_MobileTutorialContent_Query = {|
  variables: router_MobileTutorialContent_QueryVariables,
  response: router_MobileTutorialContent_QueryResponse,
|};
*/


/*
query router_MobileTutorialContent_Query {
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
  "name": "router_MobileTutorialContent_Query",
  "id": null,
  "text": "query router_MobileTutorialContent_Query {\n  viewer {\n    ...TutorialContent_viewer\n    id\n  }\n}\n\nfragment TutorialContent_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_MobileTutorialContent_Query",
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
    "name": "router_MobileTutorialContent_Query",
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
(node/*: any*/).hash = '454975ce5cd16ba844ee05a9a93ef594';
module.exports = node;
