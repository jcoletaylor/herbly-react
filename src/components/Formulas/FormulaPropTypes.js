import PropTypes from 'prop-types'

const FormulaPropTypes = {
    formula: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        pinyin: PropTypes.string.isRequired,
        english: PropTypes.string,
        common_english: PropTypes.string,
        hanzi: PropTypes.string,
        formula_actions: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                formula_named_action: PropTypes.shape({
                    name: PropTypes.string.isRequired,
                }),
            }),
        ),
        formula_also_knowns: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            }),
        ),
    }),
}

export default FormulaPropTypes
