/**
 * @flow
 * @relayHash 4f7819c98a9e7de3f46b62043dde0156
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ManageAClub_viewer$ref = any;
export type router_ManageAClubTutorial_QueryVariables = {||};
export type router_ManageAClubTutorial_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ManageAClub_viewer$ref
  |}
|};
export type router_ManageAClubTutorial_Query = {|
  variables: router_ManageAClubTutorial_QueryVariables,
  response: router_ManageAClubTutorial_QueryResponse,
|};
*/


/*
query router_ManageAClubTutorial_Query {
  viewer {
    ...ManageAClub_viewer
    id
  }
}

fragment ManageAClub_viewer on Viewer {
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
  "name": "router_ManageAClubTutorial_Query",
  "id": null,
  "text": "query router_ManageAClubTutorial_Query {\n  viewer {\n    ...ManageAClub_viewer\n    id\n  }\n}\n\nfragment ManageAClub_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ManageAClubTutorial_Query",
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
            "name": "ManageAClub_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_ManageAClubTutorial_Query",
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
(node/*: any*/).hash = '73a5eab5af8e43e8256f5277df4c0a42';
module.exports = node;
