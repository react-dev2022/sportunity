/**
 * @flow
 * @relayHash 4c8722118126393d0ec87b5011e81a34
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UniversityHome_viewer$ref = any;
export type router_UniversityFRHome_QueryVariables = {||};
export type router_UniversityFRHome_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: UniversityHome_viewer$ref
  |}
|};
export type router_UniversityFRHome_Query = {|
  variables: router_UniversityFRHome_QueryVariables,
  response: router_UniversityFRHome_QueryResponse,
|};
*/


/*
query router_UniversityFRHome_Query {
  viewer {
    ...UniversityHome_viewer
    id
  }
}

fragment UniversityHome_viewer on Viewer {
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
  "name": "router_UniversityFRHome_Query",
  "id": null,
  "text": "query router_UniversityFRHome_Query {\n  viewer {\n    ...UniversityHome_viewer\n    id\n  }\n}\n\nfragment UniversityHome_viewer on Viewer {\n  me {\n    id\n  }\n  ...HeaderImage_viewer\n}\n\nfragment HeaderImage_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_UniversityFRHome_Query",
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
            "name": "UniversityHome_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_UniversityFRHome_Query",
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
(node/*: any*/).hash = '830dac8129a0b495be43b5f4a803622e';
module.exports = node;
