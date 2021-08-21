import React, { useEffect } from "react";
import classes from "./Projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <div data-aos="fade-up" className={classes.main}>
      <div data-aos="fade" className={classes.title}>
        <h2>Projects</h2>
      </div>
      <div className={classes.container}>
        <div data-aos="fade-right" className={classes.left}>
          <h2>Project Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodhsggsh
            ipsum eos commoddhdhi quisquam edjsnum eius id aut libero qui
            maiores explicabo voluptatum eveniet harum enim sint quam
            architecto, odit consectetur repellat delectus obcaecati! Loremdvs
            ipsum dolor sit amedhhssjdyt consectetur.
          </p>
          <div className={classes.btnSection}>
            <span className={classes.span}>See Live</span>
            <span>Source Code</span>
          </div>
        </div>
        <div data-aos="fade-left" className={classes.right}>
          <img src="images/project.jpg" alt="" />
        </div>
      </div>
      <div className={classes.container} id="other">
        <div data-aos="fade-right" className={classes.left}>
          <h2>Project Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodhsggsh
            ipsum eos commoddhdhi quisquam edjsnum eius id aut libero qui
            maiores explicabo voluptatum eveniet harum enim sint quam
            architecto, odit consectetur repellat delectus obcaecati! Loremdvs
            ipsum dolor sit amedhhssjdyt consectetur.
          </p>
          <div className={classes.btnSection}>
            <span className={classes.span}>See Live</span>
            <span>Source Code</span>
          </div>
        </div>
        <div data-aos="fade-left" className={classes.right}>
          <img src="images/project.jpg" alt="" />
        </div>
      </div>
      <div className={classes.container} id="other">
        <div data-aos="fade-right" className={classes.left}>
          <h2>Project Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodhsggsh
            ipsum eos commoddhdhi quisquam edjsnum eius id aut libero qui
            maiores explicabo voluptatum eveniet harum enim sint quam
            architecto, odit consectetur repellat delectus obcaecati! Loremdvs
            ipsum dolor sit amedhhssjdyt consectetur.
          </p>
          <div className={classes.btnSection}>
            <span className={classes.span}>See Live</span>
            <span>Source Code</span>
          </div>
        </div>
        <div data-aos="fade-left" className={classes.right}>
          <img src="images/project.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Projects;

// const [data, setData] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1/comments"
//     );

//     const responseData = await response.json();

//     setData(responseData);
//   };

//   fetchData();
// }, []);

//  {
//    data.map((res) => (
//      <div>
//        <span>{res.id}</span>
//        <h2>{res.name}</h2>
//        <p>{res.body}</p>
//      </div>
//    ));
//  }

// or

//  const [data, setData] = useState([]);

//  const fetchData = useCallback(async () => {
//    const response = await fetch(
//      "https://jsonplaceholder.typicode.com/posts/1/comments"
//    );

//    const responseData = await response.json();

//    setData(responseData);
//  }, []);

//  useEffect(() => {
//    fetchData();
//  }, []);

//  {
//    data.map((res) => (
//      <div>
//        <span>{res.id}</span>
//        <h2>{res.name}</h2>
//        <p>{res.body}</p>
//      </div>
//    ));
//  }
