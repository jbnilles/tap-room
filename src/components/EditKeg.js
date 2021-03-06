import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      Brand: event.target.Brand.value, 
      AlcoholContent: event.target.AlcoholContent.value, 
      Price: event.target.Price.value, 
      Name: event.target.Name.value, 
       Quantity:event.target.Quantity.value === "" || event.target.Quantity.value < 0 ? 0 : event.target.Quantity.value, 
      id: keg.id});
  }
  return (
    <React.Fragment>
      <ReusableForm
        Name={keg.Name} 
        Price={keg.Price} 
        Brand={keg.Brand} 
        AlcoholContent={keg.AlcoholContent} 
        Quantity={keg.Quantity}
        formSubmissionHandler = {handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func,
  Name: PropTypes.string,
  Price: PropTypes.number,
  Brand: PropTypes.string,
  AlcoholContent: PropTypes.number,
  Quantity: PropTypes.Number,
  
  
};

export default EditKegForm;