const FaQCard = (props) => {
  return (
    <div key={props.data.id}>
      <div className="col-lg-12 col-md-12 col-12">
        <div className="faq-item rounded">
          <h2
            className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
          >
            { props.data.title }
            <span className="faq-heading-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F76B6A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </h2>
          <div id="faq1" className="accordion-collapse collapse">
            <p className="faq-body text_14">
              { props.data.content }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQCard;
