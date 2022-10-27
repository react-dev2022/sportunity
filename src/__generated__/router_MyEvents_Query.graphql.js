/**
 * @flow
 * @relayHash e14961f8c63e11a54f6c8b5a6f523e54
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MyEvents_viewer$ref = any;
export type router_MyEvents_QueryVariables = {||};
export type router_MyEvents_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: MyEvents_viewer$ref
  |}
|};
export type router_MyEvents_Query = {|
  variables: router_MyEvents_QueryVariables,
  response: router_MyEvents_QueryResponse,
|};
*/


/*
query router_MyEvents_Query {
  viewer {
    ...MyEvents_viewer
    id
  }
}

fragment MyEvents_viewer on Viewer {
  ...MyEventsEvents_viewer
  ...AddSecondaryOrganizerModal_viewer
  id
  sportunityTypes(sportType: COLLECTIVE) {
    id
    name {
      FR
      EN
      id
    }
  }
  me {
    ...AddSecondaryOrganizerModal_user
    id
    basicSavedFiltersCreated
    profileType
    savedFilters {
      id
      canBeDeleted
      page
      filterName
      statuses
      users {
        id
        pseudo
      }
      subAccounts {
        id
        pseudo
      }
      sportunityTypes {
        id
        name {
          FR
          EN
          id
        }
      }
      sport {
        sport {
          id
          name {
            EN
            FR
            DE
            id
          }
        }
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
        }
      }
      dates {
        from
        to
      }
      location {
        lat
        lng
        radius
      }
    }
    defaultSavedFilter {
      id
      filterName
      statuses
      users {
        id
        pseudo
      }
      subAccounts {
        id
        pseudo
      }
      sportunityTypes {
        id
        name {
          FR
          EN
          id
        }
      }
    }
    circlesUserIsIn(last: 20) {
      edges {
        node {
          id
          name
          owner {
            id
            pseudo
            avatar
          }
          mode
          isCircleUpdatableByMembers
          isCircleUsableByMembers
          memberCount
        }
      }
    }
    subAccounts {
      id
      pseudo
    }
  }
}

fragment MyEventsEvents_viewer on Viewer {
  id
  ...Sportunity_viewer
  me {
    profileType
    id
  }
}

fragment AddSecondaryOrganizerModal_viewer on Viewer {
  id
}

fragment AddSecondaryOrganizerModal_user on User {
  pseudo
  ...MyEventsFindOrganizerModal_user
}

fragment MyEventsFindOrganizerModal_user on User {
  id
}

fragment Sportunity_viewer on Viewer {
  id
  me {
    id
    profileType
    subAccounts {
      id
    }
  }
  sportunity {
    ...Sportunity_sportunity
    id
  }
}

fragment Sportunity_sportunity on Sportunity {
  id
  title
  description
  beginning_date
  ending_date
  survey {
    isSurveyTransformed
    surveyDates {
      answers {
        user {
          id
          pseudo
        }
        answer
      }
    }
  }
  sportunityType {
    id
    name {
      EN
      FR
      id
    }
  }
  sportunityTypeStatus {
    id
    name {
      EN
      FR
      id
    }
  }
  score {
    currentTeam
    adversaryTeam
  }
  game_information {
    opponent {
      organizerPseudo
      unknownOpponent
      lookingForAnOpponent
      organizer {
        id
        pseudo
        avatar
      }
      invitedOpponents(last: 5) {
        edges {
          node {
            id
            members {
              id
            }
          }
        }
      }
    }
  }
  address {
    address
    city
    country
    position {
      lat
      lng
    }
  }
  status
  kind
  venue {
    id
    name
  }
  infrastructure {
    id
    name
  }
  participants {
    id
  }
  price {
    currency
    cents
  }
  paymentStatus {
    status
    user {
      id
    }
    price {
      currency
      cents
    }
    id
  }
  organizers {
    organizer {
      id
      pseudo
      avatar
    }
    isAdmin
    role
    secondaryOrganizerType {
      id
      name {
        FR
        EN
        DE
        ES
        id
      }
    }
    customSecondaryOrganizerType
    id
  }
  sport {
    sport {
      logo
      id
      name {
        EN
        FR
        DE
        id
      }
      assistantTypes {
        id
        name {
          FR
          EN
          DE
          ES
          id
        }
      }
      levels {
        id
        EN {
          name
          skillLevel
        }
        FR {
          name
          skillLevel
        }
        DE {
          name
          skillLevel
        }
      }
    }
    allLevelSelected
    levels {
      id
      EN {
        name
        skillLevel
      }
      FR {
        name
        skillLevel
      }
      DE {
        name
        skillLevel
      }
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
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v2 = [
  v0,
  v1
],
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v2
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "users",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v2
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "filterName",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "statuses",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v9 = [
  v0,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "name",
    "storageKey": null,
    "args": null,
    "concreteType": "TranslatedString",
    "plural": false,
    "selections": [
      v7,
      v8,
      v0
    ]
  }
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sportunityTypes",
  "storageKey": null,
  "args": null,
  "concreteType": "SportunityType",
  "plural": true,
  "selections": v9
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v8,
    v7,
    v11,
    v0
  ]
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "skillLevel",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v16 = [
  v13,
  v14,
  v15
],
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lat",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lng",
  "args": null,
  "storageKey": null
},
v19 = [
  v0,
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
],
v20 = [
  v0,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "name",
    "storageKey": null,
    "args": null,
    "concreteType": "TranslatedString",
    "plural": false,
    "selections": [
      v8,
      v7,
      v0
    ]
  }
],
v21 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organizer",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v19
},
v22 = [
  v0
],
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v24 = [
  v0,
  v13
],
v25 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "currency",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cents",
      "args": null,
      "storageKey": null
    }
  ]
},
v26 = [
  v0,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "name",
    "storageKey": null,
    "args": null,
    "concreteType": "TranslatedString",
    "plural": false,
    "selections": [
      v7,
      v8,
      v11,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ES",
        "args": null,
        "storageKey": null
      },
      v0
    ]
  }
],
v27 = [
  v13,
  v14
],
v28 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EN",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v27
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v27
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "DE",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v27
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_MyEvents_Query",
  "id": null,
  "text": "query router_MyEvents_Query {\n  viewer {\n    ...MyEvents_viewer\n    id\n  }\n}\n\nfragment MyEvents_viewer on Viewer {\n  ...MyEventsEvents_viewer\n  ...AddSecondaryOrganizerModal_viewer\n  id\n  sportunityTypes(sportType: COLLECTIVE) {\n    id\n    name {\n      FR\n      EN\n      id\n    }\n  }\n  me {\n    ...AddSecondaryOrganizerModal_user\n    id\n    basicSavedFiltersCreated\n    profileType\n    savedFilters {\n      id\n      canBeDeleted\n      page\n      filterName\n      statuses\n      users {\n        id\n        pseudo\n      }\n      subAccounts {\n        id\n        pseudo\n      }\n      sportunityTypes {\n        id\n        name {\n          FR\n          EN\n          id\n        }\n      }\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            DE\n            id\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n        }\n      }\n      dates {\n        from\n        to\n      }\n      location {\n        lat\n        lng\n        radius\n      }\n    }\n    defaultSavedFilter {\n      id\n      filterName\n      statuses\n      users {\n        id\n        pseudo\n      }\n      subAccounts {\n        id\n        pseudo\n      }\n      sportunityTypes {\n        id\n        name {\n          FR\n          EN\n          id\n        }\n      }\n    }\n    circlesUserIsIn(last: 20) {\n      edges {\n        node {\n          id\n          name\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          mode\n          isCircleUpdatableByMembers\n          isCircleUsableByMembers\n          memberCount\n        }\n      }\n    }\n    subAccounts {\n      id\n      pseudo\n    }\n  }\n}\n\nfragment MyEventsEvents_viewer on Viewer {\n  id\n  ...Sportunity_viewer\n  me {\n    profileType\n    id\n  }\n}\n\nfragment AddSecondaryOrganizerModal_viewer on Viewer {\n  id\n}\n\nfragment AddSecondaryOrganizerModal_user on User {\n  pseudo\n  ...MyEventsFindOrganizerModal_user\n}\n\nfragment MyEventsFindOrganizerModal_user on User {\n  id\n}\n\nfragment Sportunity_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n    subAccounts {\n      id\n    }\n  }\n  sportunity {\n    ...Sportunity_sportunity\n    id\n  }\n}\n\nfragment Sportunity_sportunity on Sportunity {\n  id\n  title\n  description\n  beginning_date\n  ending_date\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      answers {\n        user {\n          id\n          pseudo\n        }\n        answer\n      }\n    }\n  }\n  sportunityType {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  status\n  kind\n  venue {\n    id\n    name\n  }\n  infrastructure {\n    id\n    name\n  }\n  participants {\n    id\n  }\n  price {\n    currency\n    cents\n  }\n  paymentStatus {\n    status\n    user {\n      id\n    }\n    price {\n      currency\n      cents\n    }\n    id\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    isAdmin\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    id\n  }\n  sport {\n    sport {\n      logo\n      id\n      name {\n        EN\n        FR\n        DE\n        id\n      }\n      assistantTypes {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n        }\n        FR {\n          name\n          skillLevel\n        }\n        DE {\n          name\n          skillLevel\n        }\n      }\n    }\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n      DE {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_MyEvents_Query",
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
            "name": "MyEvents_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_MyEvents_Query",
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
                "name": "profileType",
                "args": null,
                "storageKey": null
              },
              v3,
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "basicSavedFiltersCreated",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "savedFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "UserFilter",
                "plural": true,
                "selections": [
                  v4,
                  v0,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "page",
                    "args": null,
                    "storageKey": null
                  },
                  v5,
                  v6,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "canBeDeleted",
                    "args": null,
                    "storageKey": null
                  },
                  v3,
                  v10,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FilterSport",
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
                          v0,
                          v12
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
                          v0,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "EN",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v16
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "FR",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v16
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "dates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StringInterval",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "from",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "to",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FilterLatLng",
                    "plural": false,
                    "selections": [
                      v17,
                      v18,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "radius",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "defaultSavedFilter",
                "storageKey": null,
                "args": null,
                "concreteType": "UserFilter",
                "plural": false,
                "selections": [
                  v0,
                  v5,
                  v6,
                  v4,
                  v3,
                  v10
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(last:20)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 20,
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
                          v0,
                          v13,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v19
                          },
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
                            "name": "memberCount",
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunity",
            "storageKey": null,
            "args": null,
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
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
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "position",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PositionType",
                    "plural": false,
                    "selections": [
                      v17,
                      v18
                    ]
                  }
                ]
              },
              v0,
              v15,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "beginning_date",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "ending_date",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "survey",
                "storageKey": null,
                "args": null,
                "concreteType": "Survey",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isSurveyTransformed",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "surveyDates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SurveyDatesOutput",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "answers",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SurveyAnswer",
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
                            "selections": v2
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "answer",
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
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityType",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityType",
                "plural": false,
                "selections": v20
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityTypeStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityTypeStatus",
                "plural": false,
                "selections": v20
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "score",
                "storageKey": null,
                "args": null,
                "concreteType": "Score",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "currentTeam",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "adversaryTeam",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "game_information",
                "storageKey": null,
                "args": null,
                "concreteType": "GameInformation",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "opponent",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityOpponentOutput",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "organizerPseudo",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "unknownOpponent",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "lookingForAnOpponent",
                        "args": null,
                        "storageKey": null
                      },
                      v21,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "invitedOpponents",
                        "storageKey": "invitedOpponents(last:5)",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "last",
                            "value": 5,
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
                                  v0,
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "members",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "plural": true,
                                    "selections": v22
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              v23,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "kind",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "venue",
                "storageKey": null,
                "args": null,
                "concreteType": "Venue",
                "plural": false,
                "selections": v24
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "infrastructure",
                "storageKey": null,
                "args": null,
                "concreteType": "Infrastructure",
                "plural": false,
                "selections": v24
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participants",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v22
              },
              v25,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityPaymentStatus",
                "plural": true,
                "selections": [
                  v23,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "user",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v22
                  },
                  v25,
                  v0
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "organizers",
                "storageKey": null,
                "args": null,
                "concreteType": "Organizer",
                "plural": true,
                "selections": [
                  v21,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isAdmin",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "role",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "secondaryOrganizerType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AssistantType",
                    "plural": false,
                    "selections": v26
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "customSecondaryOrganizerType",
                    "args": null,
                    "storageKey": null
                  },
                  v0
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sport",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunitySport",
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "logo",
                        "args": null,
                        "storageKey": null
                      },
                      v0,
                      v12,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "assistantTypes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
                        "plural": true,
                        "selections": v26
                      },
                      v28
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "allLevelSelected",
                    "args": null,
                    "storageKey": null
                  },
                  v28
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunityTypes",
            "storageKey": "sportunityTypes(sportType:\"COLLECTIVE\")",
            "args": [
              {
                "kind": "Literal",
                "name": "sportType",
                "value": "COLLECTIVE",
                "type": "SportTypeEnum"
              }
            ],
            "concreteType": "SportunityType",
            "plural": true,
            "selections": v9
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fab6d9a18854c3f5a814edfce15e0de1';
module.exports = node;
