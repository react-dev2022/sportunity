/**
 * @flow
 * @relayHash 4b5d166a7ea0707817a481ec1d2e14e8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Register_viewer$ref = any;
export type router_RegistrationCompleted_QueryVariables = {||};
export type router_RegistrationCompleted_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Register_viewer$ref
  |}
|};
export type router_RegistrationCompleted_Query = {|
  variables: router_RegistrationCompleted_QueryVariables,
  response: router_RegistrationCompleted_QueryResponse,
|};
*/


/*
query router_RegistrationCompleted_Query {
  viewer {
    ...Register_viewer
    id
  }
}

fragment Register_viewer on Viewer {
  id
  ...RegisterSubmit_viewer
  ...Inputs_viewer
  me {
    id
    email
    profileType
    phoneNumber
    numberOfUnreadNotifications
    notifications(last: 5) {
      edges {
        node {
          id
          text
          link
          created
        }
      }
    }
  }
}

fragment RegisterSubmit_viewer on Viewer {
  id
}

fragment Inputs_viewer on Viewer {
  id
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
  "name": "router_RegistrationCompleted_Query",
  "id": null,
  "text": "query router_RegistrationCompleted_Query {\n  viewer {\n    ...Register_viewer\n    id\n  }\n}\n\nfragment Register_viewer on Viewer {\n  id\n  ...RegisterSubmit_viewer\n  ...Inputs_viewer\n  me {\n    id\n    email\n    profileType\n    phoneNumber\n    numberOfUnreadNotifications\n    notifications(last: 5) {\n      edges {\n        node {\n          id\n          text\n          link\n          created\n        }\n      }\n    }\n  }\n}\n\nfragment RegisterSubmit_viewer on Viewer {\n  id\n}\n\nfragment Inputs_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_RegistrationCompleted_Query",
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
            "name": "Register_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_RegistrationCompleted_Query",
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
                "name": "email",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "phoneNumber",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "numberOfUnreadNotifications",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "notifications",
                "storageKey": "notifications(last:5)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 5,
                    "type": "Int"
                  }
                ],
                "concreteType": "NotificationConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NotificationEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Notification",
                        "plural": false,
                        "selections": [
                          v0,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "text",
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
                            "name": "created",
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
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f465c04998eb2a0e0e7aa2011c9809a7';
module.exports = node;
