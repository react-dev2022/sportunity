/**
 * @flow
 * @relayHash 57e96dfd4bf40198b87328d83b7a989a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EventView_viewer$ref = any;
export type router_EventViewSportunityId_QueryVariables = {|
  sportunityId?: ?string,
  chatSportunityId?: ?string,
  isCoOrganizerOnSerieSportunityId: string,
  querySuperMe: boolean,
  queryIsCoOrganizerOnSerie: boolean,
  queryAuthorizedAccounts: boolean,
|};
export type router_EventViewSportunityId_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EventView_viewer$ref
  |}
|};
export type router_EventViewSportunityId_Query = {|
  variables: router_EventViewSportunityId_QueryVariables,
  response: router_EventViewSportunityId_QueryResponse,
|};
*/


/*
query router_EventViewSportunityId_Query(
  $sportunityId: ID
  $chatSportunityId: String
  $isCoOrganizerOnSerieSportunityId: String!
  $querySuperMe: Boolean!
  $queryIsCoOrganizerOnSerie: Boolean!
  $queryAuthorizedAccounts: Boolean!
) {
  viewer {
    ...EventView_viewer_2r3doJ
    id
  }
}

fragment EventView_viewer_2r3doJ on Viewer {
  id
  languages {
    id
    name
    code
  }
  IsCoOrganizerOnSerie(sportunityId: $isCoOrganizerOnSerieSportunityId) @include(if: $queryIsCoOrganizerOnSerie)
  authorizedAccounts @include(if: $queryAuthorizedAccounts) {
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
  superMe @include(if: $querySuperMe) {
    id
    pseudo
    avatar
    subAccounts {
      id
      avatar
      pseudo
      token
    }
  }
  me {
    id
    appCountry
    paymentMethods {
      id
      cardMask
      currency
    }
    lastName
    firstName
    address {
      address
      city
      country
    }
    profileType
    isProfileComplete
    birthday
    nationality
    shouldDeclareVAT
    business {
      businessName
      businessEmail
      headquarterAddress {
        address
        city
        country
      }
      VATNumber
    }
    ...EventViewContent_user
    ...EventViewHeader_user
    ...EventViewSidebar_user
  }
  ...EventViewHeader_viewer
  ...AddACard_viewer
  ...StatsFilling_viewer
  ...EventViewSidebar_viewer
  sportunity(id: $sportunityId) {
    id
    title
    description
    kind
    images
    number_of_occurences
    is_repeated_occurence_number
    beginning_date
    ending_date
    survey {
      isSurveyTransformed
      surveyDates {
        beginning_date
        ending_date
        answers {
          user {
            id
            pseudo
            avatar
          }
          answer
        }
      }
    }
    participantRange {
      from
      to
    }
    participants {
      id
      avatar
      pseudo
      firstName
      lastName
      circlesUserIsIn(last: 100) {
        edges {
          node {
            name
            id
          }
        }
      }
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
    price_for_circle {
      circle {
        id
        members {
          id
        }
      }
      price {
        cents
        currency
      }
      participantByDefault
      excludedParticipantByDefault {
        excludedMembers {
          id
          pseudo
        }
      }
    }
    invited_circles(last: 10) {
      edges {
        node {
          ...MyCirclesCircleItem_circle
          id
          name
          mode
          type
          members {
            id
            pseudo
            avatar
          }
          owner {
            id
            pseudo
            avatar
          }
          askedInformation {
            id
            name
          }
          membersInformation {
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
            id
          }
        }
      }
    }
    hide_participant_list
    invited {
      user {
        id
        pseudo
        avatar
        firstName
        lastName
        circlesUserIsIn(last: 100) {
          edges {
            node {
              name
              id
            }
          }
        }
      }
      answer
    }
    waiting {
      id
      pseudo
      avatar
    }
    canceling {
      status
      canceling_user {
        id
        pseudo
        avatar
        firstName
        lastName
        circlesUserIsIn(last: 100) {
          edges {
            node {
              name
              id
            }
          }
        }
      }
    }
    price {
      currency
      cents
    }
    address {
      address
      city
      position {
        lat
        lng
      }
    }
    organizers {
      organizer {
        id
        pseudo
        avatar
        feedbacks {
          feedbacksList(last: 100) {
            edges {
              node {
                author {
                  id
                }
                id
              }
            }
          }
        }
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
      price {
        cents
        currency
      }
      permissions {
        chatAccess {
          view
          edit
        }
        memberAccess {
          view
          edit
        }
        carPoolingAccess {
          view
          edit
        }
        imageAccess {
          view
          edit
        }
        detailsAccess {
          view
          edit
        }
        compositionAccess {
          view
          edit
        }
      }
      id
    }
    pendingOrganizers {
      id
      circles(last: 20) {
        edges {
          node {
            id
            members {
              id
            }
            name
            memberCount
          }
        }
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
      price {
        cents
        currency
      }
    }
    status
    cancel_date
    sport {
      sport {
        id
        logo
        name {
          EN
          FR
          DE
          id
        }
      }
      allLevelSelected
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
      certificates {
        name {
          EN
          FR
          DE
          id
        }
        id
      }
      positions {
        EN
        FR
        DE
        id
      }
    }
    game_information {
      opponent {
        organizer {
          id
          pseudo
          avatar
        }
        organizerPseudo
        lookingForAnOpponent
        unknownOpponent
        invitedOpponents(last: 5) {
          edges {
            node {
              id
              name
              memberCount
              members {
                id
              }
            }
          }
        }
      }
    }
    ...EventViewHeader_sportunity
    ...EventViewContent_sportunity
    ...EventViewSidebar_sportunity
    ...ConfirmBookingPopup_sportunity
    ...StatsFilling_sportunity
  }
  chat(sportunityId: $chatSportunityId) {
    ...EventViewContent_chat
    id
  }
  ...ConfirmBookingPopup_viewer
  ...EventViewContent_viewer
}

fragment EventViewContent_user on User {
  id
  profileType
  ...Comments_user
  ...Info_user
  ...Sidebar_user
  areStatisticsActivated
}

fragment EventViewHeader_user on User {
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
  areStatisticsActivated
  profileType
}

fragment EventViewSidebar_user on User {
  id
  profileType
}

fragment EventViewHeader_viewer on Viewer {
  id
  ...RelaunchInvited_viewer
  ...Price_viewer
}

fragment AddACard_viewer on Viewer {
  me {
    id
    lastName
  }
}

fragment StatsFilling_viewer on Viewer {
  id
}

fragment EventViewSidebar_viewer on Viewer {
  id
  ...VoteForManOfTheGame_viewer
  ...EventViewAddUserModal_viewer
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

fragment EventViewHeader_sportunity on Sportunity {
  ...Price_sportunity
  id
  title
  address {
    address
    city
  }
  participants {
    id
  }
  invited {
    user {
      id
      pseudo
      avatar
    }
  }
  invited_circles(last: 10) {
    edges {
      node {
        id
        name
        mode
        type
        memberCount
        members {
          id
        }
        owner {
          id
          pseudo
          avatar
        }
      }
    }
  }
  price {
    cents
    currency
  }
  participantRange {
    from
    to
  }
  kind
  beginning_date
  ending_date
  survey {
    isSurveyTransformed
    surveyDates {
      beginning_date
      ending_date
      answers {
        user {
          id
          pseudo
          avatar
        }
        answer
      }
    }
  }
  pendingOrganizers {
    id
    circles(last: 20) {
      edges {
        node {
          members {
            id
          }
          id
        }
      }
    }
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
  }
  sport {
    sport {
      id
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
      name {
        EN
        FR
        DE
        id
      }
    }
    allLevelSelected
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
    certificates {
      name {
        EN
        FR
        DE
        id
      }
      id
    }
    positions {
      EN
      FR
      DE
      id
    }
  }
}

fragment EventViewContent_sportunity on Sportunity {
  id
  description
  organizers {
    isAdmin
    organizer {
      pseudo
      id
    }
    id
  }
  ...Info_sportunity
  ...Feedback_sportunity
  ...CarPooling_sportunity
  ...Compositions_sportunity
  ...Media_sportunity
  ...EventViewSidebar_sportunity
  participantRange {
    from
    to
  }
  kind
  hide_participant_list
  survey {
    isSurveyTransformed
    surveyDates {
      beginning_date
      ending_date
      answers {
        user {
          id
          pseudo
          avatar
        }
        answer
      }
    }
  }
  invited_circles(last: 10) {
    edges {
      node {
        id
        name
        mode
        type
        memberCount
        members {
          id
        }
        owner {
          id
          pseudo
          avatar
        }
      }
    }
  }
  address {
    address
    city
    position {
      lat
      lng
    }
  }
  images
  sexRestriction
  ageRestriction {
    from
    to
  }
  sport {
    allLevelSelected
    sport {
      fieldImages
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
    certificates {
      name {
        EN
        FR
        DE
        id
      }
      id
    }
    positions {
      EN
      FR
      DE
      id
    }
  }
}

fragment EventViewSidebar_sportunity on Sportunity {
  id
  survey {
    isSurveyTransformed
    surveyDates {
      beginning_date
      ending_date
    }
  }
  beginning_date
  ending_date
  organizers {
    organizer {
      id
      pseudo
      avatar
    }
    isAdmin
    secondaryOrganizerType {
      id
      name {
        FR
        EN
        ES
        DE
        id
      }
    }
    customSecondaryOrganizerType
    id
  }
  price {
    cents
    currency
  }
  hide_participant_list
  participants {
    id
    pseudo
    avatar
  }
  waiting {
    id
    pseudo
    avatar
  }
  willing {
    id
    pseudo
    avatar
  }
  invited {
    answer
    user {
      id
      pseudo
      avatar
    }
  }
  canceling {
    canceling_user {
      id
      pseudo
      avatar
    }
    status
  }
  sportunityType {
    isScoreRelevant
    id
  }
  manOfTheGameVotes {
    voter {
      id
      pseudo
    }
    votedFor {
      id
      pseudo
      avatar
    }
  }
  ...VoteForManOfTheGame_sportunity
}

fragment ConfirmBookingPopup_sportunity on Sportunity {
  title
  address {
    address
    city
  }
  participants {
    id
  }
  participantRange {
    from
    to
  }
  beginning_date
  ending_date
  price {
    cents
    currency
  }
  sport {
    sport {
      logo
      name {
        EN
        DE
        FR
        id
      }
      id
    }
  }
}

fragment StatsFilling_sportunity on Sportunity {
  id
  sport {
    sport {
      type
      sportunityTypes {
        id
        name {
          FR
          EN
          id
        }
      }
      id
    }
  }
  sportunityType {
    id
    name {
      FR
      EN
      id
    }
    statuses {
      id
      name {
        FR
        EN
        id
      }
    }
    isScoreRelevant
  }
  sportunityTypeStatus {
    id
    name {
      FR
      EN
      id
    }
  }
  score {
    currentTeam
    adversaryTeam
  }
}

fragment EventViewContent_chat on Chat {
  id
  ...Comments_chat
}

fragment ConfirmBookingPopup_viewer on Viewer {
  id
}

fragment EventViewContent_viewer on Viewer {
  ...Comments_viewer
  ...Feedback_viewer
  ...CarPooling_viewer
  ...Info_viewer
  ...Media_viewer
  ...Compositions_viewer
  ...EventViewSidebar_viewer
  ...SearchModal_viewer
}

fragment Comments_viewer on Viewer {
  id
  me {
    id
  }
}

fragment Feedback_viewer on Viewer {
  id
  me {
    id
  }
}

fragment CarPooling_viewer on Viewer {
  id
  me {
    id
    appCountry
  }
}

fragment Info_viewer on Viewer {
  id
  ...Price_viewer
  ...VoteForManOfTheGame_viewer
  me {
    id
    pseudo
    avatar
    profileType
  }
}

fragment Media_viewer on Viewer {
  id
}

fragment Compositions_viewer on Viewer {
  me {
    id
    pseudo
    avatar
    compositions {
      id
      name
      fieldImage
      owner {
        id
      }
      users {
        user {
          id
          pseudo
          avatar
        }
        position {
          xPercentage
          yPercentage
        }
      }
    }
  }
}

fragment SearchModal_viewer on Viewer {
  me {
    id
  }
}

fragment Price_viewer on Viewer {
  me {
    id
  }
}

fragment VoteForManOfTheGame_viewer on Viewer {
  me {
    id
  }
  statisticPreferences {
    private
  }
}

fragment Comments_chat on Chat {
  id
  isActive
  messages(last: 20) {
    count
    edges {
      node {
        ...Comment_message
        id
      }
    }
  }
}

fragment Comment_message on Message {
  id
  text
  author {
    id
    pseudo
    avatar
  }
  created
}

fragment VoteForManOfTheGame_sportunity on Sportunity {
  id
  ending_date
  participants {
    id
    pseudo
    avatar
  }
  canUserVoteForManOfTheGame
  manOfTheGameVotes {
    voter {
      id
    }
    votedFor {
      id
      pseudo
      avatar
    }
    date
  }
  organizers {
    organizer {
      id
    }
    isAdmin
    id
  }
  sportunityType {
    isScoreRelevant
    id
  }
}

fragment Info_sportunity on Sportunity {
  id
  description
  kind
  ...TimeAndLocation_sportunity
  ...Price_sportunity
  ...GameInformationRow_sportunity
  ...VoteForManOfTheGame_sportunity
  survey {
    isSurveyTransformed
    surveyDates {
      beginning_date
      ending_date
      answers {
        user {
          id
          pseudo
          avatar
        }
        answer
      }
    }
  }
  carPoolings {
    id
    driver {
      id
      pseudo
      avatar
    }
    address {
      address
      city
      zip
      country
    }
    starting_date
    number_of_sits
    passengers {
      id
      pseudo
      avatar
    }
  }
  organizers {
    isAdmin
    role
    price {
      cents
      currency
    }
    organizer {
      id
      pseudo
      avatar
    }
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
    permissions {
      chatAccess {
        view
        edit
      }
      memberAccess {
        view
        edit
      }
      carPoolingAccess {
        view
        edit
      }
      imageAccess {
        view
        edit
      }
      detailsAccess {
        view
        edit
      }
      compositionAccess {
        view
        edit
      }
    }
    id
  }
  invited {
    user {
      id
      avatar
      pseudo
    }
  }
  invited_circles(last: 10) {
    edges {
      node {
        ...MyCirclesCircleItem_circle
        id
        name
        mode
        type
        memberCount
        members {
          id
        }
        owner {
          id
          pseudo
          avatar
        }
      }
    }
  }
  participants {
    id
    pseudo
    avatar
  }
  participantRange {
    from
    to
  }
  address {
    address
    city
    position {
      lat
      lng
    }
  }
  images
  sexRestriction
  ageRestriction {
    from
    to
  }
  sport {
    allLevelSelected
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
    certificates {
      name {
        EN
        FR
        DE
        id
      }
      id
    }
    positions {
      EN
      FR
      DE
      id
    }
  }
}

fragment Feedback_sportunity on Sportunity {
  organizers {
    isAdmin
    organizer {
      id
      pseudo
      feedbacks {
        feedbacksList(last: 100) {
          edges {
            node {
              author {
                id
              }
              id
            }
          }
        }
      }
    }
    id
  }
}

fragment CarPooling_sportunity on Sportunity {
  id
  beginning_date
  carPoolings {
    id
    driver {
      id
      pseudo
      avatar
    }
    address {
      address
      city
      zip
      country
    }
    starting_date
    number_of_sits
    passengers {
      id
      pseudo
      avatar
    }
  }
  organizers {
    organizer {
      id
    }
    permissions {
      chatAccess {
        view
        edit
      }
      memberAccess {
        view
        edit
      }
      carPoolingAccess {
        view
        edit
      }
      imageAccess {
        view
        edit
      }
      detailsAccess {
        view
        edit
      }
      compositionAccess {
        view
        edit
      }
    }
    id
  }
}

fragment Compositions_sportunity on Sportunity {
  id
  participants {
    id
    pseudo
    avatar
  }
  sport {
    sport {
      fieldImages
      id
    }
  }
  compositions {
    id
    name
    fieldImage
    owner {
      id
    }
    users {
      user {
        id
        pseudo
        avatar
      }
      position {
        xPercentage
        yPercentage
      }
    }
  }
}

fragment Media_sportunity on Sportunity {
  images
  id
}

fragment TimeAndLocation_sportunity on Sportunity {
  address {
    address
    city
    position {
      lat
      lng
    }
  }
  beginning_date
  ending_date
  venue {
    id
    name
  }
  infrastructure {
    id
    name
  }
  slot {
    id
    from
    end
  }
}

fragment Price_sportunity on Sportunity {
  kind
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
  price {
    currency
    cents
    description {
      EN
      id
    }
  }
  invited_circles(last: 10) {
    edges {
      node {
        id
        name
      }
    }
  }
  price_for_circle {
    circle {
      id
    }
    price {
      cents
      currency
    }
  }
}

fragment GameInformationRow_sportunity on Sportunity {
  game_information {
    opponent {
      organizer {
        id
        pseudo
        avatar
      }
      organizerPseudo
      lookingForAnOpponent
      unknownOpponent
      invitedOpponents(last: 5) {
        edges {
          node {
            id
            name
            memberCount
            members {
              id
            }
          }
        }
      }
    }
  }
}

fragment EventViewAddUserModal_viewer on Viewer {
  id
  ...InputUserAutocompleted_viewer
}

fragment InputUserAutocompleted_viewer on Viewer {
  me {
    id
  }
}

fragment RelaunchInvited_viewer on Viewer {
  id
}

fragment Comments_user on User {
  ...Form_user
}

fragment Info_user on User {
  areStatisticsActivated
  profileType
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

fragment Form_user on User {
  id
  avatar
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunityId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "chatSportunityId",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isCoOrganizerOnSerieSportunityId",
    "type": "String!",
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
    "name": "queryIsCoOrganizerOnSerie",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryAuthorizedAccounts",
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
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
v9 = [
  v6,
  v7,
  v8
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "address",
  "storageKey": null,
  "args": null,
  "concreteType": "AddressModel",
  "plural": false,
  "selections": v9
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v12 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 10,
    "type": "Int"
  }
],
v13 = [
  v1,
  v2
],
v14 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
],
v15 = [
  v1
],
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v17 = [
  v1,
  v16,
  v11
],
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v17
},
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "compositions",
  "storageKey": null,
  "args": null,
  "concreteType": "CompositionOutput",
  "plural": true,
  "selections": [
    v1,
    v2,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "fieldImage",
      "args": null,
      "storageKey": null
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
      "name": "users",
      "storageKey": null,
      "args": null,
      "concreteType": "CompositionUsers",
      "plural": true,
      "selections": [
        v18,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "position",
          "storageKey": null,
          "args": null,
          "concreteType": "CompositionUserPosition",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "xPercentage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "yPercentage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "answer",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "from",
  "args": null,
  "storageKey": null
},
v25 = [
  v24,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "to",
    "args": null,
    "storageKey": null
  }
],
v26 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "circlesUserIsIn",
  "storageKey": "circlesUserIsIn(last:100)",
  "args": v14,
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
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v28 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v15
},
v29 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v30 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v15
},
v31 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v29,
    v3
  ]
},
v32 = [
  v1,
  v16
],
v33 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v34 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v35 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v36 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v37 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v38 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ES",
  "args": null,
  "storageKey": null
},
v39 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v40 = [
  v2,
  v20
],
v41 = [
  v1,
  v16,
  v11,
  v5,
  v4,
  v26
],
v42 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAdmin",
  "args": null,
  "storageKey": null
},
v43 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "role",
  "args": null,
  "storageKey": null
},
v44 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "secondaryOrganizerType",
  "storageKey": null,
  "args": null,
  "concreteType": "AssistantType",
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
        v36,
        v37,
        v39,
        v38,
        v1
      ]
    }
  ]
},
v45 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customSecondaryOrganizerType",
  "args": null,
  "storageKey": null
},
v46 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "view",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "edit",
    "args": null,
    "storageKey": null
  }
],
v47 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 20,
    "type": "Int"
  }
],
v48 = [
  v37,
  v36,
  v39,
  v1
],
v49 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v48
},
v50 = [
  v2,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  },
  v20
],
v51 = {
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
      "selections": v50
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v50
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "DE",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v50
    }
  ]
},
v52 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v36,
    v37,
    v1
  ]
},
v53 = [
  v1,
  v52
],
v54 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_EventViewSportunityId_Query",
  "id": null,
  "text": "query router_EventViewSportunityId_Query(\n  $sportunityId: ID\n  $chatSportunityId: String\n  $isCoOrganizerOnSerieSportunityId: String!\n  $querySuperMe: Boolean!\n  $queryIsCoOrganizerOnSerie: Boolean!\n  $queryAuthorizedAccounts: Boolean!\n) {\n  viewer {\n    ...EventView_viewer_2r3doJ\n    id\n  }\n}\n\nfragment EventView_viewer_2r3doJ on Viewer {\n  id\n  languages {\n    id\n    name\n    code\n  }\n  IsCoOrganizerOnSerie(sportunityId: $isCoOrganizerOnSerieSportunityId) @include(if: $queryIsCoOrganizerOnSerie)\n  authorizedAccounts @include(if: $queryAuthorizedAccounts) {\n    id\n    avatar\n    pseudo\n    accounts {\n      id\n      avatar\n      token\n      pseudo\n    }\n  }\n  superMe @include(if: $querySuperMe) {\n    id\n    pseudo\n    avatar\n    subAccounts {\n      id\n      avatar\n      pseudo\n      token\n    }\n  }\n  me {\n    id\n    appCountry\n    paymentMethods {\n      id\n      cardMask\n      currency\n    }\n    lastName\n    firstName\n    address {\n      address\n      city\n      country\n    }\n    profileType\n    isProfileComplete\n    birthday\n    nationality\n    shouldDeclareVAT\n    business {\n      businessName\n      businessEmail\n      headquarterAddress {\n        address\n        city\n        country\n      }\n      VATNumber\n    }\n    ...EventViewContent_user\n    ...EventViewHeader_user\n    ...EventViewSidebar_user\n  }\n  ...EventViewHeader_viewer\n  ...AddACard_viewer\n  ...StatsFilling_viewer\n  ...EventViewSidebar_viewer\n  sportunity(id: $sportunityId) {\n    id\n    title\n    description\n    kind\n    images\n    number_of_occurences\n    is_repeated_occurence_number\n    beginning_date\n    ending_date\n    survey {\n      isSurveyTransformed\n      surveyDates {\n        beginning_date\n        ending_date\n        answers {\n          user {\n            id\n            pseudo\n            avatar\n          }\n          answer\n        }\n      }\n    }\n    participantRange {\n      from\n      to\n    }\n    participants {\n      id\n      avatar\n      pseudo\n      firstName\n      lastName\n      circlesUserIsIn(last: 100) {\n        edges {\n          node {\n            name\n            id\n          }\n        }\n      }\n    }\n    paymentStatus {\n      status\n      user {\n        id\n      }\n      price {\n        currency\n        cents\n      }\n      id\n    }\n    price_for_circle {\n      circle {\n        id\n        members {\n          id\n        }\n      }\n      price {\n        cents\n        currency\n      }\n      participantByDefault\n      excludedParticipantByDefault {\n        excludedMembers {\n          id\n          pseudo\n        }\n      }\n    }\n    invited_circles(last: 10) {\n      edges {\n        node {\n          ...MyCirclesCircleItem_circle\n          id\n          name\n          mode\n          type\n          members {\n            id\n            pseudo\n            avatar\n          }\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          askedInformation {\n            id\n            name\n          }\n          membersInformation {\n            information\n            user {\n              id\n            }\n            value\n            document {\n              id\n              name\n            }\n            validationStatus\n            comment\n            id\n          }\n        }\n      }\n    }\n    hide_participant_list\n    invited {\n      user {\n        id\n        pseudo\n        avatar\n        firstName\n        lastName\n        circlesUserIsIn(last: 100) {\n          edges {\n            node {\n              name\n              id\n            }\n          }\n        }\n      }\n      answer\n    }\n    waiting {\n      id\n      pseudo\n      avatar\n    }\n    canceling {\n      status\n      canceling_user {\n        id\n        pseudo\n        avatar\n        firstName\n        lastName\n        circlesUserIsIn(last: 100) {\n          edges {\n            node {\n              name\n              id\n            }\n          }\n        }\n      }\n    }\n    price {\n      currency\n      cents\n    }\n    address {\n      address\n      city\n      position {\n        lat\n        lng\n      }\n    }\n    organizers {\n      organizer {\n        id\n        pseudo\n        avatar\n        feedbacks {\n          feedbacksList(last: 100) {\n            edges {\n              node {\n                author {\n                  id\n                }\n                id\n              }\n            }\n          }\n        }\n      }\n      isAdmin\n      role\n      secondaryOrganizerType {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      customSecondaryOrganizerType\n      price {\n        cents\n        currency\n      }\n      permissions {\n        chatAccess {\n          view\n          edit\n        }\n        memberAccess {\n          view\n          edit\n        }\n        carPoolingAccess {\n          view\n          edit\n        }\n        imageAccess {\n          view\n          edit\n        }\n        detailsAccess {\n          view\n          edit\n        }\n        compositionAccess {\n          view\n          edit\n        }\n      }\n      id\n    }\n    pendingOrganizers {\n      id\n      circles(last: 20) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n            name\n            memberCount\n          }\n        }\n      }\n      isAdmin\n      role\n      secondaryOrganizerType {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      customSecondaryOrganizerType\n      price {\n        cents\n        currency\n      }\n    }\n    status\n    cancel_date\n    sport {\n      sport {\n        id\n        logo\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n      }\n      allLevelSelected\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n          description\n        }\n        FR {\n          name\n          skillLevel\n          description\n        }\n        DE {\n          name\n          skillLevel\n          description\n        }\n      }\n      certificates {\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n        id\n      }\n      positions {\n        EN\n        FR\n        DE\n        id\n      }\n    }\n    game_information {\n      opponent {\n        organizer {\n          id\n          pseudo\n          avatar\n        }\n        organizerPseudo\n        lookingForAnOpponent\n        unknownOpponent\n        invitedOpponents(last: 5) {\n          edges {\n            node {\n              id\n              name\n              memberCount\n              members {\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n    ...EventViewHeader_sportunity\n    ...EventViewContent_sportunity\n    ...EventViewSidebar_sportunity\n    ...ConfirmBookingPopup_sportunity\n    ...StatsFilling_sportunity\n  }\n  chat(sportunityId: $chatSportunityId) {\n    ...EventViewContent_chat\n    id\n  }\n  ...ConfirmBookingPopup_viewer\n  ...EventViewContent_viewer\n}\n\nfragment EventViewContent_user on User {\n  id\n  profileType\n  ...Comments_user\n  ...Info_user\n  ...Sidebar_user\n  areStatisticsActivated\n}\n\nfragment EventViewHeader_user on User {\n  id\n  calendar {\n    sportunities(last: 100) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    users {\n      id\n    }\n  }\n  areStatisticsActivated\n  profileType\n}\n\nfragment EventViewSidebar_user on User {\n  id\n  profileType\n}\n\nfragment EventViewHeader_viewer on Viewer {\n  id\n  ...RelaunchInvited_viewer\n  ...Price_viewer\n}\n\nfragment AddACard_viewer on Viewer {\n  me {\n    id\n    lastName\n  }\n}\n\nfragment StatsFilling_viewer on Viewer {\n  id\n}\n\nfragment EventViewSidebar_viewer on Viewer {\n  id\n  ...VoteForManOfTheGame_viewer\n  ...EventViewAddUserModal_viewer\n}\n\nfragment MyCirclesCircleItem_circle on Circle {\n  id\n  name\n  mode\n  type\n  isCircleUpdatableByMembers\n  isCircleUsableByMembers\n  isCurrentUserAMember\n  shouldValidateNewUser\n  memberCount\n  waitingMembers {\n    id\n  }\n  refusedMembers {\n    id\n  }\n  owner {\n    id\n    pseudo\n    avatar\n  }\n  address {\n    address\n    city\n    country\n  }\n  termsOfUses {\n    id\n  }\n  sport {\n    sport {\n      id\n      logo\n      name {\n        FR\n        EN\n        ES\n        DE\n        id\n      }\n    }\n    levels {\n      FR {\n        name\n        description\n      }\n      EN {\n        name\n        description\n      }\n      ES {\n        name\n        description\n      }\n      DE {\n        name\n        description\n      }\n      id\n    }\n  }\n}\n\nfragment EventViewHeader_sportunity on Sportunity {\n  ...Price_sportunity\n  id\n  title\n  address {\n    address\n    city\n  }\n  participants {\n    id\n  }\n  invited {\n    user {\n      id\n      pseudo\n      avatar\n    }\n  }\n  invited_circles(last: 10) {\n    edges {\n      node {\n        id\n        name\n        mode\n        type\n        memberCount\n        members {\n          id\n        }\n        owner {\n          id\n          pseudo\n          avatar\n        }\n      }\n    }\n  }\n  price {\n    cents\n    currency\n  }\n  participantRange {\n    from\n    to\n  }\n  kind\n  beginning_date\n  ending_date\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n      answers {\n        user {\n          id\n          pseudo\n          avatar\n        }\n        answer\n      }\n    }\n  }\n  pendingOrganizers {\n    id\n    circles(last: 20) {\n      edges {\n        node {\n          members {\n            id\n          }\n          id\n        }\n      }\n    }\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n  }\n  sport {\n    sport {\n      id\n      logo\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n          description\n        }\n        FR {\n          name\n          skillLevel\n          description\n        }\n        DE {\n          name\n          skillLevel\n          description\n        }\n      }\n      name {\n        EN\n        FR\n        DE\n        id\n      }\n    }\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n        description\n      }\n      FR {\n        name\n        skillLevel\n        description\n      }\n      DE {\n        name\n        skillLevel\n        description\n      }\n    }\n    certificates {\n      name {\n        EN\n        FR\n        DE\n        id\n      }\n      id\n    }\n    positions {\n      EN\n      FR\n      DE\n      id\n    }\n  }\n}\n\nfragment EventViewContent_sportunity on Sportunity {\n  id\n  description\n  organizers {\n    isAdmin\n    organizer {\n      pseudo\n      id\n    }\n    id\n  }\n  ...Info_sportunity\n  ...Feedback_sportunity\n  ...CarPooling_sportunity\n  ...Compositions_sportunity\n  ...Media_sportunity\n  ...EventViewSidebar_sportunity\n  participantRange {\n    from\n    to\n  }\n  kind\n  hide_participant_list\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n      answers {\n        user {\n          id\n          pseudo\n          avatar\n        }\n        answer\n      }\n    }\n  }\n  invited_circles(last: 10) {\n    edges {\n      node {\n        id\n        name\n        mode\n        type\n        memberCount\n        members {\n          id\n        }\n        owner {\n          id\n          pseudo\n          avatar\n        }\n      }\n    }\n  }\n  address {\n    address\n    city\n    position {\n      lat\n      lng\n    }\n  }\n  images\n  sexRestriction\n  ageRestriction {\n    from\n    to\n  }\n  sport {\n    allLevelSelected\n    sport {\n      fieldImages\n      id\n    }\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n        description\n      }\n      FR {\n        name\n        skillLevel\n        description\n      }\n      DE {\n        name\n        skillLevel\n        description\n      }\n    }\n    certificates {\n      name {\n        EN\n        FR\n        DE\n        id\n      }\n      id\n    }\n    positions {\n      EN\n      FR\n      DE\n      id\n    }\n  }\n}\n\nfragment EventViewSidebar_sportunity on Sportunity {\n  id\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n    }\n  }\n  beginning_date\n  ending_date\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    isAdmin\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        ES\n        DE\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    id\n  }\n  price {\n    cents\n    currency\n  }\n  hide_participant_list\n  participants {\n    id\n    pseudo\n    avatar\n  }\n  waiting {\n    id\n    pseudo\n    avatar\n  }\n  willing {\n    id\n    pseudo\n    avatar\n  }\n  invited {\n    answer\n    user {\n      id\n      pseudo\n      avatar\n    }\n  }\n  canceling {\n    canceling_user {\n      id\n      pseudo\n      avatar\n    }\n    status\n  }\n  sportunityType {\n    isScoreRelevant\n    id\n  }\n  manOfTheGameVotes {\n    voter {\n      id\n      pseudo\n    }\n    votedFor {\n      id\n      pseudo\n      avatar\n    }\n  }\n  ...VoteForManOfTheGame_sportunity\n}\n\nfragment ConfirmBookingPopup_sportunity on Sportunity {\n  title\n  address {\n    address\n    city\n  }\n  participants {\n    id\n  }\n  participantRange {\n    from\n    to\n  }\n  beginning_date\n  ending_date\n  price {\n    cents\n    currency\n  }\n  sport {\n    sport {\n      logo\n      name {\n        EN\n        DE\n        FR\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment StatsFilling_sportunity on Sportunity {\n  id\n  sport {\n    sport {\n      type\n      sportunityTypes {\n        id\n        name {\n          FR\n          EN\n          id\n        }\n      }\n      id\n    }\n  }\n  sportunityType {\n    id\n    name {\n      FR\n      EN\n      id\n    }\n    statuses {\n      id\n      name {\n        FR\n        EN\n        id\n      }\n    }\n    isScoreRelevant\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      FR\n      EN\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n}\n\nfragment EventViewContent_chat on Chat {\n  id\n  ...Comments_chat\n}\n\nfragment ConfirmBookingPopup_viewer on Viewer {\n  id\n}\n\nfragment EventViewContent_viewer on Viewer {\n  ...Comments_viewer\n  ...Feedback_viewer\n  ...CarPooling_viewer\n  ...Info_viewer\n  ...Media_viewer\n  ...Compositions_viewer\n  ...EventViewSidebar_viewer\n  ...SearchModal_viewer\n}\n\nfragment Comments_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n\nfragment Feedback_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n\nfragment CarPooling_viewer on Viewer {\n  id\n  me {\n    id\n    appCountry\n  }\n}\n\nfragment Info_viewer on Viewer {\n  id\n  ...Price_viewer\n  ...VoteForManOfTheGame_viewer\n  me {\n    id\n    pseudo\n    avatar\n    profileType\n  }\n}\n\nfragment Media_viewer on Viewer {\n  id\n}\n\nfragment Compositions_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n    compositions {\n      id\n      name\n      fieldImage\n      owner {\n        id\n      }\n      users {\n        user {\n          id\n          pseudo\n          avatar\n        }\n        position {\n          xPercentage\n          yPercentage\n        }\n      }\n    }\n  }\n}\n\nfragment SearchModal_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment Price_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment VoteForManOfTheGame_viewer on Viewer {\n  me {\n    id\n  }\n  statisticPreferences {\n    private\n  }\n}\n\nfragment Comments_chat on Chat {\n  id\n  isActive\n  messages(last: 20) {\n    count\n    edges {\n      node {\n        ...Comment_message\n        id\n      }\n    }\n  }\n}\n\nfragment Comment_message on Message {\n  id\n  text\n  author {\n    id\n    pseudo\n    avatar\n  }\n  created\n}\n\nfragment VoteForManOfTheGame_sportunity on Sportunity {\n  id\n  ending_date\n  participants {\n    id\n    pseudo\n    avatar\n  }\n  canUserVoteForManOfTheGame\n  manOfTheGameVotes {\n    voter {\n      id\n    }\n    votedFor {\n      id\n      pseudo\n      avatar\n    }\n    date\n  }\n  organizers {\n    organizer {\n      id\n    }\n    isAdmin\n    id\n  }\n  sportunityType {\n    isScoreRelevant\n    id\n  }\n}\n\nfragment Info_sportunity on Sportunity {\n  id\n  description\n  kind\n  ...TimeAndLocation_sportunity\n  ...Price_sportunity\n  ...GameInformationRow_sportunity\n  ...VoteForManOfTheGame_sportunity\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n      answers {\n        user {\n          id\n          pseudo\n          avatar\n        }\n        answer\n      }\n    }\n  }\n  carPoolings {\n    id\n    driver {\n      id\n      pseudo\n      avatar\n    }\n    address {\n      address\n      city\n      zip\n      country\n    }\n    starting_date\n    number_of_sits\n    passengers {\n      id\n      pseudo\n      avatar\n    }\n  }\n  organizers {\n    isAdmin\n    role\n    price {\n      cents\n      currency\n    }\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    permissions {\n      chatAccess {\n        view\n        edit\n      }\n      memberAccess {\n        view\n        edit\n      }\n      carPoolingAccess {\n        view\n        edit\n      }\n      imageAccess {\n        view\n        edit\n      }\n      detailsAccess {\n        view\n        edit\n      }\n      compositionAccess {\n        view\n        edit\n      }\n    }\n    id\n  }\n  invited {\n    user {\n      id\n      avatar\n      pseudo\n    }\n  }\n  invited_circles(last: 10) {\n    edges {\n      node {\n        ...MyCirclesCircleItem_circle\n        id\n        name\n        mode\n        type\n        memberCount\n        members {\n          id\n        }\n        owner {\n          id\n          pseudo\n          avatar\n        }\n      }\n    }\n  }\n  participants {\n    id\n    pseudo\n    avatar\n  }\n  participantRange {\n    from\n    to\n  }\n  address {\n    address\n    city\n    position {\n      lat\n      lng\n    }\n  }\n  images\n  sexRestriction\n  ageRestriction {\n    from\n    to\n  }\n  sport {\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n        description\n      }\n      FR {\n        name\n        skillLevel\n        description\n      }\n      DE {\n        name\n        skillLevel\n        description\n      }\n    }\n    certificates {\n      name {\n        EN\n        FR\n        DE\n        id\n      }\n      id\n    }\n    positions {\n      EN\n      FR\n      DE\n      id\n    }\n  }\n}\n\nfragment Feedback_sportunity on Sportunity {\n  organizers {\n    isAdmin\n    organizer {\n      id\n      pseudo\n      feedbacks {\n        feedbacksList(last: 100) {\n          edges {\n            node {\n              author {\n                id\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment CarPooling_sportunity on Sportunity {\n  id\n  beginning_date\n  carPoolings {\n    id\n    driver {\n      id\n      pseudo\n      avatar\n    }\n    address {\n      address\n      city\n      zip\n      country\n    }\n    starting_date\n    number_of_sits\n    passengers {\n      id\n      pseudo\n      avatar\n    }\n  }\n  organizers {\n    organizer {\n      id\n    }\n    permissions {\n      chatAccess {\n        view\n        edit\n      }\n      memberAccess {\n        view\n        edit\n      }\n      carPoolingAccess {\n        view\n        edit\n      }\n      imageAccess {\n        view\n        edit\n      }\n      detailsAccess {\n        view\n        edit\n      }\n      compositionAccess {\n        view\n        edit\n      }\n    }\n    id\n  }\n}\n\nfragment Compositions_sportunity on Sportunity {\n  id\n  participants {\n    id\n    pseudo\n    avatar\n  }\n  sport {\n    sport {\n      fieldImages\n      id\n    }\n  }\n  compositions {\n    id\n    name\n    fieldImage\n    owner {\n      id\n    }\n    users {\n      user {\n        id\n        pseudo\n        avatar\n      }\n      position {\n        xPercentage\n        yPercentage\n      }\n    }\n  }\n}\n\nfragment Media_sportunity on Sportunity {\n  images\n  id\n}\n\nfragment TimeAndLocation_sportunity on Sportunity {\n  address {\n    address\n    city\n    position {\n      lat\n      lng\n    }\n  }\n  beginning_date\n  ending_date\n  venue {\n    id\n    name\n  }\n  infrastructure {\n    id\n    name\n  }\n  slot {\n    id\n    from\n    end\n  }\n}\n\nfragment Price_sportunity on Sportunity {\n  kind\n  paymentStatus {\n    status\n    user {\n      id\n    }\n    price {\n      currency\n      cents\n    }\n    id\n  }\n  price {\n    currency\n    cents\n    description {\n      EN\n      id\n    }\n  }\n  invited_circles(last: 10) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  price_for_circle {\n    circle {\n      id\n    }\n    price {\n      cents\n      currency\n    }\n  }\n}\n\nfragment GameInformationRow_sportunity on Sportunity {\n  game_information {\n    opponent {\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      organizerPseudo\n      lookingForAnOpponent\n      unknownOpponent\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            name\n            memberCount\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment EventViewAddUserModal_viewer on Viewer {\n  id\n  ...InputUserAutocompleted_viewer\n}\n\nfragment InputUserAutocompleted_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment RelaunchInvited_viewer on Viewer {\n  id\n}\n\nfragment Comments_user on User {\n  ...Form_user\n}\n\nfragment Info_user on User {\n  areStatisticsActivated\n  profileType\n}\n\nfragment Sidebar_user on User {\n  circles(last: 10) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment Form_user on User {\n  id\n  avatar\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_EventViewSportunityId_Query",
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
            "name": "EventView_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "chatSportunityId",
                "variableName": "chatSportunityId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "isCoOrganizerOnSerieSportunityId",
                "variableName": "isCoOrganizerOnSerieSportunityId",
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
                "name": "queryIsCoOrganizerOnSerie",
                "variableName": "queryIsCoOrganizerOnSerie",
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
                "name": "sportunityId",
                "variableName": "sportunityId",
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
    "name": "router_EventViewSportunityId_Query",
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
            "name": "languages",
            "storageKey": null,
            "args": null,
            "concreteType": "Language",
            "plural": true,
            "selections": [
              v1,
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "code",
                "args": null,
                "storageKey": null
              }
            ]
          },
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
                "name": "nationality",
                "args": null,
                "storageKey": null
              },
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentMethods",
                "storageKey": null,
                "args": null,
                "concreteType": "PaymentMethod",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardMask",
                    "args": null,
                    "storageKey": null
                  },
                  v3
                ]
              },
              v4,
              v5,
              v10,
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
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "birthday",
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
                "name": "shouldDeclareVAT",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "business",
                "storageKey": null,
                "args": null,
                "concreteType": "Business",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "businessName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "businessEmail",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "headquarterAddress",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AddressModel",
                    "plural": false,
                    "selections": v9
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "VATNumber",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              v11,
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
                "name": "circles",
                "storageKey": "circles(last:10)",
                "args": v12,
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
                        "selections": v13
                      }
                    ]
                  }
                ]
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
                    "args": v14,
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
                            "selections": v15
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
                    "selections": v15
                  }
                ]
              },
              v16,
              v19
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "statisticPreferences",
            "storageKey": null,
            "args": null,
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
            "name": "sportunity",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "sportunityId",
                "type": "ID"
              }
            ],
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
              v20,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "kind",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "images",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "number_of_occurences",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "is_repeated_occurence_number",
                "args": null,
                "storageKey": null
              },
              v21,
              v22,
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
                      v21,
                      v22,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "answers",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SurveyAnswer",
                        "plural": true,
                        "selections": [
                          v18,
                          v23
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participantRange",
                "storageKey": null,
                "args": null,
                "concreteType": "IntInterval",
                "plural": false,
                "selections": v25
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participants",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v1,
                  v11,
                  v16,
                  v5,
                  v4,
                  v26
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityPaymentStatus",
                "plural": true,
                "selections": [
                  v27,
                  v28,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Price",
                    "plural": false,
                    "selections": [
                      v3,
                      v29
                    ]
                  },
                  v1
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "price_for_circle",
                "storageKey": null,
                "args": null,
                "concreteType": "PriceForCircle",
                "plural": true,
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
                      v30
                    ]
                  },
                  v31,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "participantByDefault",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "excludedParticipantByDefault",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "excludedParticipantByDefault",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "excludedMembers",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": true,
                        "selections": v32
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "invited_circles",
                "storageKey": "invited_circles(last:10)",
                "args": v12,
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
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "waitingMembers",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v15
                          },
                          v1,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "mode",
                            "args": null,
                            "storageKey": null
                          },
                          v33,
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
                          v34,
                          v2,
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
                            "selections": v17
                          },
                          v10,
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
                                  v35,
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "name",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "TranslatedString",
                                    "plural": false,
                                    "selections": [
                                      v36,
                                      v37,
                                      v38,
                                      v39,
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
                                    "selections": v40
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "EN",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v40
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "ES",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v40
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "DE",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v40
                                  },
                                  v1
                                ]
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "members",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v17
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "askedInformation",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "askedInformation",
                            "plural": true,
                            "selections": v13
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
                                "selections": v13
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hide_participant_list",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "invited",
                "storageKey": null,
                "args": null,
                "concreteType": "Invited",
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
                    "selections": v41
                  },
                  v23
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "waiting",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v17
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "canceling",
                "storageKey": null,
                "args": null,
                "concreteType": "Canceling",
                "plural": true,
                "selections": [
                  v27,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "canceling_user",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v41
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "price",
                "storageKey": null,
                "args": null,
                "concreteType": "Price",
                "plural": false,
                "selections": [
                  v3,
                  v29,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "description",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TranslatedString",
                    "plural": false,
                    "selections": [
                      v37,
                      v1
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "organizers",
                "storageKey": null,
                "args": null,
                "concreteType": "Organizer",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organizer",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      v1,
                      v16,
                      v11,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "feedbacks",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Feedbacks",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "feedbacksList",
                            "storageKey": "feedbacksList(last:100)",
                            "args": v14,
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
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "author",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "User",
                                        "plural": false,
                                        "selections": v15
                                      },
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
                  v43,
                  v44,
                  v45,
                  v31,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "permissions",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "coOrganizersPermissions",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "chatAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersChatAccess",
                        "plural": false,
                        "selections": v46
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "memberAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersMemberAccess",
                        "plural": false,
                        "selections": v46
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "carPoolingAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersCarPoolingAccess",
                        "plural": false,
                        "selections": v46
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "imageAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersImageAccess",
                        "plural": false,
                        "selections": v46
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "detailsAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersDetailsAccess",
                        "plural": false,
                        "selections": v46
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "compositionAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersCompositionAccess",
                        "plural": false,
                        "selections": v46
                      }
                    ]
                  },
                  v1
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pendingOrganizers",
                "storageKey": null,
                "args": null,
                "concreteType": "PendingOrganizer",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circles",
                    "storageKey": "circles(last:20)",
                    "args": v47,
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
                              v30,
                              v2,
                              v34
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  v42,
                  v43,
                  v44,
                  v45,
                  v31
                ]
              },
              v27,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cancel_date",
                "args": null,
                "storageKey": null
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
                      v1,
                      v35,
                      v49,
                      v51,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "fieldImages",
                        "args": null,
                        "storageKey": null
                      },
                      v33,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sportunityTypes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportunityType",
                        "plural": true,
                        "selections": v53
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "allLevelSelected",
                    "args": null,
                    "storageKey": null
                  },
                  v51,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "certificates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Certificate",
                    "plural": true,
                    "selections": [
                      v49,
                      v1
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
                    "selections": v48
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
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "organizer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": v17
                      },
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
                        "name": "lookingForAnOpponent",
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
                                  v2,
                                  v34,
                                  v30
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
                "kind": "LinkedField",
                "alias": null,
                "name": "venue",
                "storageKey": null,
                "args": null,
                "concreteType": "Venue",
                "plural": false,
                "selections": v13
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "infrastructure",
                "storageKey": null,
                "args": null,
                "concreteType": "Infrastructure",
                "plural": false,
                "selections": v13
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "slot",
                "storageKey": null,
                "args": null,
                "concreteType": "Slot",
                "plural": false,
                "selections": [
                  v1,
                  v24,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "end",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "canUserVoteForManOfTheGame",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "manOfTheGameVotes",
                "storageKey": null,
                "args": null,
                "concreteType": "manOfTheGameVotes",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "voter",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v32
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "votedFor",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v17
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "date",
                    "args": null,
                    "storageKey": null
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isScoreRelevant",
                    "args": null,
                    "storageKey": null
                  },
                  v1,
                  v52,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "statuses",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTypeStatus",
                    "plural": true,
                    "selections": v53
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "carPoolings",
                "storageKey": null,
                "args": null,
                "concreteType": "CarPooling",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "driver",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v17
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "zip",
                        "args": null,
                        "storageKey": null
                      },
                      v8
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "starting_date",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "number_of_sits",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "passengers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": v17
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "sexRestriction",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "ageRestriction",
                "storageKey": null,
                "args": null,
                "concreteType": "IntInterval",
                "plural": false,
                "selections": v25
              },
              v19,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "willing",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v17
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityTypeStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityTypeStatus",
                "plural": false,
                "selections": v53
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
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chat",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "sportunityId",
                "variableName": "chatSportunityId",
                "type": "String"
              }
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
                "args": v47,
                "concreteType": "MessageConnection",
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "text",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "author",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v17
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
                  v16,
                  v11,
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
                      v11,
                      v16,
                      v54
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
                "args": null,
                "concreteType": "AuthorizedAccounts",
                "plural": false,
                "selections": [
                  v1,
                  v11,
                  v16,
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
                      v11,
                      v54,
                      v16
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryIsCoOrganizerOnSerie",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "IsCoOrganizerOnSerie",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "sportunityId",
                    "variableName": "isCoOrganizerOnSerieSportunityId",
                    "type": "String!"
                  }
                ],
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
(node/*: any*/).hash = 'f77e65111a5e35d71c27f4ffaed2b0bc';
module.exports = node;
