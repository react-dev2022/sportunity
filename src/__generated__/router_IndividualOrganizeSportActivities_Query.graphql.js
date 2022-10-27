/**
 * @flow
 * @relayHash 1e4129d1fe6646aa50a4005aee5079b6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrganizeSportActivities_viewer$ref = any;
export type router_IndividualOrganizeSportActivities_QueryVariables = {||};
export type router_IndividualOrganizeSportActivities_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: OrganizeSportActivities_viewer$ref
  |}
|};
export type router_IndividualOrganizeSportActivities_Query = {|
  variables: router_IndividualOrganizeSportActivities_QueryVariables,
  response: router_IndividualOrganizeSportActivities_QueryResponse,
|};
*/


/*
query router_IndividualOrganizeSportActivities_Query {
  viewer {
    ...OrganizeSportActivities_viewer
    id
  }
}

fragment OrganizeSportActivities_viewer on Viewer {
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
  "name": "router_IndividualOrganizeSportActivities_Query",
  "id": null,
  "text": "query router_IndividualOrganizeSportActivities_Query {\n  viewer {\n    ...OrganizeSportActivities_viewer\n    id\n  }\n}\n\nfragment OrganizeSportActivities_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_IndividualOrganizeSportActivities_Query",
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
            "name": "OrganizeSportActivities_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_IndividualOrganizeSportActivities_Query",
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
(node/*: any*/).hash = '9b0958633de2dc69b7dfb1ae9da168ea';
module.exports = node;
