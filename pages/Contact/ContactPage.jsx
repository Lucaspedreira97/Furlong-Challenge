import React from "react";
import Layout from "../../common/Layout";
import Contact from "../../components/Contact";
import "../../styles/contact.css"

export default function ContactPage() {
    return (
        <Layout>
            <div className="contactContainer">
            <Contact />
            </div>
        </Layout>
    )
}