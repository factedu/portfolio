import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Jobs from '../components/jobs';

const JobsPage = () => {
    return (
        <Layout>
            <SEO title="Jobs" />
            <Jobs />
        </Layout>
    )
};

export default JobsPage;