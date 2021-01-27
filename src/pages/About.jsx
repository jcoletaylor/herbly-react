import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

const crumbs = [
    { path: '/', name: 'Home', className: undefined },
    { path: '/about', name: 'About', className: 'is-active' },
]

const About = () => {
    return (
        <div className="container">
            <BreadCrumbs crumbs={crumbs} />
            <div className="content">
                <h3 className="is-size-4">About</h3>
                <p>
                    The purpose of this website is to demonstrate one of the ways to use the{' '}
                    <a href="https://api.herbly.app/v1/graphql">Herbly GraphQL API</a>. There is
                    also a <a href="https://rest.herbly.app/">REST API</a>.
                </p>
                <p>
                    Why APIs? TCM herbal medicine is an extremely rich field of study. However many
                    of the resources are closed-source or proprietary in nature, and this can make
                    building public and shared ways to structure this data and field of study
                    difficult in a way that it should not be.
                </p>
                <p>
                    The data that backs up this API was drawn from the excellent work of Dr. Joel
                    Penner <a href="https://www.americandragon.com/">American Dragon</a>. In email
                    conversations, he supported and gave permission for converting his excellent
                    html resources into structured data. The repository for review is{' '}
                    <a href="https://github.com/jcoletaylor/herbly-rails">here</a>. Another
                    excellent resource online is the{' '}
                    <a href="https://www.sacredlotus.com/">Sacred Lotus</a> site which has excellent
                    information made easily available. Herbly is not meant to be a competitor to
                    that site, though I would love to integrate with their work!
                </p>
                <p>
                    The common and expected disclaimers hold. This data is extensive but incomplete,
                    and while the data that was derived from American Dragon was excellent and
                    robust, the conversion was not perfect, and there are gaps that I hope to fill
                    over time. Similarly, this information is not meant to diagnose any illness, nor
                    is it meant to allow unlicensed individuals to select herbal remedies for
                    themselves based on the information contained here. TCM herbal medicine can be
                    very powerful and should not be practiced without training and licensure.
                </p>
                <p>
                    The github repository for this website is{' '}
                    <a href="https://github.com/jcoletaylor/herbly-react">here</a>. It is written in{' '}
                    <a href="https://reactjs.org/">React</a> and backed up by the{' '}
                    <a href="https://hasura.io/">Hasura GraphQL Engine</a>. The original parsing of
                    the data was done in <a href="https://www.typescriptlang.org/">TypeScript</a>{' '}
                    using <a href="https://cheerio.js.org/">Cheerio</a>. The{' '}
                    <a href="https://github.com/jcoletaylor/herbly-rails">REST API</a> has been
                    written in <a href="https://rubyonrails.org/">Ruby on Rails</a> simply because
                    it is very fast to build out straightforward domain models.
                </p>
            </div>
        </div>
    )
}

export default About
