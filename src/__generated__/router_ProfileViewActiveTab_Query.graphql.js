/**
 * @flow
 * @relayHash 98929939dba160fcf545c8b697f914ad
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProfileView_viewer$ref = any;
export type router_ProfileViewActiveTab_QueryVariables = {|
  userId: string
|};
export type router_ProfileViewActiveTab_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ProfileView_viewer$ref
  |}
|};
export type router_ProfileViewActiveTab_Query = {|
  variables: router_ProfileViewActiveTab_QueryVariables,
  response: router_ProfileViewActiveTab_QueryResponse,
|};
*/


/*
query router_ProfileViewActiveTab_Query(
  $userId: String!
) {
  viewer {
    ...ProfileView_viewer_1xxw8p
    id
  }
}

fragment ProfileView_viewer_1xxw8p on Viewer {
  ...ProfileViewHeader_viewer
  ...Content_viewer
  ...OrganizedSportunitiesStatistics_viewer
  ...TeamsStats_viewer
  ...ClubsStats_viewer
  ...IndividualStats_viewer
  ...ProfileViewChat_viewer
  ...ProfileViewEvents_viewer
  ...Teams_viewer
  id
  statisticPreferences(userID: $userId) {
    private
  }
  me {
    id
    ...Content_me
    ...ProfileViewHeader_me
    ...ProfileViewChat_me
  }
  user(id: $userId) {
    pseudo
    avatar
    areStatisticsActivated
    profileType
    isSubAccount
    subAccounts {
      id
      pseudo
      avatar
      userStatistics {
        averageNumberOfParticipatedWeek
        averageNumberOfParticipatedMonth
        averageNumberOfParticipatedYear
      }
    }
    sportunities(first: 2) {
      count
      ...ProfileViewEvents_sportunities
    }
    ...Teams_user
    ...Content_user
    ...Sidebar_user
    ...TeamsStats_user
    ...ClubsStats_user
    ...IndividualStats_user
    ...ProfileViewHeader_user
    id
  }
  chat(userId: $userId) {
    ...ProfileViewChat_chat
    id
  }
  sportunities(first: 2, userId: $userId, filter: {status: MySportunities}) {
    count
    ...ProfileViewEvents_sportunities
  }
}

fragment ProfileViewHeader_viewer on Viewer {
  id
  me {
    id
  }
  sportunitiesCount: sportunities(last: 2, filter: {status: MySportunities}) {
    count
  }
}

fragment Content_viewer on Viewer {
  id
  ...ProfileSports_viewer
  languages {
    ...Languages_languages
    id
  }
  me {
    id
    avatar
    birthday
    hideMyAge
    languages {
      id
      code
      name
      ...Languages_languages
    }
  }
}

fragment OrganizedSportunitiesStatistics_viewer on Viewer {
  id
}

fragment TeamsStats_viewer on Viewer {
  ...FillStatsModal_viewer
  me {
    id
  }
}

fragment ClubsStats_viewer on Viewer {
  me {
    id
  }
}

fragment IndividualStats_viewer on Viewer {
  ...CircleItem_viewer
  me {
    id
  }
}

fragment ProfileViewChat_viewer on Viewer {
  id
  me {
    id
    avatar
  }
}

fragment ProfileViewEvents_viewer on Viewer {
  ...Sportunity_viewer
}

fragment Teams_viewer on Viewer {
  id
  me {
    id
    pseudo
  }
}

fragment Content_me on User {
  id
  blackList {
    id
  }
}

fragment ProfileViewHeader_me on User {
  id
  ...AddToCalendar_me
}

fragment ProfileViewChat_me on User {
  id
  avatar
}

fragment ProfileViewEvents_sportunities on SportunityConnection {
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
      venue {
        name
        id
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
    }
  }
}

fragment Teams_user on User {
  id
  pseudo
  subAccounts {
    id
    pseudo
    avatar
    sportunityNumber
    allCircleMembers {
      user {
        id
      }
    }
  }
}

fragment Content_user on User {
  ...StatsSummary_user
  id
  profileType
  sex
  birthday
  hideMyAge
  avatar
  pseudo
  publicAddress {
    position {
      lat
      lng
    }
  }
  description
  languages {
    id
    code
    name
  }
  ...ProfileGroups_user
  sports {
    ...ProfileSports_sports
    sport {
      id
      type
      logo
      name {
        EN
        DE
        FR
        id
      }
    }
    levels {
      id
      EN {
        name
      }
      DE {
        name
      }
      FR {
        name
      }
    }
    positions {
      id
      EN
      DE
      FR
    }
    certificates {
      certificate {
        id
        name {
          EN
          FR
          DE
          id
        }
      }
    }
    assistantType {
      id
      name {
        EN
        DE
        FR
        id
      }
    }
  }
  isPublicProfileComplete
  ...Feedbacks_user
}

fragment Sidebar_user on User {
  circles(last: 10) {
    edges {
      node {
        id
        name
      }
    }
  }
}

fragment TeamsStats_user on User {
  pseudo
  id
  areStatisticsActivated
  ...FillStatsModal_user
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
  defaultStatisticFilter {
    id
    name
    date_begin
    date_end
    circleList(first: 20) {
      edges {
        node {
          id
        }
      }
    }
  }
  circles(last: 10) {
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

fragment ClubsStats_user on User {
  pseudo
  id
}

fragment IndividualStats_user on User {
  ...StatsSummary_user
  pseudo
  id
  circlesUserIsIn(first: 4) {
    edges {
      node {
        ...MyCirclesCircleItem_circle
        id
        owner {
          id
          avatar
          profileType
          pseudo
          publicAddress {
            address
            city
            country
          }
          sports {
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
              }
              FR {
                name
              }
            }
          }
        }
        name
        memberCount
      }
    }
    count
  }
  sports {
    sport {
      id
    }
  }
}

fragment ProfileViewHeader_user on User {
  id
  pseudo
  avatar
  publicAddress {
    city
    country
  }
  sportunitiesCount: sportunities(last: 2) {
    count
  }
  followers {
    id
  }
}

fragment ProfileViewChat_chat on Chat {
  id
  isActive
  messages(last: 20) {
    count
    edges {
      node {
        ...Message_message
        id
      }
    }
  }
}

fragment Message_message on Message {
  id
  text
  author {
    id
    pseudo
    avatar
  }
  created
}

fragment StatsSummary_user on User {
  id
  userStatistics {
    numberOfParticipated
    averageNumberOfParticipatedWeek
    averageNumberOfParticipatedMonth
    averageNumberOfParticipatedYear
    membersUserParticipatesWith {
      number
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

fragment FillStatsModal_user on User {
  id
  statSportunities: sportunities(first: 100) {
    edges {
      node {
        ...SportunityRow_sportunity
        id
        title
        beginning_date
        sport {
          sport {
            type
            sportunityTypes {
              id
              name {
                FR
                EN
                DE
                ES
                id
              }
            }
            id
          }
        }
        sportunityType {
          id
          name {
            EN
            FR
            DE
            ES
            id
          }
          statuses {
            id
            name {
              FR
              EN
              DE
              ES
              id
            }
          }
          isScoreRelevant
        }
        game_information {
          opponent {
            organizer {
              id
              pseudo
            }
            unknownOpponent
            invitedOpponents(first: 20) {
              edges {
                node {
                  name
                  id
                }
              }
            }
          }
        }
        score {
          currentTeam
          adversaryTeam
        }
        sportunityTypeStatus {
          id
          name {
            EN
            FR
            DE
            ES
            id
          }
        }
      }
    }
  }
}

fragment SportunityRow_sportunity on Sportunity {
  id
  title
  beginning_date
  sport {
    sport {
      type
      sportunityTypes {
        id
        name {
          FR
          EN
          DE
          ES
          id
        }
        statuses {
          id
          name {
            FR
            EN
            DE
            ES
            id
          }
        }
        isScoreRelevant
      }
      id
    }
  }
  sportunityType {
    id
    name {
      EN
      FR
      DE
      ES
      id
    }
    statuses {
      id
      name {
        FR
        EN
        DE
        ES
        id
      }
    }
    isScoreRelevant
  }
  game_information {
    opponent {
      organizer {
        id
        pseudo
      }
      unknownOpponent
      invitedOpponents(first: 20) {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  }
  score {
    currentTeam
    adversaryTeam
  }
  sportunityTypeStatus {
    id
    name {
      EN
      FR
      DE
      ES
      id
    }
  }
}

fragment ProfileGroups_user on User {
  id
  circles(last: 10) {
    edges {
      node {
        ...MyCirclesCircleItem_circle
        id
        name
        mode
        owner {
          id
          pseudo
        }
      }
    }
    count
  }
}

fragment ProfileSports_sports on SportDescriptor {
  sport {
    id
    name {
      EN
      FR
      DE
      id
    }
    logo
  }
  levels {
    id
    EN {
      name
    }
    FR {
      name
    }
    DE {
      name
    }
  }
  certificates {
    certificate {
      name {
        EN
        FR
        DE
        id
      }
      id
    }
  }
  positions {
    EN
    FR
    DE
    id
  }
  assistantType {
    name {
      EN
      FR
      DE
      id
    }
    id
  }
}

fragment Feedbacks_user on User {
  feedbacks {
    count
    averageRating
    feedbacksList(first: 5) {
      edges {
        node {
          id
          text
          rating
          createdAt
          author {
            id
            pseudo
            avatar
          }
        }
      }
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

fragment AddToCalendar_me on User {
  id
  calendar {
    sportunities(last: 100) {
      edges {
        node {
          id
        }
      }
    }
    users {
      id
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

fragment CircleItem_viewer on Viewer {
  circle {
    id
    name
    mode
    owner {
      id
      pseudo
      avatar
      profileType
    }
    isCircleUpdatableByMembers
    isCircleUsableByMembers
    memberCount
  }
}

fragment FillStatsModal_viewer on Viewer {
  id
}

fragment ProfileSports_viewer on Viewer {
  ...AddSport_viewer
}

fragment Languages_languages on Language {
  id
  code
  name
}

fragment AddSport_viewer on Viewer {
  sports(first: 10, language: EN) {
    edges {
      node {
        id
        type
        name {
          EN
          FR
          DE
          id
        }
        logo
        positions {
          id
          EN
          FR
          DE
        }
        certificates {
          id
          name {
            id
            EN
            FR
            DE
          }
        }
        levels {
          id
          EN {
            skillLevel
            name
            description
          }
          FR {
            skillLevel
            name
            description
          }
          DE {
            skillLevel
            name
            description
          }
        }
        assistantTypes {
          id
          name {
            EN
            FR
            DE
            id
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "String!",
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mode",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleUpdatableByMembers",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleUsableByMembers",
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
v10 = {
  "kind": "Literal",
  "name": "filter",
  "value": {
    "status": "MySportunities"
  },
  "type": "Filter"
},
v11 = {
  "kind": "Literal",
  "name": "last",
  "value": 2,
  "type": "Int"
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v13 = [
  v12
],
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v18 = [
  v15,
  v16,
  v17,
  v1
],
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v18
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v21 = [
  v1,
  v15,
  v16,
  v17
],
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "skillLevel",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v24 = [
  v22,
  v2,
  v23
],
v25 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "languages",
  "storageKey": null,
  "args": null,
  "concreteType": "Language",
  "plural": true,
  "selections": [
    v1,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "code",
      "args": null,
      "storageKey": null
    },
    v2
  ]
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "birthday",
  "args": null,
  "storageKey": null
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hideMyAge",
  "args": null,
  "storageKey": null
},
v28 = [
  v1
],
v29 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v30 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v31 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v32 = {
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
},
v33 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "address",
  "storageKey": null,
  "args": null,
  "concreteType": "AddressModel",
  "plural": false,
  "selections": [
    v29,
    v30,
    v31,
    v32
  ]
},
v34 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beginning_date",
  "args": null,
  "storageKey": null
},
v35 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ending_date",
  "args": null,
  "storageKey": null
},
v36 = [
  v1,
  v4
],
v37 = {
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
              "selections": v36
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
v38 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v15,
    v16,
    v1
  ]
},
v39 = [
  v1,
  v38
],
v40 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sportunityType",
  "storageKey": null,
  "args": null,
  "concreteType": "SportunityType",
  "plural": false,
  "selections": v39
},
v41 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sportunityTypeStatus",
  "storageKey": null,
  "args": null,
  "concreteType": "SportunityTypeStatus",
  "plural": false,
  "selections": v39
},
v42 = {
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
v43 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unknownOpponent",
  "args": null,
  "storageKey": null
},
v44 = [
  v1,
  v4,
  v5
],
v45 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organizer",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v44
},
v46 = {
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
        v43,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lookingForAnOpponent",
          "args": null,
          "storageKey": null
        },
        v45,
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
                      "selections": v28
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
v47 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v48 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v49 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "kind",
  "args": null,
  "storageKey": null
},
v50 = [
  v1,
  v2
],
v51 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "venue",
  "storageKey": null,
  "args": null,
  "concreteType": "Venue",
  "plural": false,
  "selections": v50
},
v52 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "infrastructure",
  "storageKey": null,
  "args": null,
  "concreteType": "Infrastructure",
  "plural": false,
  "selections": v50
},
v53 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "participants",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v28
},
v54 = {
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
v55 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v28
},
v56 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "paymentStatus",
  "storageKey": null,
  "args": null,
  "concreteType": "SportunityPaymentStatus",
  "plural": true,
  "selections": [
    v48,
    v55,
    v54,
    v1
  ]
},
v57 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ES",
  "args": null,
  "storageKey": null
},
v58 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v16,
    v15,
    v17,
    v57,
    v1
  ]
},
v59 = [
  v1,
  v58
],
v60 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organizers",
  "storageKey": null,
  "args": null,
  "concreteType": "Organizer",
  "plural": true,
  "selections": [
    v45,
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
      "selections": v59
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
v61 = [
  v2,
  v22
],
v62 = {
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
      "selections": v61
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v61
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "DE",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v61
    }
  ]
},
v63 = {
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
        v20,
        v1,
        v19,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "assistantTypes",
          "storageKey": null,
          "args": null,
          "concreteType": "AssistantType",
          "plural": true,
          "selections": v59
        },
        v62
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "allLevelSelected",
      "args": null,
      "storageKey": null
    },
    v62
  ]
},
v64 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "averageNumberOfParticipatedWeek",
  "args": null,
  "storageKey": null
},
v65 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "averageNumberOfParticipatedMonth",
  "args": null,
  "storageKey": null
},
v66 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "averageNumberOfParticipatedYear",
  "args": null,
  "storageKey": null
},
v67 = {
  "kind": "Literal",
  "name": "first",
  "value": 2,
  "type": "Int"
},
v68 = [
  v12,
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
          v33,
          v1,
          v23,
          v34,
          v35,
          v37,
          v40,
          v41,
          v42,
          v46,
          v47,
          v48,
          v49,
          v51,
          v52,
          v53,
          v54,
          v56,
          v60,
          v63,
          v3
        ]
      }
    ]
  }
],
v69 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "shouldValidateNewUser",
  "args": null,
  "storageKey": null
},
v70 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCurrentUserAMember",
  "args": null,
  "storageKey": null
},
v71 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "waitingMembers",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v28
},
v72 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "refusedMembers",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v28
},
v73 = [
  v29,
  v30,
  v31
],
v74 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "address",
  "storageKey": null,
  "args": null,
  "concreteType": "AddressModel",
  "plural": false,
  "selections": v73
},
v75 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "termsOfUses",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleTermsOfUse",
  "plural": true,
  "selections": v28
},
v76 = [
  v2,
  v23
],
v77 = {
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
        v20,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "name",
          "storageKey": null,
          "args": null,
          "concreteType": "TranslatedString",
          "plural": false,
          "selections": [
            v16,
            v15,
            v57,
            v17,
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
          "selections": v76
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "EN",
          "storageKey": null,
          "args": null,
          "concreteType": "SportLevel",
          "plural": false,
          "selections": v76
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "ES",
          "storageKey": null,
          "args": null,
          "concreteType": "SportLevel",
          "plural": false,
          "selections": v76
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "DE",
          "storageKey": null,
          "args": null,
          "concreteType": "SportLevel",
          "plural": false,
          "selections": v76
        },
        v1
      ]
    }
  ]
},
v78 = [
  v2
],
v79 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "EN",
  "storageKey": null,
  "args": null,
  "concreteType": "SportLevel",
  "plural": false,
  "selections": v78
},
v80 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "FR",
  "storageKey": null,
  "args": null,
  "concreteType": "SportLevel",
  "plural": false,
  "selections": v78
},
v81 = [
  v19,
  v1
],
v82 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
},
v83 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "author",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v44
},
v84 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "statuses",
  "storageKey": null,
  "args": null,
  "concreteType": "SportunityTypeStatus",
  "plural": true,
  "selections": v59
},
v85 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isScoreRelevant",
  "args": null,
  "storageKey": null
},
v86 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v15,
    v16,
    v17,
    v57,
    v1
  ]
},
v87 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20,
    "type": "Int"
  }
],
v88 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date_begin",
  "args": null,
  "storageKey": null
},
v89 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date_end",
  "args": null,
  "storageKey": null
},
v90 = {
  "kind": "Variable",
  "name": "userId",
  "variableName": "userId",
  "type": "String"
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_ProfileViewActiveTab_Query",
  "id": null,
  "text": "query router_ProfileViewActiveTab_Query(\n  $userId: String!\n) {\n  viewer {\n    ...ProfileView_viewer_1xxw8p\n    id\n  }\n}\n\nfragment ProfileView_viewer_1xxw8p on Viewer {\n  ...ProfileViewHeader_viewer\n  ...Content_viewer\n  ...OrganizedSportunitiesStatistics_viewer\n  ...TeamsStats_viewer\n  ...ClubsStats_viewer\n  ...IndividualStats_viewer\n  ...ProfileViewChat_viewer\n  ...ProfileViewEvents_viewer\n  ...Teams_viewer\n  id\n  statisticPreferences(userID: $userId) {\n    private\n  }\n  me {\n    id\n    ...Content_me\n    ...ProfileViewHeader_me\n    ...ProfileViewChat_me\n  }\n  user(id: $userId) {\n    pseudo\n    avatar\n    areStatisticsActivated\n    profileType\n    isSubAccount\n    subAccounts {\n      id\n      pseudo\n      avatar\n      userStatistics {\n        averageNumberOfParticipatedWeek\n        averageNumberOfParticipatedMonth\n        averageNumberOfParticipatedYear\n      }\n    }\n    sportunities(first: 2) {\n      count\n      ...ProfileViewEvents_sportunities\n    }\n    ...Teams_user\n    ...Content_user\n    ...Sidebar_user\n    ...TeamsStats_user\n    ...ClubsStats_user\n    ...IndividualStats_user\n    ...ProfileViewHeader_user\n    id\n  }\n  chat(userId: $userId) {\n    ...ProfileViewChat_chat\n    id\n  }\n  sportunities(first: 2, userId: $userId, filter: {status: MySportunities}) {\n    count\n    ...ProfileViewEvents_sportunities\n  }\n}\n\nfragment ProfileViewHeader_viewer on Viewer {\n  id\n  me {\n    id\n  }\n  sportunitiesCount: sportunities(last: 2, filter: {status: MySportunities}) {\n    count\n  }\n}\n\nfragment Content_viewer on Viewer {\n  id\n  ...ProfileSports_viewer\n  languages {\n    ...Languages_languages\n    id\n  }\n  me {\n    id\n    avatar\n    birthday\n    hideMyAge\n    languages {\n      id\n      code\n      name\n      ...Languages_languages\n    }\n  }\n}\n\nfragment OrganizedSportunitiesStatistics_viewer on Viewer {\n  id\n}\n\nfragment TeamsStats_viewer on Viewer {\n  ...FillStatsModal_viewer\n  me {\n    id\n  }\n}\n\nfragment ClubsStats_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment IndividualStats_viewer on Viewer {\n  ...CircleItem_viewer\n  me {\n    id\n  }\n}\n\nfragment ProfileViewChat_viewer on Viewer {\n  id\n  me {\n    id\n    avatar\n  }\n}\n\nfragment ProfileViewEvents_viewer on Viewer {\n  ...Sportunity_viewer\n}\n\nfragment Teams_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n\nfragment Content_me on User {\n  id\n  blackList {\n    id\n  }\n}\n\nfragment ProfileViewHeader_me on User {\n  id\n  ...AddToCalendar_me\n}\n\nfragment ProfileViewChat_me on User {\n  id\n  avatar\n}\n\nfragment ProfileViewEvents_sportunities on SportunityConnection {\n  pageInfo {\n    hasNextPage\n  }\n  edges {\n    node {\n      ...Sportunity_sportunity\n      id\n      title\n      beginning_date\n      ending_date\n      venue {\n        name\n        id\n      }\n      participants {\n        id\n      }\n      price {\n        currency\n        cents\n      }\n      mode\n      kind\n    }\n  }\n}\n\nfragment Teams_user on User {\n  id\n  pseudo\n  subAccounts {\n    id\n    pseudo\n    avatar\n    sportunityNumber\n    allCircleMembers {\n      user {\n        id\n      }\n    }\n  }\n}\n\nfragment Content_user on User {\n  ...StatsSummary_user\n  id\n  profileType\n  sex\n  birthday\n  hideMyAge\n  avatar\n  pseudo\n  publicAddress {\n    position {\n      lat\n      lng\n    }\n  }\n  description\n  languages {\n    id\n    code\n    name\n  }\n  ...ProfileGroups_user\n  sports {\n    ...ProfileSports_sports\n    sport {\n      id\n      type\n      logo\n      name {\n        EN\n        DE\n        FR\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n      }\n      DE {\n        name\n      }\n      FR {\n        name\n      }\n    }\n    positions {\n      id\n      EN\n      DE\n      FR\n    }\n    certificates {\n      certificate {\n        id\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n      }\n    }\n    assistantType {\n      id\n      name {\n        EN\n        DE\n        FR\n        id\n      }\n    }\n  }\n  isPublicProfileComplete\n  ...Feedbacks_user\n}\n\nfragment Sidebar_user on User {\n  circles(last: 10) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment TeamsStats_user on User {\n  pseudo\n  id\n  areStatisticsActivated\n  ...FillStatsModal_user\n  statisticFilters {\n    id\n    name\n    date_begin\n    date_end\n    circleList(first: 20) {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n  defaultStatisticFilter {\n    id\n    name\n    date_begin\n    date_end\n    circleList(first: 20) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n  circles(last: 10) {\n    edges {\n      node {\n        id\n        name\n        memberCount\n        type\n      }\n    }\n  }\n}\n\nfragment ClubsStats_user on User {\n  pseudo\n  id\n}\n\nfragment IndividualStats_user on User {\n  ...StatsSummary_user\n  pseudo\n  id\n  circlesUserIsIn(first: 4) {\n    edges {\n      node {\n        ...MyCirclesCircleItem_circle\n        id\n        owner {\n          id\n          avatar\n          profileType\n          pseudo\n          publicAddress {\n            address\n            city\n            country\n          }\n          sports {\n            sport {\n              id\n              logo\n              name {\n                EN\n                FR\n                id\n              }\n            }\n            levels {\n              id\n              EN {\n                name\n              }\n              FR {\n                name\n              }\n            }\n          }\n        }\n        name\n        memberCount\n      }\n    }\n    count\n  }\n  sports {\n    sport {\n      id\n    }\n  }\n}\n\nfragment ProfileViewHeader_user on User {\n  id\n  pseudo\n  avatar\n  publicAddress {\n    city\n    country\n  }\n  sportunitiesCount: sportunities(last: 2) {\n    count\n  }\n  followers {\n    id\n  }\n}\n\nfragment ProfileViewChat_chat on Chat {\n  id\n  isActive\n  messages(last: 20) {\n    count\n    edges {\n      node {\n        ...Message_message\n        id\n      }\n    }\n  }\n}\n\nfragment Message_message on Message {\n  id\n  text\n  author {\n    id\n    pseudo\n    avatar\n  }\n  created\n}\n\nfragment StatsSummary_user on User {\n  id\n  userStatistics {\n    numberOfParticipated\n    averageNumberOfParticipatedWeek\n    averageNumberOfParticipatedMonth\n    averageNumberOfParticipatedYear\n    membersUserParticipatesWith {\n      number\n    }\n  }\n}\n\nfragment MyCirclesCircleItem_circle on Circle {\n  id\n  name\n  mode\n  type\n  isCircleUpdatableByMembers\n  isCircleUsableByMembers\n  isCurrentUserAMember\n  shouldValidateNewUser\n  memberCount\n  waitingMembers {\n    id\n  }\n  refusedMembers {\n    id\n  }\n  owner {\n    id\n    pseudo\n    avatar\n  }\n  address {\n    address\n    city\n    country\n  }\n  termsOfUses {\n    id\n  }\n  sport {\n    sport {\n      id\n      logo\n      name {\n        FR\n        EN\n        ES\n        DE\n        id\n      }\n    }\n    levels {\n      FR {\n        name\n        description\n      }\n      EN {\n        name\n        description\n      }\n      ES {\n        name\n        description\n      }\n      DE {\n        name\n        description\n      }\n      id\n    }\n  }\n}\n\nfragment FillStatsModal_user on User {\n  id\n  statSportunities: sportunities(first: 100) {\n    edges {\n      node {\n        ...SportunityRow_sportunity\n        id\n        title\n        beginning_date\n        sport {\n          sport {\n            type\n            sportunityTypes {\n              id\n              name {\n                FR\n                EN\n                DE\n                ES\n                id\n              }\n            }\n            id\n          }\n        }\n        sportunityType {\n          id\n          name {\n            EN\n            FR\n            DE\n            ES\n            id\n          }\n          statuses {\n            id\n            name {\n              FR\n              EN\n              DE\n              ES\n              id\n            }\n          }\n          isScoreRelevant\n        }\n        game_information {\n          opponent {\n            organizer {\n              id\n              pseudo\n            }\n            unknownOpponent\n            invitedOpponents(first: 20) {\n              edges {\n                node {\n                  name\n                  id\n                }\n              }\n            }\n          }\n        }\n        score {\n          currentTeam\n          adversaryTeam\n        }\n        sportunityTypeStatus {\n          id\n          name {\n            EN\n            FR\n            DE\n            ES\n            id\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment SportunityRow_sportunity on Sportunity {\n  id\n  title\n  beginning_date\n  sport {\n    sport {\n      type\n      sportunityTypes {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n        statuses {\n          id\n          name {\n            FR\n            EN\n            DE\n            ES\n            id\n          }\n        }\n        isScoreRelevant\n      }\n      id\n    }\n  }\n  sportunityType {\n    id\n    name {\n      EN\n      FR\n      DE\n      ES\n      id\n    }\n    statuses {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    isScoreRelevant\n  }\n  game_information {\n    opponent {\n      organizer {\n        id\n        pseudo\n      }\n      unknownOpponent\n      invitedOpponents(first: 20) {\n        edges {\n          node {\n            name\n            id\n          }\n        }\n      }\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      EN\n      FR\n      DE\n      ES\n      id\n    }\n  }\n}\n\nfragment ProfileGroups_user on User {\n  id\n  circles(last: 10) {\n    edges {\n      node {\n        ...MyCirclesCircleItem_circle\n        id\n        name\n        mode\n        owner {\n          id\n          pseudo\n        }\n      }\n    }\n    count\n  }\n}\n\nfragment ProfileSports_sports on SportDescriptor {\n  sport {\n    id\n    name {\n      EN\n      FR\n      DE\n      id\n    }\n    logo\n  }\n  levels {\n    id\n    EN {\n      name\n    }\n    FR {\n      name\n    }\n    DE {\n      name\n    }\n  }\n  certificates {\n    certificate {\n      name {\n        EN\n        FR\n        DE\n        id\n      }\n      id\n    }\n  }\n  positions {\n    EN\n    FR\n    DE\n    id\n  }\n  assistantType {\n    name {\n      EN\n      FR\n      DE\n      id\n    }\n    id\n  }\n}\n\nfragment Feedbacks_user on User {\n  feedbacks {\n    count\n    averageRating\n    feedbacksList(first: 5) {\n      edges {\n        node {\n          id\n          text\n          rating\n          createdAt\n          author {\n            id\n            pseudo\n            avatar\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Sportunity_sportunity on Sportunity {\n  id\n  title\n  description\n  beginning_date\n  ending_date\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      answers {\n        user {\n          id\n          pseudo\n        }\n        answer\n      }\n    }\n  }\n  sportunityType {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  status\n  kind\n  venue {\n    id\n    name\n  }\n  infrastructure {\n    id\n    name\n  }\n  participants {\n    id\n  }\n  price {\n    currency\n    cents\n  }\n  paymentStatus {\n    status\n    user {\n      id\n    }\n    price {\n      currency\n      cents\n    }\n    id\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    isAdmin\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    id\n  }\n  sport {\n    sport {\n      logo\n      id\n      name {\n        EN\n        FR\n        DE\n        id\n      }\n      assistantTypes {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n        }\n        FR {\n          name\n          skillLevel\n        }\n        DE {\n          name\n          skillLevel\n        }\n      }\n    }\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n      DE {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment AddToCalendar_me on User {\n  id\n  calendar {\n    sportunities(last: 100) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    users {\n      id\n    }\n  }\n}\n\nfragment Sportunity_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n    subAccounts {\n      id\n    }\n  }\n  sportunity {\n    ...Sportunity_sportunity\n    id\n  }\n}\n\nfragment CircleItem_viewer on Viewer {\n  circle {\n    id\n    name\n    mode\n    owner {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    isCircleUpdatableByMembers\n    isCircleUsableByMembers\n    memberCount\n  }\n}\n\nfragment FillStatsModal_viewer on Viewer {\n  id\n}\n\nfragment ProfileSports_viewer on Viewer {\n  ...AddSport_viewer\n}\n\nfragment Languages_languages on Language {\n  id\n  code\n  name\n}\n\nfragment AddSport_viewer on Viewer {\n  sports(first: 10, language: EN) {\n    edges {\n      node {\n        id\n        type\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n        logo\n        positions {\n          id\n          EN\n          FR\n          DE\n        }\n        certificates {\n          id\n          name {\n            id\n            EN\n            FR\n            DE\n          }\n        }\n        levels {\n          id\n          EN {\n            skillLevel\n            name\n            description\n          }\n          FR {\n            skillLevel\n            name\n            description\n          }\n          DE {\n            skillLevel\n            name\n            description\n          }\n        }\n        assistantTypes {\n          id\n          name {\n            EN\n            FR\n            DE\n            id\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ProfileViewActiveTab_Query",
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
            "name": "ProfileView_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "userId",
                "variableName": "userId",
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
    "name": "router_ProfileViewActiveTab_Query",
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
            "name": "circle",
            "storageKey": null,
            "args": null,
            "concreteType": "Circle",
            "plural": false,
            "selections": [
              v1,
              v2,
              v3,
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
                  v4,
                  v5,
                  v6
                ]
              },
              v7,
              v8,
              v9
            ]
          },
          v1,
          {
            "kind": "LinkedField",
            "alias": "sportunitiesCount",
            "name": "sportunities",
            "storageKey": "sportunities(filter:{\"status\":\"MySportunities\"},last:2)",
            "args": [
              v10,
              v11
            ],
            "concreteType": "SportunityConnection",
            "plural": false,
            "selections": v13
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
                      v14,
                      v19,
                      v20,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "positions",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": true,
                        "selections": v21
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificates",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": true,
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
                            "selections": v21
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
                          v1,
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
                            "name": "DE",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v24
                          }
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
                        "selections": [
                          v1,
                          v19
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v25,
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
              v5,
              v26,
              v27,
              v25,
              v6,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v28
              },
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "blackList",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v28
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "calendar",
                "storageKey": null,
                "args": null,
                "concreteType": "Calendar",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sportunities",
                    "storageKey": "sportunities(last:100)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 100,
                        "type": "Int"
                      }
                    ],
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
                            "selections": v28
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "users",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": v28
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
              v33,
              v1,
              v23,
              v34,
              v35,
              v37,
              v40,
              v41,
              v42,
              v46,
              v47,
              v48,
              v49,
              v51,
              v52,
              v53,
              v54,
              v56,
              v60,
              v63
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "statisticPreferences",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "userID",
                "variableName": "userId",
                "type": "String"
              }
            ],
            "concreteType": "StatisticPreferences",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "private",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "userId",
                "type": "String!"
              }
            ],
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "publicAddress",
                "storageKey": null,
                "args": null,
                "concreteType": "AddressModel",
                "plural": false,
                "selections": [
                  v32,
                  v30,
                  v31
                ]
              },
              v4,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "areStatisticsActivated",
                "args": null,
                "storageKey": null
              },
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
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v1,
                  v4,
                  v5,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "userStatistics",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserStatistics",
                    "plural": false,
                    "selections": [
                      v64,
                      v65,
                      v66
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "sportunityNumber",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "allCircleMembers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleMemberOutput",
                    "plural": true,
                    "selections": [
                      v55
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunities",
                "storageKey": "sportunities(first:2)",
                "args": [
                  v67
                ],
                "concreteType": "SportunityConnection",
                "plural": false,
                "selections": v68
              },
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "userStatistics",
                "storageKey": null,
                "args": null,
                "concreteType": "UserStatistics",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "numberOfParticipated",
                    "args": null,
                    "storageKey": null
                  },
                  v64,
                  v65,
                  v66,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "membersUserParticipatesWith",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MembersUserParticipatesWith",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "number",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "sex",
                "args": null,
                "storageKey": null
              },
              v26,
              v27,
              v5,
              v23,
              v25,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": "circles(last:10)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 10,
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
                          v69,
                          v1,
                          v3,
                          v14,
                          v7,
                          v8,
                          v70,
                          v2,
                          v9,
                          v71,
                          v72,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v44
                          },
                          v74,
                          v75,
                          v77
                        ]
                      }
                    ]
                  },
                  v12
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
                    "selections": [
                      v1,
                      v19,
                      v20,
                      v14
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
                      v1,
                      v79,
                      v80,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "DE",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v78
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "certificates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CertificateDescriptor",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificate",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": false,
                        "selections": v81
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "positions",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TranslatedString",
                    "plural": true,
                    "selections": v18
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "assistantType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AssistantType",
                    "plural": true,
                    "selections": v81
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
                "kind": "LinkedField",
                "alias": null,
                "name": "feedbacks",
                "storageKey": null,
                "args": null,
                "concreteType": "Feedbacks",
                "plural": false,
                "selections": [
                  v12,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "averageRating",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "feedbacksList",
                    "storageKey": "feedbacksList(first:5)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 5,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "FeedbackConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "FeedbackEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Feedback",
                            "plural": false,
                            "selections": [
                              v1,
                              v82,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "rating",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "createdAt",
                                "args": null,
                                "storageKey": null
                              },
                              v83
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
                "alias": "statSportunities",
                "name": "sportunities",
                "storageKey": "sportunities(first:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 100,
                    "type": "Int"
                  }
                ],
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
                          v1,
                          v47,
                          v34,
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
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "sportunityTypes",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportunityType",
                                    "plural": true,
                                    "selections": [
                                      v1,
                                      v58,
                                      v84,
                                      v85
                                    ]
                                  },
                                  v1
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
                            "selections": [
                              v1,
                              v86,
                              v84,
                              v85
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
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "organizer",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "plural": false,
                                    "selections": v36
                                  },
                                  v43,
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "invitedOpponents",
                                    "storageKey": "invitedOpponents(first:20)",
                                    "args": v87,
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
                                              v2,
                                              v1
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
                          v42,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sportunityTypeStatus",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportunityTypeStatus",
                            "plural": false,
                            "selections": [
                              v1,
                              v86
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
                "name": "statisticFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "StatisticFilter",
                "plural": true,
                "selections": [
                  v1,
                  v2,
                  v88,
                  v89,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circleList",
                    "storageKey": "circleList(first:20)",
                    "args": v87,
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
                            "selections": v50
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
                "name": "defaultStatisticFilter",
                "storageKey": null,
                "args": null,
                "concreteType": "StatisticFilter",
                "plural": false,
                "selections": [
                  v1,
                  v2,
                  v88,
                  v89,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circleList",
                    "storageKey": "circleList(first:20)",
                    "args": v87,
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
                            "selections": v28
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
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(first:4)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 4,
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
                          v69,
                          v1,
                          v3,
                          v14,
                          v7,
                          v8,
                          v70,
                          v2,
                          v9,
                          v71,
                          v72,
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
                              v4,
                              v5,
                              v6,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "publicAddress",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "AddressModel",
                                "plural": false,
                                "selections": v73
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
                                    "selections": [
                                      v1,
                                      v20,
                                      v38
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
                                      v1,
                                      v79,
                                      v80
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          v74,
                          v75,
                          v77
                        ]
                      }
                    ]
                  },
                  v12
                ]
              },
              {
                "kind": "LinkedField",
                "alias": "sportunitiesCount",
                "name": "sportunities",
                "storageKey": "sportunities(last:2)",
                "args": [
                  v11
                ],
                "concreteType": "SportunityConnection",
                "plural": false,
                "selections": v13
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "followers",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v28
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chat",
            "storageKey": null,
            "args": [
              v90
            ],
            "concreteType": "Chat",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isActive",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "messages",
                "storageKey": "messages(last:20)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 20,
                    "type": "Int"
                  }
                ],
                "concreteType": "MessageConnection",
                "plural": false,
                "selections": [
                  v12,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MessageEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Message",
                        "plural": false,
                        "selections": [
                          v1,
                          v82,
                          v83,
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunities",
            "storageKey": null,
            "args": [
              v10,
              v67,
              v90
            ],
            "concreteType": "SportunityConnection",
            "plural": false,
            "selections": v68
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '05ceef806eea7295c71c59b3e61d13a3';
module.exports = node;
