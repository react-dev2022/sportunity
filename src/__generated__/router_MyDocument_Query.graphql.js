/**
 * @flow
 * @relayHash f9c1a2312aa629a1b08dba76491408e5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Document_viewer$ref = any;
export type router_MyDocument_QueryVariables = {||};
export type router_MyDocument_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Document_viewer$ref
  |}
|};
export type router_MyDocument_Query = {|
  variables: router_MyDocument_QueryVariables,
  response: router_MyDocument_QueryResponse,
|};
*/


/*
query router_MyDocument_Query {
  viewer {
    ...Document_viewer
    id
  }
}

fragment Document_viewer on Viewer {
  id
  me {
    id
    documents {
      id
      name
      link
      creation_date
    }
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
  "name": "router_MyDocument_Query",
  "id": null,
  "text": "query router_MyDocument_Query {\n  viewer {\n    ...Document_viewer\n    id\n  }\n}\n\nfragment Document_viewer on Viewer {\n  id\n  me {\n    id\n    documents {\n      id\n      name\n      link\n      creation_date\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_MyDocument_Query",
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
            "name": "Document_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_MyDocument_Query",
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
                "kind": "LinkedField",
                "alias": null,
                "name": "documents",
                "storageKey": null,
                "args": null,
                "concreteType": "DocumentObject",
                "plural": true,
                "selections": [
                  v0,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "link",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "creation_date",
                    "args": null,
                    "storageKey": null
                  }
                ]
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
(node/*: any*/).hash = 'f4b12c1e7b37de3357a5154ed00f95cb';
module.exports = node;
