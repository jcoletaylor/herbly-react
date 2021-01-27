import { gql } from '@apollo/client'

export const FULL_TEXT_SEARCH = gql`
    query Search($search: String!, $limit: Int!, $offset: Int!) {
        full_search(args: { search: $search }, limit: $limit, offset: $offset) {
            name
            common_english
            searchable_id
            searchable_type
        }
        full_search_aggregate(args: { search: $search }) {
            aggregate {
                count
            }
        }
    }
`
