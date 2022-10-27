/**
 * @flow
 * @relayHash df292df8f2c324f8204ed86765b748dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Circle_viewer$ref = any;
export type router_CircleId_QueryVariables = {|
  userToken?: ?string,
  queryAuthorizedAccounts: boolean,
  superToken?: ?string,
  querySuperMe: boolean,
  circleId?: ?string,
|};
export type router_CircleId_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Circle_viewer$ref
  |}
|};
export type router_CircleId_Query = {|
  variables: router_CircleId_QueryVariables,
  response: router_CircleId_QueryResponse,
|};
*/


/*
query router_CircleId_Query(
  $userToken: String
  $queryAuthorizedAccounts: Boolean!
  $superToken: String
  $querySuperMe: Boolean!
  $circleId: ID
) {
  viewer {
    ...Circle_viewer_4EdedD
    id
  }
}

fragment Circle_viewer_4EdedD on Viewer {
  id
  ...CircleStats_viewer
  ...AddMember_viewer
  ...Subscribe_viewer
  ...EditCircle_viewer
  ...MemberCard_viewer
  ...MemberRow_viewer
  ...CircleMembersInformation_viewer
  ...CircleHeader_viewer
  ...Activities_viewer
  ...ChatContainer_viewer
  ...TermOfUseModal_viewer
  me {
    ...CircleHeader_user
    ...Activities_user
    id
    pseudo
    avatar
    profileType
    isSubAccount
    meCircles: circles(last: 20) {
      edges {
        node {
          id
          name
          memberCount
        }
      }
    }
    meCirclesCirclesFromClub: circlesFromClub(last: 100) {
      edges {
        node {
          id
          name
          owner {
            id
            pseudo
            avatar
          }
          memberCount
          members {
            id
            pseudo
            avatar
          }
        }
      }
    }
  }
  authorizedAccounts(userToken: $userToken) @include(if: $queryAuthorizedAccounts) {
    id
    avatar
    pseudo
    accounts {
      id
      avatar
      token
      pseudo
    }
  }
  superMe(superToken: $superToken) @include(if: $querySuperMe) {
    id
    pseudo
    avatar
    profileType
    subAccounts {
      id
      avatar
      pseudo
      token
    }
  }
  circle(id: $circleId) {
    ...CircleHeader_circle
    ...Details_circle
    ...Activities_circle
    ...TermOfUseModal_circle
    circleSportunities: sportunities {
      edges {
        node {
          status
          id
        }
      }
    }
    termsOfUses {
      id
      name
      link
      content
      acceptedBy {
        user {
          id
        }
      }
    }
    memberStatus {
      member {
        id
      }
      status
      starting_date
    }
    description
    id
    name
    address {
      address
      city
      country
      position {
        lat
        lng
      }
    }
    owner {
      id
      pseudo
      avatar
      ...CircleStats_user
      profileType
    }
    coOwners {
      id
    }
    memberCount
    mode
    type
    isCircleUpdatableByMembers
    isCircleUsableByMembers
    isCircleAccessibleFromUrl
    shouldValidateNewUser
    isChatActive
    circlePreferences {
      isChildrenCircle
    }
    waitingMembers {
      id
      pseudo
      firstName
      lastName
      avatar
      lastConnexionDate
    }
    refusedMembers {
      id
      pseudo
      firstName
      lastName
      avatar
      lastConnexionDate
    }
    members {
      id
      pseudo
      firstName
      lastName
      avatar
      lastConnexionDate
      sports {
        sport {
          id
          name {
            EN
            FR
            DE
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
      sportunityNumber
      followers {
        id
      }
    }
    sport {
      sport {
        id
        logo
        name {
          EN
          FR
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
    memberParents {
      subAccounts {
        id
      }
      id
      pseudo
      firstName
      lastName
      avatar
      lastConnexionDate
      sports {
        sport {
          id
          name {
            EN
            FR
            DE
            id
          }
        }
      }
      sportunityNumber
      followers {
        id
      }
    }
    subCircles(last: 20) {
      edges {
        node {
          id
          members {
            id
          }
        }
      }
    }
    askedInformation {
      id
      name
      type
      filledByOwner
    }
    membersInformation {
      id
      information
      user {
        id
      }
      value
      document {
        id
        name
      }
      validationStatus
      comment
    }
  }
}

fragment CircleStats_viewer on Viewer {
  me {
    id
  }
}

fragment AddMember_viewer on Viewer {
  me {
    id
  }
  ...SearchModal_viewer
  ...AddChildModal_viewer
}

fragment Subscribe_viewer on Viewer {
  id
  me {
    id
    pseudo
    avatar
  }
}

fragment EditCircle_viewer on Viewer {
  id
  sports(first: 10, language: EN) {
    count
    edges {
      node {
        id
        name {
          id
          EN
          FR
        }
        logo
        status
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

fragment MemberCard_viewer on Viewer {
  id
}

fragment MemberRow_viewer on Viewer {
  id
}

fragment CircleMembersInformation_viewer on Viewer {
  id
  ...CircleMembersDetailledInformation_viewer
}

fragment CircleHeader_viewer on Viewer {
  id
}

fragment Activities_viewer on Viewer {
  id
  ...Sportunity_viewer
}

fragment ChatContainer_viewer on Viewer {
  id
  ...Chat_viewer
}

fragment TermOfUseModal_viewer on Viewer {
  id
  me {
    id
  }
}

fragment CircleHeader_user on User {
  id
}

fragment Activities_user on User {
  id
}

fragment CircleHeader_circle on Circle {
  id
  name
  owner {
    id
    pseudo
    avatar
  }
  memberCount
  type
  isCircleUsableByMembers
  mode
  address {
    address
    city
    country
    position {
      lat
      lng
    }
  }
  isCircleAccessibleFromUrl
}

fragment Details_circle on Circle {
  id
  description
  type
  mode
  isCircleUsableByMembers
  publicShortCode
  address {
    address
    city
    country
    position {
      lat
      lng
    }
  }
  sport {
    sport {
      id
      logo
      name {
        EN
        FR
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
    }
  }
}

fragment Activities_circle on Circle {
  id
}

fragment TermOfUseModal_circle on Circle {
  id
  termsOfUses {
    id
    name
    link
    content
    acceptedBy {
      user {
        id
      }
    }
  }
}

fragment CircleStats_user on User {
  id
  pseudo
  areStatisticsActivated
  statisticFilters {
    id
    name
    date_begin
    date_end
    circleList(first: 20) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
  statCircles: circles(last: 20) {
    edges {
      node {
        id
        name
        memberCount
        type
      }
    }
  }
}

fragment Chat_viewer on Viewer {
  id
  me {
    id
    avatar
    pseudo
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

fragment CircleMembersDetailledInformation_viewer on Viewer {
  id
}

fragment SearchModal_viewer on Viewer {
  me {
    id
  }
}

fragment AddChildModal_viewer on Viewer {
  ...SubmitAddChild_viewer
  ...InputUserAutocompleted_viewer
  me {
    id
  }
}

fragment SubmitAddChild_viewer on Viewer {
  id
}

fragment InputUserAutocompleted_viewer on Viewer {
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userToken",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryAuthorizedAccounts",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "superToken",
    "type": "String",
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
    "name": "circleId",
    "type": "ID",
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
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v5 = [
  v1
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v5
},
v7 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 20,
    "type": "Int"
  }
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v10 = [
  v1,
  v2,
  v3
],
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v10
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "skillLevel",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v18 = [
  v8,
  v16,
  v17
],
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "EN",
  "storageKey": null,
  "args": null,
  "concreteType": "SportLevel",
  "plural": false,
  "selections": v18
},
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "FR",
  "storageKey": null,
  "args": null,
  "concreteType": "SportLevel",
  "plural": false,
  "selections": v18
},
v21 = {
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
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v12,
    v13,
    v1
  ]
},
v23 = [
  v1,
  v22
],
v24 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organizer",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v10
},
v25 = [
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
            "selections": v5
          }
        ]
      }
    ]
  }
],
v26 = [
  v1,
  v8
],
v27 = {
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
v28 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v5
},
v29 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v30 = [
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
      v13,
      v12,
      v29,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ES",
        "args": null,
        "storageKey": null
      },
      v1
    ]
  }
],
v31 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v12,
    v13,
    v29,
    v1
  ]
},
v32 = [
  v8,
  v16
],
v33 = {
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
      "selections": v32
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v32
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "DE",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v32
    }
  ]
},
v34 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v35 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleUsableByMembers",
  "args": null,
  "storageKey": null
},
v36 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mode",
  "args": null,
  "storageKey": null
},
v37 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v1,
    v19,
    v20
  ]
},
v38 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleUpdatableByMembers",
  "args": null,
  "storageKey": null
},
v39 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v40 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v41 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastConnexionDate",
  "args": null,
  "storageKey": null
},
v42 = [
  v1,
  v2,
  v39,
  v40,
  v3,
  v41
],
v43 = {
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
      "selections": [
        v1,
        v31
      ]
    }
  ]
},
v44 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityNumber",
  "args": null,
  "storageKey": null
},
v45 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "followers",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v5
},
v46 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_CircleId_Query",
  "id": null,
  "text": "query router_CircleId_Query(\n  $userToken: String\n  $queryAuthorizedAccounts: Boolean!\n  $superToken: String\n  $querySuperMe: Boolean!\n  $circleId: ID\n) {\n  viewer {\n    ...Circle_viewer_4EdedD\n    id\n  }\n}\n\nfragment Circle_viewer_4EdedD on Viewer {\n  id\n  ...CircleStats_viewer\n  ...AddMember_viewer\n  ...Subscribe_viewer\n  ...EditCircle_viewer\n  ...MemberCard_viewer\n  ...MemberRow_viewer\n  ...CircleMembersInformation_viewer\n  ...CircleHeader_viewer\n  ...Activities_viewer\n  ...ChatContainer_viewer\n  ...TermOfUseModal_viewer\n  me {\n    ...CircleHeader_user\n    ...Activities_user\n    id\n    pseudo\n    avatar\n    profileType\n    isSubAccount\n    meCircles: circles(last: 20) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n        }\n      }\n    }\n    meCirclesCirclesFromClub: circlesFromClub(last: 100) {\n      edges {\n        node {\n          id\n          name\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          memberCount\n          members {\n            id\n            pseudo\n            avatar\n          }\n        }\n      }\n    }\n  }\n  authorizedAccounts(userToken: $userToken) @include(if: $queryAuthorizedAccounts) {\n    id\n    avatar\n    pseudo\n    accounts {\n      id\n      avatar\n      token\n      pseudo\n    }\n  }\n  superMe(superToken: $superToken) @include(if: $querySuperMe) {\n    id\n    pseudo\n    avatar\n    profileType\n    subAccounts {\n      id\n      avatar\n      pseudo\n      token\n    }\n  }\n  circle(id: $circleId) {\n    ...CircleHeader_circle\n    ...Details_circle\n    ...Activities_circle\n    ...TermOfUseModal_circle\n    circleSportunities: sportunities {\n      edges {\n        node {\n          status\n          id\n        }\n      }\n    }\n    termsOfUses {\n      id\n      name\n      link\n      content\n      acceptedBy {\n        user {\n          id\n        }\n      }\n    }\n    memberStatus {\n      member {\n        id\n      }\n      status\n      starting_date\n    }\n    description\n    id\n    name\n    address {\n      address\n      city\n      country\n      position {\n        lat\n        lng\n      }\n    }\n    owner {\n      id\n      pseudo\n      avatar\n      ...CircleStats_user\n      profileType\n    }\n    coOwners {\n      id\n    }\n    memberCount\n    mode\n    type\n    isCircleUpdatableByMembers\n    isCircleUsableByMembers\n    isCircleAccessibleFromUrl\n    shouldValidateNewUser\n    isChatActive\n    circlePreferences {\n      isChildrenCircle\n    }\n    waitingMembers {\n      id\n      pseudo\n      firstName\n      lastName\n      avatar\n      lastConnexionDate\n    }\n    refusedMembers {\n      id\n      pseudo\n      firstName\n      lastName\n      avatar\n      lastConnexionDate\n    }\n    members {\n      id\n      pseudo\n      firstName\n      lastName\n      avatar\n      lastConnexionDate\n      sports {\n        sport {\n          id\n          name {\n            EN\n            FR\n            DE\n            id\n          }\n        }\n      }\n      circlesUserIsIn(last: 20) {\n        edges {\n          node {\n            id\n            name\n            owner {\n              id\n              pseudo\n              avatar\n            }\n            mode\n            isCircleUpdatableByMembers\n            isCircleUsableByMembers\n            memberCount\n          }\n        }\n      }\n      sportunityNumber\n      followers {\n        id\n      }\n    }\n    sport {\n      sport {\n        id\n        logo\n        name {\n          EN\n          FR\n          id\n        }\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n          description\n        }\n        FR {\n          name\n          skillLevel\n          description\n        }\n      }\n    }\n    memberParents {\n      subAccounts {\n        id\n      }\n      id\n      pseudo\n      firstName\n      lastName\n      avatar\n      lastConnexionDate\n      sports {\n        sport {\n          id\n          name {\n            EN\n            FR\n            DE\n            id\n          }\n        }\n      }\n      sportunityNumber\n      followers {\n        id\n      }\n    }\n    subCircles(last: 20) {\n      edges {\n        node {\n          id\n          members {\n            id\n          }\n        }\n      }\n    }\n    askedInformation {\n      id\n      name\n      type\n      filledByOwner\n    }\n    membersInformation {\n      id\n      information\n      user {\n        id\n      }\n      value\n      document {\n        id\n        name\n      }\n      validationStatus\n      comment\n    }\n  }\n}\n\nfragment CircleStats_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment AddMember_viewer on Viewer {\n  me {\n    id\n  }\n  ...SearchModal_viewer\n  ...AddChildModal_viewer\n}\n\nfragment Subscribe_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment EditCircle_viewer on Viewer {\n  id\n  sports(first: 10, language: EN) {\n    count\n    edges {\n      node {\n        id\n        name {\n          id\n          EN\n          FR\n        }\n        logo\n        status\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n          DE {\n            name\n            skillLevel\n            description\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment MemberCard_viewer on Viewer {\n  id\n}\n\nfragment MemberRow_viewer on Viewer {\n  id\n}\n\nfragment CircleMembersInformation_viewer on Viewer {\n  id\n  ...CircleMembersDetailledInformation_viewer\n}\n\nfragment CircleHeader_viewer on Viewer {\n  id\n}\n\nfragment Activities_viewer on Viewer {\n  id\n  ...Sportunity_viewer\n}\n\nfragment ChatContainer_viewer on Viewer {\n  id\n  ...Chat_viewer\n}\n\nfragment TermOfUseModal_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n\nfragment CircleHeader_user on User {\n  id\n}\n\nfragment Activities_user on User {\n  id\n}\n\nfragment CircleHeader_circle on Circle {\n  id\n  name\n  owner {\n    id\n    pseudo\n    avatar\n  }\n  memberCount\n  type\n  isCircleUsableByMembers\n  mode\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  isCircleAccessibleFromUrl\n}\n\nfragment Details_circle on Circle {\n  id\n  description\n  type\n  mode\n  isCircleUsableByMembers\n  publicShortCode\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  sport {\n    sport {\n      id\n      logo\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment Activities_circle on Circle {\n  id\n}\n\nfragment TermOfUseModal_circle on Circle {\n  id\n  termsOfUses {\n    id\n    name\n    link\n    content\n    acceptedBy {\n      user {\n        id\n      }\n    }\n  }\n}\n\nfragment CircleStats_user on User {\n  id\n  pseudo\n  areStatisticsActivated\n  statisticFilters {\n    id\n    name\n    date_begin\n    date_end\n    circleList(first: 20) {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n  statCircles: circles(last: 20) {\n    edges {\n      node {\n        id\n        name\n        memberCount\n        type\n      }\n    }\n  }\n}\n\nfragment Chat_viewer on Viewer {\n  id\n  me {\n    id\n    avatar\n    pseudo\n  }\n}\n\nfragment Sportunity_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n    subAccounts {\n      id\n    }\n  }\n  sportunity {\n    ...Sportunity_sportunity\n    id\n  }\n}\n\nfragment Sportunity_sportunity on Sportunity {\n  id\n  title\n  description\n  beginning_date\n  ending_date\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      answers {\n        user {\n          id\n          pseudo\n        }\n        answer\n      }\n    }\n  }\n  sportunityType {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  status\n  kind\n  venue {\n    id\n    name\n  }\n  infrastructure {\n    id\n    name\n  }\n  participants {\n    id\n  }\n  price {\n    currency\n    cents\n  }\n  paymentStatus {\n    status\n    user {\n      id\n    }\n    price {\n      currency\n      cents\n    }\n    id\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    isAdmin\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    id\n  }\n  sport {\n    sport {\n      logo\n      id\n      name {\n        EN\n        FR\n        DE\n        id\n      }\n      assistantTypes {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n        }\n        FR {\n          name\n          skillLevel\n        }\n        DE {\n          name\n          skillLevel\n        }\n      }\n    }\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n      DE {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment CircleMembersDetailledInformation_viewer on Viewer {\n  id\n}\n\nfragment SearchModal_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment AddChildModal_viewer on Viewer {\n  ...SubmitAddChild_viewer\n  ...InputUserAutocompleted_viewer\n  me {\n    id\n  }\n}\n\nfragment SubmitAddChild_viewer on Viewer {\n  id\n}\n\nfragment InputUserAutocompleted_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_CircleId_Query",
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
            "name": "Circle_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "circleId",
                "variableName": "circleId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryAuthorizedAccounts",
                "variableName": "queryAuthorizedAccounts",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "querySuperMe",
                "variableName": "querySuperMe",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "superToken",
                "variableName": "superToken",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "userToken",
                "variableName": "userToken",
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
    "name": "router_CircleId_Query",
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
              v1,
              v2,
              v3,
              v4,
              v6,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": "meCircles",
                "name": "circles",
                "storageKey": "circles(last:20)",
                "args": v7,
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
                          v8,
                          v9
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": "meCirclesCirclesFromClub",
                "name": "circlesFromClub",
                "storageKey": "circlesFromClub(last:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
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
                          v8,
                          v11,
                          v9,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "members",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v10
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
            "name": "sports",
            "storageKey": "sports(first:10,language:\"EN\")",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              },
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
                "kind": "ScalarField",
                "alias": null,
                "name": "count",
                "args": null,
                "storageKey": null
              },
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
                          v1,
                          v12,
                          v13
                        ]
                      },
                      v14,
                      v15,
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
                          v19,
                          v20,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "DE",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v18
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
              v21,
              v1,
              v17,
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityType",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityType",
                "plural": false,
                "selections": v23
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityTypeStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityTypeStatus",
                "plural": false,
                "selections": v23
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
                      v24,
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
                        "selections": v25
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
              v15,
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
                "selections": v26
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "infrastructure",
                "storageKey": null,
                "args": null,
                "concreteType": "Infrastructure",
                "plural": false,
                "selections": v26
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participants",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v5
              },
              v27,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityPaymentStatus",
                "plural": true,
                "selections": [
                  v15,
                  v28,
                  v27,
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
                  v24,
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
                    "selections": v30
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
                      v14,
                      v1,
                      v31,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "assistantTypes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
                        "plural": true,
                        "selections": v30
                      },
                      v33
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "allLevelSelected",
                    "args": null,
                    "storageKey": null
                  },
                  v33
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "circle",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "circleId",
                "type": "ID"
              }
            ],
            "concreteType": "Circle",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": "circleSportunities",
                "name": "sportunities",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityConnection",
                "plural": false,
                "selections": [
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
                          v15,
                          v1
                        ]
                      }
                    ]
                  }
                ]
              },
              v1,
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
                  v2,
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "areStatisticsActivated",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "statisticFilters",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticFilter",
                    "plural": true,
                    "selections": [
                      v1,
                      v8,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "date_begin",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "date_end",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "circleList",
                        "storageKey": "circleList(first:20)",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
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
                                "selections": v26
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "statCircles",
                    "name": "circles",
                    "storageKey": "circles(last:20)",
                    "args": v7,
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
                              v8,
                              v9,
                              v34
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  v4
                ]
              },
              v9,
              v34,
              v35,
              v36,
              v21,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isCircleAccessibleFromUrl",
                "args": null,
                "storageKey": null
              },
              v17,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "publicShortCode",
                "args": null,
                "storageKey": null
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
                      v14,
                      v22,
                      v37
                    ]
                  },
                  v37
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
                "selections": [
                  v1,
                  v8,
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
                    "name": "content",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "acceptedBy",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TermsOfUseAcceptedBy",
                    "plural": true,
                    "selections": [
                      v28
                    ]
                  }
                ]
              },
              v8,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "memberStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "memberStatus",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "member",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v5
                  },
                  v15,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "starting_date",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "coOwners",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v5
              },
              v38,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "shouldValidateNewUser",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isChatActive",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlePreferences",
                "storageKey": null,
                "args": null,
                "concreteType": "CirclePreferences",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isChildrenCircle",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "waitingMembers",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v42
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "refusedMembers",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v42
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "members",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v1,
                  v2,
                  v39,
                  v40,
                  v3,
                  v41,
                  v43,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circlesUserIsIn",
                    "storageKey": "circlesUserIsIn(last:20)",
                    "args": v7,
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
                              v8,
                              v11,
                              v36,
                              v38,
                              v35,
                              v9
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  v44,
                  v45
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "memberParents",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v6,
                  v1,
                  v2,
                  v39,
                  v40,
                  v3,
                  v41,
                  v43,
                  v44,
                  v45
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subCircles",
                "storageKey": "subCircles(last:20)",
                "args": v7,
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": v25
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "askedInformation",
                "storageKey": null,
                "args": null,
                "concreteType": "askedInformation",
                "plural": true,
                "selections": [
                  v1,
                  v8,
                  v34,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "filledByOwner",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "membersInformation",
                "storageKey": null,
                "args": null,
                "concreteType": "membersInformation",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "information",
                    "args": null,
                    "storageKey": null
                  },
                  v28,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "value",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "document",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "DocumentObject",
                    "plural": false,
                    "selections": v26
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "validationStatus",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "comment",
                    "args": null,
                    "storageKey": null
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
                "args": [
                  {
                    "kind": "Variable",
                    "name": "superToken",
                    "variableName": "superToken",
                    "type": "String"
                  }
                ],
                "concreteType": "SuperUser",
                "plural": false,
                "selections": [
                  v1,
                  v2,
                  v3,
                  v4,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "subAccounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubAccounts",
                    "plural": true,
                    "selections": [
                      v1,
                      v3,
                      v2,
                      v46
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryAuthorizedAccounts",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "authorizedAccounts",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "userToken",
                    "variableName": "userToken",
                    "type": "String"
                  }
                ],
                "concreteType": "AuthorizedAccounts",
                "plural": false,
                "selections": [
                  v1,
                  v3,
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "accounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AuthorizedAccountsList",
                    "plural": true,
                    "selections": [
                      v1,
                      v3,
                      v46,
                      v2
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
(node/*: any*/).hash = '8b3382ca201198625cf454769716a099';
module.exports = node;
