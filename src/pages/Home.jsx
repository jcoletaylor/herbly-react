import React from 'react'
import LeftNav from '../components/LeftNav'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div className="container">
            <section className="columns">
                <div className="column is-2">
                    <LeftNav />
                </div>
                <div className="column is-10">
                    <Hero />
                    <div className="content">
                        <h3 className="is-size-4">Purpose</h3>
                        <p>
                            The purpose of this website is to demonstrate one of the ways to use the{' '}
                            <a href="https://api.herbly.app/v1/graphql">Herbly GraphQL API</a>.
                            There is also a <a href="https://rest.herbly.app/">REST API</a>.
                        </p>
                        <p>
                            Why APIs? TCM herbal medicine is an extremely rich field of study.
                            However many of the resources are closed-source or proprietary in
                            nature, and this can make building public and shared ways to structure
                            this data and field of study difficult in a way that it should not be.
                        </p>
                        <p>
                            The data that backs up this API was drawn from the excellent work of Dr.
                            Joel Penner{' '}
                            <a href="https://www.americandragon.com/">American Dragon</a>. In email
                            conversations, he supported and gave permission for converting his
                            excellent html resources into structured data. The repository for review
                            is <a href="https://github.com/jcoletaylor/herbly-rails">here</a>.
                            Another excellent resource online is the{' '}
                            <a href="https://www.sacredlotus.com/">Sacred Lotus</a> site which has
                            excellent information made easily available. Herbly is not meant to be a
                            competitor to that site, though I would love to integrate with their
                            work!
                        </p>
                        <p>
                            The common and expected disclaimers hold. This data is extensive but
                            incomplete, and while the data that was derived from American Dragon was
                            excellent and robust, the conversion was not perfect, and there are gaps
                            that I hope to fill over time. Similarly, this information is not meant
                            to diagnose any illness, nor is it meant to allow unlicensed individuals
                            to select herbal remedies for themselves based on the information
                            contained here. TCM herbal medicine can be very powerful and should not
                            be practiced without training and licensure.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
