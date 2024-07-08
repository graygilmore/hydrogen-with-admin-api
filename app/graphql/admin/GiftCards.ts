export const GIFT_CARDS = `#graphql
  query {
    giftCards(first: 10) {
      edges {
        node {
          id
        }
      }
    }
  }
` as const;
