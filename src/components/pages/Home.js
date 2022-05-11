import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/Firebase-config";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import SearchBar from "./SearchBar"; 
import "./Home.css"

const Home = () => {
  let history = useHistory();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const topDoctorsCollectionRef = collection(db, "doctors");
    const getDoctors = async () => {
      const data = await getDocs(topDoctorsCollectionRef);
      setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDoctors();
  }, []);
  return (
    <div className="cards">
      <SearchBar placeholder="Enter Here..." data={doctors} />
      {doctors.map((doctor) => {
        return (
          <div className="singlecard"
            // onClick={() => {
            //   history.push("/docprofile", { data: doctor });
            // }}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={doctor.image} />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>
                {doctor.speciality}
                </Card.Text>
                <Card.Text>
                Contact: {doctor.number}
                </Card.Text>
                <Button variant="danger">Delete</Button> <Button variant="info">Update</Button>{' '}
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
