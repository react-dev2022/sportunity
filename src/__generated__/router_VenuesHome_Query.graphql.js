/**
 * @flow
 * @relayHash 5b4c3139efef9b2d567eb379835735e9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type VenuesHome_viewer$ref = any;
export type router_VenuesHome_QueryVariables = {||};
export type router_VenuesHome_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: VenuesHome_viewer$ref
  |}
|};
export type router_VenuesHome_Query = {|
  variables: router_VenuesHome_QueryVariables,
  response: router_VenuesHome_QueryResponse,
|};
*/


/*
query router_VenuesHome_Query {
  viewer {
    ...VenuesHome_viewer
    id
  }
}

fragment VenuesHome_viewer on Viewer {
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
  "name": "router_VenuesHome_Query",
  "id": null,
  "text": "query router_VenuesHome_Query {\n  viewer {\n    ...VenuesHome_viewer\n    id\n  }\n}\n\nfragment VenuesHome_viewer on Viewer {\n  me {\n    id\n  }\n  ...HeaderImage_viewer\n}\n\nfragment HeaderImage_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_VenuesHome_Query",
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
            "name": "VenuesHome_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_VenuesHome_Query",
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
(node/*: any*/).hash = 'd77bc88bfa7f295d4d5b12ff71621b14';
module.exports = node;
