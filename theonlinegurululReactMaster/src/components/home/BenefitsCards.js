import React from 'react';
// import PropTypes from 'prop-types'

const styles = {
    card: {
        minHeight: '244px',
    },
    FaIcon: {
        fontSize: '40px',
        color: '#ffa500',
        marginTop: '15px',
    },
    HeadingName: {
        fontWeight: '700',
        fontSize: '17px',
        textTransform: 'uppercase',
        margin: '15px 0 20px',
    },
    paragraph: {
        lineHeight: '24px',
        fontSize: '14px',
        letterSpacing: '.5px',
    }

}

function BenefitsCards(props) {
  return (
    <>  
        {props.benefitsData.map((data,index) => 
        <div  key={index.toString()} className="col-sm-4 pt-4">
            <div className="card" style={styles.card}>
                <div className="card-body text-center">
                    <span style={styles.FaIcon} ><i className={data.benIcon}></i></span>
                    <h5 style={styles.HeadingName} className="card-title">{data.benName}</h5>
                    <p style={styles.paragraph} className="card-text">{data.benContent}</p>
                        {/* <span style={{color: '#007aff'}} >theOnline</span><span style={{color: '#f47629'}}>Gurukul</span> */}
                </div>
            </div>
        </div>
        ) }
    </>
  )
}

export default BenefitsCards
