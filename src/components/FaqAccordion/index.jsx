const FaqAccordion = (props) => (
  <div className="accordion-item border-0">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-white " type="button" data-bs-toggle="collapse" data-bs-target={props.all.bsTarget} aria-expanded={props.all.ariaExpanded} aria-controls={props.all.ariaControls}>
        {props.all.title}
      </button>
    </h2>
    <div id={props.all.ariaControls} className="accordion-collapse collapse" data-bs-parent="#accordion-faq">
      <div className="accordion-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi ipsa veniam, laborum, quaerat aperiam expedita pariatur ut voluptates laudantium eaque aliquam ea. Eveniet adipisci reiciendis, libero quisquam tempora quidem.
      </div>
    </div>
  </div>
);

export default FaqAccordion;
