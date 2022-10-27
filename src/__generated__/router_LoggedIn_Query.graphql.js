/**
 * @flow
 * @relayHash ae6fdf0184d9ea77159197ee655772ed
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LoggedIn_viewer$ref = any;
export type router_LoggedIn_QueryVariables = {||};
export type router_LoggedIn_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: LoggedIn_viewer$ref
  |}
|};
export type router_LoggedIn_Query = {|
  variables: router_LoggedIn_QueryVariables,
  response: router_LoggedIn_QueryResponse,
|};
*/


/*
query router_LoggedIn_Query {
  viewer {
    ...LoggedIn_viewer
    id
  }
}

fragment LoggedIn_viewer on Viewer {
  id
  me {
    id
    homePagePreference
    sex
    appLanguage
    appCountry
    appCurrency
    publicAddress {
      city
      country
    }
    sports {
      sport {
        id
      }
    }
  }
  ...StepperModal_viewer
}

fragment StepperModal_viewer on Viewer {
  id
  me {
    id
    avatar
    pseudo
    profileType
    mangoId
    subAccounts {
      id
    }
    tutorialSteps {
      createFormStep
      setupMembersSubscriptionStep
      fulfilProfileStep
      addOfficialDocumentsStep
      createSubAccountStep
      shareAccessStep
      createCircleStep
      organizeStep
      setupStatisticsStep
      joinAPrivateCircleStep
      joinAPublicCircleStep
      giveAvailabilitiesStep
      bookSportunityStep
    }
    isPublicProfileComplete
    isSubAccount
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
},
v1 = [
  v0
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_LoggedIn_Query",
  "id": null,
  "text": "query router_LoggedIn_Query {\n  viewer {\n    ...LoggedIn_viewer\n    id\n  }\n}\n\nfragment LoggedIn_viewer on Viewer {\n  id\n  me {\n    id\n    homePagePreference\n    sex\n    appLanguage\n    appCountry\n    appCurrency\n    publicAddress {\n      city\n      country\n    }\n    sports {\n      sport {\n        id\n      }\n    }\n  }\n  ...StepperModal_viewer\n}\n\nfragment StepperModal_viewer on Viewer {\n  id\n  me {\n    id\n    avatar\n    pseudo\n    profileType\n    mangoId\n    subAccounts {\n      id\n    }\n    tutorialSteps {\n      createFormStep\n      setupMembersSubscriptionStep\n      fulfilProfileStep\n      addOfficialDocumentsStep\n      createSubAccountStep\n      shareAccessStep\n      createCircleStep\n      organizeStep\n      setupStatisticsStep\n      joinAPrivateCircleStep\n      joinAPublicCircleStep\n      giveAvailabilitiesStep\n      bookSportunityStep\n    }\n    isPublicProfileComplete\n    isSubAccount\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_LoggedIn_Query",
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
            "name": "LoggedIn_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_LoggedIn_Query",
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "avatar",
                "args": null,
                "storageKey": null
              },
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "sex",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "appLanguage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "appCountry",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "appCurrency",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "publicAddress",
                "storageKey": null,
                "args": null,
                "concreteType": "AddressModel",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "city",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "country",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sports",
                "storageKey": null,
                "args": null,
                "concreteType": "SportDescriptor",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sport",
                    "plural": false,
                    "selections": v1
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "homePagePreference",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "pseudo",
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
                "name": "mangoId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v1
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "tutorialSteps",
                "storageKey": null,
                "args": null,
                "concreteType": "TutorialSteps",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createCircleStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createFormStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fulfilProfileStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "addOfficialDocumentsStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createSubAccountStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "shareAccessStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "setupMembersSubscriptionStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "organizeStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "setupStatisticsStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "joinAPrivateCircleStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "joinAPublicCircleStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "giveAvailabilitiesStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "bookSportunityStep",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isPublicProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
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
(node/*: any*/).hash = '358737fc11ae56a8c9a9cf0f64ac84ad';
module.exports = node;
