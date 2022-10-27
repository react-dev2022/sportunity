/**
 * @flow
 * @relayHash 7d1e6c97b93ed164f1743edec77f992a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ShareWithTeammates_viewer$ref = any;
export type router_ClubsTutorialShareWithTeammates_QueryVariables = {||};
export type router_ClubsTutorialShareWithTeammates_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ShareWithTeammates_viewer$ref
  |}
|};
export type router_ClubsTutorialShareWithTeammates_Query = {|
  variables: router_ClubsTutorialShareWithTeammates_QueryVariables,
  response: router_ClubsTutorialShareWithTeammates_QueryResponse,
|};
*/


/*
query router_ClubsTutorialShareWithTeammates_Query {
  viewer {
    ...ShareWithTeammates_viewer
    id
  }
}

fragment ShareWithTeammates_viewer on Viewer {
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
  "name": "router_ClubsTutorialShareWithTeammates_Query",
  "id": null,
  "text": "query router_ClubsTutorialShareWithTeammates_Query {\n  viewer {\n    ...ShareWithTeammates_viewer\n    id\n  }\n}\n\nfragment ShareWithTeammates_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ClubsTutorialShareWithTeammates_Query",
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
            "name": "ShareWithTeammates_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_ClubsTutorialShareWithTeammates_Query",
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
(node/*: any*/).hash = '29306cdec65673283094b28afce6760f';
module.exports = node;
