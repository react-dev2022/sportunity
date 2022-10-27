/**
 * @flow
 * @relayHash 5c94875ebb84ec1f2f06d35b5cb14cb2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FindSportunity_viewer$ref = any;
export type router_FindSportunityURL_QueryVariables = {||};
export type router_FindSportunityURL_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: FindSportunity_viewer$ref
  |}
|};
export type router_FindSportunityURL_Query = {|
  variables: router_FindSportunityURL_QueryVariables,
  response: router_FindSportunityURL_QueryResponse,
|};
*/


/*
query router_FindSportunityURL_Query {
  viewer {
    ...FindSportunity_viewer
    id
  }
}

fragment FindSportunity_viewer on Viewer {
  me {
    id
    ...Filter_user
  }
  ...Events_viewer
  ...Filter_viewer
  sportunities(first: 10) {
    ...Events_sportunities
    ...FindSportunityMap_sportunities
    pageInfo {
      hasNextPage
    }
    count
  }
}

fragment Filter_user on User {
  appCountry
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
  savedFilters {
    id
    page
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
          DE
          id
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
          DE {
            name
            skillLevel
            description
          }
        }
      }
      levels {
        id
        FR {
          name
          skillLevel
          description
        }
        EN {
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
    price {
      from
      to
    }
    dates {
      from
      to
    }
  }
}

fragment Events_viewer on Viewer {
  me {
    id
    profileType
  }
  ...Sportunity_viewer
}

fragment Filter_viewer on Viewer {
  me {
    id
    appCountry
  }
  sports(first: 10, language: EN) {
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
}

fragment Events_sportunities on SportunityConnection {
  pageInfo {
    hasNextPage
  }
  edges {
    node {
      ...Sportunity_sportunity
      id
      title
      beginning_date
      ending_date
      sport {
        sport {
          name {
            EN
            FR
            DE
            id
          }
          logo
          levels {
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
            id
          }
          id
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
      venue {
        name
        id
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
      participants {
        id
      }
      price {
        currency
        cents
      }
      mode
      kind
      status
    }
  }
}

fragment FindSportunityMap_sportunities on SportunityConnection {
  edges {
    node {
      id
      title
      beginning_date
      ending_date
      sport {
        sport {
          name {
            EN
            id
          }
          levels {
            EN {
              name
            }
            id
          }
          logo
          id
        }
        allLevelSelected
        levels {
          id
          EN {
            name
          }
        }
      }
      venue {
        name
        id
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
      participants {
        id
      }
      price {
        currency
        cents
      }
      mode
      kind
      status
    }
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = [
  v0,
  v2,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mode",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lat",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lng",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v10 = {
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
    v9,
    v0
  ]
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "skillLevel",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v13 = [
  v1,
  v11,
  v12
],
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "EN",
  "storageKey": null,
  "args": null,
  "concreteType": "SportLevel",
  "plural": false,
  "selections": v13
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "FR",
  "storageKey": null,
  "args": null,
  "concreteType": "SportLevel",
  "plural": false,
  "selections": v13
},
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "DE",
  "storageKey": null,
  "args": null,
  "concreteType": "SportLevel",
  "plural": false,
  "selections": v13
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v0,
    v14,
    v15,
    v16
  ]
},
v18 = [
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
],
v19 = [
  v0
],
v20 = {
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
        v5,
        v6
      ]
    }
  ]
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beginning_date",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ending_date",
  "args": null,
  "storageKey": null
},
v23 = {
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
              "selections": [
                v0,
                v2
              ]
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
v24 = [
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
v25 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sportunityType",
  "storageKey": null,
  "args": null,
  "concreteType": "SportunityType",
  "plural": false,
  "selections": v24
},
v26 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sportunityTypeStatus",
  "storageKey": null,
  "args": null,
  "concreteType": "SportunityTypeStatus",
  "plural": false,
  "selections": v24
},
v27 = {
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
v28 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organizer",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v3
},
v29 = {
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
        v28,
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
                      "selections": v19
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
v30 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v31 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v32 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "kind",
  "args": null,
  "storageKey": null
},
v33 = [
  v0,
  v1
],
v34 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "venue",
  "storageKey": null,
  "args": null,
  "concreteType": "Venue",
  "plural": false,
  "selections": v33
},
v35 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "infrastructure",
  "storageKey": null,
  "args": null,
  "concreteType": "Infrastructure",
  "plural": false,
  "selections": v33
},
v36 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "participants",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v19
},
v37 = {
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
v38 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "paymentStatus",
  "storageKey": null,
  "args": null,
  "concreteType": "SportunityPaymentStatus",
  "plural": true,
  "selections": [
    v31,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v19
    },
    v37,
    v0
  ]
},
v39 = [
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
      v9,
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
v40 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organizers",
  "storageKey": null,
  "args": null,
  "concreteType": "Organizer",
  "plural": true,
  "selections": [
    v28,
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
      "selections": v39
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
v41 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v42 = [
  v1,
  v11
],
v43 = {
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
      "selections": v42
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v42
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "DE",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v42
    }
  ]
},
v44 = {
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
        v41,
        v0,
        v10,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "assistantTypes",
          "storageKey": null,
          "args": null,
          "concreteType": "AssistantType",
          "plural": true,
          "selections": v39
        },
        v43
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "allLevelSelected",
      "args": null,
      "storageKey": null
    },
    v43
  ]
},
v45 = {
  "kind": "Literal",
  "name": "first",
  "value": 10,
  "type": "Int"
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_FindSportunityURL_Query",
  "id": null,
  "text": "query router_FindSportunityURL_Query {\n  viewer {\n    ...FindSportunity_viewer\n    id\n  }\n}\n\nfragment FindSportunity_viewer on Viewer {\n  me {\n    id\n    ...Filter_user\n  }\n  ...Events_viewer\n  ...Filter_viewer\n  sportunities(first: 10) {\n    ...Events_sportunities\n    ...FindSportunityMap_sportunities\n    pageInfo {\n      hasNextPage\n    }\n    count\n  }\n}\n\nfragment Filter_user on User {\n  appCountry\n  circlesUserIsIn(last: 20) {\n    edges {\n      node {\n        id\n        name\n        owner {\n          id\n          pseudo\n          avatar\n        }\n        mode\n        isCircleUpdatableByMembers\n        isCircleUsableByMembers\n        memberCount\n      }\n    }\n  }\n  savedFilters {\n    id\n    page\n    filterName\n    location {\n      lat\n      lng\n      radius\n    }\n    sport {\n      sport {\n        id\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n          DE {\n            name\n            skillLevel\n            description\n          }\n        }\n      }\n      levels {\n        id\n        FR {\n          name\n          skillLevel\n          description\n        }\n        EN {\n          name\n          skillLevel\n          description\n        }\n        DE {\n          name\n          skillLevel\n          description\n        }\n      }\n    }\n    price {\n      from\n      to\n    }\n    dates {\n      from\n      to\n    }\n  }\n}\n\nfragment Events_viewer on Viewer {\n  me {\n    id\n    profileType\n  }\n  ...Sportunity_viewer\n}\n\nfragment Filter_viewer on Viewer {\n  me {\n    id\n    appCountry\n  }\n  sports(first: 10, language: EN) {\n    edges {\n      node {\n        id\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n        logo\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n          DE {\n            name\n            skillLevel\n            description\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Events_sportunities on SportunityConnection {\n  pageInfo {\n    hasNextPage\n  }\n  edges {\n    node {\n      ...Sportunity_sportunity\n      id\n      title\n      beginning_date\n      ending_date\n      sport {\n        sport {\n          name {\n            EN\n            FR\n            DE\n            id\n          }\n          logo\n          levels {\n            EN {\n              name\n              skillLevel\n            }\n            FR {\n              name\n              skillLevel\n            }\n            DE {\n              name\n              skillLevel\n            }\n            id\n          }\n          id\n        }\n        allLevelSelected\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n          }\n          FR {\n            name\n            skillLevel\n          }\n          DE {\n            name\n            skillLevel\n          }\n        }\n      }\n      venue {\n        name\n        id\n      }\n      address {\n        address\n        city\n        country\n        position {\n          lat\n          lng\n        }\n      }\n      participants {\n        id\n      }\n      price {\n        currency\n        cents\n      }\n      mode\n      kind\n      status\n    }\n  }\n}\n\nfragment FindSportunityMap_sportunities on SportunityConnection {\n  edges {\n    node {\n      id\n      title\n      beginning_date\n      ending_date\n      sport {\n        sport {\n          name {\n            EN\n            id\n          }\n          levels {\n            EN {\n              name\n            }\n            id\n          }\n          logo\n          id\n        }\n        allLevelSelected\n        levels {\n          id\n          EN {\n            name\n          }\n        }\n      }\n      venue {\n        name\n        id\n      }\n      address {\n        address\n        city\n        country\n        position {\n          lat\n          lng\n        }\n      }\n      participants {\n        id\n      }\n      price {\n        currency\n        cents\n      }\n      mode\n      kind\n      status\n    }\n  }\n}\n\nfragment Sportunity_sportunity on Sportunity {\n  id\n  title\n  description\n  beginning_date\n  ending_date\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      answers {\n        user {\n          id\n          pseudo\n        }\n        answer\n      }\n    }\n  }\n  sportunityType {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  status\n  kind\n  venue {\n    id\n    name\n  }\n  infrastructure {\n    id\n    name\n  }\n  participants {\n    id\n  }\n  price {\n    currency\n    cents\n  }\n  paymentStatus {\n    status\n    user {\n      id\n    }\n    price {\n      currency\n      cents\n    }\n    id\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    isAdmin\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    id\n  }\n  sport {\n    sport {\n      logo\n      id\n      name {\n        EN\n        FR\n        DE\n        id\n      }\n      assistantTypes {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n        }\n        FR {\n          name\n          skillLevel\n        }\n        DE {\n          name\n          skillLevel\n        }\n      }\n    }\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n      DE {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment Sportunity_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n    subAccounts {\n      id\n    }\n  }\n  sportunity {\n    ...Sportunity_sportunity\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_FindSportunityURL_Query",
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
            "name": "FindSportunity_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_FindSportunityURL_Query",
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
                "name": "appCountry",
                "args": null,
                "storageKey": null
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
                          v1,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v3
                          },
                          v4,
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
                  v0,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "page",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "filterName",
                    "args": null,
                    "storageKey": null
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
                      v5,
                      v6,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "radius",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
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
                          v10,
                          v17
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
                          v15,
                          v14,
                          v16
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "IntInterval",
                    "plural": false,
                    "selections": v18
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "dates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StringInterval",
                    "plural": false,
                    "selections": v18
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
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
                "selections": v19
              }
            ]
          },
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunity",
            "storageKey": null,
            "args": null,
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
              v20,
              v0,
              v12,
              v21,
              v22,
              v23,
              v25,
              v26,
              v27,
              v29,
              v30,
              v31,
              v32,
              v34,
              v35,
              v36,
              v37,
              v38,
              v40,
              v44
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sports",
            "storageKey": "sports(first:10,language:\"EN\")",
            "args": [
              v45,
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
                      v0,
                      v10,
                      v41,
                      v17
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunities",
            "storageKey": "sportunities(first:10)",
            "args": [
              v45
            ],
            "concreteType": "SportunityConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sportunity",
                    "plural": false,
                    "selections": [
                      v20,
                      v0,
                      v12,
                      v21,
                      v22,
                      v23,
                      v25,
                      v26,
                      v27,
                      v29,
                      v30,
                      v31,
                      v32,
                      v34,
                      v35,
                      v36,
                      v37,
                      v38,
                      v40,
                      v44,
                      v4
                    ]
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "count",
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
(node/*: any*/).hash = '1bf4045efdbacf071e47dde4c3e96be7';
module.exports = node;
