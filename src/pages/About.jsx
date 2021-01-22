import React from 'react'
import LeftNav from '../components/LeftNav'
import BreadCrumbs from '../components/BreadCrumbs'

const crumbs = [
    { path: '/', name: 'Home', className: undefined },
    { path: '/about', name: 'About', className: 'is-active' },
]

const About = () => {
    return (
        <div className="container">
            <section className="columns">
                <div className="column is-2">
                    <LeftNav />
                </div>
                <div className="column is-10">
                    <BreadCrumbs crumbs={crumbs} />
                    <div className="content">
                        <h3 className="is-size-4">About</h3>
                        <p>
                            The github repository for this website is{' '}
                            <a href="https://github.com/jcoletaylor/herbly-react">here</a>. It is
                            written in <a href="https://reactjs.org/">React</a> and backed up by the{' '}
                            <a href="https://hasura.io/">Hasura GraphQL Engine</a>. The original
                            parsing of the data was done in{' '}
                            <a href="https://www.typescriptlang.org/">TypeScript</a> using{' '}
                            <a href="https://cheerio.js.org/">Cheerio</a>. The{' '}
                            <a href="https://github.com/jcoletaylor/herbly-rails">REST API</a> has
                            been written in <a href="https://rubyonrails.org/">Ruby on Rails</a>{' '}
                            simply because it is very fast to build out straightforward domain
                            models.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
