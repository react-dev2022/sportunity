/**
 * @flow
 * @relayHash bb5b2707c730dbc6c9874078dd3c1b7a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CalendarSync_viewer$ref = any;
export type router_FaqCalendarSync_QueryVariables = {||};
export type router_FaqCalendarSync_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CalendarSync_viewer$ref
  |}
|};
export type router_FaqCalendarSync_Query = {|
  variables: router_FaqCalendarSync_QueryVariables,
  response: router_FaqCalendarSync_QueryResponse,
|};
*/


/*
query router_FaqCalendarSync_Query {
  viewer {
    ...CalendarSync_viewer
    id
  }
}

fragment CalendarSync_viewer on Viewer {
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
  "name": "router_FaqCalendarSync_Query",
  "id": null,
  "text": "query router_FaqCalendarSync_Query {\n  viewer {\n    ...CalendarSync_viewer\n    id\n  }\n}\n\nfragment CalendarSync_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_FaqCalendarSync_Query",
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
            "name": "CalendarSync_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_FaqCalendarSync_Query",
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
(node/*: any*/).hash = '12d2911648383d567cf522685ba8545c';
module.exports = node;
