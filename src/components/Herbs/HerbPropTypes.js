import PropTypes from 'prop-types'

const HerbPropTypes = {
    herb: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        pharm_latin: PropTypes.string,
        hanzi: PropTypes.string,
        herb_category: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
        herb_properties: PropTypes.arrayOf(
            PropTypes.shape({
                property: PropTypes.string.isRequired,
                property_type: PropTypes.shape({
                    name: PropTypes.string.isRequired,
                }),
            }),
        ),
    }),
}

export default HerbPropTypes
