/**
 * @flow
 * @relayHash 9bcc25f67f34d4eda47ed2e2497c14c4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MyCircles_viewer$ref = any;
export type router_MyCircles_QueryVariables = {|
  circleId?: ?string,
  querySuperMe: boolean,
  queryMyCircle: boolean,
  queryCirclesImIn: boolean,
  querySubAccount: boolean,
  queryPublicCircle: boolean,
  queryOtherTeamsCircles: boolean,
  queryCircle: boolean,
|};
export type router_MyCircles_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: MyCircles_viewer$ref
  |}
|};
export type router_MyCircles_Query = {|
  variables: router_MyCircles_QueryVariables,
  response: router_MyCircles_QueryResponse,
|};
*/


/*
query router_MyCircles_Query(
  $querySuperMe: Boolean!
  $queryPublicCircle: Boolean!
) {
  viewer {
    ...MyCircles_viewer_3MmWXs
    id
  }
}

fragment MyCircles_viewer_3MmWXs on Viewer {
  id
  ...AllCircleMembers_viewer
  ...InformationForms_viewer
  ...AddEditInformationForms_viewer
  ...FormDetails_viewer
  ...PaymentModelDetails_viewer
  ...PaymentModels_viewer
  ...AddEditPaymentModels_viewer
  circles(first: 10) @include(if: $queryPublicCircle) {
    edges {
      node {
        ...MyCirclesCircleItem_circle
        id
        name
        mode
        isCircleUpdatableByMembers
        isCircleUsableByMembers
        memberCount
        owner {
          avatar
          pseudo
          id
        }
        type
      }
    }
    count
  }
  ownersOfCirclesUserIsIn(last: 5) @include(if: $queryPublicCircle) {
    count
    edges {
      node {
        id
        pseudo
      }
    }
  }
  myCirclesSports: sports(first: 10, language: EN) {
    count
    edges {
      node {
        id
        name {
          EN
          FR
          DE
          id
        }
        logo
        levels {
          id
          EN {
            name
            skillLevel
            description
          }
          FR {
            name
            skillLevel
            description
          }
          DE {
            name
            skillLevel
            description
          }
        }
      }
    }
  }
  superMe @include(if: $querySuperMe) {
    id
    profileType
    userPreferences {
      areSubAccountsActivated
    }
  }
  me {
    id
    profileType
    isSubAccount
    basicCircleSavedFiltersCreated
    defaultSavedCircleFilter {
      id
      filterName
      location {
        lat
        lng
        radius
      }
      sport {
        sport {
          id
          name {
            EN
            FR
            id
          }
        }
      }
      circleType
      memberTypes
      modes
      owners {
        id
        pseudo
      }
    }
    savedCircleFilters {
      id
      filterName
      canBeDeleted
      location {
        lat
        lng
        radius
      }
      sport {
        sport {
          id
          name {
            EN
            FR
            id
          }
        }
      }
      circleType
      memberTypes
      modes
      owners {
        id
        pseudo
      }
    }
    ...AllCircleMembers_user
    ...InformationForms_user
    ...AddEditInformationForms_user
    ...FormDetails_user
    ...PaymentModelDetails_user
    ...PaymentModels_user
    ...AddEditPaymentModels_user
    ...TermOfUse_user
    subAccounts {
      id
      pseudo
      circles(last: 30) {
        edges {
          node {
            id
            name
            memberCount
          }
        }
      }
    }
    masterAccount {
      id
      subAccounts {
        id
        pseudo
        circles(last: 30) {
          edges {
            node {
              id
              name
              memberCount
            }
          }
        }
      }
    }
  }
}

fragment AllCircleMembers_viewer on Viewer {
  ...MemberCard_viewer
  ...MemberRow_viewer
  ...MembersInformation_viewer
}

fragment InformationForms_viewer on Viewer {
  id
}

fragment AddEditInformationForms_viewer on Viewer {
  id
  ...SearchModal_viewer
}

fragment FormDetails_viewer on Viewer {
  id
}

fragment PaymentModelDetails_viewer on Viewer {
  id
}

fragment PaymentModels_viewer on Viewer {
  id
}

fragment AddEditPaymentModels_viewer on Viewer {
  id
  ...SearchModal_viewer
}

fragment MyCirclesCircleItem_circle on Circle {
  id
  name
  mode
  type
  isCircleUpdatableByMembers
  isCircleUsableByMembers
  isCurrentUserAMember
  shouldValidateNewUser
  memberCount
  waitingMembers {
    id
  }
  refusedMembers {
    id
  }
  owner {
    id
    pseudo
    avatar
  }
  address {
    address
    city
    country
  }
  termsOfUses {
    id
  }
  sport {
    sport {
      id
      logo
      name {
        FR
        EN
        ES
        DE
        id
      }
    }
    levels {
      FR {
        name
        description
      }
      EN {
        name
        description
      }
      ES {
        name
        description
      }
      DE {
        name
        description
      }
      id
    }
  }
}

fragment AllCircleMembers_user on User {
  profileType
  termsOfUses {
    id
    name
    acceptedBy {
      user {
        id
      }
    }
  }
}

fragment InformationForms_user on User {
  id
}

fragment AddEditInformationForms_user on User {
  id
}

fragment FormDetails_user on User {
  id
}

fragment PaymentModelDetails_user on User {
  id
}

fragment PaymentModels_user on User {
  id
  mangoId
}

fragment AddEditPaymentModels_user on User {
  id
  paymentModelFees
}

fragment TermOfUse_user on User {
  id
}

fragment SearchModal_viewer on Viewer {
  me {
    id
  }
}

fragment MemberCard_viewer on Viewer {
  id
}

fragment MemberRow_viewer on Viewer {
  id
}

fragment MembersInformation_viewer on Viewer {
  id
  ...MembersDetailledInformation_viewer
}

fragment MembersDetailledInformation_viewer on Viewer {
  id
  me {
    pseudo
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "circleId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "querySuperMe",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryMyCircle",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryCirclesImIn",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "querySubAccount",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryPublicCircle",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryOtherTeamsCircles",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryCircle",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "filterName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleFilterLatLng",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lat",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lng",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "radius",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sport",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleFilterSport",
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
      "selections": [
        v1,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "name",
          "storageKey": null,
          "args": null,
          "concreteType": "TranslatedString",
          "plural": false,
          "selections": [
            v4,
            v5,
            v1
          ]
        }
      ]
    }
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "circleType",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberTypes",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modes",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v11 = [
  v1,
  v10
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owners",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v11
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v15 = [
  v1
],
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v1,
    v10,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "circles",
      "storageKey": "circles(last:30)",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 30,
          "type": "Int"
        }
      ],
      "concreteType": "CircleConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "CircleEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Circle",
              "plural": false,
              "selections": [
                v1,
                v14,
                v16
              ]
            }
          ]
        }
      ]
    }
  ]
},
v18 = {
  "kind": "Literal",
  "name": "first",
  "value": 10,
  "type": "Int"
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v23 = [
  v14,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  },
  v22
],
v24 = [
  v14,
  v22
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_MyCircles_Query",
  "id": null,
  "text": "query router_MyCircles_Query(\n  $querySuperMe: Boolean!\n  $queryPublicCircle: Boolean!\n) {\n  viewer {\n    ...MyCircles_viewer_3MmWXs\n    id\n  }\n}\n\nfragment MyCircles_viewer_3MmWXs on Viewer {\n  id\n  ...AllCircleMembers_viewer\n  ...InformationForms_viewer\n  ...AddEditInformationForms_viewer\n  ...FormDetails_viewer\n  ...PaymentModelDetails_viewer\n  ...PaymentModels_viewer\n  ...AddEditPaymentModels_viewer\n  circles(first: 10) @include(if: $queryPublicCircle) {\n    edges {\n      node {\n        ...MyCirclesCircleItem_circle\n        id\n        name\n        mode\n        isCircleUpdatableByMembers\n        isCircleUsableByMembers\n        memberCount\n        owner {\n          avatar\n          pseudo\n          id\n        }\n        type\n      }\n    }\n    count\n  }\n  ownersOfCirclesUserIsIn(last: 5) @include(if: $queryPublicCircle) {\n    count\n    edges {\n      node {\n        id\n        pseudo\n      }\n    }\n  }\n  myCirclesSports: sports(first: 10, language: EN) {\n    count\n    edges {\n      node {\n        id\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n        logo\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n          DE {\n            name\n            skillLevel\n            description\n          }\n        }\n      }\n    }\n  }\n  superMe @include(if: $querySuperMe) {\n    id\n    profileType\n    userPreferences {\n      areSubAccountsActivated\n    }\n  }\n  me {\n    id\n    profileType\n    isSubAccount\n    basicCircleSavedFiltersCreated\n    defaultSavedCircleFilter {\n      id\n      filterName\n      location {\n        lat\n        lng\n        radius\n      }\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n        }\n      }\n      circleType\n      memberTypes\n      modes\n      owners {\n        id\n        pseudo\n      }\n    }\n    savedCircleFilters {\n      id\n      filterName\n      canBeDeleted\n      location {\n        lat\n        lng\n        radius\n      }\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n        }\n      }\n      circleType\n      memberTypes\n      modes\n      owners {\n        id\n        pseudo\n      }\n    }\n    ...AllCircleMembers_user\n    ...InformationForms_user\n    ...AddEditInformationForms_user\n    ...FormDetails_user\n    ...PaymentModelDetails_user\n    ...PaymentModels_user\n    ...AddEditPaymentModels_user\n    ...TermOfUse_user\n    subAccounts {\n      id\n      pseudo\n      circles(last: 30) {\n        edges {\n          node {\n            id\n            name\n            memberCount\n          }\n        }\n      }\n    }\n    masterAccount {\n      id\n      subAccounts {\n        id\n        pseudo\n        circles(last: 30) {\n          edges {\n            node {\n              id\n              name\n              memberCount\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment AllCircleMembers_viewer on Viewer {\n  ...MemberCard_viewer\n  ...MemberRow_viewer\n  ...MembersInformation_viewer\n}\n\nfragment InformationForms_viewer on Viewer {\n  id\n}\n\nfragment AddEditInformationForms_viewer on Viewer {\n  id\n  ...SearchModal_viewer\n}\n\nfragment FormDetails_viewer on Viewer {\n  id\n}\n\nfragment PaymentModelDetails_viewer on Viewer {\n  id\n}\n\nfragment PaymentModels_viewer on Viewer {\n  id\n}\n\nfragment AddEditPaymentModels_viewer on Viewer {\n  id\n  ...SearchModal_viewer\n}\n\nfragment MyCirclesCircleItem_circle on Circle {\n  id\n  name\n  mode\n  type\n  isCircleUpdatableByMembers\n  isCircleUsableByMembers\n  isCurrentUserAMember\n  shouldValidateNewUser\n  memberCount\n  waitingMembers {\n    id\n  }\n  refusedMembers {\n    id\n  }\n  owner {\n    id\n    pseudo\n    avatar\n  }\n  address {\n    address\n    city\n    country\n  }\n  termsOfUses {\n    id\n  }\n  sport {\n    sport {\n      id\n      logo\n      name {\n        FR\n        EN\n        ES\n        DE\n        id\n      }\n    }\n    levels {\n      FR {\n        name\n        description\n      }\n      EN {\n        name\n        description\n      }\n      ES {\n        name\n        description\n      }\n      DE {\n        name\n        description\n      }\n      id\n    }\n  }\n}\n\nfragment AllCircleMembers_user on User {\n  profileType\n  termsOfUses {\n    id\n    name\n    acceptedBy {\n      user {\n        id\n      }\n    }\n  }\n}\n\nfragment InformationForms_user on User {\n  id\n}\n\nfragment AddEditInformationForms_user on User {\n  id\n}\n\nfragment FormDetails_user on User {\n  id\n}\n\nfragment PaymentModelDetails_user on User {\n  id\n}\n\nfragment PaymentModels_user on User {\n  id\n  mangoId\n}\n\nfragment AddEditPaymentModels_user on User {\n  id\n  paymentModelFees\n}\n\nfragment TermOfUse_user on User {\n  id\n}\n\nfragment SearchModal_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment MemberCard_viewer on Viewer {\n  id\n}\n\nfragment MemberRow_viewer on Viewer {\n  id\n}\n\nfragment MembersInformation_viewer on Viewer {\n  id\n  ...MembersDetailledInformation_viewer\n}\n\nfragment MembersDetailledInformation_viewer on Viewer {\n  id\n  me {\n    pseudo\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_MyCircles_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
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
            "name": "MyCircles_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "circleId",
                "variableName": "circleId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryCircle",
                "variableName": "queryCircle",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryCirclesImIn",
                "variableName": "queryCirclesImIn",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryMyCircle",
                "variableName": "queryMyCircle",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryOtherTeamsCircles",
                "variableName": "queryOtherTeamsCircles",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryPublicCircle",
                "variableName": "queryPublicCircle",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "querySubAccount",
                "variableName": "querySubAccount",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "querySuperMe",
                "variableName": "querySuperMe",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_MyCircles_Query",
    "argumentDefinitions": v0,
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
          v1,
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
                "kind": "LinkedField",
                "alias": null,
                "name": "savedCircleFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "UserCircleFilter",
                "plural": true,
                "selections": [
                  v1,
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "canBeDeleted",
                    "args": null,
                    "storageKey": null
                  },
                  v3,
                  v6,
                  v7,
                  v8,
                  v9,
                  v12
                ]
              },
              v10,
              v13,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "basicCircleSavedFiltersCreated",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "defaultSavedCircleFilter",
                "storageKey": null,
                "args": null,
                "concreteType": "UserCircleFilter",
                "plural": false,
                "selections": [
                  v1,
                  v2,
                  v3,
                  v6,
                  v7,
                  v8,
                  v9,
                  v12
                ]
              },
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "termsOfUses",
                "storageKey": null,
                "args": null,
                "concreteType": "CircleTermsOfUse",
                "plural": true,
                "selections": [
                  v1,
                  v14,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "acceptedBy",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TermsOfUseAcceptedBy",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "user",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": v15
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "mangoId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "paymentModelFees",
                "args": null,
                "storageKey": null
              },
              v17,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "masterAccount",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v1,
                  v17
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "myCirclesSports",
            "name": "sports",
            "storageKey": "sports(first:10,language:\"EN\")",
            "args": [
              v18,
              {
                "kind": "Literal",
                "name": "language",
                "value": "EN",
                "type": "SupportedLanguage"
              }
            ],
            "concreteType": "SportConnection",
            "plural": false,
            "selections": [
              v19,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "SportEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sport",
                    "plural": false,
                    "selections": [
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "name",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": [
                          v4,
                          v5,
                          v20,
                          v1
                        ]
                      },
                      v21,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "levels",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Translated",
                        "plural": true,
                        "selections": [
                          v1,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "EN",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v23
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "FR",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v23
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "DE",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v23
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "querySuperMe",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "superMe",
                "storageKey": null,
                "args": null,
                "concreteType": "SuperUser",
                "plural": false,
                "selections": [
                  v1,
                  v13,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "userPreferences",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SuperUserPreferences",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "areSubAccountsActivated",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryPublicCircle",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": "circles(first:10)",
                "args": [
                  v18
                ],
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Circle",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "shouldValidateNewUser",
                            "args": null,
                            "storageKey": null
                          },
                          v1,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "mode",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "type",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "isCircleUpdatableByMembers",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "isCircleUsableByMembers",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "isCurrentUserAMember",
                            "args": null,
                            "storageKey": null
                          },
                          v14,
                          v16,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "waitingMembers",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v15
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "refusedMembers",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v15
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v1,
                              v10,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "avatar",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "address",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "AddressModel",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "address",
                                "args": null,
                                "storageKey": null
                              },
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
                            "name": "termsOfUses",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "CircleTermsOfUse",
                            "plural": true,
                            "selections": v15
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sport",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "CircleSport",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "sport",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Sport",
                                "plural": false,
                                "selections": [
                                  v1,
                                  v21,
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "name",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "TranslatedString",
                                    "plural": false,
                                    "selections": [
                                      v5,
                                      v4,
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "ES",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      v20,
                                      v1
                                    ]
                                  }
                                ]
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "levels",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Translated",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "FR",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v24
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "EN",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v24
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "ES",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v24
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "DE",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v24
                                  },
                                  v1
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  v19
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "ownersOfCirclesUserIsIn",
                "storageKey": "ownersOfCirclesUserIsIn(last:5)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 5,
                    "type": "Int"
                  }
                ],
                "concreteType": "UserConnection",
                "plural": false,
                "selections": [
                  v19,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": v11
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
(node/*: any*/).hash = 'faf6ea6f7e957e2eaf578315f6c606a2';
module.exports = node;
