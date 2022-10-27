/**
 * @flow
 * @relayHash 33a79896470bafc85c66459604deb378
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ClubsHome_viewer$ref = any;
export type router_ClubsHome_QueryVariables = {||};
export type router_ClubsHome_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ClubsHome_viewer$ref
  |}
|};
export type router_ClubsHome_Query = {|
  variables: router_ClubsHome_QueryVariables,
  response: router_ClubsHome_QueryResponse,
|};
*/


/*
query router_ClubsHome_Query {
  viewer {
    ...ClubsHome_viewer
    id
  }
}

fragment ClubsHome_viewer on Viewer {
  me {
    id
  }
  ...HeaderImage_viewer
}

fragment HeaderImage_viewer on Viewer {
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
  "name": "router_ClubsHome_Query",
  "id": null,
  "text": "query router_ClubsHome_Query {\n  viewer {\n    ...ClubsHome_viewer\n    id\n  }\n}\n\nfragment ClubsHome_viewer on Viewer {\n  me {\n    id\n  }\n  ...HeaderImage_viewer\n}\n\nfragment HeaderImage_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ClubsHome_Query",
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
            "name": "ClubsHome_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_ClubsHome_Query",
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
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '940c2178e2cd1b6f15a55860015019b4';
module.exports = node;
