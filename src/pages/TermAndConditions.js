import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
    <Meta title={"Term And Conditions"} />
    <Breadcrumb title="Term And Conditions" />
    <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    
    </>
  )
}

export default TermAndConditions;