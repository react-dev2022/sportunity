/**
 * @flow
 * @relayHash a6cb10b41502a8e090f957f076814024
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FollowOrganiser_viewer$ref = any;
export type router_FaqHowtoFollowOrganiser_QueryVariables = {||};
export type router_FaqHowtoFollowOrganiser_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: FollowOrganiser_viewer$ref
  |}
|};
export type router_FaqHowtoFollowOrganiser_Query = {|
  variables: router_FaqHowtoFollowOrganiser_QueryVariables,
  response: router_FaqHowtoFollowOrganiser_QueryResponse,
|};
*/


/*
query router_FaqHowtoFollowOrganiser_Query {
  viewer {
    ...FollowOrganiser_viewer
    id
  }
}

fragment FollowOrganiser_viewer on Viewer {
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
  "name": "router_FaqHowtoFollowOrganiser_Query",
  "id": null,
  "text": "query router_FaqHowtoFollowOrganiser_Query {\n  viewer {\n    ...FollowOrganiser_viewer\n    id\n  }\n}\n\nfragment FollowOrganiser_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_FaqHowtoFollowOrganiser_Query",
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
            "name": "FollowOrganiser_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_FaqHowtoFollowOrganiser_Query",
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
(node/*: any*/).hash = 'b245a974e96470f25916cbeeff1445fc';
module.exports = node;
