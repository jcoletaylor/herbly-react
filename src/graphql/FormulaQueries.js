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
        formula_manifestations {
            id
            tongue
            tongue_coat
            pulse
            formula_manifestation_symptoms {
                symptom {
                    name
                }
            }
        }
        formula_herbs {
            herb {
                id
                name
                pinyin
                latin
                pharm_latin
                common_english
                hanzi
                herb_category {
                    id
                    name
                }
            }
            formula_herb_actions {
                id
                formula_named_action {
                    id
                    name
                }
            }
        }
        formula_syndromes {
            id
            syndrome {
                id
                name
            }
        }
        formula_conditions {
            id
            condition {
                id
                name
            }
        }
        formula_contraindications {
            id
            contraindication
        }
        formula_interactions {
            id
            interaction
        }
        formula_notes {
            id
            note
        }
        formula_modification_sets {
            id
            purpose
            formula_modifications {
                id
                modification
                herb {
                    id
                    name
                    pinyin
                    latin
                    pharm_latin
                    hanzi
                    herb_category {
                        id
                        name
                    }
                }
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
