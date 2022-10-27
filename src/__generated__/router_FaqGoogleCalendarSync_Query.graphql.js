/**
 * @flow
 * @relayHash 0f2e26f40da8497b1df337ccd4b1d2cb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GoogleCalendarSync_viewer$ref = any;
export type router_FaqGoogleCalendarSync_QueryVariables = {||};
export type router_FaqGoogleCalendarSync_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: GoogleCalendarSync_viewer$ref
  |}
|};
export type router_FaqGoogleCalendarSync_Query = {|
  variables: router_FaqGoogleCalendarSync_QueryVariables,
  response: router_FaqGoogleCalendarSync_QueryResponse,
|};
*/


/*
query router_FaqGoogleCalendarSync_Query {
  viewer {
    ...GoogleCalendarSync_viewer
    id
  }
}

fragment GoogleCalendarSync_viewer on Viewer {
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
  "name": "router_FaqGoogleCalendarSync_Query",
  "id": null,
  "text": "query router_FaqGoogleCalendarSync_Query {\n  viewer {\n    ...GoogleCalendarSync_viewer\n    id\n  }\n}\n\nfragment GoogleCalendarSync_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_FaqGoogleCalendarSync_Query",
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
            "name": "GoogleCalendarSync_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_FaqGoogleCalendarSync_Query",
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
(node/*: any*/).hash = '62d8b1df3a134aaf152197a848014c9f';
module.exports = node;
