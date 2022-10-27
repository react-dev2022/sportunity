/**
 * @flow
 * @relayHash eb7b9b7198edd6af19b3a08c950cba21
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UniversityHome_viewer$ref = any;
export type router_UniversityHome_QueryVariables = {||};
export type router_UniversityHome_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: UniversityHome_viewer$ref
  |}
|};
export type router_UniversityHome_Query = {|
  variables: router_UniversityHome_QueryVariables,
  response: router_UniversityHome_QueryResponse,
|};
*/


/*
query router_UniversityHome_Query {
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
  "name": "router_UniversityHome_Query",
  "id": null,
  "text": "query router_UniversityHome_Query {\n  viewer {\n    ...UniversityHome_viewer\n    id\n  }\n}\n\nfragment UniversityHome_viewer on Viewer {\n  me {\n    id\n  }\n  ...HeaderImage_viewer\n}\n\nfragment HeaderImage_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_UniversityHome_Query",
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
    "name": "router_UniversityHome_Query",
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
(node/*: any*/).hash = 'f249b1132178ed40524cdde4cb8e1bce';
module.exports = node;
