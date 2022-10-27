/**
 * @flow
 * @relayHash 29aad9c9b8e0c06bb0514bed30b69467
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Tutorial_viewer$ref = any;
export type router_MobileTutorial_QueryVariables = {||};
export type router_MobileTutorial_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Tutorial_viewer$ref
  |}
|};
export type router_MobileTutorial_Query = {|
  variables: router_MobileTutorial_QueryVariables,
  response: router_MobileTutorial_QueryResponse,
|};
*/


/*
query router_MobileTutorial_Query {
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
  "name": "router_MobileTutorial_Query",
  "id": null,
  "text": "query router_MobileTutorial_Query {\n  viewer {\n    ...Tutorial_viewer\n    id\n  }\n}\n\nfragment Tutorial_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_MobileTutorial_Query",
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
    "name": "router_MobileTutorial_Query",
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
(node/*: any*/).hash = 'bc0e664ace02ef5279a043f8ff437316';
module.exports = node;
