import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const query = graphql`
{
    allStrapiJob(sort: {fields: from_date, order: DESC}) {
      nodes{
        strapiId,
        id,
        company,
        from_date,
        to_date,
        position,
        job_description,
        role{
          id,
          name
        }
      }
    }
}
`;

const Jobs = () => {
    const data = useStaticQuery(query);
    const { allStrapiJob: { nodes: jobs } } = data;
    const [value, setValue] = useState(0);
    const { company, position, from_date, to_date, role, job_description } = jobs[value];

    return (
        <section className="section jobs container-fluid">
            <div className="title-text text-uppercase text-center mb-5">Experience</div>
            <div className="jobs-center d-flex row">
                <div className="btn-container col-sm-3">
                    {jobs.map((job, index) => {
                        return <button
                            onClick={() => setValue(index)}
                            className={`btn btn-block job-btn ${index === value && 'active'}`}
                            key={job.strapiId}>
                            {job.company}
                        </button>
                    })}
                </div>
                <article className="job-info col-sm-9">
                    <h2>{position}</h2>
                    <h5>{company}</h5>
                    <p className="job-date">{`${from_date} - ${to_date}`}</p>
                    <p className="job-description">{job_description}</p>
                    <h5 className="text-uppercase pt-3 pb-1">Responsibilities</h5>
                    <ul>
                    {role.map(r => {
                        return (
                            <li key={r.id} className="job-role">
                                <i class="fas fa-angle-right"></i>
                                <p>{r.name}</p>
                            </li>
                        )
                    })}
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Jobs;