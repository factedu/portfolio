import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import BannerSection from '../components/banner';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BannerSection/>
  </Layout>
)

export default IndexPage
