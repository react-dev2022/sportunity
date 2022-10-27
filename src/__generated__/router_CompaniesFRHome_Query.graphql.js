/**
 * @flow
 * @relayHash 99c46b9e1484c8f3ffd29139442ad4c9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CompaniesHome_viewer$ref = any;
export type router_CompaniesFRHome_QueryVariables = {||};
export type router_CompaniesFRHome_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CompaniesHome_viewer$ref
  |}
|};
export type router_CompaniesFRHome_Query = {|
  variables: router_CompaniesFRHome_QueryVariables,
  response: router_CompaniesFRHome_QueryResponse,
|};
*/


/*
query router_CompaniesFRHome_Query {
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
  "name": "router_CompaniesFRHome_Query",
  "id": null,
  "text": "query router_CompaniesFRHome_Query {\n  viewer {\n    ...CompaniesHome_viewer\n    id\n  }\n}\n\nfragment CompaniesHome_viewer on Viewer {\n  me {\n    id\n  }\n  ...HeaderImage_viewer\n}\n\nfragment HeaderImage_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_CompaniesFRHome_Query",
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
    "name": "router_CompaniesFRHome_Query",
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
(node/*: any*/).hash = '3468d4c76a6bec2a3a39d7d5d77d9c50';
module.exports = node;
