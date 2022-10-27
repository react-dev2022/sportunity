/**
 * @flow
 * @relayHash 3d068910371f1ab393b9331a123fdc75
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CompaniesHome_viewer$ref = any;
export type router_CompaniesHome_QueryVariables = {||};
export type router_CompaniesHome_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CompaniesHome_viewer$ref
  |}
|};
export type router_CompaniesHome_Query = {|
  variables: router_CompaniesHome_QueryVariables,
  response: router_CompaniesHome_QueryResponse,
|};
*/


/*
query router_CompaniesHome_Query {
  viewer {
    ...CompaniesHome_viewer
    id
  }
}

fragment CompaniesHome_viewer on Viewer {
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
  "name": "router_CompaniesHome_Query",
  "id": null,
  "text": "query router_CompaniesHome_Query {\n  viewer {\n    ...CompaniesHome_viewer\n    id\n  }\n}\n\nfragment CompaniesHome_viewer on Viewer {\n  me {\n    id\n  }\n  ...HeaderImage_viewer\n}\n\nfragment HeaderImage_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_CompaniesHome_Query",
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
            "name": "CompaniesHome_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_CompaniesHome_Query",
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
(node/*: any*/).hash = 'bad74155248f4e0bb6b7cedc2fafb9aa';
module.exports = node;
