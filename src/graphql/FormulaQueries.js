import { gql } from '@apollo/client'

const SIMPLE_FORMULA_DETAIL_FRAGMENT = gql`
    fragment SimpleFormulaDetail on formulas {
        id
        name
        pinyin
        hanzi
        english
        common_english
        formula_also_knowns {
            id
            name
        }
        formula_actions {
            id
            formula_named_action {
                name
            }
        }
    }
`

export const LIST_FORMULAS = gql`
    query ListAllFormulas($limit: Int!, $offset: Int!) {
        formulas(limit: $limit, offset: $offset, order_by: { name: asc }) {
            ...SimpleFormulaDetail
        }
        formulas_aggregate {
            aggregate {
                count
            }
        }
    }
    ${SIMPLE_FORMULA_DETAIL_FRAGMENT}
`

export const COMPLETE_FORMULA_DETAIL_FRAGMENT = gql`
    fragment CompleteFormulaDetail on formulas {
        id
        name
        pinyin
        hanzi
        english
        common_english
        formula_also_knowns {
            id
            name
        }
        formula_actions {
            id
            formula_named_action {
                name
            }
        }
    }
`

export const SINGLE_FORMULA_DETAIL = gql`
    query SingleFormulaDetail($name: String) {
        formulas(where: { name: { _eq: $name } }) {
            ...CompleteFormulaDetail
        }
    }
    ${COMPLETE_FORMULA_DETAIL_FRAGMENT}
`
