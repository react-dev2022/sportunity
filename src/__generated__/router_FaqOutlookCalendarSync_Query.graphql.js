/**
 * @flow
 * @relayHash a950b430631ecaf62d582ad79effe235
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OutlookCalendarSync_viewer$ref = any;
export type router_FaqOutlookCalendarSync_QueryVariables = {||};
export type router_FaqOutlookCalendarSync_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: OutlookCalendarSync_viewer$ref
  |}
|};
export type router_FaqOutlookCalendarSync_Query = {|
  variables: router_FaqOutlookCalendarSync_QueryVariables,
  response: router_FaqOutlookCalendarSync_QueryResponse,
|};
*/


/*
query router_FaqOutlookCalendarSync_Query {
  viewer {
    ...OutlookCalendarSync_viewer
    id
  }
}

fragment OutlookCalendarSync_viewer on Viewer {
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
  "name": "router_FaqOutlookCalendarSync_Query",
  "id": null,
  "text": "query router_FaqOutlookCalendarSync_Query {\n  viewer {\n    ...OutlookCalendarSync_viewer\n    id\n  }\n}\n\nfragment OutlookCalendarSync_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_FaqOutlookCalendarSync_Query",
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
            "name": "OutlookCalendarSync_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_FaqOutlookCalendarSync_Query",
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
(node/*: any*/).hash = '32570eaf0df84b25490456d78b39b6cc';
module.exports = node;
