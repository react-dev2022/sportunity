/**
 * @flow
 * @relayHash aac383b4b00ee3898bbd233419f613a6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Home_viewer$ref = any;
export type router_HomeFr_QueryVariables = {||};
export type router_HomeFr_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Home_viewer$ref
  |}
|};
export type router_HomeFr_Query = {|
  variables: router_HomeFr_QueryVariables,
  response: router_HomeFr_QueryResponse,
|};
*/


/*
query router_HomeFr_Query {
  viewer {
    ...Home_viewer
    id
  }
}

fragment Home_viewer on Viewer {
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
  "name": "router_HomeFr_Query",
  "id": null,
  "text": "query router_HomeFr_Query {\n  viewer {\n    ...Home_viewer\n    id\n  }\n}\n\nfragment Home_viewer on Viewer {\n  me {\n    id\n  }\n  ...HeaderImage_viewer\n}\n\nfragment HeaderImage_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_HomeFr_Query",
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
            "name": "Home_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_HomeFr_Query",
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
(node/*: any*/).hash = 'be260c37aca5c3bc5889d3af6d44fbef';
module.exports = node;
