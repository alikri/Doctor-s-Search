import "./doctors.styles.scss";
import doctorsData from "../../doctors-data";
import { useState } from "react";
import DoctorPreview from "../doctor-preview/doctor-preview.component";

const Doctors = () => {

	const [doctors, setDoctors] = useState(doctorsData);
	
	const doctorList = doctors.map(doc => <DoctorPreview
		key={doc.id}
		name={doc.name}
		ratings={doc.ratings}
		specialization={doc.specialization}
		zipcode={doc.zipcode}
		hospital={doc.hospital}
		insuranceAccepted={doc.insuranceAccepted}
		gender={doc.gender}
		languageSpoken={doc.languageSpoken}
		mainLocation={doc.mainLocation}
		additionalLocations={doc.additionalLocations}
		networkStatus={doc.networkStatus}
	/>)

	return (
		<div className="doc-big-container">
			{doctorList}
		</div>
	)
}

export default Doctors;