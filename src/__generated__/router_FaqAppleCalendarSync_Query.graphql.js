/**
 * @flow
 * @relayHash bf72e4f9ec2f1eba08baf45420e26460
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AppleCalendarSync_viewer$ref = any;
export type router_FaqAppleCalendarSync_QueryVariables = {||};
export type router_FaqAppleCalendarSync_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: AppleCalendarSync_viewer$ref
  |}
|};
export type router_FaqAppleCalendarSync_Query = {|
  variables: router_FaqAppleCalendarSync_QueryVariables,
  response: router_FaqAppleCalendarSync_QueryResponse,
|};
*/


/*
query router_FaqAppleCalendarSync_Query {
  viewer {
    ...AppleCalendarSync_viewer
    id
  }
}

fragment AppleCalendarSync_viewer on Viewer {
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
  "name": "router_FaqAppleCalendarSync_Query",
  "id": null,
  "text": "query router_FaqAppleCalendarSync_Query {\n  viewer {\n    ...AppleCalendarSync_viewer\n    id\n  }\n}\n\nfragment AppleCalendarSync_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_FaqAppleCalendarSync_Query",
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
            "name": "AppleCalendarSync_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_FaqAppleCalendarSync_Query",
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
(node/*: any*/).hash = '20743f6798b1ac8ba60421c1538941e0';
module.exports = node;
