/**
 * @flow
 * @relayHash 36e903afe9db71a67ed1a9a9a82fee9b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SearchPage_viewer$ref = any;
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleListTypeEnum = "CHILDREN_CIRCLES" | "CIRCLES_I_AM_IN" | "MY_CIRCLES" | "OTHER_TEAMS_CIRCLES" | "PUBLIC_CIRCLES" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type SexRestriction = "FEMALE" | "MALE" | "NONE" | "%future added value";
export type SportunityKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type SportunityStatus = "AskedCoOrganizer" | "Available" | "Booked" | "Cancelled" | "CoOrganizer" | "Declined" | "Invited" | "MySportunities" | "Organized" | "Past" | "Survey" | "%future added value";
export type Filter = {
  location?: ?LocationConstraint,
  sport?: ?$ReadOnlyArray<?SportConstraint>,
  status?: ?SportunityStatus,
  searchByName?: ?string,
  statuses?: ?$ReadOnlyArray<?SportunityStatus>,
  price?: ?IntIntervalInput,
  dates?: ?StringIntervalInput,
  hours?: ?IntIntervalInput,
  kind?: ?SportunityKind,
  sexRestriction?: ?SexRestriction,
  ageRestriction?: ?IntIntervalInput,
  users?: ?$ReadOnlyArray<?string>,
  circles?: ?$ReadOnlyArray<?string>,
  subAccounts?: ?$ReadOnlyArray<?string>,
  opponents?: ?$ReadOnlyArray<?string>,
  sportunityTypes?: ?$ReadOnlyArray<?string>,
};
export type LocationConstraint = {
  lat?: ?number,
  lng?: ?number,
  radius?: ?number,
};
export type SportConstraint = {
  sportID?: ?string,
  level?: ?$ReadOnlyArray<?string>,
};
export type IntIntervalInput = {
  from: number,
  to: number,
};
export type StringIntervalInput = {
  from: string,
  to: string,
};
export type CirclesFilter = {
  location?: ?LocationConstraint,
  sport?: ?$ReadOnlyArray<?SportConstraint>,
  seeAs?: ?string,
  type?: ?CircleTypeEnum,
  code?: ?string,
  types?: ?$ReadOnlyArray<?CircleTypeEnum>,
  circleType?: ?$ReadOnlyArray<?CircleListTypeEnum>,
  nameCompletion?: ?string,
  modes?: ?$ReadOnlyArray<?CircleKind>,
  owners?: ?$ReadOnlyArray<?string>,
  isCircleUsableByMember?: ?boolean,
};
export type router_SearchPage_QueryVariables = {|
  sportunitiesFilter?: ?Filter,
  circlesFilter?: ?CirclesFilter,
  usersFilter?: ?string,
  doSearch: boolean,
|};
export type router_SearchPage_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SearchPage_viewer$ref
  |}
|};
export type router_SearchPage_Query = {|
  variables: router_SearchPage_QueryVariables,
  response: router_SearchPage_QueryResponse,
|};
*/


/*
query router_SearchPage_Query(
  $sportunitiesFilter: Filter
  $circlesFilter: CirclesFilter
  $usersFilter: String
  $doSearch: Boolean!
) {
  viewer {
    ...SearchPage_viewer_40LXvv
    id
  }
}

fragment SearchPage_viewer_40LXvv on Viewer {
  ...Sportunities_viewer_4jYvYy
  ...Circles_viewer_1ot6DP
  ...Users_viewer_fDi2K
  me {
    id
  }
}

fragment Sportunities_viewer_4jYvYy on Viewer {
  sportunities(first: 3, filter: $sportunitiesFilter) @include(if: $doSearch) {
    count
    edges {
      node {
        id
        ...Sportunity_sportunity
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Circles_viewer_1ot6DP on Viewer {
  circles(first: 3, filter: $circlesFilter) @include(if: $doSearch) {
    count
    edges {
      node {
        id
        ...MyCirclesCircleItem_circle
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Users_viewer_fDi2K on Viewer {
  users(first: 3, pseudo: $usersFilter) @include(if: $doSearch) {
    count
    edges {
      node {
        id
        pseudo
        avatar
        firstName
        lastName
        circlesUserIsIn {
          edges {
            node {
              id
              name
            }
          }
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
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
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunitiesFilter",
    "type": "Filter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "circlesFilter",
    "type": "CirclesFilter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "usersFilter",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "doSearch",
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
v2 = [
  v1
],
v3 = {
  "kind": "Literal",
  "name": "first",
  "value": 3,
  "type": "Int"
},
v4 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "sportunitiesFilter",
    "type": "Filter"
  },
  v3
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
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
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v13 = [
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
      v11,
      v12,
      v1
    ]
  }
],
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v15 = [
  v1,
  v10,
  v14
],
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organizer",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v15
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v19 = [
  v1,
  v18
],
v20 = {
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
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ES",
  "args": null,
  "storageKey": null
},
v23 = [
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
      v12,
      v11,
      v21,
      v22,
      v1
    ]
  }
],
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v25 = [
  v18,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v26 = {
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
      "selections": v25
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v25
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "DE",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v25
    }
  ]
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v29 = {
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
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v30 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "circlesFilter",
    "type": "CirclesFilter"
  },
  v3
],
v31 = [
  v18,
  v9
],
v32 = [
  v3,
  {
    "kind": "Variable",
    "name": "pseudo",
    "variableName": "usersFilter",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_SearchPage_Query",
  "id": null,
  "text": "query router_SearchPage_Query(\n  $sportunitiesFilter: Filter\n  $circlesFilter: CirclesFilter\n  $usersFilter: String\n  $doSearch: Boolean!\n) {\n  viewer {\n    ...SearchPage_viewer_40LXvv\n    id\n  }\n}\n\nfragment SearchPage_viewer_40LXvv on Viewer {\n  ...Sportunities_viewer_4jYvYy\n  ...Circles_viewer_1ot6DP\n  ...Users_viewer_fDi2K\n  me {\n    id\n  }\n}\n\nfragment Sportunities_viewer_4jYvYy on Viewer {\n  sportunities(first: 3, filter: $sportunitiesFilter) @include(if: $doSearch) {\n    count\n    edges {\n      node {\n        id\n        ...Sportunity_sportunity\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Circles_viewer_1ot6DP on Viewer {\n  circles(first: 3, filter: $circlesFilter) @include(if: $doSearch) {\n    count\n    edges {\n      node {\n        id\n        ...MyCirclesCircleItem_circle\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Users_viewer_fDi2K on Viewer {\n  users(first: 3, pseudo: $usersFilter) @include(if: $doSearch) {\n    count\n    edges {\n      node {\n        id\n        pseudo\n        avatar\n        firstName\n        lastName\n        circlesUserIsIn {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment MyCirclesCircleItem_circle on Circle {\n  id\n  name\n  mode\n  type\n  isCircleUpdatableByMembers\n  isCircleUsableByMembers\n  isCurrentUserAMember\n  shouldValidateNewUser\n  memberCount\n  waitingMembers {\n    id\n  }\n  refusedMembers {\n    id\n  }\n  owner {\n    id\n    pseudo\n    avatar\n  }\n  address {\n    address\n    city\n    country\n  }\n  termsOfUses {\n    id\n  }\n  sport {\n    sport {\n      id\n      logo\n      name {\n        FR\n        EN\n        ES\n        DE\n        id\n      }\n    }\n    levels {\n      FR {\n        name\n        description\n      }\n      EN {\n        name\n        description\n      }\n      ES {\n        name\n        description\n      }\n      DE {\n        name\n        description\n      }\n      id\n    }\n  }\n}\n\nfragment Sportunity_sportunity on Sportunity {\n  id\n  title\n  description\n  beginning_date\n  ending_date\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      answers {\n        user {\n          id\n          pseudo\n        }\n        answer\n      }\n    }\n  }\n  sportunityType {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  status\n  kind\n  venue {\n    id\n    name\n  }\n  infrastructure {\n    id\n    name\n  }\n  participants {\n    id\n  }\n  price {\n    currency\n    cents\n  }\n  paymentStatus {\n    status\n    user {\n      id\n    }\n    price {\n      currency\n      cents\n    }\n    id\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    isAdmin\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    id\n  }\n  sport {\n    sport {\n      logo\n      id\n      name {\n        EN\n        FR\n        DE\n        id\n      }\n      assistantTypes {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n        }\n        FR {\n          name\n          skillLevel\n        }\n        DE {\n          name\n          skillLevel\n        }\n      }\n    }\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n      DE {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_SearchPage_Query",
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
            "name": "SearchPage_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "circlesFilter",
                "variableName": "circlesFilter",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "doSearch",
                "variableName": "doSearch",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportunitiesFilter",
                "variableName": "sportunitiesFilter",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "usersFilter",
                "variableName": "usersFilter",
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
    "name": "router_SearchPage_Query",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": v2
          },
          v1,
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "doSearch",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunities",
                "storageKey": null,
                "args": v4,
                "concreteType": "SportunityConnection",
                "plural": false,
                "selections": [
                  v5,
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
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "address",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "AddressModel",
                            "plural": false,
                            "selections": [
                              v6,
                              v7,
                              v8,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "position",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "PositionType",
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
                                  }
                                ]
                              }
                            ]
                          },
                          v1,
                          v9,
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
                                        "selections": [
                                          v1,
                                          v10
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
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sportunityType",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportunityType",
                            "plural": false,
                            "selections": v13
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sportunityTypeStatus",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportunityTypeStatus",
                            "plural": false,
                            "selections": v13
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
                                  v16,
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
                                              v1,
                                              {
                                                "kind": "LinkedField",
                                                "alias": null,
                                                "name": "members",
                                                "storageKey": null,
                                                "args": null,
                                                "concreteType": "User",
                                                "plural": true,
                                                "selections": v2
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
                          v17,
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
                            "selections": v19
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "infrastructure",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Infrastructure",
                            "plural": false,
                            "selections": v19
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "participants",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v2
                          },
                          v20,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "paymentStatus",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportunityPaymentStatus",
                            "plural": true,
                            "selections": [
                              v17,
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
                              v20,
                              v1
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
                              v16,
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
                                "selections": v23
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "customSecondaryOrganizerType",
                                "args": null,
                                "storageKey": null
                              },
                              v1
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
                                  v24,
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
                                      v11,
                                      v12,
                                      v21,
                                      v1
                                    ]
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "assistantTypes",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "AssistantType",
                                    "plural": true,
                                    "selections": v23
                                  },
                                  v26
                                ]
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "allLevelSelected",
                                "args": null,
                                "storageKey": null
                              },
                              v26
                            ]
                          },
                          v27
                        ]
                      },
                      v28
                    ]
                  },
                  v29
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "sportunities",
                "args": v4,
                "handle": "connection",
                "key": "Viewer_sportunities",
                "filters": [
                  "sportunitiesFilter"
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": null,
                "args": v30,
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": [
                  v5,
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
                            "name": "memberCount",
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "shouldValidateNewUser",
                            "args": null,
                            "storageKey": null
                          },
                          v18,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "waitingMembers",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v2
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "refusedMembers",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v2
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v15
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
                              v6,
                              v7,
                              v8
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
                            "selections": v2
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
                                  v24,
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "name",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "TranslatedString",
                                    "plural": false,
                                    "selections": [
                                      v12,
                                      v11,
                                      v22,
                                      v21,
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
                                    "selections": v31
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "EN",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v31
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "ES",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v31
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "DE",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v31
                                  },
                                  v1
                                ]
                              }
                            ]
                          },
                          v27
                        ]
                      },
                      v28
                    ]
                  },
                  v29
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "circles",
                "args": v30,
                "handle": "connection",
                "key": "Viewer_circles",
                "filters": [
                  "circlesFilter"
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "users",
                "storageKey": null,
                "args": v32,
                "concreteType": "UserConnection",
                "plural": false,
                "selections": [
                  v5,
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
                        "selections": [
                          v1,
                          v10,
                          v14,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "firstName",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "lastName",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "circlesUserIsIn",
                            "storageKey": null,
                            "args": null,
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
                                    "selections": v19
                                  }
                                ]
                              }
                            ]
                          },
                          v27
                        ]
                      },
                      v28
                    ]
                  },
                  v29
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "users",
                "args": v32,
                "handle": "connection",
                "key": "Viewer_users",
                "filters": [
                  "usersFilter"
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
(node/*: any*/).hash = '3943ac380b397e9815983b87aff5e814';
module.exports = node;
